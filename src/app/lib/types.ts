import {z} from 'zod';


export const contactSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email(),
    message: z.string().min(3, "Your message must contain 3 characters").max(400)
  })
  
  export type TContactForm = z.infer<typeof contactSchema>