import { Link } from "gatsby";
import * as React from "react";
import logo from "../images/baletni-studio-vandy-skopalove.jpg";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <header className="sticky top-0 z-50 flex h-24 bg-white shadow-lg">
      <div className="size-lg-reduced flex items-center justify-between">
        <Link to="/" className="headline4 flex items-center gap-8 font-serif">
          <img src={logo} alt="YOURProduct" className="w-8 lg:w-12" />
          <div className="flex gap-2">
            <span>Baletní studio</span>
            <span className="text-emph-sm">Vandy Skopalové</span>
          </div>
        </Link>
        <nav>
          <ul className="headline6 flex flex-row items-center gap-8">
            <li className="hidden lg:block">
              <Link to="#how">Jak se přihlásit?</Link>
            </li>
            <li className="hidden lg:block">
              <Link to="#why">Kde nás najdete?</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main>{children}</main>
    <footer className="bg-slate-700 text-white">
      <section className="size-lg body2 flex items-center justify-between gap-4">
        <div className="flex flex-col gap-4">
          <div className="font-display">
            <span>Baletení studio Vandy Skopalové, z.s.</span>
          </div>
          <div className="font-display">
            <span><Link to="https://facebook.com/brnobalet">Facebook</Link></span> | <span>Instagram</span>
          </div>
          <div>
              <a href="mailto:brnobalet@gmail.com">brnobalet@gmail.com</a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="uppercase">Dokumenty</span>
          <ul className="underline">
            <li>
              <Link to="/privacy">Stanovy</Link>
            </li>
            <li>
              <Link to="/imprint">Zápisy</Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="text-emph-sm-negative caption bg-slate-900 text-start">
        <div className="size-lg-reduced flex flex-col items-start justify-between gap-4 py-2 lg:flex-row lg:items-center">
          <span>© copyright 2024 Baletní škola Vandy Skopalové</span>
          <span>made with ❤ by Vendula</span>
        </div>
      </section>
    </footer>
  </>
);

export default Layout;
