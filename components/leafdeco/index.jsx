export function LeafDecoration({ className = "" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      <path d="M50 10C30 10 10 30 10 50C10 70 30 90 50 90C70 90 90 70 90 50C90 30 70 10 50 10ZM50 80C35 80 20 65 20 50C20 35 35 20 50 20C65 20 80 35 80 50C80 65 65 80 50 80Z" />
      <path d="M50 30C40 30 30 40 30 50C30 60 40 70 50 70C60 70 70 60 70 50C70 40 60 30 50 30ZM50 60C45 60 40 55 40 50C40 45 45 40 50 40C55 40 60 45 60 50C60 55 55 60 50 60Z" />
    </svg>
  );
}
