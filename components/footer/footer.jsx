import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h4>Kuzeydecor</h4>
            <p>Sustainable furniture for conscious living.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link href="#">Collections</Link>
              </li>
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe to receive updates and exclusive offers.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer">
          <p>&copy; 2023 Kuzeydecor. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
