import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Linkedin, Mail, Phone, Share2, ChevronLeft, ChevronRight } from 'lucide-react';

export default function SocialDock() {
  const [isOpen, setIsOpen] = useState(true);

  const socialLinks = [
    {
      id: 'whatsapp',
      name: 'WhatsApp Business',
      icon: <MessageCircle className="w-4 h-4" />,
      href: 'https://wa.me/9714500000',
      bgColor: 'hover:bg-[#25D366] hover:text-white hover:border-[#25D366]',
      color: 'text-[#25D366]',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn Enterprise',
      icon: <Linkedin className="w-4 h-4" />,
      href: 'https://linkedin.com/company/growinfinity',
      bgColor: 'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]',
      color: 'text-[#0A66C2]',
    },
    {
      id: 'phone',
      name: 'Direct Hotline',
      icon: <Phone className="w-4 h-4" />,
      href: 'tel:+9714500000',
      bgColor: 'hover:bg-[#0F4CFF] hover:text-white hover:border-[#0F4CFF]',
      color: 'text-[#0F4CFF]',
    },
    {
      id: 'email',
      name: 'Corporate Mail',
      icon: <Mail className="w-4 h-4" />,
      href: 'mailto:info@growinfinity.ae',
      bgColor: 'hover:bg-slate-900 hover:text-white hover:border-slate-900',
      color: 'text-slate-700',
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 group/dock" id="social-contact-dock">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
            transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
            className="flex items-center space-x-2 bg-white/80 backdrop-blur-xl p-2 rounded-2xl border border-white/40 shadow-premium relative"
          >
            {/* Subtle glow behind dock */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-md -z-10" />

            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                title={link.name}
                className={`relative w-10 h-10 rounded-xl flex items-center justify-center bg-white border border-slate-100 text-slate-500 transition-all duration-300 hover:shadow-lg ${link.bgColor} hover:-translate-y-1`}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-12 h-12 rounded-2xl bg-[#061A40] text-white flex items-center justify-center transition-all duration-300 shadow-[0_8px_30px_rgb(6,26,64,0.3)] hover:shadow-[0_8px_30px_rgb(15,76,255,0.4)] hover:bg-[#0F4CFF] hover:-translate-y-1 group"
        id="dock-toggle-btn"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 to-white/20 pointer-events-none" />
        {isOpen ? <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" /> : <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />}
      </button>
    </div>
  );
}
