// app/layout.tsx
import Header from "@/components/header";
import { Providers } from "@/components/providers";
import Footer from "@/components/footer";
import { ReduxProvider } from "@/redux/provider";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
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