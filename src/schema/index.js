"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subjectFinalRevision = exports.subjectPractical = exports.subjectLecture = exports.subjectSchema = exports.moduleSchema = exports.facultySchema = exports.userSchema = exports.categorySchema = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
exports.categorySchema = {
    update: zod_1.z.object({
        name: zod_1.z.string().min(1, { message: "Name is required" }).max(255, { message: "Cannot be greater than 255 characters" }).optional(),
        keywords: zod_1.z.string().min(1, { message: "Keywords is required. Separate them with ',' " }).max(255, { message: "Cannot be greater than 255 characters" }).optional(),
        icon: zod_1.z.string().url({ message: "Icon must be a URL." })
    }),
    create: zod_1.z.object({
        name: zod_1.z.string().max(255, { message: "Cannot be greater than 255 characters" }),
        keywords: zod_1.z.string().max(255, { message: "Cannot be greater than 255 characters" }),
        icon: zod_1.z.string().url({ message: "Icon must be a URL." }).optional()
    })
};
exports.userSchema = {
    login: zod_1.z.object({
        email: zod_1.z.string().email({ message: "Email is required." }),
        password: zod_1.z.string()
    }),
    register: zod_1.z.object({
        name: zod_1.z.string().min(1, { message: "Name cannot be less than 1 characters." }),
        email: zod_1.z.string().email({ message: "Invalid Email." }),
        password: zod_1.z.string().min(8, { message: "Password cannot be less than 8 characters." }),
        facultyId: zod_1.z.number().gt(0)
    }),
    update: zod_1.z.object({
        name: zod_1.z.string().min(1, { message: "Name cannot be less than 1 characters." }).optional(),
        email: zod_1.z.string().email({ message: "Invalid Email." }).optional(),
        password: zod_1.z.string().min(8, { message: "Password cannot be less than 8 characters." }).optional(),
        facultyId: zod_1.z.number().gt(0).optional()
    })
};
exports.facultySchema = {
    update: zod_1.z.object({
        name: zod_1.z.string().max(255, { message: "Cannot be greater than 255 characters" }).optional(),
        city: zod_1.z.string().max(255, { message: "Cannot be greater than 255 characters" }).optional()
    }),
    create: zod_1.z.object({
        name: zod_1.z.string().max(255, { message: "Cannot be greater than 255 characters" }),
        city: zod_1.z.string().max(255, { message: "Cannot be greater than 255 characters" })
    })
};
exports.moduleSchema = {
    create: zod_1.z.object({
        name: zod_1.z.string().min(1, { message: "Name is required" }),
        icon: zod_1.z.string()
    }),
    update: zod_1.z.object({
        name: zod_1.z.string().min(1, { message: "Name is required" }).optional(),
        icon: zod_1.z.any().optional()
    })
};
exports.subjectSchema = {
    create: zod_1.z.object({
        name: zod_1.z.string().min(1, { message: "Name is required" }),
        icon: zod_1.z.string()
    }),
    update: zod_1.z.object({
        name: zod_1.z.string().min(1, { message: "Name is required" }).optional(),
        icon: zod_1.z.any().optional()
    })
};
exports.subjectLecture = {
    create: zod_1.z.object({
        categoryId: zod_1.z.number(),
        title: zod_1.z.string().min(1, { message: "Title must be at least 1 character." }),
        description: zod_1.z.string().min(1, { message: "Title must be at least 1 character." }),
        url: zod_1.z.string().url(),
        type: zod_1.z.enum([client_1.DataType.Data, client_1.DataType.PDF, client_1.DataType.Record, client_1.DataType.Video], { message: "Invalid data typer" }),
    }),
    update: zod_1.z.object({
        categoryId: zod_1.z.number().optional(),
        title: zod_1.z.string().min(1, { message: "Title must be at least 1 character." }).optional(),
        description: zod_1.z.string().min(1, { message: "Title must be at least 1 character." }).optional(),
        url: zod_1.z.string().url().optional(),
        type: zod_1.z.enum([client_1.DataType.Data, client_1.DataType.PDF, client_1.DataType.Record, client_1.DataType.Video], { message: "Invalid data typer" }).optional(),
    })
};
exports.subjectPractical = {
    create: zod_1.z.object({
        categoryId: zod_1.z.number(),
        title: zod_1.z.string().min(1, { message: "Title must be at least 1 character." }),
        description: zod_1.z.string().min(1, { message: "Title must be at least 1 character." }),
        url: zod_1.z.string().url(),
        type: zod_1.z.enum([client_1.DataType.Data, client_1.DataType.PDF, client_1.DataType.Record, client_1.DataType.Video], { message: "Invalid data typer" }),
    }),
    update: zod_1.z.object({
        categoryId: zod_1.z.number().optional(),
        title: zod_1.z.string().min(1, { message: "Title must be at least 1 character." }).optional(),
        description: zod_1.z.string().min(1, { message: "Title must be at least 1 character." }).optional(),
        url: zod_1.z.string().url().optional(),
        type: zod_1.z.enum([client_1.DataType.Data, client_1.DataType.PDF, client_1.DataType.Record, client_1.DataType.Video], { message: "Invalid data typer" }).optional(),
    })
};
exports.subjectFinalRevision = {
    create: zod_1.z.object({
        categoryId: zod_1.z.number(),
        title: zod_1.z.string().min(1, { message: "Title must be at least 1 character." }),
        description: zod_1.z.string().min(1, { message: "Title must be at least 1 character." }),
        url: zod_1.z.string().url(),
        type: zod_1.z.enum([client_1.DataType.Data, client_1.DataType.PDF, client_1.DataType.Record, client_1.DataType.Video], { message: "Invalid data typer" }),
    }),
    update: zod_1.z.object({
        categoryId: zod_1.z.number().optional(),
        title: zod_1.z.string().min(1, { message: "Title must be at least 1 character." }).optional(),
        description: zod_1.z.string().min(1, { message: "Title must be at least 1 character." }).optional(),
        url: zod_1.z.string().url().optional(),
        type: zod_1.z.enum([client_1.DataType.Data, client_1.DataType.PDF, client_1.DataType.Record, client_1.DataType.Video], { message: "Invalid data typer" }).optional(),
    })
};
