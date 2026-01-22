import { memo } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SupportChatButton = memo(() => {
  return (
    <a
      href="https://chatgpt.com/g/g-697245a175508191a7d28124afe1569a-mapaaurhum-support-bot"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        size="lg"
        className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 bg-primary hover:bg-primary/90"
        aria-label="Open support chat"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </a>
  );
});

SupportChatButton.displayName = "SupportChatButton";
