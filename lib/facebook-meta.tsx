"use client";
import { useEffect } from "react";
import Script from "next/script";

const META_PIXEL_ID = "673382505094269"; // Substitua pelo seu ID real

export default function MetaPixel() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.fbq = window.fbq || function () {
        (window.fbq as any).callMethod
          ? (window.fbq as any).callMethod.apply(window.fbq, arguments)
          : (window.fbq as any).queue.push(arguments);
      };
      window.fbq.push = window.fbq;
      window.fbq.loaded = true;
      window.fbq.version = "2.0";
      window.fbq.queue = [];
      window.fbq("init", META_PIXEL_ID);
      window.fbq("track", "PageView");
    }
  }, []);

  return (
    <>
      {/* Meta Pixel Script */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      {/* NoScript Backup */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
