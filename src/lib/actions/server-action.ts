'use server';

import { redirect } from 'next/navigation';
import { z } from 'zod';
import { createCompanyLead } from './actions';

const schema = z.object({
    companyName: z.string(),
    industry: z.string(),
    stage: z.enum(['Pre-Seed', 'Seed', 'Series A', 'Series B', 'Series C +', 'Mezzanine', 'Exit']),
    status: z.enum(['open', 'contacted', 'closed', 'cold']),
    firstContactDate: z.string(),
    lastContactDate: z.string(),
    description: z.string(),
});

export default async function contactAction(_prevState: any, params: FormData) {
    const validation = schema.safeParse({
        companyName: params.get('companyName'),
        industry: params.get('industry'),
        stage: params.get('stage'),
        status: params.get('status'),
        firstContactDate: params.get('firstContactDate'),
        lastContactDate: params.get('lastContactDate'),
        description: params.get('description'),
    })

    if (validation.success) {
        await createCompanyLead(validation.data);
        redirect('/products/lead-manager');
    } else {
        console.error(validation.error);
        redirect('/products/lead-manager');
    }
}