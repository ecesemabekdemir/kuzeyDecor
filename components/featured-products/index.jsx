import Image from "next/image";

export default function FeaturedProducts() {
  const products = [
    { name: "Natural Oak Chair", price: "$299" },
    { name: "Eco-Friendly Sofa", price: "$899" },
    { name: "Bamboo Coffee Table", price: "$399" },
    { name: "Modern Bookshelf", price: "$499" },
    { name: "Elegant Floor Lamp", price: "$199" },
    { name: "Classic Wooden Desk", price: "$599" },
    { name: "Minimalist Bed Frame", price: "$799" },
    { name: "Vintage Armchair", price: "$349" },
  ];

  // Rastgele 3 ürün seçme fonksiyonu
  const getRandomProducts = () => {
    return [...products].sort(() => 0.5 - Math.random()).slice(0, 3);
  };

  const randomProducts = getRandomProducts();

  return (
    <section className="featured-products">
      <h2>Featured Pieces</h2>
      <div className="product-grid">
        {randomProducts.map((product, index) => (
          <div className="product-card" key={index}>
            <Image
              className="product-image"
              src="/img/sehpa.jpg"
              alt={product.name}
              width={450}
              height={450}
              priority
            />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
