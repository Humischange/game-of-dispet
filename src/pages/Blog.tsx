import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CloudDivider from "@/components/ui/cloud-divider";
import { Button } from "@/components/ui/button";

const Blog = () => {
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
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">Blog</h1>
              <nav className="text-white/80">
                <span>Home</span> &gt; <span>Blog</span>
              </nav>
            </div>
            
            <div className="hidden lg:block">
              <img 
                src="/dishpet_assets/contact-news-dispet.jpg" 
                alt="Kids playing" 
                className="rounded-lg max-h-64"
              />
            </div>
          </div>
        </div>
        
        <CloudDivider direction="bottom" />
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Blog Post */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src="/dishpet_assets/dispet-109.jpg" 
                    alt="Dišpet - Dan sporta i zabave za djecu"
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded">
                    <div className="text-xs">Decem</div>
                    <div className="text-xs">ber 29</div>
                    <div className="text-xs">2022</div>
                  </div>
                </div>
                
                <div className="md:w-2/3 p-8">
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    Dišpet – Dan sporta i zabave za djecu
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    „Nemoj sportu gušt sam, doći će igrati i mama cijeli dan!" 
                    davalarskim glasovima dogovaraju dobu, u kojemu su tehnologija i stalan 
                    posvet nesigurni do svakodnevnog života, suočavamo se s rastućim problemima 
                    smanjene tjelesne aktivnosti kod djece. Međutim, istovremeno s tim...
                  </p>
                  <Button variant="outline">
                    Read More
                  </Button>
                </div>
              </div>
            </article>

            {/* Pagination placeholder */}
            <div className="flex justify-center">
              <span className="text-muted-foreground">1 / 1</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;