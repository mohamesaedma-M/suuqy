
import Link from "next/link";
import {
  Search,
  UserRound,
  ShoppingBag,
  Menu,
} from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/products" },
  { label: "Categories", href: "/categories" },
  { label: "About", href: "/about" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="container">
        <div className="h-[76px] flex items-center justify-between gap-6">

          {/* Brand */}
          <Link href="/" className="shrink-0">
            <span className="text-[27px] font-extrabold tracking-[-1.5px] text-navy">
              SUUQY<span className="text-blue-500">.</span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground/75 hover:text-navy transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Search and actions */}
          <div className="flex items-center gap-5">

            <Link
              href="/search"
              aria-label="Search products"
              className="text-navy hover:text-blue-600 transition-colors"
            >
              <Search size={21} strokeWidth={1.7} />
            </Link>

            <Link
              href="/account"
              aria-label="My account"
              className="hidden sm:block text-navy hover:text-blue-600 transition-colors"
            >
              <UserRound size={21} strokeWidth={1.7} />
            </Link>

            <Link
              href="/cart"
              aria-label="Shopping cart"
              className="text-navy hover:text-blue-600 transition-colors"
            >
              <ShoppingBag size={21} strokeWidth={1.7} />
            </Link>

            {/* Mobile menu icon */}
            <button
              type="button"
              aria-label="Open navigation menu"
              className="md:hidden text-navy"
            >
              <Menu size={23} strokeWidth={1.7} />
            </button>

          </div>
        </div>
      </div>
    </header>
  );
}
