import { BusinessOnboardingBaseFieldProps } from '../base';
import { BusinessAccountZodSchema } from '../zod-schema';
import { cn, randomIntFromInterval } from 'src/lib-utils/utils';
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'src/components/ui/accordion';
import { Label } from 'src/components/ui/label';
import { Avatar } from 'src/components/ui/avatar';

// generate a set of avatar urls to choose from
const lowerbound = randomIntFromInterval(1, 45);
const upperbound = lowerbound + 15;
const avatarUrlSet: string[] = [];
for (let i = lowerbound; i < upperbound; i++) {
  avatarUrlSet.push(
    `https://d278s71ylmkd61.cloudfront.net/profile-image-${i}.png`,
  );
}

export const Step4ProfileImageField: React.FC<
  BusinessOnboardingBaseFieldProps<BusinessAccountZodSchema>
> = ({ setValue }) => {
  const [selectedAvatar, setSelectedAvatar] = React.useState<string>('');

  return (
    <Accordion type="single">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          {' '}
          <Label color="dark" className="text-xs font-bold">
            <p className="text-sm font-semibold"> Select an avatar 😀</p>
          </Label>
        </AccordionTrigger>
        <AccordionContent>
          <div
            slot="content"
            className="grid grid-cols-4 gap-2 py-2 md:grid-cols-5"
          >
            {avatarUrlSet.map((avatarUrl, idx) => {
              return (
                <div
                  onClick={() => {
                    setSelectedAvatar(avatarUrl);
                    setValue('profileImageUrl', avatarUrl);
                  }}
                  key={idx}
                  className="p-2"
                >
                  <Avatar>
                    <img
                      src={avatarUrl}
                      alt="avatar"
                      className={cn(
                        selectedAvatar === avatarUrl
                          ? 'bg-white border border-black'
                          : 'bg-white ',
                        'object-cover rounded-3xl w-16 h-16 md:h-auto md:w-16 md:rounded-none md:rounded-l-lg',
                      )}
                    />
                  </Avatar>
                </div>
              );
            })}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
