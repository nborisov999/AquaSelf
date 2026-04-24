import { motion } from 'motion/react';
import { Target, Users, Droplets, Sparkles, ShieldCheck, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-white py-24 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight uppercase"
          >
            Ние сме <span className="text-sky-600 italic">AquaSelf</span>
          </motion.h1>
          <p className="text-xl text-slate-500 font-medium italic">
            "Нашата мисия е да направим лукса на собствения басейн достъпен за всеки дом в България."
          </p>
        </div>
      </section>

      {/* Narrative */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-sky-100 border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?q=80&w=1964&auto=format&fit=crop" 
                  alt="About us" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-8 rounded-3xl shadow-2xl max-w-[220px]">
                <p className="text-3xl font-black mb-1">2024</p>
                <p className="text-[10px] font-black uppercase opacity-60 italic tracking-widest">Година на основаване</p>
              </div>
            </div>
            
            <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                <span className="text-xs font-black uppercase tracking-widest text-sky-600">Кои сме ние?</span>
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Нова компания, изградена върху десетилетия опит.
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed italic">
                <p>
                  AquaSelf е модерна, скоро основана компания, но нашият екип носи със себе си над 15 години опит в индустрията на басейните и хидроизолациите. 
                </p>
                <p>
                  Дълго време наблюдавахме как старите методи с плочки и мозайка отнемат седмици и струват малко състояние, само за да се напукат след първата зима. Знаехме, че е време за промяна.
                </p>
                <p>
                  Обединихме опита си като професионални монтажници с най-добрите материали от Европа, за да създадем AquaSelf - мястото, където достъпността среща професионалното качество.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-100/50 py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Качество",
                desc: "Работим директно с производители от Франция и Испания, гарантирайки най-високото качество на пазара."
              },
              {
                title: "Прозрачност",
                desc: "Цените ни са ясни и крайни. Няма скрити такси за монтажни консумативи или излишни оскъпявания."
              },
              {
                title: "Иновация",
                desc: "Постоянно развиваме нашите DIY китове, за да направим монтажа още по-лесен и достъпен."
              }
            ].map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm group hover:shadow-md transition-all">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2 tracking-tight uppercase">
                  <span className="w-1.5 h-1.5 bg-sky-500 rounded-full"></span> {v.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed italic">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team (Simple) */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-12 tracking-tight uppercase">Екипът на <span className="text-sky-600">AquaSelf</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <img src="https://ui-avatars.com/api/?name=Ivan+Borisov&background=0284c7&color=fff&size=128" alt="Team" className="w-24 h-24 rounded-full mx-auto mb-6 shadow-lg border-4 border-sky-50" />
                <h4 className="font-bold text-xl text-slate-900 italic">Иван Борисов</h4>
                <p className="text-sky-600 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Основател & Инженер</p>
             </div>
             <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <img src="https://ui-avatars.com/api/?name=Elena+Petrova&background=0ea5e9&color=fff&size=128" alt="Team" className="w-24 h-24 rounded-full mx-auto mb-6 shadow-lg border-4 border-sky-50" />
                <h4 className="font-bold text-xl text-slate-900 italic">Елена Петрова</h4>
                <p className="text-sky-600 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Дизайн & Клиенти</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
