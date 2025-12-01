'use client';

import { useState } from 'react';

const countries = [
  'Alaska', 'Argentina', 'Armenia', 'Australia', 'Bahamas', 'Bahrain', 'Bangladesh',
  'Barbados', 'Belarus', 'Belgium', 'Benin', 'Brazil', 'Cambodia', 'Cameroon', 'Canada',
  'Chile', 'Colombia', 'Costa Rica', 'Denmark', 'Ecuador', 'Egypt', 'France', 'Georgia',
  'Germany', 'Ghana', 'Hawaii', 'HongKong,China', 'India', 'Indonesia', 'Ireland', 'Japan',
  'Kazakhstan', 'Kenya', 'Kingdom of Saudi Arabia', 'Kyrgyzstan', 'Malaysia', 'Mexico',
  'Moldova', 'Nepal', 'Netherlands', 'New Caledonia', 'New Mexico', 'New Zealand', 'Nigeria',
  'Norway', 'Oman', 'Paraguay', 'Poland', 'Quebec', 'Russia', 'Singapore', 'South Africa',
  'South Korea', 'Spain', 'Surinam', 'Sweden', 'Taiwan, China', 'Tajikistan', 'Tanzania',
  'Thailand', 'Türkiye', 'UAE', 'U.K.', 'Uganda', 'Ukraine', 'USA', 'Uzbekistan', 'Vietnam',
  'Zambia', 'Zimbabwe', 'Others',
];

const budgetOptions = ['$0-$15K', '$15K-$30K', '$30K-$100K', '>$100K'];

const usps = [
  'No VAT & Services Fee',
  'Free & Stable Account',
  'Financial Security Guarantee',
  '24/7 Prioritized Support',
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  website: string;
  service: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  website?: string;
}


export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', phone: '', country: countries[0],
    website: '', service: 'Facebook Ads', budget: budgetOptions[0], message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'This field is required';
    if (!formData.email.trim()) newErrors.email = 'This field is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (!formData.phone.trim()) newErrors.phone = 'This field is required';
    if (!formData.website.trim()) newErrors.website = 'This field is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', country: countries[0], website: '', service: 'Facebook Ads', budget: budgetOptions[0], message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const inputClass = "w-full px-[5px] py-[10px] border-[0.8px] border-[rgba(38,38,38,0.2)] rounded-[5px] focus:outline-none focus:border-[#37AEA4] text-base bg-white";
  const labelClass = "block text-sm text-[#262626] mb-1";

  return (
    <>
      {/* Hero Section */}
      <section
        className="pt-28 pb-[140px]"
        style={{ background: 'linear-gradient(90deg, rgb(12, 17, 15) 0%, rgb(4, 20, 21) 100%)' }}
      >
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-[40px] md:text-[60px] font-bold text-white leading-tight">
            Get In Touch
          </h1>
        </div>
      </section>

      {/* Card Section - với margin-top âm để overlap lên header */}
      <section className="px-[15px] -mt-[120px] pb-[100px]">
        <div className="max-w-[1170px] mx-auto">
          {/* White Card Container */}
          <div 
            className="bg-white rounded-[5px]"
            style={{ boxShadow: 'rgb(245, 245, 245) 0px 0px 40px 0px' }}
          >
            
            <div className="flex flex-col lg:flex-row">
              {/* Left Side - Info */}
              <div className="flex-1 p-8 lg:p-12">
                <h2 className="text-[28px] lg:text-[35px] font-bold text-[#262626] mb-1">
                  Ready To
                </h2>
                <h3 className="text-[28px] lg:text-[35px] font-bold text-[#15757C] mb-6">
                  Get Your Agency Ads Account?
                </h3>
                <p className="text-[#666] text-base mb-8">
                  Please fill out the form, SCB team will get in touch with you and onboard you in 24h
                </p>
                <div className="space-y-4">
                  {usps.map((usp, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="material-icons-outlined text-[#19B5AB] text-xl">check_circle_outline</span>
                      <span className="font-semibold text-[#262626]">{usp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Form */}
              <div 
                className="lg:w-[524px] p-[30px] bg-white rounded-[5px] m-4 lg:m-6"
                style={{ boxShadow: 'rgb(244, 244, 244) 0px 0px 18px 0px' }}
              >
                {submitStatus === 'success' && (
                  <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded text-green-700 text-sm">
                    Thank you! We will contact you within 24 hours.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
                    Something went wrong. Please try again.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="flex gap-4 mb-4">
                    <div className="flex-1">
                      <label className={labelClass}>Your Name <span className="text-red-500">*</span></label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange}
                        className={`${inputClass} ${errors.name ? 'border-red-500' : ''}`} />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>
                    <div className="flex-1">
                      <label className={labelClass}>Your Email <span className="text-red-500">*</span></label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange}
                        className={`${inputClass} ${errors.email ? 'border-red-500' : ''}`} />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="flex gap-4 mb-4">
                    <div className="flex-1">
                      <label className={labelClass}>Phone/Whatsapp <span className="text-red-500">*</span></label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                        className={`${inputClass} ${errors.phone ? 'border-red-500' : ''}`} />
                      {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                    </div>
                    <div className="flex-1">
                      <label className={labelClass}>Country <span className="text-red-500">*</span></label>
                      <select name="country" value={formData.country} onChange={handleChange} className={inputClass}>
                        {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="flex gap-4 mb-4">
                    <div className="flex-1">
                      <label className={labelClass}>Website/Fanpage <span className="text-red-500">*</span></label>
                      <input type="text" name="website" value={formData.website} onChange={handleChange} placeholder="Https://"
                        className={`${inputClass} ${errors.website ? 'border-red-500' : ''}`} />
                      {errors.website && <p className="mt-1 text-xs text-red-500">{errors.website}</p>}
                    </div>
                    <div className="flex-1">
                      <label className={labelClass}>Service <span className="text-red-500">*</span></label>
                      <select name="service" value={formData.service} onChange={handleChange} className={inputClass}>
                        <option value="Facebook Ads">Facebook Ads</option>
                        <option value="Google Ads">Google Ads</option>
                        <option value="TikTok Ads">Tiktok Ads</option>
                        <option value="Bing Ads">Bing Ads</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className={labelClass}>What&apos;s Your Monthly Budget? <span className="text-red-500">*</span></label>
                    <select name="budget" value={formData.budget} onChange={handleChange} className={inputClass}>
                      {budgetOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className={labelClass}>Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={4}
                      className={`${inputClass} resize-none`} />
                  </div>

                  <button type="submit" disabled={isSubmitting}
                    className="w-full py-[10px] px-[5px] bg-[#37AEA4] hover:bg-[#2d9a91] text-white font-medium rounded-[5px] transition-colors disabled:opacity-50">
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
