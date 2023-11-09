import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

const categorySchema = z.object({
  id: z.string().optional(), // Assuming the ID is represented as a string, adjust as needed
  name: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters.',
    })
    .max(50, {
      message: 'Name must not be longer than 50 characters.',
    }),
  description: z.string().min(10, {
    message: 'Please provide a category decription.',
  }),
  subcategories: z.array(z.string()).min(2, {
    message: 'You have to select at least two items.',
  }),
});

const budgetSchema = z.object({
  category: categorySchema.optional(), // This needs to be adjusted as per the actual Category structure
  description: z
    .string()
    .min(10, { message: 'Description must be at least 10 characters.' }),
  endDate: z.string().min(2, { message: 'End date must be provided.' }),
  id: z.string().optional(),
  name: z
    .string()
    .min(10, { message: 'Name must be at least 10 characters.' })
    .max(30, { message: 'Name must not be longer than 30 characters.' }),
  startDate: z.string().min(2, { message: 'Start date must be provided.' }),
});

const milestoneSchema = z.object({
  budget: budgetSchema.optional(), // This needs to be adjusted as per the actual Budget structure
  description: z
    .string()
    .min(10, 'Milestone Description must be at least 10 characters.'),
  id: z.string().optional(),
  isCompleted: z.boolean().optional(),
  name: z
    .string()
    .min(10, 'Milestone Name must be at least 10 characters.')
    .max(30, 'Milestone Name must not be longer than 30 characters.'),
  targetAmount: z.string().min(1, 'A target amount is required.'),
  targetDate: z.string().min(1, 'A target date is required.'),
});

const forecastSchema = z.object({
  forecastedAmount: z.string().optional(),
  forecastedCompletionDate: z.string().optional(),
  id: z.string().optional(), // Assuming the ID is represented as a string, adjust as needed
  varianceAmount: z.string().optional(),
});

const smartGoalSchema = z.object({
  currentAmount: z.string().optional(),
  description: z.string().min(10, {
    message: 'Goal description must be longer than 10 characters.',
  }),
  duration: z.string().optional(),
  endDate: z.string().min(2, {
    message: 'End date must be provided.',
  }),
  forecasts: z.array(forecastSchema).optional(), // This needs to be adjusted as per the actual Forecast structure
  goalType: z.enum([
    'GOAL_TYPE_SAVINGS',
    'GOAL_TYPE_INVESTMENT',
    'GOAL_TYPE_DEBT',
    'GOAL_TYPE_EXPENSE',
  ]),
  id: z.string().optional(),
  isCompleted: z.boolean().optional(),
  milestones: z
    .array(milestoneSchema)
    .min(1, 'At least one milestone must be provided.')
    .optional(), // This needs to be adjusted as per the actual Milestone structure
  name: z
    .string()
    .min(10, {
      message: 'Goal name must be at least 10 characters.',
    })
    .max(30, {
      message: 'Goal name must not be longer than 30 characters.',
    }),
  startDate: z.string().min(2, {
    message: 'Start date must be provided.',
  }),
  targetAmount: z.string().min(2, {
    message: 'target amount must be at least 2 characters.',
  }),
  userId: z.string().optional(),
});

export type SmartGoalZodSchema = z.infer<typeof smartGoalSchema>;
export type ForecastZodSchema = z.infer<typeof forecastSchema>;
export type MilestoneZodSchema = z.infer<typeof milestoneSchema>;
export type BudgetZodSchema = z.infer<typeof budgetSchema>;
export type CategoryZodSchema = z.infer<typeof categorySchema>;

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export type FormReturnProps = UseFormReturn<SmartGoalZodSchema, any, undefined>;

export {
  smartGoalSchema,
  categorySchema,
  budgetSchema,
  milestoneSchema,
  forecastSchema,
};
