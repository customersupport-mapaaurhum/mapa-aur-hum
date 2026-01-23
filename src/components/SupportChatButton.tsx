import { memo } from "react";
import { MessageCircle } from "lucide-react";

export const SupportChatButton = memo(() => {
  const phoneNumber = "917217615508";
  const message = "Hi! I need help with MaPa-Aur-Hum app.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end"
    >
      <div className="bg-[#25D366] text-white px-4 py-3 rounded-l-xl shadow-xl flex items-center gap-3 hover:pr-6 transition-all duration-300 group">
        <div className="flex flex-col items-start">
          <span className="text-xs font-medium opacity-90">Need Help?</span>
          <span className="text-sm font-bold whitespace-nowrap">WhatsApp Us</span>
        </div>
        <div className="bg-white/20 rounded-full p-2 group-hover:bg-white/30 transition-colors">
          <MessageCircle className="h-5 w-5" />
        </div>
      </div>
    </a>
  );
});

SupportChatButton.displayName = "SupportChatButton";
