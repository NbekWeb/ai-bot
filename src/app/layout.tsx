import type { Metadata } from "next";
import "@/styles/index.css";
import { Poppins, Urbanist } from 'next/font/google'
import { AntdRegistry } from '@ant-design/nextjs-registry';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-urbanist',
})


export const metadata: Metadata = {
  title: "Ai bot",
  description: "Ai web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${urbanist.variable}  antialiased`}
      >
        <AntdRegistry>{children}</AntdRegistry>
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
      </body>
    </html>
  );
}
