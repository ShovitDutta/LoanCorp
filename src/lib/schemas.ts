import { z } from 'zod';

export const borrowerSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits').max(15, 'Phone number cannot exceed 15 digits'),
  residenceType: z.enum(['Owned', 'Rented', 'Other'], {
    errorMap: () => ({ message: 'Residence type is required' }),
  }),
  monthlyIncome: z.number().min(0, 'Monthly income must be a positive number'),
  previousLoan: z.enum(['Yes', 'No'], {
    errorMap: () => ({ message: 'Previous loan status is required' }),
  }),
  maritalStatus: z.enum(['Single', 'Married', 'Divorced', 'Widowed'], {
    errorMap: () => ({ message: 'Marital status is required' }),
  }),
  numberOfDependencies: z.number().min(0, 'Number of dependencies cannot be negative'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
});

export type BorrowerFormData = z.infer<typeof borrowerSchema>;

export interface ApiError {
  message: string;
  errors?: {
    [key: string]: string[];
  };
}
