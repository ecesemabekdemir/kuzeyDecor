import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <h1>Kuzey Decor'a Hoş Geldiniz</h1>
        <p>
          Zarif yemek masası, sandalye ve ev aksesuarları koleksiyonumuzu
          keşfedin.
        </p>
        <Link href="/products" className="cta-button">
          Koleksiyonu Keşfedin
        </Link>
        <div className="leaf-decoration left"></div>
        <div className="leaf-decoration right"></div>
      </section>
    </>
  );
}
