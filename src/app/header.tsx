import Link from "next/link";

export default function Header() {
  return (
    <header className="text-red-400 bg-neutral-300 flex justify-between">
      {/* For Logo */}

      <div>
        <h2 className="text-2xl font-bold p-5">My Website</h2>
        {/*         font size, font-family, padding      */}
      </div>

      {/* For Links  */}

      <nav>
        <ul className="flex gap-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About Us</Link>
          </li>
          <li>
            <Link href="/">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
};

// flex justify-between >>> jitna space add ho sakta hai ho jay ga.
// page.tsx use nahi hogi header.tsx wale concept me. bcz ye head pe ayga.
// like: food wwebsite templete
// hw. 1 page website + project previous class + presentation