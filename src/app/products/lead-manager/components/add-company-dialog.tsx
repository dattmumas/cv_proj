'use client';
import styled from 'styled-components';
import { AddCompany } from "@/app/products/lead-manager/forms/add-company";
import {
  Dialog,
  DialogContent as BaseDialogContent,
  DialogHeader,
  DialogTitle as BaseDialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusIcon } from '@radix-ui/react-icons';


// Custom Styled Components for Dialog
const DialogContent = styled(BaseDialogContent)`
  background-color: white;
  color: black;
  padding: 24px;
  max-width: 425px;
  max-height: 75%
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid black; 
`;

const DialogTitle = styled(BaseDialogTitle)`
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
`;

const Button = styled.button`
  background-color: white;
  color: black;
  padding: 5px 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #333; /* Slight hover effect */
  }
`;


export function AddCompanyDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button><PlusIcon/></Button>
      </DialogTrigger>
      
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Company</DialogTitle>
        </DialogHeader>

        <div className="py-4">
          <AddCompany />
        </div>
      </DialogContent>
    </Dialog>
  );
}