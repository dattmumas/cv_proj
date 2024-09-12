import { sql } from "@vercel/postgres";
import { leadCompany } from "./definitions";

export async function fetchCompany() {
        const data = await sql<leadCompany>`SELECT * FROM leadCompany`;
        return data.rows;
}

