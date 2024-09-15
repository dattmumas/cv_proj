'use client';
import styled from 'styled-components';
import { AddCompany } from "@/app/products/lead-manager/forms/add-company";
import {
  Dialog,
  DialogContent as BaseDialogContent,
  DialogHeader,
  DialogTitle as BaseDialogTitle,
  DialogDescription as BaseDialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusIcon } from '@radix-ui/react-icons';

// Custom Styled Components for Dialog
const DialogContent = styled(BaseDialogContent)`
  background-color: white; /* Solid background */
  color: black; /* Black text */
  padding: 24px;
  max-width: 425px;
  max-height: 75%
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Slight shadow for depth */
  border: 1px solid black; /* Black border for emphasis */
`;

const DialogTitle = styled(BaseDialogTitle)`
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
`;

const DialogDescription = styled(BaseDialogDescription)`
  color: #6b7280; /* Dark grey description text */
`;

const Button = styled.button`
  background-color: black;
  color: white;
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

const CloseButton = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: #f3f4f6; /* Hover effect for close button */
  }
`;

export function AddCompanyDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Company</Button>
      </DialogTrigger>
      
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Company</DialogTitle>
          <DialogDescription>
            Add a new company to the list.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <AddCompany />
        </div>
      </DialogContent>
    </Dialog>
  );
}