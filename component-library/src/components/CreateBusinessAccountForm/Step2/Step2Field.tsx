import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from 'src/components/ui/form';
import { BusinessOnboardingBaseFieldProps } from '../base';
import { Step2ZodSchema } from '../zod-schema';
import { Textarea } from 'src/components/ui/textarea';
import { Input } from 'src/components/ui/input';

export const Step2PhoneNumberField: React.FC<
  BusinessOnboardingBaseFieldProps<Step2ZodSchema>
> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="phoneNumber"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Phone Number</FormLabel>
          <FormControl>
            <Input placeholder="Phone Number" {...field} type="number" />
          </FormControl>
          <FormDescription>Enter your phone number.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const Step2CompanyNameField: React.FC<
  BusinessOnboardingBaseFieldProps<Step2ZodSchema>
> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="companyName"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Company Name</FormLabel>
          <FormControl>
            <Textarea placeholder="Company Name" {...field} />
          </FormControl>
          <FormDescription>Enter the name of your company.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const Step2CompanyDescriptionField: React.FC<
  BusinessOnboardingBaseFieldProps<Step2ZodSchema>
> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="companyDescription"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Company Description</FormLabel>
          <FormControl>
            <Textarea placeholder="Company Description" {...field} />
          </FormControl>
          <FormDescription>Describe your company.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const Step2CompanyWebsiteField: React.FC<
  BusinessOnboardingBaseFieldProps<Step2ZodSchema>
> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="companyWebsite"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Company Website</FormLabel>
          <FormControl>
            <Input placeholder="Company Website" {...field} type="url" />
          </FormControl>
          <FormDescription>Enter your company's website URL.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const Step2IndustryField: React.FC<
  BusinessOnboardingBaseFieldProps<Step2ZodSchema>
> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="industry"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Industry</FormLabel>
          <FormControl>
            <Textarea placeholder="Industry" {...field} />
          </FormControl>
          <FormDescription>
            Enter the industry your company operates in.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const Step2EstablishedField: React.FC<
  BusinessOnboardingBaseFieldProps<Step2ZodSchema>
> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="companyEstablished"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Company Established Date</FormLabel>
          <FormControl>
            <Textarea placeholder="companyEstablished" {...field} />
          </FormControl>
          <FormDescription>Company Established</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
