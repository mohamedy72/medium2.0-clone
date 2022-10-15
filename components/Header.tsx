import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between p-5">
      <nav className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src="https://links.papareact.com/yvf"
            alt="/"
          />
        </Link>
        <ul className="list-none hidden md:inline-flex items-center space-x-5">
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/follow">
              <a className="text-white bg-green-600 px-4 py-1 rounded-full">
                Follow
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center space-x-5 text-green-600">
        <Link href="/signin">
          <a>Sign in</a>
        </Link>
        <Link href="/getstarted">
          <a className="border px-4 py-1 rounded-full border-green-600">
            Get started
          </a>
        </Link>
      </div>
    </header>
  );
}

export default Header;
