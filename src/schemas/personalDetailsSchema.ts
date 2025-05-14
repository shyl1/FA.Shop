import {z} from "zod";

export const personalDetailsSchema = z.object({
  firstName: z.string().min(1,'Name is required'),
  lastName: z.string().min(1 , 'Name is required'),
  email: z.string().email('invalid email'),
  phone : z.number().min(11 , 'phone must be 11 digits'),
  address: z.string().min(1 , 'Address is required'),
}); 


export type PersonalDetails = z.infer<typeof personalDetailsSchema>;