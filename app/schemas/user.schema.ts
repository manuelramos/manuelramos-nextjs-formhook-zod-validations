import { z } from 'zod';

function isValidAndNotFutureDate(dateString: string): boolean {
    const date = new Date(dateString);
    const now = new Date();
  
    if (isNaN(date.getTime())) {
      return false;
    }
  
    if (date > now) {
      return false;
    }
  
    return true;
  }

  export const FormSchema = z.object({
    firstName: z.string().min(1, { message: 'First name is a required field' }),
    lastName: z.string().min(1, { message: 'Last name is a required field' }),
    email: z.string().email({ message: 'Email is not valid' }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
    confirmPassword: z.string().min(8, { message: 'Password confirmation must be at least 8 characters long' }),
    weight: z.string().refine(weight => !isNaN(parseFloat(weight)), { message: 'Weight must be a positive number' }),
    height: z.string().refine(height => !isNaN(parseFloat(height)), { message: 'Height must be a positive number' }),
    dob: z.string().min(1, { message: 'Date of birth is a required field' }).refine(isValidAndNotFutureDate, {
      message: 'Date of birth must be a valid date and cannot be in the future',
    }),
    plans: z.enum(['basic', 'intermediate', 'advanced']).refine(value => value !== undefined, {
      message: 'You must select a plan',
    }),
  }).refine(data => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });
  
  export default FormSchema;