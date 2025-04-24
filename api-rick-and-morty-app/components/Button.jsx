import Link from 'next/link';

export default function Button({ children, onClick, href, className = '' }) {
  const base = 'px-4 py-2 rounded transition text-center';

  if (href) {
    return (
      <Link href={href} className={`${base} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${className}`}>
      {children}
    </button>
  );
}
