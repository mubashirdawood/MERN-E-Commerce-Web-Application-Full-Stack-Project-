import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // Form submission logic can be added here
    console.log("Form submitted");
  }

  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t border-gray-100'>
          <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-16 mb-28 px-4'>
        <div className='relative group overflow-hidden rounded-xl shadow-2xl md:max-w-[480px]'>
          <img 
            className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' 
            src={assets.contact_img} 
            alt="Contact Us" 
          />
          <div className='absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500'></div>
        </div>

        <div className='flex flex-col justify-center items-start gap-8 max-w-md'>
          <div>
            <p className='font-bold text-2xl text-gray-800 mb-4'>Our Store</p>
            <p className='text-gray-500 leading-relaxed'>
              123 Main St, Luxury Plaza <br /> 
              Suite 350, City, Country
            </p>
          </div>
          
          <div>
            <p className='font-semibold text-gray-600 mb-2'>Contact Details</p>
            <p className='text-gray-500'>
              Tel: <span className='text-gray-800 ml-1'>+1234567</span> <br /> 
              Email: <span className='text-gray-800 ml-1'>contact@forever.com</span>
            </p>
          </div>

          <div>
            <p className='font-bold text-2xl text-gray-800 mb-4'>Careers at Forever</p>
            <p className='text-gray-500 leading-relaxed mb-6'>
              Learn more about our teams and current job openings. We are always looking for passionate people.
            </p>
            <button className='group relative inline-flex items-center justify-center border-2 border-black px-10 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all duration-300 hover:bg-black hover:text-white overflow-hidden'>
              <span className='z-10'>Explore Jobs</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modern Contact Form Section */}
      <div className='max-w-5xl mx-auto mb-20 px-4'>
        <div className='bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100'>
          <div className='md:w-1/3 bg-black p-10 text-white flex flex-col justify-between'>
            <div>
              <h3 className='text-3xl font-bold mb-6'>Get In Touch</h3>
              <p className='text-gray-400 mb-8'>Fill out the form and our team will get back to you within 24 hours.</p>
            </div>
            
            <div className='space-y-6'>
              <div className='flex items-center gap-4'>
                <div className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center'>
                  <i className="fa-solid fa-phone"></i>
                </div>
                <span>+1234567</span>
              </div>
              <div className='flex items-center gap-4'>
                <div className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center'>
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <span>contact@forever.com</span>
              </div>
            </div>
          </div>

          <div className='md:w-2/3 p-10 bg-gray-50/50'>
            <form onSubmit={onSubmitHandler} className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='flex flex-col gap-2'>
                <label className='text-xs font-bold uppercase tracking-wider text-gray-500'>Full Name</label>
                <input 
                  type="text" 
                  placeholder='John Doe' 
                  className='w-full border-b-2 border-gray-200 bg-transparent px-2 py-3 outline-none focus:border-black transition-colors' 
                  required 
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='text-xs font-bold uppercase tracking-wider text-gray-500'>Email Address</label>
                <input 
                  type="email" 
                  placeholder='john@example.com' 
                  className='w-full border-b-2 border-gray-200 bg-transparent px-2 py-3 outline-none focus:border-black transition-colors' 
                  required 
                />
              </div>
              <div className='flex flex-col gap-2 md:col-span-2'>
                <label className='text-xs font-bold uppercase tracking-wider text-gray-500'>Subject</label>
                <input 
                  type="text" 
                  placeholder='How can we help?' 
                  className='w-full border-b-2 border-gray-200 bg-transparent px-2 py-3 outline-none focus:border-black transition-colors' 
                  required 
                />
              </div>
              <div className='flex flex-col gap-2 md:col-span-2'>
                <label className='text-xs font-bold uppercase tracking-wider text-gray-500'>Message</label>
                <textarea 
                  rows="4" 
                  placeholder='Write your message here...' 
                  className='w-full border-2 border-gray-200 rounded-xl bg-white p-4 outline-none focus:border-black transition-colors resize-none' 
                  required
                ></textarea>
              </div>
              <div className='md:col-span-2 mt-4'>
                <button 
                  type='submit' 
                  className='w-full md:w-auto bg-black text-white px-12 py-4 rounded-full font-bold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 active:scale-95'
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default Contact
