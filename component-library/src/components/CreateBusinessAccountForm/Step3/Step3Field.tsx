import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from 'src/components/ui/form';
import { BusinessOnboardingBaseFieldProps } from '../base';
import { Step3ZodSchema } from '../zod-schema';
import { Textarea } from 'src/components/ui/textarea';
import { Input } from 'src/components/ui/input';

export const Step3AddressField: React.FC<
  BusinessOnboardingBaseFieldProps<Step3ZodSchema>
> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="address"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Address</FormLabel>
          <FormControl>
            <Textarea placeholder="Address" {...field} />
          </FormControl>
          <FormDescription>Enter your address.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const Step3CityField: React.FC<
  BusinessOnboardingBaseFieldProps<Step3ZodSchema>
> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="city"
      render={({ field }) => (
        <FormItem>
          <FormLabel>City</FormLabel>
          <FormControl>
            <Textarea placeholder="City" {...field} />
          </FormControl>
          <FormDescription>Enter the name of your city.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const Step3StateField: React.FC<
  BusinessOnboardingBaseFieldProps<Step3ZodSchema>
> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="state"
      render={({ field }) => (
        <FormItem>
          <FormLabel>State</FormLabel>
          <FormControl>
            <Textarea placeholder="State" {...field} />
          </FormControl>
          <FormDescription>Define your state.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const Step3ZipCodeField: React.FC<
  BusinessOnboardingBaseFieldProps<Step3ZodSchema>
> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="zipcode"
      render={({ field }) => (
        <FormItem>
          <FormLabel>ZipCode</FormLabel>
          <FormControl>
            <Input placeholder="ZipCode" {...field} />
          </FormControl>
          <FormDescription>Enter your company's zip code.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const Step3UnitField: React.FC<
  BusinessOnboardingBaseFieldProps<Step3ZodSchema>
> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="unit"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Unit</FormLabel>
          <FormControl>
            <Textarea placeholder="Unit" {...field} />
          </FormControl>
          <FormDescription>Enter the unit.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
