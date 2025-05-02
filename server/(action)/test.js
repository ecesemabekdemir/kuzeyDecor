"use server";

import { createServerAction } from "zsa";
import z from "zod";
import { db } from "../src";
import { urun } from "../src/db/schema";
import { eq } from "drizzle-orm";

export const urunEkle = createServerAction()
  .input(
    z.object({
      urunAdi: z.string(),
      urunFiyati: z.string(),
      urunAciklamasi: z.string(),
      urunStok: z.string(),
      urunResmi: z.string(),
      urunKategorisi: z.string(),
    })
  )
  .handler(async ({ input }) => {
    console.log("Input:", input);

    const newUrun = await db.insert(urun).values({
      urunAdi: input.urunAdi,
      urunFiyati: input.urunFiyati,
      urunAciklamasi: input.urunAciklamasi,
      urunStok: input.urunStok,
      urunResmi: input.urunResmi,
      urunKategorisi: input.urunKategorisi,
    });

    if (newUrun.rowsAffected === 0) {
      throw new Error("Ürün eklenemedi");
    }

    return {
      success: true,
      message: "Ürün başarıyla eklendi",
    };
  });

export const urunleriGetir = createServerAction()
  .input(
    z.object({
      urunKategorisi: z.string().optional(),
      urunId: z.string().optional(),
    })
  )
  .handler(async ({ input }) => {
    console.log("Input:", input);
    let urunler;

    try {
      if (input.urunKategorisi) {
        urunler = await db.query.urun.findMany({
          where: eq(urun.urunKategorisi, input.urunKategorisi),
        });
      }

      if (input.urunId) {
        urunler = await db.query.urun.findMany({
          where: eq(urun.urunId, input.urunId),
        });
      }

      const result = await urunler;

      return {
        success: true,
        data: result,
      };
    } catch (error) {
      console.error("Error:", error);
      return {
        success: false,
        message: "Ürünler getirilemedi",
      };
    }
  });
