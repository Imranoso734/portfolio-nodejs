import { z } from "zod";

export const UserObj = z.object({
    name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string"
    }),
    email: z.string().email(),
    age: z.number(),
    password: z.string({ required_error: "Password is required" }),
});

export type IUserObj = z.infer<typeof UserObj>;
