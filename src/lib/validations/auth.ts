import { z } from 'zod';

export const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  phone: z.string().min(10, 'Invalid phone number'),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

export const profileSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  age: z.number().min(18, 'Must be at least 18 years old').max(100),
  gender: z.enum(['male', 'female']),
  location: z.string().min(2, 'Location is required'),
  education: z.string().min(2, 'Education is required'),
  profession: z.string().min(2, 'Profession is required'),
  bio: z.string().min(50, 'Bio must be at least 50 characters').max(1000),
  islamicPracticeLevel: z.enum(['practicing', 'very_practicing', 'moderately_practicing']),
});

export const waliInviteSchema = z.object({
  waliName: z.string().min(2, 'Wali name is required'),
  waliEmail: z.string().email('Invalid email address'),
  relationship: z.enum(['father', 'brother', 'uncle', 'other']),
});

export type SignupInput = z.infer<typeof signupSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type ProfileInput = z.infer<typeof profileSchema>;
export type WaliInviteInput = z.infer<typeof waliInviteSchema>;
