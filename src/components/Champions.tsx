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
      role: "Contribution to the Pilot",
      contribution: "Tithi, Nitya, Rakshit, Sandesh, Varun - for bringing this vision to life"
    }
  ];


  return (
    <section id="champions" className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Thank You to Our Contributors</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            We're grateful to the parents and caregivers (maids, babysitters, relatives) who helped shape MaPa-Aur-Hum with their valuable insights
          </p>
        </div>

        {/* Contributors Carousel */}
        <Carousel className="w-full max-w-5xl mx-auto px-8">
          <CarouselContent className="ml-0">
            {contributors.map((contributor, index) => (
              <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="group relative h-full">
                  {/* Content design */}
                  <div className="p-4 bg-card rounded-lg border border-border/50 hover:border-primary/40 transition-colors h-full min-h-[200px]">
                    {/* Content */}
                    <div className="space-y-3">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {contributor.contribution}
                      </p>
                      
                      {/* Attribution */}
                      <div className="flex items-center justify-between pt-2 border-t border-border/30">
                        <div>
                          <h4 className="text-sm font-semibold text-foreground">
                            {contributor.name}
                          </h4>
                          {contributor.city && (
                            <p className="text-primary text-xs font-medium">
                              {contributor.city}
                            </p>
                          )}
                          <p className="text-muted-foreground text-xs">
                            {contributor.role}
                          </p>
                        </div>
                        
                        {/* Decorative accent */}
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full bg-primary/40"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4" />
          <CarouselNext className="-right-4" />
        </Carousel>
      </div>
    </section>
  );
};