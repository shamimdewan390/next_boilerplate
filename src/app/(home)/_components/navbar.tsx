import { Logo } from "@/components/logo";
import { AUTH_ROUTES, USER_PUBLIC_ROUTES } from "@/routes";
import Link from "next/link";

const links = [
  {
    name: "Home",
    path: USER_PUBLIC_ROUTES.HOME,
    icon: "",
  },
  {
    name: "About",
    path: USER_PUBLIC_ROUTES.ABOUT,
    icon: "",
  },
  {
    name: "Contact",
    path: USER_PUBLIC_ROUTES.CONTACT,
    icon: "",
  },
  {
    name: "Login",
    path: AUTH_ROUTES.LOGIN,
    icon: "",
  },
];

export function Navbar() {
  return (
    <nav className="flex h-16 w-full items-center justify-between px-8">
      <div className="navbar__logo">
        <Logo />
      </div>
      <div className="flex gap-4">
        {links.map((link) => (
          <Link href={link.path} key={link.name} className="">
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
