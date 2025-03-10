export default function Contact() {
  return (
    <>
      <div className="contact">
        <h2>Bize Ulaşın</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}
