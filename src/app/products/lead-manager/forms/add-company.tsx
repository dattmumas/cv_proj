'use client';

import styled from 'styled-components';
import { useFormStatus, useFormState } from "react-dom";
import { createCompany } from "@/lib/data";

const initialState = {
    message: "",
};

// Styled Components for the form and inputs with reduced size
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 350px; /* Reduced max width */
    margin: 0 auto;
    padding: 16px;
    background-color: #f9fafb; 
    border: 1px solid #e5e7eb;
    border-radius: 6px;
`;

const Label = styled.label`
    font-size: 0.875rem; /* Reduced font size */
    color: #111827;
    font-weight: 600;
`;

const Input = styled.input`
    padding: 8px; /* Reduced padding */
    border: 1px solid #d1d5db;
    border-radius: 4px; /* Slightly smaller radius */
    font-size: 0.875rem; /* Smaller font size */
    transition: border-color 0.2s ease-in-out;
    
    &:focus {
        border-color: #111827;
        outline: none;
    }
`;

const Select = styled.select`
    padding: 8px;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    font-size: 0.875rem;
    transition: border-color 0.2s ease-in-out;
    
    &:focus {
        border-color: #111827;
        outline: none;
    }
`;

const Textarea = styled.textarea`
    padding: 8px;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    font-size: 0.875rem;
    min-height: 80px; /* Reduced height */
    transition: border-color 0.2s ease-in-out;
    
    &:focus {
        border-color: #111827;
        outline: none;
    }
`;

const SubmitButtonStyled = styled.button`
    padding: 10px 16px; /* Smaller button */
    background-color: #111827;
    color: white;
    font-size: 0.875rem; /* Smaller font size */
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #333;
    }

    &[aria-disabled="true"] {
        background-color: #9ca3af;
        cursor: not-allowed;
    }
`;

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <SubmitButtonStyled type="submit" aria-disabled={pending}>
            {pending ? 'Adding...' : 'Add'}
        </SubmitButtonStyled>
    );
}

export function AddCompany() {
    const [state, formAction] = useFormState(createCompany, initialState);

    return (
        <Form action={formAction}>
            <Label htmlFor="companyname">Company Name</Label>
            <Input type="text" id="companyname" name="companyname" required />

            <Label htmlFor="industry">Industry</Label>
            <Input type="text" id="industry" name="industry" required />

            <Label htmlFor="stage">Stage</Label>
            <Select id="stage" name="stage" required>
                <option value="Pre-Seed">Pre-Seed</option>
                <option value="Seed">Seed</option>
                <option value="Series A">Series A</option>
                <option value="Series B">Series B</option>
                <option value="Series C +">Series C +</option>
                <option value="Mezzanine">Mezzanine</option>
                <option value="Exit">Exit</option>
            </Select>

            <Label htmlFor="status">Status</Label>
            <Select id="status" name="status" required>
                <option value="open">Open</option>
                <option value="contacted">Contacted</option>
                <option value="closed">Closed</option>
                <option value="cold">Cold</option>
            </Select>

            <Label htmlFor="firstcontactdate">First Contact Date</Label>
            <Input type="date" id="firstcontactdate" name="firstcontactdate" required />

            <Label htmlFor="lastcontactdate">Last Contact Date</Label>
            <Input type="date" id="lastcontactdate" name="lastcontactdate" required />

            <Label htmlFor="description">Description</Label>
            <Textarea id="description" name="description" required />

            <SubmitButton />
        </Form>
    );
}