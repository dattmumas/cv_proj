import Navbar from "@/components/navbar";
import { leadCompany, leadFounder, leadInvestor } from "@/lib/definitions";
import { fetchCompany } from "@/lib/data";


export default async function LeadManager() {
    const company: leadCompany[] = await fetchCompany();

    return (
        <div>
            <Navbar />
            <h1>Lead Manager</h1>
            <div>
                <h2>Company</h2>
                <ul>
                    {company.map(company => (
                        <li key={company.id}>{company.stage}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}