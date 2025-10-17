import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import ClientLayout from './ClientLayout';
import Script from 'next/script';

export const metadata = {
  title: 'NextCart',
  description: 'A demo store built with Next.js and Redux',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Use Next.js Script component for proper loading */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ENjdO4Dr2bkBIFxQpeoYz1F1LGjzvGqDk3PZ6pGx5xq1p1g1zVf5z9F5z9F5z9F5"
          crossOrigin="anonymous"
          strategy="beforeInteractive" // ensures Bootstrap JS loads before page scripts
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
