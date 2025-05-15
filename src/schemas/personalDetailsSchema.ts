import {z} from "zod";

export const personalDetailsSchema = z.object({
  firstName: z.string().min(3,'first name is required'),
  lastName: z.string().min(3 , 'last name is required'),
  email: z.string().email('invalid email'),
  phone : z.string().min(11 , 'phone must be 11 digits'),
  address: z.string().min(4, 'Address is required'),
}); 


export type PersonalDetails = z.infer<typeof personalDetailsSchema>;