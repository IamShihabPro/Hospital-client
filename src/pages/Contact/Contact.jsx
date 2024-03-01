import React from 'react';

const Contact = () => {
    return (
        <div className='container mx-auto mt-24'>
            <div className='mx-2'>
            <div className='max-w-screen-md mx-auto p-4'>
                <h2 className='text-center text-3xl font-bold my-4'>Contact Us</h2>
                <p className='mb-4 lg:mb-16 font-light text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum saepe harum qui, maiores autem adipisci.
                </p>

                <form className='space-y-8 p-2'>
                    <div className='flex flex-col justify-start items-start gap-4'>
                        <label htmlFor="email" className='text-gray-600'>Your Email</label>
                        <input type="email" name="email"  placeholder='example@gmail.com' className='px-3 py-2 focus:outline-none border-[1.5px] border-blue-600 w-full rounded-sm'/>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
};

export default Contact;