import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const Champions = () => {
  
  const contributors = [
    {
      name: "Thejas R",
      city: "Bangalore",
      role: "Father of an infant child",
      contribution: "We thank our Pa Champion for his views on the initial design of the MaPa-Aur-Hum solution"
    },
    {
      name: "Subhra Sarker",
      city: "Delhi",
      role: "Mother of a 9 yr old",
      contribution: "We thank our Ma Champion for views on the initial design of the MaPa-Aur-Hum solution"
    },
    {
      name: "Simala Rawat",
      city: "Delhi",
      role: "Babysitter", 
      contribution: "We thank our Didi for views on usability of the solution"
    },
    {
      name: "Pooja Singh",
      city: "Gurgaon",
      role: "Mother of 2 kids",
      contribution: "We thank our Ma Champion for her views on the initial design of the MaPa-Aur-Hum solution"
    },
    {
      name: "Ashish Bansal",
      city: "Gurgaon",
      role: "Father of 2 kids",
      contribution: "We thank our Pa Champion for her views on the initial design of the MaPa-Aur-Hum solution"
    }
  ];


  return (
    <section id="champions" className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Thank You to Our Contributors</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            We're grateful to the parents and caregivers who helped shape MaPa-Aur-Hum with their valuable insights
          </p>
        </div>

        {/* Contributors Carousel */}
        <Carousel className="w-full mx-auto">
          <CarouselContent className="-ml-1">
            {contributors.map((contributor, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/3 lg:basis-1/4">
                <div className="group relative h-full">
                  {/* Decorative element */}
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-primary-glow rounded-full"></div>
                  
                  {/* Content design */}
                  <div className="pl-8 py-4 bg-card/50 rounded-lg border-l-4 border-primary/20 hover:border-primary/40 transition-colors h-full min-h-[220px]">
                    {/* Content */}
                    <div className="space-y-2">
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {contributor.contribution}
                      </p>
                      
                      {/* Attribution */}
                       <div className="flex items-center justify-between">
                         <div>
                           <h4 className="text-sm font-semibold text-foreground">
                             {contributor.name}
                           </h4>
                           <p className="text-primary text-xs font-medium">
                             {contributor.city}
                           </p>
                           <p className="text-muted-foreground text-xs">
                             {contributor.role}
                           </p>
                         </div>
                        
                        {/* Decorative accent */}
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full bg-primary/40"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>

        {/* Thank You Card for Pilot Builders */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 via-background to-primary-glow/10 border border-primary/20 p-8 shadow-elegant">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-glow/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Special Thanks</h3>
                <p className="text-muted-foreground">
                  To the amazing team who built the MaPa-Aur-Hum pilot
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                {["Tithi Mandal", "Nitya Venkataraman", "Rakshit Kanwal", "Sandesh Jaikrishan", "Varun"].map((name, index) => (
                  <div 
                    key={index}
                    className="px-4 py-2 bg-card/80 backdrop-blur-sm rounded-lg border border-primary/10 hover:border-primary/30 transition-colors"
                  >
                    <p className="text-foreground font-medium">{name}</p>
                  </div>
                ))}
              </div>
              
              <p className="text-center text-muted-foreground mt-6 text-sm">
                Your dedication and hard work brought this vision to life 🙏
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};