import { int, sqliteTable } from "drizzle-orm/sqlite-core";
import { id, string } from "../types";

export const urun = sqliteTable(
  "urunler",
  {
    urunId: id,
    urunAdi: string("urun_adi").notNull(),
    urunFiyati: string("urun_fiyati"),
    urunAciklamasi: string("urun_aciklamasi"),
    urunStok: string("urun_stok"),
    urunResmi: string("urun_resmi"),
    urunKategorisi: string("urun_kategorisi"),
  },
  (t) => []
);
