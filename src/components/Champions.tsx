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
    },
    {
      name: "Special thanks",
      city: "",
      role: "Pilot Builders",
      contribution: "Tithi Mandal, Nitya Venkataraman, Rakshit Kanwal, Sandesh Jaikrishan, Varun - for building the MaPa-Aur-Hum pilot and bringing this vision to life"
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
      </div>
    </section>
  );
};