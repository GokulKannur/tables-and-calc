"use client";

import Script from 'next/script';

const GoogleAnalytics = () => {
  // ✨ Your Measurement ID has been added here
  const measurementId = "G-S4DT08KX4V"; 

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}');
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;