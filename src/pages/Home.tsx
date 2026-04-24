import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Ruler, ShieldCheck, Wallet, Hammer, Play, Volume2, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GoogleGenAI, Modality } from "@google/genai";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const playIntro = async () => {
    if (isPlaying || isLoading) return;

    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const prompt = "Здравейте и добре дошли в AquaSelf. Ние сме вашият нов партньор за модерна и достъпна облицовка на басейни. Нашата мисия е да направим лукса на идеално облицования басейн достъпен за всеки. Предлагаме висококачествена армирана PVC мембрана, която е три пъти по-евтина от традиционните плочки и е проектирана за лесен монтаж тип 'направи си сам'. На нашия сайт можете да разгледате нашите продукти, да прочетете историята ни и да научите всичко за доставката и поддръжката. Спестете време и пари с AquaSelf.";
      
      const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-tts-preview",
        contents: [{ parts: [{ text: `Кажи на български с мъжки глас, свободно и естествено: ${prompt}` }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Fenrir' }, // Fenrir is often used for deeper tones
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        const arrayBuffer = Uint8Array.from(atob(base64Audio), c => c.charCodeAt(0)).buffer;
        
        // The data is raw PCM 16-bit little endian
        const int16Array = new Int16Array(arrayBuffer);
        const float32Array = new Float32Array(int16Array.length);
        for (let i = 0; i < int16Array.length; i++) {
          float32Array[i] = int16Array[i] / 32768;
        }

        const audioBuffer = audioContext.createBuffer(1, float32Array.length, 24000);
        audioBuffer.getChannelData(0).set(float32Array);

        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContext.destination);
        
        setIsPlaying(true);
        source.start();
        source.onended = () => setIsPlaying(false);
      }
    } catch (error) {
      console.error("Audio intro error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Play Audio Intro Button */}
      <div className="fixed top-24 left-6 z-40">
        <button
          onClick={playIntro}
          disabled={isLoading}
          className="group flex items-center space-x-3 bg-white/80 backdrop-blur-md border border-slate-200 p-2 pr-6 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95 disabled:opacity-50"
        >
          <div className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center text-white shadow-inner">
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : isPlaying ? (
              <Volume2 className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5 fill-current ml-1" />
            )}
          </div>
          <div className="text-left">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-sky-600 transition-colors">Play</p>
            <p className="text-xs font-bold text-slate-900">Audio Intro</p>
          </div>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <span className="text-sky-600 font-bold tracking-widest text-xs uppercase mb-4">Иновация за вашия двор</span>
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
                Твоят басейн заслужава <span className="text-sky-600">повече</span> за <span className="underline decoration-sky-300">по-малко</span>.
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed italic">
                Забравете за скъпите плочки и седмиците труд. Нашата PVC облицовка е 3 пъти по-евтина, 100% водоустойчива и проектирана за лесен самостоятeлен монтаж.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm transition-all hover:shadow-md">
                  <span className="block text-3xl font-black text-sky-600 mb-1">-60%</span>
                  <span className="text-[10px] text-slate-500 uppercase font-black tracking-tight">Спестяване спрямо плочки</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm transition-all hover:shadow-md">
                  <span className="block text-3xl font-black text-sky-600 mb-1">48ч</span>
                  <span className="text-[10px] text-slate-500 uppercase font-black tracking-tight">Време за монтаж</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm transition-all hover:shadow-md">
                  <span className="block text-3xl font-black text-sky-600 mb-1">15г.</span>
                  <span className="text-[10px] text-slate-500 uppercase font-black tracking-tight">Гаранция на продукта</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Link 
                  to="/product"
                  className="bg-slate-900 text-white px-10 py-4 rounded-xl text-lg font-bold shadow-xl shadow-slate-200 active:scale-95 transition-all"
                >
                  Виж Продуктите
                </Link>
                <Link 
                  to="/about"
                  className="bg-white border border-slate-200 text-slate-700 px-10 py-4 rounded-xl text-lg font-bold hover:bg-slate-50 transition-all"
                >
                  Нашата История
                </Link>
              </div>
            </motion.div>

            {/* Right Featured Product Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 flex items-center justify-center lg:justify-end"
            >
              <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-sky-100 border border-slate-100 overflow-hidden w-full max-w-sm">
                <div className="h-56 bg-sky-50 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#0284c7 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
                    <img 
                      src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600" 
                      alt="Featured Product"
                      className="absolute inset-0 w-full h-full object-cover opacity-80" 
                    />
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-tighter shadow-lg">Бестселър</div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-slate-900 mb-1 tracking-tight">AquaShield Pro</h3>
                  <p className="text-sm text-slate-500 mb-6 italic tracking-tight font-medium">Цвят: Лазурно синьо с мозаечен ефект</p>
                  <div className="flex items-end gap-2 mb-8">
                    <span className="text-4xl font-black text-slate-900 tracking-tighter">19.90 €</span>
                    <span className="text-slate-400 line-through text-base mb-1 italic">59.90 €</span>
                  </div>
                  <Link 
                    to="/product"
                    className="block w-full bg-sky-600 text-white py-4 rounded-2xl text-center font-bold text-sm shadow-xl shadow-sky-100 uppercase tracking-widest hover:bg-sky-700 transition-all active:scale-[0.98]"
                  >
                    КУПИ ЗА DIY МОНТАЖ
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits - Why Liner? */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-xs font-black text-sky-600 uppercase tracking-[0.3em] mb-4">Ефективност & Баланс</h2>
            <p className="text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">Защо да изберете AquaSelf?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
               whileHover={{ y: -8 }}
              className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm transition-all"
            >
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mb-6 text-sky-600">
                <Wallet className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Изключително бюджетно</h3>
              <p className="text-slate-500 leading-relaxed italic text-sm">
                Общата цена на материалите е с 60% по-ниска от тази на висок клас стъклокерамика. Спестявате от транспорт и тежък труд.
              </p>
            </motion.div>

            <motion.div 
               whileHover={{ y: -8 }}
              className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm transition-all"
            >
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mb-6 text-sky-600">
                <Hammer className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Направи си сам (DIY)</h3>
              <p className="text-slate-500 leading-relaxed italic text-sm">
                Проектирали сме продукта така, че всеки да може да го монтира. Нашето видео ръководство ви превежда през 4 лесни стъпки.
              </p>
            </motion.div>

            <motion.div 
               whileHover={{ y: -8 }}
              className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm transition-all"
            >
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mb-6 text-sky-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">100% Хидроизолация</h3>
              <p className="text-slate-500 leading-relaxed italic text-sm">
                За разлика от фугите, мембраната не просмуква вода и не се напуква. Тя е гъвкава и издръжлива на движения на земята.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Detail */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
           <Waves className="w-full h-full stroke-[0.1]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold mb-8 leading-tight">Стига толкова безкрайни ремонти.</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-red-500 font-bold">✕</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-200">Проблемът с плочките:</p>
                    <p className="text-slate-400 text-sm italic">Фугите мухлясват, плочките се отлепват след зимата, ремонтът е скъп и мръсен.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-sky-500/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-sky-500 font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-sky-400">Решението AquaSelf:</p>
                    <p className="text-slate-400 text-sm italic">Гладка, лесна за почистване повърхност. Устойчива на UV и химикали. Монтаж за 1-2 дни.</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 p-6 bg-white/5 border border-white/10 rounded-2xl">
                <p className="text-sm opacity-80 mb-4 lowercase tracking-tight italic text-sky-300">"Всичко е направено по-просто, за да можете сами да се справите."</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-sky-600 flex items-center justify-center font-bold text-white">ИБ</div>
                  <div>
                    <p className="text-sm font-bold">Иван Борисов</p>
                    <p className="text-xs opacity-50">Основател на AquaSelf</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800"
              >
                <img 
                  src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=2072&auto=format&fit=crop" 
                  alt="Installation" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Badge */}
              <div className="absolute -bottom-6 -right-6 bg-sky-600 p-8 rounded-full shadow-2xl text-center">
                <p className="text-3xl font-black">10г</p>
                <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">Гаранция</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-sky-600 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl shadow-sky-500/20 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Готови ли сте за новия сезон?</h2>
                <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto italic">
                  Поръчайте днес и спестете хиляди евро от труд и скъпи материали.
                </p>
                <Link 
                  to="/product"
                  className="inline-flex items-center bg-white text-sky-600 px-10 py-5 rounded-full text-xl font-black hover:bg-slate-100 transition-all shadow-xl"
                >
                  Виж Цените
                </Link>
                <p className="mt-8 text-sm opacity-70 underline cursor-pointer italic">* Предлагаме и професионален монтаж за тези, които не искат да си цапат ръцете.</p>
              </div>
              {/* Abstract decorations */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
           </div>
        </div>
      </section>
    </div>
  );
}

const Waves = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 1440 320" className={className} xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
  </svg>
);
