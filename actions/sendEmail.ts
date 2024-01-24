"use server"
import React from 'react';

import { validateString } from '@/app/lib/helpers';
import { Resend } from 'resend';
import { getErrorMessage } from '@/app/lib/helpers';
import ContactFormEmail from '@/app/contactformemail/contactFromEmail';

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message")
  const senderEmail = formData.get("senderEmail")


  if (!validateString(senderEmail, 500)) {
    return {
      error: "invalid sender email"
    }
  }

  if (!validateString(message, 5000)) {
    return {
      error: "invalid message"
    }
  }
  let data;

  try {
    await resend.emails.send({
      from: 'Contact form <onboarding@resend.dev>',
      to: 'francisrjones@hotmail.co.uk',
      subject: 'Message from contact form',
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      })
  
    });
  } catch(error: unknown) {
      return {
        error: getErrorMessage(error)
      }
  }

  return { data }
}

