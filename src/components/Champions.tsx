
export const Champions = () => {
  
  const contributors = [
    {
      name: "Thejas R",
      role: "Father of an infant child",
      contribution: "We thank our Pa Champion for his views on the initial design of the MaPaAurHum solution"
    },
    {
      name: "Simala Rawat",
      role: "Babysitter", 
      contribution: "We thank our Didi for views on usability of the solution"
    },
    {
      name: "Subhra Sarker",
      role: "Mother of a 9 yr old",
      contribution: "We thank our Ma Champion for views on the initial design of the MaPaAurHum solution"
    },
    {
      name: "Pooja Singh",
      role: "Mother of 2 kids",
      contribution: "We thank our Ma Champion for her views on the initial design of the MaPaAurHum solution"
    }
  ];


  return (
    <section id="champions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Thank You to Our Contributors</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're grateful to the parents and caregivers who helped shape MaPa-Aur-Hum with their valuable insights
          </p>
        </div>

        {/* Contributors innovative layout */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contributors.map((contributor, index) => (
            <div key={index} className="group relative">
              {/* Decorative element */}
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-primary-glow rounded-full"></div>
              
              {/* Quote-style design */}
              <div className="pl-8 py-6 bg-card/50 rounded-lg border-l-4 border-primary/20 hover:border-primary/40 transition-colors">
                {/* Large quote mark */}
                <div className="text-4xl text-primary/20 font-serif leading-none mb-2">"</div>
                
                {/* Content */}
                <div className="space-y-3">
                  <p className="text-muted-foreground text-sm leading-relaxed italic">
                    {contributor.contribution}
                  </p>
                  
                  {/* Attribution */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">
                        {contributor.name}
                      </h4>
                      <p className="text-primary text-sm font-medium">
                        {contributor.role}
                      </p>
                    </div>
                    
                    {/* Decorative accent */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-primary/40"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};