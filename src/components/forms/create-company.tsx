'use client';

import { leadCompany } from "@/lib/definitions";
import { createCompanyLead } from "@/lib/actions/actions";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

const companyFields = [
  { id: "companyname", label: "Company Name", type: "text", required: true },
  { id: "industry", label: "Industry", type: "text", required: true },
  { id: "stage", label: "Stage", type: "text", required: true },
  { id: "status", label: "Status", type: "text", required: true },
  { id: "firstcontactdate", label: "First Contact Date", type: "date", required: true },
  { id: "lastcontactdate", label: "Last Contact Date", type: "date", required: true },
  { id: "description", label: "Description", type: "text", required: false },
];

export default function CompanyForm({ company }: { company: leadCompany }) {
  const { register, handleSubmit, formState: { errors } } = useForm<leadCompany>();

  // Handle form submission
  const onSubmit = async (data: leadCompany) => {
    try {
      const response = await createCompanyLead(data);
      console.log(response);
    } catch (error) {
      console.error('Error creating company:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} method="post">
      {companyFields.map((field) => (
        <div key={field.id}>
          <input
            id={field.id}
            type={field.type}
            {...register(field.id as keyof leadCompany, { required: field.required ? `${field.label} is required` : false })}
            defaultValue={company?.[field.id as keyof leadCompany] || ''}
            placeholder={`Enter ${field.label.toLowerCase()}`}
          />
          {errors[field.id as keyof leadCompany] && (
            <p>{errors[field.id as keyof leadCompany]?.message?.toString()}</p>
          )}
        </div>
      ))}

      <Button type="submit">Submit</Button>
    </form>
  );
}