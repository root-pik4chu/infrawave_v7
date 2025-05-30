"use client";
import { useState } from 'react';
import { Calendar, Check } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    projectBudget: '',
    hearAbout: '',
    productGoals: '',
    services: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceToggle = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const services = [
    'UI/UX Design',
    'SaaS Design', 
    'Branding',
    'CRO',
    'Mobile app',
    'Development',
    'MVP Development',
    'Web Design'
  ];

  return (
    <div className=" min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 pt-[20vh]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Got an Project?
              </h2>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-400 leading-tight">
                Lets talk!
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gray-900 rounded flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-700 text-lg">NDA? Absolutely just ask.</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gray-900 rounded flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-700 text-lg">Well respond in 24 hours - fast & focused.</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gray-900 rounded flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-700 text-lg">Work with senior UX experts, not juniors.</span>
              </div>
            </div>

            <div className="pt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Schedule a call:</h2>
              
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img 
                    src="https://i.pinimg.com/736x/98/e5/ee/98e5eeec529fabadc13657da966464d8.jpg" 
                    alt="Shahid Miah"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-lg">Tanish sir</h4>
                  <p className="text-gray-600">Founder & CEO</p>
                </div>
                
                <button className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center hover:bg-zinc-700 transition-colors">
                  <Calendar className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <select
                    name="projectBudget"
                    value={formData.projectBudget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent outline-none transition-all text-gray-500 bg-white"
                  >
                    <option className='bg-zinc-900 text-white' value="">Project budget</option>
                    <option className='bg-zinc-900 text-white' value="<10k">Less than $10,000</option>
                    <option className='bg-zinc-900 text-white' value="10k-50k">$10,000 - $50,000</option>
                    <option className='bg-zinc-900 text-white' value="50k-100k">$50,000 - $100,000</option>
                    <option className='bg-zinc-900 text-white' value=">100k">More than $100,000</option>
                  </select>
                </div>
                
                <div>
                  <select
                    name="hearAbout"
                    value={formData.hearAbout}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent outline-none transition-all text-gray-500 bg-white"
                  >
                    <option className='bg-zinc-900 text-white' value="">How did you hear about us?</option>
                    <option className='bg-zinc-900 text-white' value="google">Google Search</option>
                    <option className='bg-zinc-900 text-white' value="referral">Referral</option>
                    <option className='bg-zinc-900 text-white' value="social">Social Media</option>
                    <option className='bg-zinc-900 text-white' value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <textarea
                  name="productGoals"
                  placeholder="Tell us about your product and goals"
                  value={formData.productGoals}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">How can we help you?</h2>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => handleServiceToggle(service)}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                        formData.services.includes(service)
                          ? 'bg-zinc-50 border-zinc-900 text-zinc-700'
                          : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-zinc-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-zinc-700 transition-colors mb-4 sm:mb-0"
                >
                  Send inquiry
                </button>
                
                <div className="text-center sm:text-right">
                  <p className="text-gray-500 text-sm mb-1">Prefer email?</p>
                  <a 
                    href="mailto:hello@wavespaceagency"
                    className="text-gray-900 font-medium underline hover:text-zinc-600 transition-colors"
                  >
                    hello@infrawave
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}