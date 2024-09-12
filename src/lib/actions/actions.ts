"use server";

import { sql } from '@vercel/postgres';

type CompanyLeadData = {
    companyname: string;
    industry: string;
    stage: 'Pre-Seed' | 'Seed' | 'Series A' | 'Series B' | 'Series C +' | 'Mezzanine' | 'Exit';
    status: 'open' | 'contacted' | 'closed'| 'cold';
    firstcontactdate: string;
    lastcontactdate: string;
    description: string;
}

export const createCompanyLead = async ( data: CompanyLeadData ) => {
    try {
        await sql`
            INSERT INTO leadCompany (
                companyName, industry, stage, status, firstContactDate, lastContactDate, description
            ) VALUES (
                ${data.companyname}, ${data.industry}, ${data.stage}, ${data.status}, ${data.firstcontactdate}, ${data.lastcontactdate}, ${data.description}
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