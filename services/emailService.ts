import emailjs from "@emailjs/browser";

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

const EMAIL_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
} as const;

export const validateEmailConfig = () => {
  if (
    !EMAIL_CONFIG.serviceId ||
    !EMAIL_CONFIG.templateId ||
    !EMAIL_CONFIG.publicKey
  ) {
    throw new Error("Missing required environment variables for EmailJS");
  }
};

export const sendEmail = async (data: EmailData): Promise<void> => {
  validateEmailConfig();

  try {
    await emailjs.send(
      EMAIL_CONFIG.serviceId!,
      EMAIL_CONFIG.templateId!,
      {
        from_name: data.name,
        reply_to: data.email,
        message: data.message,
      },
      EMAIL_CONFIG.publicKey
    );
  } catch (err) {
    console.error("Error sending email", err);
    throw new Error("Failed to send email");
  }
};
