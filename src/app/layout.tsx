"use client"

import "./globals.css";
import TRPCProvider from "./_trpc/providor";
import "@uploadthing/react/styles.css";
import { Toaster } from "@/components/ui/toaster";
import { Provider } from 'react-redux'
import { store } from "@/lib/app/store";
import 'react-modern-drawer/dist/index.css'
import ChartCheckout from "@/components/home/ChartCheckout";





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TRPCProvider>
        <Provider store={store}>
          <body className="w-screen h-screen">
            {children}
            <Toaster />
            <ChartCheckout/>
          </body>
        </Provider>
      </TRPCProvider>
    </html>
  );
}
