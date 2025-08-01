
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsApp = () => {
    const message = "Olá! Gostaria de conhecer os artigos religiosos da Augusta Rainha.";
    const phone = "5519971476970";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsApp}
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 p-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
      size="icon"
      title="Fale conosco no WhatsApp"
    >
      <MessageCircle size={20} className="sm:w-7 sm:h-7" />
    </Button>
  );
};

export default WhatsAppButton;
