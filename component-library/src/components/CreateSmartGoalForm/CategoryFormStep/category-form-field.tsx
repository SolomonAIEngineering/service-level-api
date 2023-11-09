import { Button } from 'src/components/ui/button';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from 'src/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from 'src/components/ui/popover';

import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from 'src/components/ui/command';
import { Checkbox } from 'src/components/ui/checkbox';
import { Card } from 'src/components/ui/card';

import { CategoryZodSchema } from '../zod-schema';
import { BaseFieldProps } from '../base';
import {
  PrimaryCategory,
  SecondaryCategory,
  detailedDescriptionMap,
  primaryCategoryObjects,
} from './types';
import { capitalizeFirstLetterOfWords, cn } from 'src/lib-utils/utils';

export interface CategoryFieldProps extends BaseFieldProps<CategoryZodSchema> {
  callback?: (value: PrimaryCategory) => void;
  subCategories?: SecondaryCategory[];
}

export const CategoryFormFieldName: React.FC<CategoryFieldProps> = ({
  form,
  callback,
}) => {
  return (
    <FormField
      control={form.control}
      name="name"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel className="text-lg font-bold">Name</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    'w-fit justify-between',
                    !field.value && 'text-muted-foreground',
                  )}
                >
                  <p className="text-xs">
                    {field.value
                      ? capitalizeFirstLetterOfWords(
                          primaryCategoryObjects.find(
                            (category) => category.value === field.value,
                          )?.label ?? '',
                        )
                      : 'Select a category'}
                  </p>

                  <CaretSortIcon className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="p-0 md:min-w-xl">
              <Command>
                <CommandInput placeholder="Search category..." />
                <CommandEmpty>No category found.</CommandEmpty>
                <CommandGroup>
                  {primaryCategoryObjects.map((category) => (
                    <CommandItem
                      value={category.label}
                      key={category.value}
                      onSelect={() => {
                        form.setValue('name', category.value);
                        callback !== undefined && callback(category.value);
                      }}
                    >
                      <CheckIcon
                        className={cn(
                          'mr-2 h-4 w-4',
                          category.value === field.value
                            ? 'opacity-100'
                            : 'opacity-0',
                        )}
                      />
                      <p className="text-xs">
                        {capitalizeFirstLetterOfWords(category.label)}
                      </p>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <FormDescription>
            This is the category that will be associated to the budget of
            interest.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const CategoryFormDescriptionField: React.FC<CategoryFieldProps> = ({
  form,
  subCategories,
}) => {
  if (subCategories === undefined) {
    return null;
  }

  return (
    <FormField
      control={form.control}
      name="description"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel className="text-lg font-bold">Description</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Card
                  role="combobox"
                  className={cn(
                    'w-fit p-4 max-w-md justify-between text-xs',
                    !field.value && 'text-muted-foreground',
                  )}
                >
                  {field.value
                    ? (
                        subCategories!.find(
                          (category) =>
                            detailedDescriptionMap.get(category) ===
                            field.value,
                        )
                          ? true
                          : false
                      )
                      ? field.value
                      : 'Select a category'
                    : 'Select a category'}
                </Card>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="border w-fit">
              <Command className="p-4 w-fit">
                <CommandInput
                  placeholder="Search category..."
                  className="border-0 outline-0"
                />
                <CommandEmpty>No category found.</CommandEmpty>
                <CommandGroup>
                  {subCategories!.map((category) => (
                    <CommandItem
                      value={category}
                      key={category}
                      onSelect={() => {
                        form.setValue(
                          'description',
                          detailedDescriptionMap.get(category) ?? '',
                        );
                      }}
                    >
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-row">
                          <CheckIcon
                            className={cn(
                              'mr-2 h-4 w-4',
                              category === field.value
                                ? 'opacity-100'
                                : 'opacity-0',
                            )}
                          />
                          <p className="text-xs font-semibold">
                            {capitalizeFirstLetterOfWords(
                              category.replace(/_/g, ' '),
                            )}
                          </p>
                        </div>{' '}
                        <div className="mx-10">
                          <p className="text-xs w-[80%]">
                            {' '}
                            {detailedDescriptionMap.get(category) ?? ''}
                          </p>
                        </div>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <FormDescription>This is the category description</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const SubCategoriesFormField: React.FC<CategoryFieldProps> = ({
  form,
  subCategories,
}) => {
  if (subCategories === undefined) {
    return null;
  }

  return (
    <FormField
      control={form.control}
      name="subcategories"
      render={() => (
        <FormItem className="max-w-lg p-5 border-2 rounded-2xl w-fit">
          <div className="mb-4">
            <FormLabel className="text-lg font-bold">Sub Categories</FormLabel>
            <FormDescription>
              Select the items you want to display in the sidebar.
            </FormDescription>
          </div>
          {subCategories.map((item) => (
            <FormField
              key={item}
              control={form.control}
              name="subcategories"
              render={({ field }) => {
                return (
                  <>
                    <FormItem
                      key={item}
                      className="flex flex-row items-start space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(item)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              field.onChange([...(field.value || []), item]);
                            } else {
                              field.onChange(
                                field.value?.filter(
                                  (value) => value !== item,
                                ) || [],
                              );
                            }
                          }}
                        />
                      </FormControl>
                      <FormLabel className="text-xs font-normal">
                        {capitalizeFirstLetterOfWords(item.replace(/_/g, ' '))}
                      </FormLabel>
                    </FormItem>
                  </>
                );
              }}
            />
          ))}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
