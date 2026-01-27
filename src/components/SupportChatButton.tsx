import { memo } from "react";
import { MessageCircle, Instagram } from "lucide-react";

export const SupportChatButton = memo(() => {
  const phoneNumber = "917217615508";
  const message = "Hi! I need help with MaPa-Aur-Hum app.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed right-0 bottom-20 z-50 flex flex-col items-end gap-1">
      {/* Instagram Button */}
      <a
        href="https://instagram.com/mapaaurhum"
        target="_blank"
        rel="noopener noreferrer"
        title="Follow us on Instagram"
      >
        <div className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white px-2 py-1.5 rounded-l-xl shadow-xl flex items-center hover:pr-4 transition-all duration-300 group">
          <div className="bg-white/20 rounded-full p-1.5 group-hover:bg-white/30 transition-colors">
            <Instagram className="h-4 w-4" />
          </div>
        </div>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on WhatsApp"
      >
        <div className="bg-[#25D366] text-white px-2 py-1.5 rounded-l-xl shadow-xl flex items-center hover:pr-4 transition-all duration-300 group">
          <div className="bg-white/20 rounded-full p-1.5 group-hover:bg-white/30 transition-colors">
            <MessageCircle className="h-4 w-4" />
          </div>
        </div>
      </a>
    </div>
  );
});

SupportChatButton.displayName = "SupportChatButton";
