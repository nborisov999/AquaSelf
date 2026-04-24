import { Link, useLocation } from 'react-router-dom';
import { Waves, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const links = [
  { href: '/', label: 'Начало' },
  { href: '/about', label: 'За нас' },
  { href: '/product', label: 'Продукти' },
  { href: '/delivery', label: 'Доставка' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-sky-600 rounded-lg flex items-center justify-center">
              <Waves className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-sky-900 uppercase">
              Aqua<span className="text-sky-600">Self</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors pb-1",
                  location.pathname === link.href ? "text-sky-600 border-b-2 border-sky-600" : "text-slate-500 hover:text-sky-600"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/product"
              className="bg-sky-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-sky-700 transition-all shadow-md shadow-sky-100 active:scale-95"
            >
              Към магазина
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-slate-900"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-t border-slate-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-4 text-base font-medium rounded-md",
                    location.pathname === link.href
                      ? "text-sky-600 bg-sky-50"
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/product"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-sky-600 text-white px-5 py-3 rounded-xl text-base font-semibold"
                >
                  Към магазина
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
