import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import championAshish from "@/assets/champion-ashish.jpg";
import championPooja from "@/assets/champion-pooja.jpg";
import championThejas from "@/assets/champion-thejas.jpg";
import championSimala from "@/assets/champion-simala.jpg";
import championSubhra from "@/assets/champion-subhra.jpg";

export const Champions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const champions = [
    {
      name: "Ashish Bansal",
      role: "Father of 2 young children",
      image: championAshish,
      testimonial: "We thank our Pa Champion for his views on the initial design of the MaPaAurHum solution",
      type: "Pa Champion"
    },
    {
      name: "Pooja Singh", 
      role: "Mother of 2 kids",
      image: championPooja,
      testimonial: "We thank our Ma Champion for her views on the initial design of the MaPaAurHum solution",
      type: "Ma Champion"
    },
    {
      name: "Thejas R",
      role: "Father of an infant child", 
      image: championThejas,
      testimonial: "We thank our Pa Champion for his views on the initial design of the MaPaAurHum solution",
      type: "Pa Champion"
    },
    {
      name: "Simala Rawat",
      role: "Babysitter",
      image: championSimala, 
      testimonial: "We thank our Didi for views on usability of the solution",
      type: "Didi Champion"
    },
    {
      name: "Subhra Sarker",
      role: "Mother of a 9 yr old",
      image: championSubhra,
      testimonial: "We thank our Ma Champion for views on the initial design of the MaPaAurHum solution", 
      type: "Ma Champion"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % champions.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + champions.length) % champions.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="champions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">MaPa-Aur-Hum Champions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real families who helped shape our solution
          </p>
        </div>

        {/* Main carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="p-8 lg:p-12 border-border/50 shadow-elegant overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Champion image */}
              <div className="text-center">
                <div className="relative inline-block">
                  <img 
                    src={champions[currentIndex].image} 
                    alt={champions[currentIndex].name}
                    className="w-64 h-64 rounded-2xl object-cover mx-auto shadow-warm"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-warm rounded-full p-2">
                    <Quote className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Champion content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1 mb-4">
                  <span className="text-primary text-sm font-medium">{champions[currentIndex].type}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {champions[currentIndex].name}
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  {champions[currentIndex].role}
                </p>
                
                <blockquote className="text-lg text-foreground italic leading-relaxed">
                  "{champions[currentIndex].testimonial}"
                </blockquote>
              </div>
            </div>
          </Card>

          {/* Navigation buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background shadow-elegant"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background shadow-elegant"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {champions.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Thumbnail grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12 max-w-4xl mx-auto">
          {champions.map((champion, index) => (
            <Card 
              key={index}
              onClick={() => goToSlide(index)}
              className={`p-3 cursor-pointer transition-all duration-300 border-border/50 hover:shadow-elegant ${
                index === currentIndex ? 'ring-2 ring-primary' : ''
              }`}
            >
              <img 
                src={champion.image} 
                alt={champion.name}
                className="w-full h-20 object-cover rounded-lg mb-2"
              />
              <p className="text-xs font-medium text-foreground text-center truncate">
                {champion.name}
              </p>
              <p className="text-xs text-muted-foreground text-center truncate">
                {champion.type}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};