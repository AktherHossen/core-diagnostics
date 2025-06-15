
import React from "react";

const WHATSAPP_PHONE = "15551234567"; // Update with your WhatsApp number, digits only

const WhatsappWidget = () => {
  const handleClick = () => {
    window.open(
      `https://wa.me/${WHATSAPP_PHONE}?text=Hi!%20I%20want%20to%20book%20an%20appointment.`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed z-40 bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-all focus:outline-none"
      title="Chat with us on WhatsApp"
      aria-label="WhatsApp chat"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} fill="none" viewBox="0 0 24 24">
        <g>
          <circle cx="12" cy="12" r="12" fill="#25D366"/>
          <path fill="#fff" d="M17 14.2c-.3-.1-1.7-.8-1.9-.9-.2-.1-.3-.2-.5 0-.2.2-.5.6-.7.8-.1.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.6-.9-.9-1.6-2-1.8-2.3-.1-.3 0-.5.1-.6.2-.1.2-.3.3-.4.1-.1.1-.2.2-.3.1-.1 0-.3 0-.5 0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.1 0-.3 0-.5.2-.2.2-.8.8-.8 1.9 0 1 .5 2 .7 2.3 0 0 2 4.2 6.5 4.3.8 0 1.8-.3 1.9-.6.1-.3.9-1.2.9-1.5 0-.2-.3-.2-.5-.3z"/>
        </g>
      </svg>
      <span className="hidden md:inline ml-2 font-semibold">Chat with us</span>
    </button>
  );
};

export default WhatsappWidget;
