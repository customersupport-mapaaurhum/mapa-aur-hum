import { Card } from "@/components/ui/card";
import championAshish from "@/assets/champion-ashish.jpg";
import championPooja from "@/assets/champion-pooja.jpg";
import championThejas from "@/assets/champion-thejas.jpg";
import championSimala from "@/assets/champion-simala.jpg";
import championSubhra from "@/assets/champion-subhra.jpg";

export const Champions = () => {
  
  const contributors = [
    {
      name: "Thejas R",
      role: "Father of an infant child",
      image: championThejas,
      contribution: "Provided valuable insights on the initial design and father's perspective"
    },
    {
      name: "Simala Rawat",
      role: "Babysitter",
      image: championSimala,
      contribution: "Shared expertise on childcare practices and usability feedback"
    },
    {
      name: "Subhra Sarker",
      role: "Mother of a 9 yr old",
      image: championSubhra,
      contribution: "Contributed mother's perspective and design recommendations"
    },
    {
      name: "Pooja Singh",
      role: "Mother of 2 kids",
      image: championPooja,
      contribution: "Provided multi-child family insights and user experience feedback"
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

        {/* Contributors grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contributors.map((contributor, index) => (
            <Card key={index} className="p-6 text-center shadow-elegant border-border/50 hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-warm">
                <img 
                  src={contributor.image} 
                  alt={contributor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h4 className="text-lg font-semibold text-foreground mb-1">
                {contributor.name}
              </h4>
              <p className="text-primary text-sm font-medium mb-3">
                {contributor.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {contributor.contribution}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};