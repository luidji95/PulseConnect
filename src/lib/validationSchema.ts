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



// TIPOVI (TypeScript)
export type LoginFormData = z.infer<typeof loginSchema>;
export type RegistrationFormData = z.infer<typeof registrationSchema>;