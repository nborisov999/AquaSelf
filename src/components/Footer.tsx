import { Waves, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo & Info */}
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center">
                <Waves className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black tracking-tighter text-slate-900 uppercase">
                Aqua<span className="text-sky-600 italic">Self</span>
              </span>
            </Link>
            <p className="text-xs leading-relaxed mb-8 max-w-sm italic font-medium">
              Вашият доверен партньор за съвременна и достъпна облицовка на басейни. Спести пари, направи го сам!
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-sky-600 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-sky-600 transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-slate-900 text-[10px] font-black uppercase tracking-[0.2em] mb-8">Навигация</h3>
            <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest italic">
              <li><Link to="/about" className="hover:text-sky-600 transition-colors">За нас</Link></li>
              <li><Link to="/product" className="hover:text-sky-600 transition-colors">Продукти</Link></li>
              <li><Link to="/delivery" className="hover:text-sky-600 transition-colors">Доставка</Link></li>
            </ul>
          </div>

          {/* Helpful */}
          <div className="md:col-span-3">
            <h3 className="text-slate-900 text-[10px] font-black uppercase tracking-[0.2em] mb-8">Поддръжка</h3>
            <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest italic">
              <li><a href="#" className="hover:text-sky-600 transition-colors">Инструкции</a></li>
              <li><a href="#" className="hover:text-sky-600 transition-colors">Гаранция</a></li>
              <li><a href="#" className="hover:text-sky-600 transition-colors">Често задавани</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="text-slate-900 text-[10px] font-black uppercase tracking-[0.2em] mb-8">Контакти</h3>
            <ul className="space-y-5 text-[11px] font-bold uppercase tracking-widest italic">
              <li className="flex items-center space-x-4">
                <Phone className="w-4 h-4 text-sky-600" />
                <span className="text-slate-900">+359 888 123 456</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="w-4 h-4 text-sky-600" />
                <span className="text-slate-900 tracking-tighter">office@aquaself.bg</span>
              </li>
              <li className="flex items-center space-x-4">
                <MapPin className="w-4 h-4 text-sky-600" />
                <span className="text-slate-900">София, България</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">© {new Date().getFullYear()} AquaSelf</p>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">Проект на студент по уеб дизайн</p>
        </div>
      </div>
    </footer>
  );
}
