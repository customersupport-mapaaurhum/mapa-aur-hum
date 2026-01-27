import { memo } from "react";
import { MessageCircle, Instagram } from "lucide-react";

export const SupportChatButton = memo(() => {
  const phoneNumber = "917217615508";
  const message = "Hi! I need help with MaPa-Aur-Hum app.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed right-0 bottom-20 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-50 flex flex-col items-end gap-1 md:gap-2">
      {/* Instagram Button */}
      <a
        href="https://instagram.com/mapaaurhum"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white px-2 py-1.5 md:px-4 md:py-3 rounded-l-xl shadow-xl flex items-center gap-2 md:gap-3 hover:pr-4 md:hover:pr-6 transition-all duration-300 group">
          <div className="hidden md:flex flex-col items-start">
            <span className="text-xs font-medium opacity-90">Follow Us</span>
            <span className="text-sm font-bold whitespace-nowrap">Instagram</span>
          </div>
          <div className="bg-white/20 rounded-full p-1.5 md:p-2 group-hover:bg-white/30 transition-colors">
            <Instagram className="h-4 w-4 md:h-5 md:w-5" />
          </div>
        </div>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="bg-[#25D366] text-white px-2 py-1.5 md:px-4 md:py-3 rounded-l-xl shadow-xl flex items-center gap-2 md:gap-3 hover:pr-4 md:hover:pr-6 transition-all duration-300 group">
          <div className="hidden md:flex flex-col items-start">
            <span className="text-xs font-medium opacity-90">Need Help?</span>
            <span className="text-sm font-bold whitespace-nowrap">WhatsApp Us</span>
          </div>
          <div className="bg-white/20 rounded-full p-1.5 md:p-2 group-hover:bg-white/30 transition-colors">
            <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
          </div>
        </div>
      </a>
    </div>
  );
});

SupportChatButton.displayName = "SupportChatButton";
