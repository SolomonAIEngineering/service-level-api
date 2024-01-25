import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

export const tagsSchema = z.object({
  id: z.string().optional(), // similarly as above for uint64
  metadata: z
    .array(z.string())
    .min(1)
    .max(10, {
      message: 'Must provide between 1 and 10 metadata tags.',
    })
    .optional(),
  tagDescription: z
    .string()
    .min(10, {
      message: 'Tag description must be at least 10 characters long.',
    })
    .optional(),
  tagName: z
    .string()
    .min(3, {
      message: 'Tag name must be at least 3 characters long.',
    })
    .optional(),
});


const Step3Schema = z.object({
  address: z
    .string()
    .min(5, {
      message: 'Address must be at least 5 characters long.',
    })
    .optional(),
  city: z
    .string()
    .min(3, {
      message: 'City must be at least 3 characters long.',
    })
    .optional(),
  state: z
    .string()
    .min(2, {
      message: 'State must be at least 2 characters long.',
    })
    .optional(),
  unit: z
    .string()
    .min(1, {
      message: 'Unit must be at least 1 character long.',
    })
    .optional(),
  zipcode: z
    .string()
    .length(5, {
      message: 'Zipcode must be exactly 5 characters long.',
    })
    .optional(),
});

export const profileTypeSchema = z.enum([
  'PROFILE_TYPE_UNSPECIFIED',
  'PROFILE_TYPE_USER',
  'PROFILE_TYPE_BUSINESS',
]);

export const businessAccountSchema = z.object({
  accountType: profileTypeSchema, // Assuming ProfileType is an enum
  address: Step3Schema.optional(),
  authnAccountId: z.string().optional(),
  phoneNumber: z.string().min(10, {
    message: 'Phone number must be at least 10 characters.',
  }),
  companyName: z.string().min(10, {
    message: 'Company name must be at least 10 characters.',
  }),
  companyWebsite: z.string().min(10, {
    message: 'Company website must be at least 10 characters.',
  }),
  industry: z.string().min(5, {
    message: 'Industry must be at least 5 characters.',
  }),
  companyDescription: z.string().min(10, {
    message: 'Company description must be at least 10 characters.',
  }),
  companyEstablished: z.string().min(5, {
    message: 'Company established must be at least 5 characters.',
  }),
  createdAt: z.string().optional(),
  username: z.string().min(10, {
    message: 'username must be at least 10 characters.',
  }),
  email: z.string().email({
    message: 'Please provide a valid email address.',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
  confirmPassword: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
  profileImageUrl: z.string().optional(),
  headline: z.string().min(10, {
    message: 'Headline must be at least 10 characters.',
  }),
  bio: z.string().min(10, {
    message: 'Please provide a bio.',
  }),
  tags: z.array(tagsSchema).optional(),
  id: z.string().optional(),
  isActive: z.boolean().optional(),
  isEmailVerified: z.boolean().optional(),
  isPrivate: z.boolean().optional(),
  verifiedAt: z.string().optional(),
  auth0UserId: z.string().min(1, {
    message: 'Auth0 user id must be defined.',
  }),
});

export type Step3ZodSchema = z.infer<typeof Step3Schema>;
export type BusinessAccountZodSchema = z.infer<typeof businessAccountSchema>;

export type FormReturnProps = UseFormReturn<
  BusinessAccountZodSchema,
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  any,
  undefined
>;
export { Step3Schema };
