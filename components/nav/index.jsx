import Link from "next/link";

export default function Nav() {
  return (
    <>
      <div className="nav">
        <div className="logo">Kuzeydecor</div>
        <ul className="nav-links">
          <li>
            <Link className="nav-link" href="/">
              Ana Sayfa
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/products">
              Koleksiyon
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/aboutpage">
              Hakkımızda
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/contactpage">
              İletişim
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
