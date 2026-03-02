import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Smartphone, PlayCircle, HelpCircle, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { OptimizedImage } from "@/components/OptimizedImage";
import qrCode from "@/assets/mapa-aur-hum-qr-code-download.jpeg";

const VALUE_PROPS = [
  "Plan & guide caregivers with image and audio support",
  "Build trust between parents and caregivers (maid, nanny, relatives)",
  "Reward points for caregivers, proactive planning for parents",
];

const DPIITBadge = memo(() => (
  <div className="inline-flex items-center gap-1.5 bg-primary/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/20">
    <span className="text-sm">🏅</span>
    <span className="font-semibold text-primary text-xs sm:text-sm">DPIIT Recognised Startup</span>
  </div>
));
DPIITBadge.displayName = "DPIITBadge";

const QRCard = memo(({ className = "" }: { className?: string }) => (
  <div className={`bg-card/80 backdrop-blur-sm p-5 rounded-2xl shadow-elegant border border-border/50 ${className}`}>
    <DPIITBadge />
    <div className="mt-4 bg-white p-3 rounded-xl mx-auto w-fit">
      <OptimizedImage
        src={qrCode}
        alt="QR code to download MaPa-Aur-Hum app"
        className="w-36 h-36 lg:w-44 lg:h-44 object-contain"
        width={176}
        height={176}
        priority
        sizes="(max-width: 1024px) 144px, 176px"
      />
    </div>
    <p className="text-muted-foreground text-center mt-3 font-medium text-xs">
      Scan to download from Google Play
    </p>
    <div className="flex flex-col gap-2 mt-4">
      <Button
        onClick={() => window.open('https://play.google.com/store/apps/details?id=com.mapaaurhum&pcampaignid=web_share', '_blank')}
        variant="default"
        size="default"
        className="w-full"
      >
        <Smartphone className="w-4 h-4" />
        Download App
      </Button>
      <Link to="/tutorials" className="w-full">
        <Button variant="outline" size="sm" className="w-full text-xs">
          <PlayCircle className="w-3 h-3" />
          Watch Tutorials
        </Button>
      </Link>
    </div>
  </div>
));
QRCard.displayName = "QRCard";

export const Hero = memo(() => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-28 lg:pt-32 pb-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Decorative blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Left — Content (takes 3 cols) */}
            <div className="lg:col-span-3 text-center lg:text-left space-y-6">
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
                <span className="text-primary">MaPa-Aur-Hum</span>
                <br />
                <span className="text-xl sm:text-2xl lg:text-4xl font-semibold text-foreground/80">
                  Building trust for better childcare
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
                India's first app that empowers working parents to manage childcare — even with changing or inexperienced caregivers.
              </p>

              {/* Value props */}
              <ul className="space-y-2.5 max-w-lg mx-auto lg:mx-0">
                {VALUE_PROPS.map((prop) => (
                  <li key={prop} className="flex items-start gap-2.5 text-sm sm:text-base text-foreground/80">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>{prop}</span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=com.mapaaurhum&pcampaignid=web_share', '_blank')}
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-base px-8 shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <Smartphone className="w-5 h-5" />
                  Install App Now
                </Button>
                <div className="flex gap-2 justify-center">
                  <Link to="/key-features">
                    <Button size="sm" variant="outline" className="text-xs sm:text-sm">
                      <Star className="w-3.5 h-3.5" />
                      Key Features
                    </Button>
                  </Link>
                  <Link to="/faq">
                    <Button size="sm" variant="outline" className="text-xs sm:text-sm">
                      <HelpCircle className="w-3.5 h-3.5" />
                      FAQs
                    </Button>
                  </Link>
                </div>
              </div>

              <p className="text-xs text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Meet the{" "}
                <Link to="/contributors" className="text-primary hover:underline font-medium">
                  parents and caregivers
                </Link>{" "}
                who helped shape MaPa-Aur-Hum. Available in English & Hindi for kids under 5.
              </p>
            </div>

            {/* Right — QR Card (takes 2 cols) */}
            <div className="lg:col-span-2 flex justify-center lg:justify-end">
              <QRCard className="w-full max-w-[280px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";
