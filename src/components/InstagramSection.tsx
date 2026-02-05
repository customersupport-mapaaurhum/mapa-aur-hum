 import { memo } from "react";
 import { Instagram } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 export const InstagramSection = memo(() => {
   return (
     <section className="py-12 bg-gradient-to-br from-[#833AB4]/10 via-[#FD1D1D]/10 to-[#F77737]/10">
       <div className="container mx-auto px-4">
         <div className="text-center mb-6">
           <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
             Follow Us on Instagram
           </h2>
           <p className="text-base text-muted-foreground max-w-2xl mx-auto">
             Stay updated with parenting tips, app updates, and community stories
           </p>
         </div>
 
         <div className="flex flex-col items-center gap-6">
           {/* Instagram Profile Card */}
           <a
             href="https://instagram.com/mapaaurhum"
             target="_blank"
             rel="noopener noreferrer"
             className="group w-full max-w-md"
           >
             <div className="bg-card border border-border rounded-2xl p-6 shadow-elegant hover:shadow-warm transition-all duration-300 hover:scale-[1.02]">
               <div className="flex items-center gap-4">
                 <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center shrink-0">
                   <Instagram className="w-8 h-8 text-white" />
                 </div>
                 <div className="text-left">
                   <h3 className="text-lg font-bold text-foreground">@mapaaurhum</h3>
                   <p className="text-sm text-muted-foreground">
                     Daily parenting tips & caregiver insights
                   </p>
                 </div>
               </div>
               
               <div className="mt-4 pt-4 border-t border-border">
                 <Button 
                   variant="outline" 
                   className="w-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white border-0 hover:opacity-90 hover:text-white"
                 >
                   <Instagram className="w-4 h-4 mr-2" />
                   View Latest Posts
                 </Button>
               </div>
             </div>
           </a>
         </div>
       </div>
     </section>
   );
 });
 
 InstagramSection.displayName = "InstagramSection";