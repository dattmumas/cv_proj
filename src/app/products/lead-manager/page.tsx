import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import Navbar from "@/components/navbar";
import { leadCompany } from "@/lib/definitions";
import { fetchCompany } from "@/lib/data";
import CompanyForm from "@/components/forms/create-company";

export default async function LeadManager() {
  const company: leadCompany[] = await fetchCompany();

  return (
    <div>
      <Navbar />
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Last Contact</TableHead>
              <TableHead>Stage</TableHead>
              <TableHead>Industry</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {company.map((company) => (
              <TableRow key={company.id}>
                <TableCell>{company.companyname}</TableCell>
                <TableCell>{new Date(company.lastcontactdate).toLocaleDateString()}</TableCell>
                <TableCell>{company.stage}</TableCell>
                <TableCell>{company.industry}</TableCell>
                <TableCell>{company.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div>
          <CompanyForm company={company[0]} />
        </div>
      </div>
    </div>
  );
}