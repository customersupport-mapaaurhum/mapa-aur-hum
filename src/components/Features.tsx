import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ZoomIn } from "lucide-react";
import { useState } from "react";

// Feature images
import featureRoutine from "@/assets/feature-routine.png";
import featureHealth from "@/assets/feature-health.png";
import featureScreentime from "@/assets/feature-screentime.png";
import featureFood from "@/assets/feature-food.png";
import featureVideo from "@/assets/feature-video.png";
import featureStreamlined from "@/assets/feature-streamlined.png";
import featureReadiness from "@/assets/feature-readiness.png";
import featureInsights from "@/assets/feature-insights.png";
import featureFoodplans from "@/assets/feature-foodplans.png";
import featureEmergencies from "@/assets/feature-emergencies.png";

export const Features = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const featureImages = [
    {
      src: featureRoutine,
      alt: "MaPa-Aur-Hum routine management screen showing daily childcare tasks with audio guidance for caregivers",
      title: "Routine Management"
    },
    {
      src: featureHealth,
      alt: "Health emergency preparedness interface with medicine plans and visual aids for child safety",
      title: "Health Emergency Preparedness"
    },
    {
      src: featureScreentime,
      alt: "Screen time management dashboard tracking children's device usage for healthy digital balance",
      title: "Screen Time Management"
    },
    {
      src: featureFood,
      alt: "Food plan management system with meal scheduling and audio instructions for Indian families",
      title: "Food Plan Management"
    },
    {
      src: featureStreamlined,
      alt: "Streamlined childcare interface showing task notifications and activity tracking for babysitters",
      title: "Streamlined Care"
    },
    {
      src: featureReadiness,
      alt: "Emergency readiness dashboard with medicine plans and alert system for child safety",
      title: "Emergency Readiness"
    },
    {
      src: featureInsights,
      alt: "Weekly childcare insights and reports providing actionable data for better parenting decisions",
      title: "Weekly Insights"
    },
    {
      src: featureFoodplans,
      alt: "Comprehensive food plan database with nutritional guidance for Indian children's meal planning",
      title: "Food Plans"
    },
    {
      src: featureEmergencies,
      alt: "Emergency management system with first aid guides and video calling for immediate childcare support",
      title: "Emergency Support"
    }
  ];

  return (
    <section id="features" className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Key Features</h2>
        </div>

        {/* Features Image Carousel */}
        <div className="w-full">
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {featureImages.map((image, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-0 shadow-trust">
                    <div className="relative group cursor-pointer" onClick={() => setSelectedImage(image.src)}>
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full min-h-[600px] h-auto object-contain rounded-lg transition-all duration-300 group-hover:scale-105"
                        loading="lazy"
                        width="400"
                        height="600"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                          <ZoomIn className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                          <h4 className="text-white font-medium text-sm">{image.title}</h4>
                        </div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        {/* Image Zoom Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-6xl max-h-[95vh] p-4">
            {selectedImage && (
              <div className="flex items-center justify-center">
                <img 
                  src={selectedImage} 
                  alt="Detailed view of MaPa-Aur-Hum childcare app feature for better understanding"
                  className="w-full h-auto rounded-lg shadow-elegant"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>

      </div>
    </section>
  );
};