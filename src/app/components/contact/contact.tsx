"use client"
import React from 'react';
import { sendEmail } from '../../../../actions/sendEmail';
import SubmitButton from '../submit-btn';
import { toast } from 'react-hot-toast';



const Contact = () => {

  return (

    <div>
      <section
        id="contact"
        className="mb-20 sm:mb-28, w-[min(100%, 38rem)] text-center font-mono text-white"
      >
        <div className='mt-48 text-center'>
          <h1 className='text-2xl mb-4'>Contact me</h1>
          <h2 className='text-m'>Contact me directly on <a className='underline' href="mailto:devfrancisjones@gmaill.com">devfrancisjones@gmail.com</a> or <br /> through this form</h2>
        </div>
        <div className="container px-5 py-12 mx-auto">

          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form className="flex flex-wrap -m-2" 
            action={async (formData) => {
              const {data, error} = await sendEmail(formData)
              if(error) {
                toast.error(error)
                return;
              }
              toast.success('Message sent successfully!')
            }
            }>

              <div className="p-2 w-full">
                <div className="relative">

                  <input
                    id="senderEmail"
                    name="senderEmail"
                    type="senderEmail"
                    required
                    maxLength= {500}
                     placeholder="Your email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

              </div>
              <div className="p-2 w-full">


                <div className="relative">
                  <textarea
                    placeholder='Leave me a message'
                    id="message"
                    name="message"
                    required
                    maxLength={5000}
                    className="w-full pt-2 bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-52 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>

                </div>
              </div>
              <div className="p-2 w-full z-10">
                <SubmitButton />
              </div>
            </form>

          </div>
        </div>
      </section>

    </div>
  );
};


export default Contact;
