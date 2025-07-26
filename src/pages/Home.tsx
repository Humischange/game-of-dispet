import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CloudDivider from "@/components/ui/cloud-divider";
import { Button } from "@/components/ui/button";

const Home = () => {
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
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[500px]">
            <div className="text-white mb-8 lg:mb-0 lg:w-1/2">
              <div className="mb-4">
                <span className="text-warning text-sm font-bold bg-white/20 px-3 py-1 rounded-full">
                  Iskusi!
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                Prvi Dišpet
              </h1>
              <div className="text-xl lg:text-2xl mb-6">
                <div className="bg-accent text-accent-foreground px-4 py-2 rounded-lg inline-block">
                  03.02.2024
                </div>
                <div className="mt-2">
                  na terenima u<br />
                  Vukovarskoj
                </div>
              </div>
              
              {/* Countdown */}
              <div className="flex space-x-4 text-center mb-8">
                <div className="bg-white/20 rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">00</div>
                  <div className="text-sm">DANI</div>
                </div>
                <div className="bg-white/20 rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">00</div>
                  <div className="text-sm">SATI</div>
                </div>
                <div className="bg-white/20 rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">00</div>
                  <div className="text-sm">MINUTE</div>
                </div>
                <div className="bg-white/20 rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">00</div>
                  <div className="text-sm">SEKUNDE</div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="bg-white rounded-full p-8 max-w-md mx-auto relative">
                <img 
                  src="/dishpet_assets/roko_web.gif" 
                  alt="Dišpet Mascot" 
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute top-10 right-10 w-16 h-16">
                <img src="/dishpet_assets/element-66.svg" alt="" className="w-full h-full" />
              </div>
              <div className="absolute bottom-10 left-10 w-12 h-12">
                <img src="/dishpet_assets/element-68.svg" alt="" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
        
        <CloudDivider direction="bottom" />
      </section>

      {/* Sports Adventure Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                Sportska avantura za<br />
                najmlađe
              </h2>
              <p className="text-muted-foreground mb-6">
                Licitei nunc vulputate eu consequat malesuada lorem. Velit 
                augue mauris at feugiat dignissim ornare tellus odio. Vitae gravida 
                mattis pulvinar nec vel cras. Lacinia cursus pulvinar mauris lacinia 
                turpis augue tellus odio.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3">
                    <img src="/dishpet_assets/element-57.svg" alt="" className="w-full h-full" />
                  </div>
                  <p className="text-sm font-medium">Zabavni treninzi</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3">
                    <img src="/dishpet_assets/element-58.svg" alt="" className="w-full h-full" />
                  </div>
                  <p className="text-sm font-medium">Profesionalni treneri</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3">
                    <img src="/dishpet_assets/element-59.svg" alt="" className="w-full h-full" />
                  </div>
                  <p className="text-sm font-medium">Sigurno okruženje</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3">
                    <img src="/dishpet_assets/element-60.svg" alt="" className="w-full h-full" />
                  </div>
                  <p className="text-sm font-medium">Druženje i igra</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/dishpet_assets/dispet-108.jpg" 
                  alt="Kids playing" 
                  className="rounded-lg"
                />
                <img 
                  src="/dishpet_assets/dispet-109.jpg" 
                  alt="Sports activities" 
                  className="rounded-lg"
                />
                <img 
                  src="/dishpet_assets/dispet-131.jpg" 
                  alt="Fun games" 
                  className="rounded-lg"
                />
                <img 
                  src="/dishpet_assets/dispet-139.jpg" 
                  alt="Team activities" 
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/nasa-prica" className="group">
              <div className="w-32 h-32 bg-info rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                <span className="text-white text-xl font-bold">Naša<br />Priča</span>
              </div>
            </Link>
            <Link to="/zabava" className="group">
              <div className="w-32 h-32 bg-warning rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                <span className="text-warning-foreground text-xl font-bold">Zabava</span>
              </div>
            </Link>
            <Link to="/igraliste" className="group">
              <div className="w-32 h-32 bg-success rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                <span className="text-white text-xl font-bold">Igralište</span>
              </div>
            </Link>
            <Link to="/uzrast" className="group">
              <div className="w-32 h-32 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                <span className="text-white text-xl font-bold">3-8<br />Godina</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section 
        className="py-16 relative"
        style={{
          background: 'var(--gradient-primary)',
        }}
      >
        <CloudDivider direction="top" />
        
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between text-white">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold mb-4">Blog</h2>
              <h3 className="text-xl mb-6">Najnoviji članci za sve</h3>
              <p className="mb-6">
                Ostanite u toku sa najnovijim vestima, savetima i aktivnostima 
                na našem blogu.
              </p>
              <Button variant="secondary">
                Pročitaj Više
              </Button>
            </div>
            
            <div className="lg:w-1/2">
              <img 
                src="/dishpet_assets/roko_web.gif" 
                alt="Blog mascot" 
                className="h-32 mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;