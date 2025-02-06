// hooks/useContactForm.ts
import { useState } from "react";
import { sendEmail, EmailData } from "@/services/emailService";
import { validateForm } from "@/utils/formValidation";

interface FormStatus {
  type: "success" | "error" | null;
  message: string;
}

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: null,
    message: "",
  });

  const resetForm = (form: HTMLFormElement) => {
    form.reset();
    setFormStatus({ type: null, message: "" });
  };

  const setError = (message: string) => {
    setFormStatus({ type: "error", message });
  };

  const setSuccess = (message: string) => {
    setFormStatus({ type: "success", message });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: "" });

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: EmailData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    const errors = validateForm(data);

    if (Object.keys(errors).length > 0) {
      setError("Please check all fields and try again.");
      setIsSubmitting(false);
      return;
    }

    try {
      await sendEmail(data);
      setSuccess("Thank you! Your message has been sent successfully.");
      form.reset();
      setTimeout(() => {
        resetForm(form);
      }, 5000);
    } catch (error) {
      console.error(error);
      setError("Sorry, something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    formStatus,
    handleSubmit,
  };
};
