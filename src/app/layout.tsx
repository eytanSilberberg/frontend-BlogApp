// app/layout.tsx
import Header from "@/components/header";
import { Providers } from "@/components/providers";
import Footer from "@/components/footer";
import { ReduxProvider } from "@/redux/provider";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | DailyTechBytes',
    default: 'DailyTechBytes',

  },
  description: 'DailyTechBytes is a blog about technology, programming, and other things.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="app-layout">
        <ReduxProvider>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </ReduxProvider>
      </body>
    </html>
  );
}