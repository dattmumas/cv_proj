export type leadCompany = {
    id: number;
    companyName: string;
    industry: string;
    stage: 'Pre-Seed' | 'Seed' | 'Series A' | 'Series B' | 'Series C +' | 'Mezzanine' | 'Exit';
    status: 'open' | 'contacted' | 'closed'| 'cold';
    firstContactDate: string;
    lastContactDate: string;
    description: string;
}

export type leadFounder = {
    id: number;
    leadId: number;
    founderName: string;
    founderRole: string;
    founderEmail: string;
    founderPhone: string;
    description: string;
}

export type leadInvestor = {
    investorName: string;
    investorFirm: string;
    angel: boolean;
    investorRole: string;
    investorEmail: string;
    investorPhone: string;
    description: string;
}