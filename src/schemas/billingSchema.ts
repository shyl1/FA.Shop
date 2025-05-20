import {z} from "zod"
import cardValidator from 'card-validator';


export const creditCardSchema = z.object({
  method : z.literal("credit"),
  cardNumber : z.string().transform(val => val.replace(/\s+/g, '')).refine((val) => cardValidator.number(val).isValid , {
    message : "Invalid card number",
  }),
  name: z.string().min(3, "Name is required"),
  expiry : z.string().refine((val)=> cardValidator.expirationDate(val).isValid , {
    message: "Invalid expiration date",
  }),
  cvv: z.string().refine((val)=> cardValidator.cvv(val).isValid , {
    message: "Invalid CVV"
  }),
});


export const walletSchema = z.object({
  method: z.literal("wallet"),
  phone: z.string().min(11 , 'phone must be 11 digits'),
});

export const cashSchema = z.object({
  method: z.literal("cash"),
});


//which method is being applied
export const paymentMethodsSchema = z.discriminatedUnion("method" , [
  creditCardSchema,
  walletSchema,
  cashSchema,
])


// infer 
export type paymentDetails = z.infer<typeof paymentMethodsSchema>;

