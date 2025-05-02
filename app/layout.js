"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { urunEkle, urunleriGetir } from "@/server/(action)/test";
import { useServerAction } from "zsa-react";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [sehpalar, setSehpalar] = useState();
  const [sandalyeler, setSandalyeler] = useState();
  const { data, execute } = useServerAction(urunEkle);
  const {
    data: urunler,
    error,
    execute: urunGetir,
  } = useServerAction(urunleriGetir);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const input = {
      urunAdi: formData.get("urunAdi"),
      urunFiyati: formData.get("urunFiyati"),
      urunAciklamasi: formData.get("urunAciklamasi"),
      urunStok: formData.get("urunStok"),
      urunResmi: formData.get("urunResmi"),
      urunKategorisi: formData.get("urunKategorisi"),
    };
    console.log("Input:", input);
    const [data, error] = await execute(input);
    if (error) {
      console.error("Error:", error);
    } else {
      console.log("Success:", data);
    }
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <form onSubmit={handleSubmit}>
          <input type="text" name="urunAdi" placeholder="Ürün Adı" required />
          <input
            type="number"
            name="urunFiyati"
            placeholder="Ürün Fiyatı"
            required
          />
          <input
            type="text"
            name="urunAciklamasi"
            placeholder="Ürün Açıklaması"
            required
          />
          <input
            type="number"
            name="urunStok"
            placeholder="Ürün Stok"
            required
          />
          <input
            type="text"
            name="urunResmi"
            placeholder="Ürün Resmi URL"
            required
          />
          <input
            type="text"
            name="urunKategorisi"
            placeholder="Ürün Kategorisi"
            required
          />
          <button type="submit">Ürünü Ekle</button>
        </form>
        
        {sehpalar}
        <button
          onClick={async () => {
            const [urunler, error] = await urunGetir({
              urunKategorisi: "sandalye",
            });
            if (error) {
              console.error("Error:", error);
            } else {
              console.log("Ürünler:", urunler);
              setSandalyeler(urunler.data[0].urunAdi);
            }
          }}
        >
          sandalyeleri Getir
        </button>
        {sandalyeler}
        {/* <div className="container">
          <Header />
          {children}
          <Footer />
        </div> */}
      </body>
    </html>
  );
}
