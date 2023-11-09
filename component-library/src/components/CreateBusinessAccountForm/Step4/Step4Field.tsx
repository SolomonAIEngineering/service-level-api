import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from 'src/components/ui/form';
import { BusinessOnboardingBaseFieldProps } from '../base';
import { Step4ZodSchema } from '../zod-schema';
import { Textarea } from 'src/components/ui/textarea';
import { Input } from 'src/components/ui/input';
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

export const Step4UsernameField: React.FC<
  BusinessOnboardingBaseFieldProps<Step4ZodSchema>
> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="userName"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Textarea placeholder="Username" {...field} />
          </FormControl>
          <FormDescription>Enter your Username.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const Step4EmailField: React.FC<
  BusinessOnboardingBaseFieldProps<Step4ZodSchema>
> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Textarea placeholder="email" {...field} />
          </FormControl>
          <FormDescription>Enter your email.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const Step4PasswordField: React.FC<
  BusinessOnboardingBaseFieldProps<Step4ZodSchema>
> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="password"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input placeholder="Password" {...field} type="password" />
          </FormControl>
          <FormDescription>Enter Your Password.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const Step4ConfirmPasswordField: React.FC<
  BusinessOnboardingBaseFieldProps<Step4ZodSchema>
> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="confirmPassword"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input placeholder="Confirm Password" {...field} type="password" />
          </FormControl>
          <FormDescription>Enter Your Password.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

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
  BusinessOnboardingBaseFieldProps<Step4ZodSchema>
> = ({ form }) => {
  const [selectedAvatar, setSelectedAvatar] = React.useState<string>('');

  return (
    <FormField
      control={form.control}
      name="profileImage"
      /* eslint-disable-next-line @typescript-eslint/no-unused-vars  */
      render={({}) => (
        <FormItem className="flex flex-col">
          <FormLabel className="text-lg font-bold">Avatar</FormLabel>
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
                          form.setValue('profileImage', avatarUrl);
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
          <FormDescription>Select an avatar for your profile.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
