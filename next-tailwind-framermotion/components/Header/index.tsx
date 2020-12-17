import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header 
      className="
        flex justify-center 
        md:justify-between py-2 
        md:py-4 items-center"
    >
      <Image src="/img/logo.svg" alt="Logo" width={150} height={33}/>

      <nav className="hidden md:block space-x-8">
        <Link href="/next.js">
          <a className="tracking-wide hover:text-gray-300">Next.JS</a>
        </Link>
        
        <Link href="/tailwind.js">
          <a className="tracking-wide hover:text-gray-300">Tailwind</a>
        </Link>

        <Link href="/framer-motion.js">
          <a className="tracking-wide hover:text-gray-300">Framer Motion</a>
        </Link>
      </nav>
    </header>
  );
}

export default Header;