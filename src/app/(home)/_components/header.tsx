import { Navbar } from "./navbar";

export function Header() {
  return (
    <div className="sticky inset-x-0 top-0 z-50 h-16 bg-white">
      <header className="relative bg-white">
        <div className="border-b border-gray-200">
          <Navbar />
        </div>
      </header>
    </div>
  );
}
