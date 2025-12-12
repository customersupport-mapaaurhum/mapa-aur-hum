import { memo } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Trophy, Star } from "lucide-react";

export const AnnouncementTicker = memo(() => {
  return (
    <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white py-2 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
        {/* Repeat content for seamless loop */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-8 px-4">
            <Link to="/caregiver-game" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Sparkles className="w-4 h-4" />
              <span className="font-semibold">🎮 NEW: Play the Caregiver Detective Game!</span>
            </Link>
            <span className="text-white/60">•</span>
            <Link to="/caregiver-game" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Trophy className="w-4 h-4" />
              <span>Win a chance to be featured on our social media!</span>
            </Link>
            <span className="text-white/60">•</span>
            <Link to="/caregiver-game" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Star className="w-4 h-4" />
              <span>Share your parenting story & become a MaPa Champion!</span>
            </Link>
            <span className="text-white/60">•</span>
          </div>
        ))}
      </div>
    </div>
  );
});

AnnouncementTicker.displayName = "AnnouncementTicker";