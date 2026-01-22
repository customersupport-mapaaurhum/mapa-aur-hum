import { memo } from "react";
import { MessageCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SupportChatButton = memo(() => {
  return (
    <a
      href="https://chatgpt.com/g/g-697245a175508191a7d28124afe1569a-mapaaurhum-support-bot"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end"
    >
      <div className="bg-primary text-primary-foreground px-4 py-3 rounded-l-xl shadow-xl flex items-center gap-3 hover:pr-6 transition-all duration-300 group">
        <div className="flex flex-col items-start">
          <span className="text-xs font-medium opacity-90">Need Help?</span>
          <span className="text-sm font-bold whitespace-nowrap">MaPa Support</span>
        </div>
        <div className="bg-white/20 rounded-full p-2 group-hover:bg-white/30 transition-colors">
          <MessageCircle className="h-5 w-5" />
        </div>
      </div>
    </a>
  );
});

SupportChatButton.displayName = "SupportChatButton";
