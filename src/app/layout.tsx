import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AM AUTO — Garage Mécanique à Floirac",
  description: "Entretien, réparation et diagnostic de votre véhicule à Floirac. Prix transparents, service rapide, expertise technique.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18009548220"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-18009548220');

              // 1. Bouton Téléphone
              function gtag_report_phone_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                  'send_to': 'AW-18009548220/C17AC0bwxq8cELzLz4tD',
                  'value': 1.0,
                  'currency': 'EUR',
                  'event_callback': callback
                });
                return false;
              }
              window.gtag_report_phone_conversion = gtag_report_phone_conversion;

              // 2. Bouton WhatsApp
              function gtag_report_whatsapp_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                  'send_to': 'AW-18009548220/IqnBCOnwxq8cELzLz4tD',
                  'value': 1.0,
                  'currency': 'EUR',
                  'event_callback': callback
                });
                return false;
              }
              window.gtag_report_whatsapp_conversion = gtag_report_whatsapp_conversion;

              // 3. Formulaire de contact / lead
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                  'send_to': 'AW-18009548220/T7HTCOPwxq8cELzLz4tD',
                  'value': 1.0,
                  'currency': 'EUR',
                  'event_callback': callback
                });
                return false;
              }
              window.gtag_report_conversion = gtag_report_conversion;
              window.gtag_report_lead_conversion = gtag_report_conversion;

              if (typeof window !== 'undefined') {
                document.addEventListener('click', function(e) {
                  // Clic Téléphone
                  var telTarget = e.target && e.target.closest ? e.target.closest('a[href^="tel:"]') : null;
                  if (telTarget) {
                    gtag('event', 'conversion', {
                      'send_to': 'AW-18009548220/C17AC0bwxq8cELzLz4tD',
                      'value': 1.0,
                      'currency': 'EUR'
                    });
                  }

                  // Clic WhatsApp
                  var waTarget = e.target && e.target.closest ? e.target.closest('a[href*="whatsapp"], a[href*="wa.me"]') : null;
                  if (waTarget) {
                    gtag('event', 'conversion', {
                      'send_to': 'AW-18009548220/IqnBCOnwxq8cELzLz4tD',
                      'value': 1.0,
                      'currency': 'EUR'
                    });
                  }
                });

                // Envoi de formulaire de lead
                document.addEventListener('submit', function(e) {
                  gtag('event', 'conversion', {
                    'send_to': 'AW-18009548220/T7HTCOPwxq8cELzLz4tD',
                    'value': 1.0,
                    'currency': 'EUR'
                  });
                });
              }
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
