import Image from "next/image";
import Link from "next/link";
import FeaturedProducts from "../featured-products";

export default function ProductsCategory() {
  const categories = [
    {
      name: "Sandalyeler",
      image: "/img/sehpa.jpg",
      path: "/categories/sandalyeler",
    },
    {
      name: "Yemek Masaları",
      image: "/img/traventer.png",
      path: "/categories/yemek-masalari",
    },
    { name: "Sehpalar", image: "/img/sehpa.jpg", path: "/categories/sehpalar" },
    { name: "Aynalar", image: "/img/sehpa.jpg", path: "/categories/aynalar" },
    { name: "Saatler", image: "/img/sehpa.jpg", path: "/categories/saatler" },
    { name: "Tablolar", image: "/img/sehpa.jpg", path: "/categories/tablolar" },
  ];

  return (
    <div className="products-page" id="products">
      <FeaturedProducts />
      <h2>Kategoriler</h2>
      <div className="product-grid">
        {categories.map((category, index) => (
          <Link key={index} href={category.path} passHref>
            <div className="product-card" style={{ cursor: "pointer" }}>
              <Image
                src={category.image}
                height={200}
                width={200}
                alt={category.name}
              />
              <h3>{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
