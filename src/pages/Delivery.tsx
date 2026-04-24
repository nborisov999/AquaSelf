import { motion } from 'motion/react';
import { Truck, Package, Clock, MapPin, CreditCard, ShieldCheck } from 'lucide-react';

export default function Delivery() {
  return (
    <div className="pb-32 bg-slate-50">
      {/* Hero */}
      <section className="bg-white py-24 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-50 rounded-2xl mb-8">
            <Truck className="w-8 h-8 text-sky-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight uppercase">Доставка и Плащане</h1>
          <p className="text-xl text-slate-500 italic font-medium">Всичко, което трябва да знаете за получаването на вашия нов басейн.</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Methods */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-sky-100 border border-slate-100">
            <div className="flex items-center space-x-3 mb-8">
              <Package className="w-6 h-6 text-sky-600" />
              <h2 className="text-2xl font-black text-slate-900 italic tracking-tight uppercase">Методи на доставка</h2>
            </div>
            
            <div className="space-y-8">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="font-black text-slate-900 mb-2 uppercase tracking-widest text-xs">Стандартен Куриер (Econt/Speedy)</p>
                <p className="text-sm text-slate-500 italic leading-relaxed font-medium">
                  За малки поръчки (до 30кг) - доставка до офис или адрес в рамките на 2-3 работни дни.
                </p>
                <p className="mt-4 text-sky-600 font-black text-xs uppercase tracking-[0.1em] italic">Цена: от 4.90 €</p>
              </div>

              <div className="p-6 bg-sky-50 rounded-2xl border border-sky-100">
                <p className="font-black text-sky-900 mb-2 uppercase tracking-widest text-xs tracking-tight">Специализиран Транспорт AquaSelf</p>
                <p className="text-sm text-sky-700 italic leading-relaxed font-medium">
                  За поръчки над 30кг (пълни ролки мембрана). Наш екип доставя материалите директно до вашия обект.
                </p>
                <p className="mt-4 text-sky-600 font-black text-xs uppercase tracking-[0.1em] italic">Цена: Безплатно над 250 €</p>
              </div>
            </div>
          </div>

          {/* Times & Regions */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-sky-100 border border-slate-100">
            <div className="flex items-center space-x-3 mb-8">
              <Clock className="w-6 h-6 text-sky-600" />
              <h2 className="text-2xl font-black text-slate-900 italic tracking-tight uppercase">Срокове</h2>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                   <p className="font-bold text-slate-900 italic tracking-tight text-sm">Налични на склад</p>
                   <p className="text-xs text-slate-500 italic font-medium">Срок: 48 часа за територията на цялата страна.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                   <p className="font-bold text-slate-900 italic tracking-tight text-sm">Поръчка от производител</p>
                   <p className="text-xs text-slate-500 italic font-medium">Ако цветът не е в наличност - срокът е до 14 работни дни.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-slate-900 rounded-[2rem] text-white">
               <div className="flex items-center space-x-2 mb-4">
                 <ShieldCheck className="w-5 h-5 text-sky-400" />
                 <p className="text-[10px] font-black uppercase tracking-widest italic">Гаранция за доставка</p>
               </div>
               <p className="text-xs opacity-60 leading-relaxed italic font-medium">
                 Всички пратки са застраховани. При евентуална повреда по време на транспорта, ние заменяме продукта за наша сметка веднага.
               </p>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <section className="mt-16">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-sky-100 border border-slate-100 text-center">
             <h2 className="text-2xl font-black text-slate-900 mb-12 italic tracking-tight uppercase tracking-widest text-[10px] text-sky-600">Начини на плащане</h2>
             <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                <div className="flex flex-col items-center group">
                   <div className="w-20 h-20 rounded-[2rem] bg-slate-50 flex items-center justify-center mb-4 transition-all group-hover:bg-sky-50 group-hover:scale-110 border border-slate-100">
                      <CreditCard className="w-8 h-8 text-slate-400 group-hover:text-sky-600" />
                   </div>
                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic tracking-tight">С карта онлайн</p>
                </div>
                <div className="flex flex-col items-center group">
                   <div className="w-20 h-20 rounded-[2rem] bg-slate-50 flex items-center justify-center mb-4 transition-all group-hover:bg-sky-50 group-hover:scale-110 border border-slate-100 font-black text-xl text-slate-400 group-hover:text-sky-600">
                      €
                   </div>
                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic tracking-tight">Наложен платеж</p>
                </div>
                <div className="flex flex-col items-center group">
                   <div className="w-20 h-20 rounded-[2rem] bg-slate-50 flex items-center justify-center mb-4 transition-all group-hover:bg-sky-50 group-hover:scale-110 border border-slate-100">
                      <MapPin className="w-8 h-8 text-slate-400 group-hover:text-sky-600" />
                   </div>
                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic tracking-tight">Банков превод</p>
                </div>
             </div>
          </div>
        </section>

        {/* Note */}
        <div className="mt-12 text-center text-slate-400 text-sm italic font-medium max-w-2xl mx-auto tracking-tight leading-relaxed">
           * Посочените условия се отнасят за стандартна доставка до леснодостъпни обекти. За планински или отдалечени райони, моля свържете се с нас за индивидуална оферта.
        </div>
      </div>
    </div>
  );
}
