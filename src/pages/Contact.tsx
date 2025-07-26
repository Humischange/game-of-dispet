import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CloudDivider from "@/components/ui/cloud-divider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative pt-20 pb-24 overflow-hidden"
        style={{
          background: 'var(--gradient-hero)',
        }}
      >
        <div className="container relative z-10">
          <div className="flex items-center justify-between text-white">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">Kontakt</h1>
              <nav className="text-white/80">
                <span>Home</span> &gt; <span>Kontakt</span>
              </nav>
            </div>
            
            <div className="hidden lg:block">
              <img 
                src="/dishpet_assets/contact-header-dispet.jpg" 
                alt="Contact us" 
                className="rounded-lg max-h-64"
              />
            </div>
          </div>
        </div>
        
        <CloudDivider direction="bottom" />
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Telefon</h3>
              <p className="text-muted-foreground">
                +385 99 341 3597 / +385 98 447 690
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
              <p className="text-muted-foreground">
                info@dispet.fun
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Adresa</h3>
              <p className="text-muted-foreground">
                Oskovorska 3a
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">
                Javite nam se
              </h2>
              <h3 className="text-xl font-bold text-foreground mb-6">
                Kontakt formular
              </h3>
              
              <form className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Input
                    placeholder="Your Email ID"
                    type="email"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Input
                    placeholder="Subject"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Input
                    placeholder="Contact Number"
                    type="tel"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder="Message"
                    rows={5}
                    className="w-full"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8"
                >
                  Send Message
                </Button>
              </form>
            </div>
            
            <div className="relative">
              <img 
                src="/dishpet_assets/roko_web.gif" 
                alt="Contact mascot" 
                className="max-w-sm mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <img 
                src="/dishpet_assets/element-61.svg" 
                alt="" 
                className="w-16 h-16 mx-auto mb-4"
              />
              <h2 className="text-2xl font-bold text-primary mb-2">
                Budite u toku
              </h2>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Pretplatite se na naš Newsletter
              </h3>
            </div>
            
            <div className="flex max-w-md mx-auto">
              <Input
                placeholder="Your Mail Address Here"
                className="rounded-r-none"
              />
              <Button 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-l-none"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;