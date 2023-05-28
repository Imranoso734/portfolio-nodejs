"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserObj = void 0;
const zod_1 = require("zod");
exports.UserObj = zod_1.z.object({
    name: zod_1.z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string"
    }),
    email: zod_1.z.string().email(),
    age: zod_1.z.number(),
    password: zod_1.z.string({ required_error: "Password is required" }),
});
