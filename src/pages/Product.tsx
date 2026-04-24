import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Check, Calculator, PenTool as Tool, Truck, ShieldCheck, Waves, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { cn } from '../lib/utils';

const PRODUCT_IMAGES = [
  { name: 'Адриатическо Синьо - Основен изглед', url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200' },

];

export default function Product() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [squareMeters, setSquareMeters] = useState(50);
  const [withInstallation, setWithInstallation] = useState(false);

  const PRICE_PER_M2 = 19.90;
  const INSTALLATION_PRICE_PER_M2 = 7.90;
  
  const totalPrice = (squareMeters * PRICE_PER_M2) + (withInstallation ? squareMeters * INSTALLATION_PRICE_PER_M2 : 0);

  const nextImage = () => setActiveImageIndex((prev) => (prev + 1) % PRODUCT_IMAGES.length);
  const prevImage = () => setActiveImageIndex((prev) => (prev - 1 + PRODUCT_IMAGES.length) % PRODUCT_IMAGES.length);

  return (
    <div className="bg-white pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Enhanced Gallery / Carousel */}
          <div className="relative">
            <motion.div 
              className="group aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 bg-slate-100 mb-8 relative cursor-zoom-in"
              onClick={() => setIsZoomed(true)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImageIndex}
                  src={PRODUCT_IMAGES[activeImageIndex].url}
                  alt={PRODUCT_IMAGES[activeImageIndex].name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Overlay Controls */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors pointer-events-none" />
              
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur shadow-lg rounded-full flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 transition-all hover:bg-white active:scale-90"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur shadow-lg rounded-full flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 transition-all hover:bg-white active:scale-90"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute top-6 right-6 p-3 bg-white/20 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-5 h-5 text-white" />
              </div>
            </motion.div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {PRODUCT_IMAGES.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={cn(
                    "aspect-square rounded-2xl overflow-hidden border-2 transition-all p-1",
                    activeImageIndex === idx ? "border-sky-600 scale-105 shadow-lg shadow-sky-100" : "border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                  <img src={img.url} alt={img.name} className="w-full h-full object-cover rounded-xl" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col">
            <nav className="flex mb-6 text-xs font-black text-slate-400 uppercase tracking-widest space-x-2">
              <span>Продукти</span>
              <span>/</span>
              <span className="text-sky-600">PVC Мембрани</span>
            </nav>
            
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
              Армирана PVC Мембрана <br />
              <span className="text-sky-600 italic">Адриатическо Синьо 1.5mm</span>
            </h1>

            <div className="flex items-center space-x-4 mb-8">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-sm">★</span>
                ))}
              </div>
              <span className="text-slate-400 text-[10px] italic font-black uppercase tracking-widest">48 отзиви от реални клиенти</span>
            </div>

            <p className="text-slate-500 text-lg leading-relaxed mb-8 italic">
              Професионална хидроизолационна мембрана за басейни в класически адриатически нюанс. Изключително висока устойчивост на UV лъчи, хлор и стареене.
            </p>

            {/* Selection Options */}
            <div className="space-y-10 mb-10">
              {/* Info Label instead of selection if single color */}
              <div>
                <label className="block text-xs font-black text-slate-900 uppercase tracking-widest mb-4">Цвят: Адриатическо Синьо</label>
                <div className="w-10 h-10 rounded-full border-2 ring-offset-2 ring-2 ring-sky-600 shadow-xl" style={{ backgroundColor: '#0077be' }} />
              </div>
              {/* Quantity Slider */}
              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm shadow-sky-50">
                <div className="flex justify-between items-center mb-6">
                  <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Кв. метри (m²)</label>
                  <span className="text-2xl font-black text-sky-600 italic tracking-tighter">{squareMeters} m²</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="200" 
                  step="5"
                  value={squareMeters}
                  onChange={(e) => setSquareMeters(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                />
              </div>

              {/* Installation Add-on */}
              <button 
                onClick={() => setWithInstallation(!withInstallation)}
                className={cn(
                  "w-full flex items-center justify-between p-6 rounded-[2rem] border-2 transition-all",
                  withInstallation ? "border-sky-600 bg-sky-50 shadow-lg shadow-sky-100" : "border-slate-100 bg-white hover:border-slate-200"
                )}
              >
                <div className="flex items-center space-x-4">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center transition-colors",
                    withInstallation ? "bg-sky-600 text-white" : "bg-slate-50 text-slate-400"
                  )}>
                    <Tool className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-slate-900 italic text-sm">Професионален монтаж</p>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">+7.90 €/m²</p>
                  </div>
                </div>
                <div className={cn(
                  "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
                  withInstallation ? "bg-sky-600 border-sky-600" : "border-slate-300"
                )}>
                  {withInstallation && <Check className="w-4 h-4 text-white" />}
                </div>
              </button>
            </div>

            {/* Pricing Area */}
            <div className="mt-auto border-t border-slate-100 pt-10">
               <div className="flex items-baseline justify-between mb-8">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1 italic">Обща стойност</span>
                    <span className="text-xs text-slate-300 font-bold italic line-through tracking-tighter">{(totalPrice * 2.5).toFixed(2)} €</span>
                  </div>
                  <div className="text-right">
                    <span className="text-5xl font-black text-slate-900 tracking-tighter">{totalPrice.toFixed(2)}</span>
                    <span className="text-xl font-bold text-slate-400 ml-2 italic">€</span>
                  </div>
               </div>

               <button className="w-full bg-sky-600 text-white py-6 rounded-full text-xl font-black hover:bg-sky-700 transition-all shadow-xl shadow-sky-100 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-3 group uppercase tracking-widest">
                 <ShoppingCart className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
                 <span className="text-sm">Добави в Количката</span>
               </button>
               
               <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center space-x-2 text-[9px] font-black uppercase tracking-widest text-slate-400 italic">
                    <Truck className="w-3.5 h-3.5 text-sky-500" />
                    <span>Безплатна доставка над 250 €</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[9px] font-black uppercase tracking-widest text-slate-400 italic">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-500" />
                    <span>10 години гаранция</span>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Zoom Modal */}
        <AnimatePresence>
          {isZoomed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
              onClick={() => setIsZoomed(false)}
            >
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors bg-white/10 p-4 rounded-full backdrop-blur z-50"
                onClick={() => setIsZoomed(false)}
              >
                <X className="w-8 h-8" />
              </motion.button>

              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="relative max-w-5xl w-full aspect-square"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={PRODUCT_IMAGES[activeImageIndex].url}
                  alt={PRODUCT_IMAGES[activeImageIndex].name}
                  className="w-full h-full object-contain rounded-3xl"
                />
                
                <div className="absolute inset-y-0 -left-4 md:-left-12 flex items-center">
                  <button onClick={prevImage} className="w-12 h-12 md:w-16 md:h-16 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur transition-all">
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                </div>
                
                <div className="absolute inset-y-0 -right-4 md:-right-12 flex items-center">
                  <button onClick={nextImage} className="w-12 h-12 md:w-16 md:h-16 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur transition-all">
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </div>

                <div className="absolute -bottom-16 left-0 right-0 text-center">
                  <p className="text-white/60 text-xs font-black uppercase tracking-[0.2em] italic">{PRODUCT_IMAGES[activeImageIndex].name}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Technical Detail */}
        <section className="mt-32 pt-20 border-t border-slate-100">
          <div className="text-center mb-20">
            <h2 className="text-[10px] font-black text-sky-600 uppercase tracking-[0.3em] mb-4">Инженерни детайли</h2>
            <p className="text-3xl font-black text-slate-900 tracking-tight leading-tight italic uppercase">Защо AquaSelf Elite е най-добрият избор?</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Waves />, title: "Гъвкавост", desc: "Следва контурите на всеки басейн - прави, заоблени или стълбища." },
              { icon: <ShieldCheck />, title: "Антибактериална", desc: "Специално покритие, което предотвратява развитието на гъбички." },
              { icon: <Tool />, title: "Лесен Монтаж", desc: "Термично заваряване или залепване. Няма нужда от професионални машини." },
              { icon: <Calculator />, title: "Ефективност", desc: "Намалява загубите на вода през микро-пукнатини в бетона." }
            ].map((item, i) => (
              <div key={i} className="group p-8 bg-slate-50 rounded-3xl border border-slate-50 hover:bg-white hover:border-slate-100 hover:shadow-xl hover:shadow-sky-50 transition-all">
                <div className="w-10 h-10 text-sky-600 mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-2 uppercase tracking-tight">{item.title}</h4>
                <p className="text-[11px] text-slate-500 italic leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
