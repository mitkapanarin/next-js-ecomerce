import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-gray-300">
          MyStore
        </Link>

        <nav className="flex space-x-4">
          <Link href="/tech" className="hover:text-gray-300">
            Tech
          </Link>
          <Link href="/clothes" className="hover:text-gray-300">
            Clothes
          </Link>
        </nav>

        <div>
          <Link href="/cart" className="hover:text-gray-300">
            Cart (0)
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
