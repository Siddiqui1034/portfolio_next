import React from "react";

const WhatsApp = () => {
  const waLink =
    "https://wa.me/917376147918?text=Hello%20Nausheen,%20I%20would%20like%20to%20connect.";
  return (
    <div>
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        title="Chat on WhatsApp"
        className="hidden animate-bounce md:flex fixed bottom-8 right-8 w-14 h-14 bg-emerald-500 text-white rounded-full items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:scale-110 hover:shadow-[0_0_30px_rgba(16,185,129,0.7)] transition-all z-40"
      >
        <span className="text-2xl font-bold">
          <i className="ri-whatsapp-line text-4xl"></i>
        </span>
      </a>
    </div>
  );
};

export default WhatsApp;
