import React, { useEffect } from "react";

const MessengerChat = () => {
  useEffect(() => {
    // Check if the Facebook SDK is already present
    if (window.FB) {
      window.FB.XFBML.parse();
      return;
    }

    // Load the Facebook SDK dynamically
    const script = document.createElement("script");
    script.id = "facebook-jssdk";
    script.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
    script.async = true;
    script.onload = () => {
      window.FB.init({
        appId: "1131104729026921", // New Facebook App ID
        autoLogAppEvents: true,
        xfbml: true,
        version: "v10.0",
      });
      window.FB.XFBML.parse();
    };
    script.onerror = (error) => {
      console.error("Error loading the Facebook SDK:", error);
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div>
      {/* The Facebook Messenger chat widget */}
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id="576324402235215" // Your Facebook Page ID
        theme_color="#0084ff"
        logged_in_greeting="Hi! How can we help you?"
        logged_out_greeting="Goodbye! Come back soon."
      />
    </div>
  );
};

export default MessengerChat;
