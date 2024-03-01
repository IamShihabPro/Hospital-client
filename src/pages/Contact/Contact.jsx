import React from 'react';

const Contact = () => {
    return (
        <div className='container mx-auto mt-20 lg:mt-24'>
            <div className='mx-2'>
            <div className='max-w-screen-md mx-auto p-4'>
                <h2 className='text-center text-3xl font-bold mt-4 mb-6'>Contact Us</h2>
                <p className='mb-4 lg:mb-10 font-light text-center'>
                Got a technical issue? Want to send feedback about a better future? Let us know.
                </p>

                <form className='space-y-4 p-2'>
                    <div className='flex flex-col justify-start items-start gap-2'>
                        <label htmlFor="email" className='text-gray-600'>Your Email</label>
                        <input type="email" name="email"  placeholder='example@gmail.com' className='px-3 py-2 focus:outline-none border-[1.5px] border-blue-600 w-full rounded-sm'/>
                    </div>
                    <div className='flex flex-col justify-start items-start gap-2'>
                        <label htmlFor="subject" className='text-gray-600'>Your Subject</label>
                        <input type="text" name="subject"  placeholder='Your Subject' className='px-3 py-2 focus:outline-none border-[1.5px] border-blue-600 w-full rounded-sm'/>
                    </div>
                    <div className='flex flex-col justify-start items-start gap-2'>
                        <label htmlFor="message" className='text-gray-600'>Your Message</label>
                        <textarea rows='4' type="text" name="message"  placeholder='Leave a message...' className='px-3 py-2 focus:outline-none border-[1.5px] border-blue-600 w-full rounded-sm'/>
                    </div>
                    <button type='submit' className='w-full bg-blue-500 px-4 py-2 text-white rounded-sm font-bold'>Submit</button>
                </form>
            </div>
            </div>
        </div>
    );
};

export default Contact;