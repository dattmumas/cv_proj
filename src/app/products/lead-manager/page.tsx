
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import Navbar from "@/components/navbar";
import { fetchCompany } from "@/lib/data";
import { unstable_noStore as noStore } from "next/cache";
import{ AddCompany } from "@/app/products/lead-manager/forms/add-company";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AddCompanyDialog } from "./components/add-company-dialog";


export default async function LeadManager() {
  noStore();
  const company = await fetchCompany();

  return (
    <div>
      <Navbar />
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Company</TableHead>
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
        <AddCompanyDialog />
      </div>
    </div>
  );
}