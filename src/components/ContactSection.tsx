import { useState } from "react";
import { Mail, MapPin, Phone, Copy, Check } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const phoneNumber = "+62 21 1234 5678";
  const email = "info@izbiken.co.id";

  const copyToClipboard = async (text: string, type: "phone" | "email") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "phone") {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
        toast.success("Nomor HP berhasil disalin!");
      } else {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
        toast.success("Email berhasil disalin!");
      }
    } catch (err) {
      toast.error("Gagal menyalin ke clipboard");
    }
  };

  return (
    <section id="contact" className="bg-premium-black text-premium-white py-24 relative overflow-hidden scroll-mt-20">
      {/* Ambient glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-[120px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Title */}
          <div className="text-center space-y-4 animate-fade-up">
            <h2 className="text-5xl font-bold mb-4">
              Contact <span className="text-primary text-glow">Us</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto shadow-glow-strong"></div>
          </div>
          
          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
            {/* Company Info Card */}
            <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-primary mb-2 text-xl">PT. Izbiken Matahari Abadi</h3>
                  <p className="text-premium-white/80 leading-relaxed">
                    Jl. Industri Raya No. 123<br />
                    Kawasan Industri Jababeka<br />
                    Cikarang, Bekasi 17530<br />
                    Indonesia
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Details Cards */}
            <div className="space-y-6">
              <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-bold text-primary mb-1">Phone</h3>
                      <p className="text-premium-white/90">{phoneNumber}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(phoneNumber, "phone")}
                    className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110 flex-shrink-0 group"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? (
                      <Check className="w-5 h-5 text-green-400" />
                    ) : (
                      <Copy className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    )}
                  </button>
                </div>
              </div>
              
              <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-bold text-primary mb-1">Email</h3>
                      <p className="text-premium-white/90 break-all">{email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(email, "email")}
                    className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110 flex-shrink-0 group"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? (
                      <Check className="w-5 h-5 text-green-400" />
                    ) : (
                      <Copy className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quote Card */}
          <div className="animate-fade-in">
            <div className="backdrop-blur-sm bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-10 rounded-2xl border border-primary/30 shadow-glow">
              <blockquote className="text-2xl italic text-primary font-light tracking-wide leading-relaxed text-center border-l-4 border-primary pl-6">
                "Delivering the best engine performance with precision and quality."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
