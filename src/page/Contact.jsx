import React from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#F8F1E7] text-[#1C1C1C] font-sans selection:bg-[#B92E1D] selection:text-white">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
        <div className="border-l-4 border-[#B92E1D] pl-6">
          <p className="text-[#B92E1D] font-bold uppercase tracking-widest text-sm mb-2">Contact Us</p>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none">
            REACH OUT. <br />
            <span className="opacity-40">STAY CONNECTED.</span>
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Info & Process */}
          <div className="lg:col-span-5 space-y-16">
            
            {/* Quick Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-[#B92E1D] mb-4">Call Us</h4>
                <p className="text-xl font-medium">+1 (555) 000-0000</p>
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-[#B92E1D] mb-4">Email Us</h4>
                <p className="text-xl font-medium">dominic@123.com</p>
              </div>
            </div>

            {/* "What Happens Next" Section - The "Something Different" */}
            <div className="hidden sm:block space-y-8">
              <h3 className="text-2xl font-bold underline decoration-[#B92E1D] decoration-4 underline-offset-8">
                Our Response Process
              </h3>
              
              <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-[#1C1C1C]/10">
                <div className="relative flex gap-6 items-start">
                  <div className="z-10 bg-[#1C1C1C] text-[#F8F1E7] p-2 rounded-full">
                    <MessageSquare size={16} />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">Inquiry Received</h5>
                    <p className="opacity-70 text-sm">We review your requirements and assign the best expert to your case.</p>
                  </div>
                </div>

                <div className="relative flex gap-6 items-start">
                  <div className="z-10 bg-[#B92E1D] text-white p-2 rounded-full shadow-lg shadow-[#B92E1D]/20">
                    <Clock size={16} />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">24-Hour Discovery</h5>
                    <p className="opacity-70 text-sm">You'll receive a personalized response with initial thoughts or a meeting link.</p>
                  </div>
                </div>

                <div className="relative flex gap-6 items-start">
                  <div className="z-10 bg-[#1C1C1C] text-[#F8F1E7] p-2 rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">Kickoff Session</h5>
                    <p className="opacity-70 text-sm">We hop on a call to align on goals and start the collaboration.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Tag */}
            <div className="pt-0 sm:pt-8 border-t border-[#1C1C1C]/10 flex items-center gap-3">
              <MapPin className="text-[#B92E1D]" size={20} />
              <p className="text-sm font-medium opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>

          {/* Right Column: Modern Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#1C1C1C] text-[#F8F1E7] p-8 md:p-12 rounded-[2rem] shadow-2xl">
              <form className="space-y-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-[0.2em] opacity-50">Who are you?</label>
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    className="w-full bg-transparent border-b-2 border-[#F8F1E7]/20 focus:border-[#B92E1D] py-4 text-xl outline-none transition-all placeholder:text-[#F8F1E7]/20"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-[0.2em] opacity-50">Where can we reach you?</label>
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b-2 border-[#F8F1E7]/20 focus:border-[#B92E1D] py-4 text-xl outline-none transition-all placeholder:text-[#F8F1E7]/20"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-[0.2em] opacity-50">Tell us everything</label>
                  <textarea 
                    rows="4" 
                    placeholder="Describe your project or inquiry..."
                    className="w-full bg-transparent border-b-2 border-[#F8F1E7]/20 focus:border-[#B92E1D] py-4 text-xl outline-none transition-all resize-none placeholder:text-[#F8F1E7]/20"
                  ></textarea>
                </div>

                <button className="group relative overflow-hidden bg-[#B92E1D] text-white px-10 py-5 rounded-full font-bold text-lg transition-all hover:pr-14 hover:bg-white hover:text-[#B92E1D]">
                  <span className="relative z-10 flex items-center gap-2">
                    Send Inquiry 
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;