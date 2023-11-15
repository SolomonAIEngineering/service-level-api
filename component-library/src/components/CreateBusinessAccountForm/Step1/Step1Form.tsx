import { BusinessOnboardingBaseFormProps } from '../base';
import { BusinessAccountZodSchema } from '../zod-schema';
import { BusinessAccountOnboardingMultiFormItem } from '../BusinessAccountOnboardingFormItem';
import { Textarea } from 'src/components/ui/textarea';
import { isEmptyObject } from '../../../lib-utils/utils';
import React from 'react';
import { Button } from 'src/components/ui/button';
import { BusinessTagSet } from 'src/lib-utils/CommonTags';

import {
  FieldValues,
  UseFormGetValues,
  UseFormSetValue,
} from 'react-hook-form';
import { Card } from 'src/components/ui/card';

export const BusinessAccountOnBoardingStep1Form: React.FC<
  BusinessOnboardingBaseFormProps<BusinessAccountZodSchema>
> = ({ setStep, className, variant, register, errors, getValue, setValue }) => {
  const isValid = () => {
    if (
      (isEmptyObject(errors) && getValue('bio') === '') ||
      getValue('headline') === '' ||
      getValue('tags') === undefined ||
      getValue('tags')!.length < 3 ||
      errors.headline !== undefined ||
      errors.bio !== undefined ||
      (errors.tags !== undefined && errors.tags.message !== undefined)
    ) {
      return false;
    }
    return true;
  };

  return (
    <BusinessAccountOnboardingMultiFormItem
      variant={variant}
      setStep={setStep}
      header="Welcome To Solomon AI"
      description="Give A Brief Description Of Your Business"
      isValid={isValid()}
      className={className}
    >
      <div className="flex flex-col m-auto space-y-5">
        <Textarea placeholder="Bio" {...register('bio')} />{' '}
        {errors.bio && <span>{errors.bio.message}</span>}
        <Textarea placeholder="headline" {...register('headline')} />{' '}
        {errors.headline && <span>{errors.headline.message}</span>}
        <InterestLabelSelector
          setValue={setValue}
          getValue={getValue}
          {...register('tags')}
        />
        {errors.tags && <span>{errors.tags.message}</span>}
      </div>
    </BusinessAccountOnboardingMultiFormItem>
  );
};

interface InterestLabelSelectorProps<T extends FieldValues> {
  setValue: UseFormSetValue<T>;
  getValue: UseFormGetValues<T>;
}

/*
 * TagsSelector Component
 *
 * This component allows users to select from a set of tags.
 *
 * @component
 *
 * @param {Object} props
 * @param {(tagName: string) => void} props.onSelectTags - Callback function that is triggered when a tag is selected.
 * @param {Tags[]} props.selectedTags - Array of currently selected tags.
 *
 * @example
 *
 * <TagsSelector onSelectTags={handleTagSelect} selectedTags={[{tagName: "Nature"}, {tagName: "Sports"}]} />
 */
const InterestLabelSelector: React.FC<
  InterestLabelSelectorProps<BusinessAccountZodSchema>
> = ({ setValue, getValue }) => {
  const onSelectTags = (tagName: string) => {
    const item = BusinessTagSet.find((tag) => {
      return tag.tagName === tagName;
    });

    if (item) {
      const definedTags = getValue('tags');
      if (definedTags !== undefined) {
        if (definedTags.includes(item)) {
          const filteredSet = definedTags!.filter((interest) => {
            return interest !== item;
          });

          setValue('tags', filteredSet);
        } else {
          setValue('tags', [...definedTags, item]);
        }
      } else {
        setValue('tags', [item]);
      }
    }
  };

  return (
    <Card className="bg-white border-0 shadow-none">
      <h1 className="text-lg font-bold">Select At Least 3 Interests</h1>
      <div slot="content" className="flex flex-wrap gap-2 py-2">
        {BusinessTagSet.map((item, idx) => {
          if (item.tagName === undefined) return null;

          return (
            <Button
              onClick={() => onSelectTags(item.tagName!)}
              className={
                getValue('tags') !== undefined
                  ? getValue('tags')!.includes(item)
                    ? 'bg-black text-white font-bold border'
                    : 'bg-white text-black font-bold border'
                  : 'bg-white text-black font-bold border'
              }
              key={idx}
            >
              <p className="text-xs font-semibold">{item.tagName}</p>
            </Button>
          );
        })}
      </div>
    </Card>
  );
};