import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    consultant: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Consultation Request Submitted!",
      description: "We'll get back to you within 24 hours."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      consultant: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      ></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-6 header-font">
          Ready to Start Your <span className="text-primary">Journey?</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Take the first step towards your dream university. Schedule a free consultation with our expert team today.
        </p>

        <div className="glass-effect rounded-2xl p-8 max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input 
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:border-primary"
              required
            />
            <input 
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:border-primary"
              required
            />
            <select 
              name="consultant"
              value={formData.consultant}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm text-white focus:outline-none focus:border-primary"
            >
              <option value="" className="text-gray-800">Select Consultant</option>
              <option value="diya" className="text-gray-800">Diya Patel (Harvard)</option>
              <option value="aditya" className="text-gray-800">Aditya Kirubakaran (UC Berkeley)</option>
              <option value="archisa" className="text-gray-800">Archisa Arora (UPenn)</option>
            </select>
            <textarea 
              name="message"
              placeholder="Tell us about your goals..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:border-primary resize-none"
              required
            />
            <button 
              type="submit"
              className="w-full glass-button py-3 rounded-lg font-semibold"
            >
              Schedule Free Consultation
            </button>
          </form>
        </div>

        <div className="mt-12 flex justify-center space-x-8 text-muted-foreground">
          <div className="text-center">
            <div className="font-semibold">Email</div>
            <div>hello@pathwaysconsulting.com</div>
          </div>
          <div className="text-center">
            <div className="font-semibold">Phone</div>
            <div>(555) 123-4567</div>
          </div>
        </div>
      </div>
    </section>
  );
}
