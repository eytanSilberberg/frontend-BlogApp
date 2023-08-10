// app/layout.tsx
import Header from "@/components/header";
import { ChakraUIProvider } from "@/components/chakraUIProvider";
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
          <ChakraUIProvider>
            <Header />
            {children}
            <Footer />
          </ChakraUIProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}