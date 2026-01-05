import { z } from 'zod';

//  LOGIN ŠEMA
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email je obavezan' })
    .email({ message: 'Email nije u validnom formatu' }),
  password: z
    .string()
    .min(1, { message: 'Lozinka je obavezna' })
    .min(6, { message: 'Lozinka mora imati najmanje 6 karaktera' }),
});

// REGISTRATION ŠEMA (za kasnije)
export const registrationSchema = z.object({
  firstName: z.string().min(1, 'Ime je obavezno'),
  lastName: z.string().min(1, 'Prezime je obavezno'),
  email: z.string().email('Email nije validan'),
  password: z.string().min(6, 'Lozinka mora imati najmanje 6 karaktera'),
});

// TIPOVI (TypeScript)
export type LoginFormData = z.infer<typeof loginSchema>;
export type RegistrationFormData = z.infer<typeof registrationSchema>;