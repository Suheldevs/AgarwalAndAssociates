import React, { useState } from "react";

const CookieBanner = () => {
  const [consentGiven, setConsentGiven] = useState(false);

  const giveConsent = () => {
    setConsentGiven(true);
    console.log("Cookie consent given");
    // You can call your getUserMeta() and set cookie here
  };

  const declineConsent = () => {
    setConsentGiven(true);
    console.log("Cookie consent declined");
  };

  if (consentGiven) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50">
      <div className="bg-white/90 backdrop-blur-md shadow-xl border-t border-gray-200 px-4 py-3 sm:px-6 sm:py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        {/* Message */}
        <div className="text-gray-800 text-sm sm:text-base max-w-3xl mb-2 sm:mb-0">
          <p>
            We use cookies to enhance your experience, analyze site traffic, and serve personalized content.{" "}
            <span className="underline cursor-pointer hover:text-blue-600">Learn more</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 shrink-0">
          <button
            onClick={declineConsent}
            className="bg-gray-200 text-gray-800 hover:bg-gray-300 text-sm px-4 py-1.5 rounded-md transition-colors"
          >
            Decline
          </button>
          <button
            onClick={giveConsent}
            className="bg-blue-600 text-white hover:bg-blue-700 text-sm px-4 py-1.5 rounded-md transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
