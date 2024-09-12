import { sql } from "@vercel/postgres";
import { leadCompany, leadFounder, leadInvestor } from "./definitions";

export async function fetchCompany() {
        const data = await sql<leadCompany>`SELECT * FROM leadCompany`;
        return data.rows;
}

