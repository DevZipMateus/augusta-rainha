
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const WhatsAppButton = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMessage(prev => !prev);
    }, 5000); // Alterna a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const handleWhatsApp = () => {
    const message = "Olá! Gostaria de conhecer os artigos religiosos da Augusta Rainha.";
    const phone = "5519971476970";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex items-center gap-3">
      {/* Mensagem animada */}
      <div 
        className={`
          bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg whitespace-nowrap
          transition-all duration-500 ease-in-out
          ${showMessage ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}
        `}
      >
        Entre em contato
      </div>
      
      {/* Botão WhatsApp */}
      <Button
        onClick={handleWhatsApp}
        className="bg-transparent hover:bg-transparent p-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 rounded-full w-12 h-12 sm:w-16 sm:h-16"
        size="icon"
        title="Fale conosco no WhatsApp"
      >
        <img 
          src="/lovable-uploads/a30840db-1b03-484c-ad19-a1445cdfc60e.png" 
          alt="WhatsApp" 
          className="w-full h-full object-cover rounded-full"
        />
      </Button>
    </div>
  );
};

export default WhatsAppButton;
