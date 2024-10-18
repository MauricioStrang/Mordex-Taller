import "./globals.css";
import { Nunito_Sans } from 'next/font/google';
import Header from "@/components/header/header";

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-nunito-sans',
});

export const metadata = {
  title: "MordexFix",
  description: "MordexFix by Mauricio Strang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunitoSans.variable}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
