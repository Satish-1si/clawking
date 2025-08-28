import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Play } from "lucide-react";
const Footer = () => {
  return <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Lucratech Private Limited</h3>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Revolutionizing entertainment by blending digital innovation with real-world excitement. We create immersive gameplay experiences that seamlessly bridge the gap between virtual fun and tangible rewards.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-orange-primary cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-orange-primary cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-orange-primary cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-orange-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-orange-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-orange-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-orange-primary transition-colors">Games</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-orange-primary transition-colors">Contact</Link></li>
              <li><Link to="https://www.clawking.in/" target="_blank" className="text-gray-400 hover:text-orange-primary transition-colors flex items-center">
                <Play className="h-4 w-4 mr-1" />
                Play Claw King
              </Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="h-6 w-6 text-orange-primary mt-1" />
                <span className="text-gray-400">contact@lucratechsol.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-6 w-6 text-orange-primary mt-1" />
                <span className="text-gray-400">+91 8008963337</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-16 w-16 text-orange-primary mt-1" />
                <span className="text-gray-400">Plot No.72, H. No.8-2-334/1, Road No.5, Opp. SBI Executive Enclave, Banjara Hills, Hyderabad-500034 Telangana, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2025 Lucratech Private Limited. All rights reserved. Revolutionizing entertainment, one game at a time.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;