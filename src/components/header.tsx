import Image from "next/image";
import Link from "next/link";
import { LiaGamepadSolid } from "react-icons/lia";

export default async function Header() {
  return (
    <header className="w-full h-24 bg-slate-100 border-b border-slate-200 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-24">
        <nav className="flex items-center gap-6">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo do site"
              quality={80}
              width={168}
              height={39}
              priority
              className="w-auto"
            />
          </Link>

          <Link
            href="/"
            className="text-sm font-medium text-slate-700 transition-colors hover:text-black"
          >
            Games
          </Link>

          <Link
            href="/profile"
            className="text-sm font-medium text-slate-700 transition-colors hover:text-black"
          >
            Perfil
          </Link>
        </nav>

        <div className="hidden sm:flex items-center">
          <Link
            href="/profile"
            className="rounded-full p-2 transition-colors hover:bg-slate-200"
          >
            <LiaGamepadSolid
              size={40}
              className="text-slate-600 transition-colors hover:text-black"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
