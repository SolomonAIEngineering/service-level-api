import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from 'src/components/ui/form';
import { BusinessOnboardingBaseFieldProps } from '../base';
import { Step1ZodSchema } from '../zod-schema';
import { Textarea } from 'src/components/ui/textarea';

export const Step1BioField: React.FC<
  BusinessOnboardingBaseFieldProps<Step1ZodSchema>
> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="bio"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Bio</FormLabel>
          <FormControl>
            <Textarea placeholder="Bio" {...field} />
          </FormControl>
          <FormDescription>
            Define your business in a few words.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const Step1HeadlineField: React.FC<
  BusinessOnboardingBaseFieldProps<Step1ZodSchema>
> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="headline"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Headline</FormLabel>
          <FormControl>
            <Textarea placeholder="headline" {...field} />
          </FormControl>
          <FormDescription>Give your business a headline.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
