"use server";

import { sql } from '@vercel/postgres';

type CompanyLeadData = {
    companyName: string;
    industry: string;
    stage: 'Pre-Seed' | 'Seed' | 'Series A' | 'Series B' | 'Series C +' | 'Mezzanine' | 'Exit';
    status: 'open' | 'contacted' | 'closed'| 'cold';
    firstContactDate: string;
    lastContactDate: string;
    description: string;
}

export const createCompanyLead = async ( data: CompanyLeadData ) => {
    try {
        await sql`
            INSERT INTO leadCompany (
                companyName, industry, stage, status, firstContactDate, lastContactDate, description
            ) VALUES (
                ${data.companyName}, ${data.industry}, ${data.stage}, ${data.status}, ${data.firstContactDate}, ${data.lastContactDate}, ${data.description}
            )
        `;
    } catch (error) {
        console.error('Error inserting company:', error);
        throw new Error('Error inserting company');
    }
}

export type State = {
    companyName: string;
    industry: string;
    stage: 'Pre-Seed' | 'Seed' | 'Series A' | 'Series B' | 'Series C +' | 'Mezzanine' | 'Exit';
    status: 'open' | 'contacted' | 'closed'| 'cold';
    firstContactDate: string;
    lastContactDate: string;
    description: string;
}