import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";   // ✅ added EmailJS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      "service_3lu7eu4",   // 👉 replace with EmailJS Service ID
      "template_iz811za",  // 👉 replace with EmailJS Template ID
      {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
      },
      "VHnNef_p0fFEIa0lJ"    // 👉 replace with EmailJS Public Key
    )
    .then(
      (result) => {
        console.log("Email sent:", result.text);
        toast({
          title: "Message Sent!",
          description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", company: "", message: "" });
      },
      (error) => {
        console.error("Email failed:", error.text);
        toast({
          title: "Error!",
          description: "Failed to send message. Please try again later.",
        });
      }
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Phone",
      details: "+91 8008963337",
      description: "Mon-Fri 9am-6pm IST"
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email",
      details: "contact@lucratechsol.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: "Office",
      details: "Plot No.72, H. No.8-2-334/1, Road No.5, Opp. SBI Executive Enclave, Banjara Hills, Hyderabad-500034 Telangana, India",
      description: "By appointment only"
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Business Hours",
      details: "Monday - Friday",
      description: "9:00 AM - 6:00 PM IST"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-orange-light/30 via-white to-gray-50 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3')`
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center bg-white shadow-soft border border-gray-200 text-orange-primary px-6 py-3 rounded-full text-sm font-medium mb-8">
            <Mail className="h-4 w-4 mr-2" />
            Get In Touch
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Contact 
            <span className="text-orange-primary bg-gradient-to-r from-orange-primary to-orange-dark bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have Questions? Get in touch with our team of experts today.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="shadow-elevated border-0 rounded-3xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <div className="p-2 bg-orange-light/50 rounded-xl mr-3">
                    <Send className="h-6 w-6 text-orange-primary" />
                  </div>
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="rounded-xl border-gray-200 focus:border-orange-primary focus:ring-orange-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="rounded-xl border-gray-200 focus:border-orange-primary focus:ring-orange-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="rounded-xl border-gray-200 focus:border-orange-primary focus:ring-orange-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What would you like to talk to us about?"
                      className="rounded-xl border-gray-200 focus:border-orange-primary focus:ring-orange-primary"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full gradient-orange hover:bg-orange-hover text-white py-4 rounded-xl font-medium shadow-orange hover:shadow-elevated transition-all duration-300">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 hover:shadow-elevated transition-all duration-300 border-0 shadow-soft rounded-2xl bg-gradient-to-r from-white to-orange-light/10">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-2 bg-orange-light/50 rounded-xl">
                        {React.cloneElement(info.icon, { className: "h-6 w-6 text-orange-primary" })}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                        <p className="text-gray-800 font-medium">{info.details}</p>
                        <p className="text-gray-600 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Quick Response Promise */}
              <Card className="bg-gradient-to-br from-orange-light/30 to-white border-orange-primary/20 border-2 rounded-2xl shadow-soft">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Clock className="h-5 w-5 text-orange-primary mr-2" />
                    Quick Response Guarantee
                  </h3>
                  <p className="text-gray-600">
                    We understand that time is crucial for your business. That's why we guarantee a response to all inquiries within 24 hours during business days.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
