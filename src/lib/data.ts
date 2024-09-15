'use server';

import { sql } from "@vercel/postgres";
import { leadCompany } from "./definitions";
import { z } from "zod";
import { revalidatePath } from "next/cache";

export async function fetchCompany() {
        const data = await sql<leadCompany>`SELECT * FROM leadCompany`;
        return data.rows;
}

export async function createCompany(
        prevState: {
            message: string;
        },
        formData: FormData,
    ) {
        // Define the schema to validate all required fields
        const schema = z.object({
            companyname: z.string().min(1, "Company name is required"),
            lastcontactdate: z.string().min(1, "Last contact date is required"),
            firstcontactdate: z.string().min(1, "First contact date is required"),
            stage: z.string().min(1, "Stage is required"),
            industry: z.string().min(1, "Industry is required"),
            status: z.string().min(1, "Status is required"),
            description: z.string().min(1, "Description is required"),
        });
    
        // Validate form data against the schema
        const parse = schema.safeParse({
            companyname: formData.get("companyname"),
            lastcontactdate: formData.get("lastcontactdate"),
            firstcontactdate: formData.get("firstcontactdate"),
            stage: formData.get("stage"),
            industry: formData.get("industry"),
            status: formData.get("status"),
            description: formData.get("description"),
        });
    
        if (!parse.success) {
            // Return an error message if validation fails
            return { message: "Failed to create company: Invalid input data" };
        }
    
        const data = parse.data;
    
        try {
            // Insert validated data into the database
            await sql`
                INSERT INTO leadCompany (companyname, lastcontactdate, firstcontactdate, stage, industry, status, description)
                VALUES (${data.companyname}, ${data.lastcontactdate}, ${data.firstcontactdate}, ${data.stage}, ${data.industry}, ${data.status}, ${data.description})
            `;
            
            // Revalidate the path to refresh any data on the homepage (or wherever needed)
            revalidatePath("/");
            
            return { message: `Added company ${data.companyname} successfully` };
        } catch (e) {
            // Return an error message if the SQL query fails
            return { message: "Failed to create company: Database error" };
        }
    }

export async function deleteCompany(
        prevState: {
                message: string;
        },
        formData: FormData,
) {
        const schema = z.object({
                companyname: z.string().min(1),
                lastcontactdate: z.string().min(1),
                stage: z.string().min(1),
                industry: z.string().min(1),
                status: z.string().min(1),
        });

        const parse = schema.safeParse({
                companyname: formData.get("companyname"),
                lastcontactdate: formData.get("lastcontactdate"),
                stage: formData.get("stage"),
                industry: formData.get("industry"),
                status: formData.get("status"),
        });

        if (!parse.success) {
                return { message: "Failed to create company" };
        }

        const data = parse.data;

        try {
                await sql`
                        DELETE FROM leadCompany WHERE companyname = ${data.companyname}
                `;
                revalidatePath("/");
                return { message: `Deleted company ${data.companyname}` };
        } catch (e) {
                return { message: "Failed to delete company" };
        }
}