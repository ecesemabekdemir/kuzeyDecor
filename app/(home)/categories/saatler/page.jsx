import { urunleriGetir } from "@/server/(action)/test";
import { useEffect } from "react";
export default function () {
  const { data, execute } = useServerAction(urunleriGetir);

  useEffect(() => {
    const fetchData = async () => {
      const [data, error] = await execute({
        urunKategorisi: "Saat",
      });
      if (error) {
        console.error("Error:", error);
      } else {
        console.log("Success:", data);
      }
    };
    fetchData();
  }, [execute]);
  return (
    <>
      {data?.data?.map((item) => (
        <div key={item.urunId}>
          <h2>{item.urunAdi}</h2>
          <p>{item.urunFiyati}</p>
          <p>{item.urunAciklamasi}</p>
          <img src={item.urunResmi} alt={item.urunAdi} />
        </div>
      ))}
    </>
  );
}
