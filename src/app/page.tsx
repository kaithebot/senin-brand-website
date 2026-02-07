"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const storyCovers = [
  { id: 1, title: "Kosmos Macərası", emoji: "🚀", color: "from-blue-500 to-purple-600", age: "6-10" },
  { id: 2, title: "Peri Dünyası", emoji: "🧚‍♀️", color: "from-pink-400 to-rose-500", age: "4-8" },
  { id: 3, title: "Dinozavr Səfəri", emoji: "🦕", color: "from-green-400 to-emerald-600", age: "5-9" },
  { id: 4, title: "Super Qəhrəman", emoji: "🦸", color: "from-red-500 to-orange-500", age: "7-12" },
  { id: 5, title: "Pirat Xəzinəsi", emoji: "🏴‍☠️", color: "from-yellow-400 to-amber-600", age: "6-11" },
  { id: 6, title: "Şahzadə Nağılı", emoji: "👸", color: "from-purple-400 to-pink-500", age: "4-8" },
];

export default function Home() {
  const [selectedStory, setSelectedStory] = useState<typeof storyCovers[0] | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center relative"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-32 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-32 right-20 w-[500px] h-[500px] bg-[#aa8267]/10 rounded-full blur-3xl" />
        </div>

        <div className="hero-content relative z-10 max-w-5xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/20">
            <span className="text-yellow-400 text-lg">★★★★★</span>
            <span className="text-base font-medium">1000+ valideynin etibar etdiyi xidmət</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight">
            Uşağınız <span className="text-[#e9e1d0]">Baş Qəhrəman</span><br />
            Olan Nağıl Kitabı
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
            Şəkilləri və maraqları ilə fərdiləşdirilmiş unikal nağıl kitabı. 
            Hər kitab dünyada tək olan əsərdir.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
            <a 
              href="#create" 
              className="bg-gradient-to-r from-[#aa8267] to-[#c4956a] text-[#09090d] px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl"
            >
              ✨ Nağıl Yarat — 85 AZN
            </a>
            <a 
              href="#stories" 
              className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              Nümunələrə Bax
            </a>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section id="stories" className="py-24 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              Nümunə Kitablar
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Klikləyin və səhnələri kəşf edin
            </p>
          </div>

          <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {storyCovers.map((story) => (
              <div
                key={story.id}
                onClick={() => setSelectedStory(story)}
                className="flex-shrink-0 w-80 snap-center cursor-pointer group"
              >
                <div className={`h-96 bg-gradient-to-br ${story.color} rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-500 flex flex-col items-center justify-center relative overflow-hidden`}>
                  <span className="text-9xl mb-6 transform group-hover:scale-110 transition-transform duration-500">{story.emoji}</span>
                  <h3 className="text-white font-bold text-2xl text-center px-6 mb-3">{story.title}</h3>
                  <span className="bg-white/20 px-4 py-1.5 rounded-full text-sm font-medium">{story.age} yaş</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedStory && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedStory(null)}
          >
            <div 
              className="bg-white rounded-3xl p-10 max-w-lg w-full text-[#09090d] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedStory(null)}
                className="absolute top-6 right-6 text-3xl hover:text-gray-600 transition-colors"
              >
                ×
              </button>
              <div className={`h-56 bg-gradient-to-br ${selectedStory.color} rounded-2xl mb-8 flex items-center justify-center`}>
                <span className="text-8xl">{selectedStory.emoji}</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">{selectedStory.title}</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Bu kitab {selectedStory.age} yaş arası uşaqlar üçün idealdir. 
                Uşağınızın şəkli ilə fərdiləşdirilmiş unikal hekayə.
              </p>
              <a 
                href="#create"
                onClick={() => setSelectedStory(null)}
                className="block w-full bg-gradient-to-r from-[#3250b0] to-[#9a66d4] text-white text-center py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity"
              >
                Bu Nümunə İlə Başla
              </a>
            </div>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section id="create" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              Öz Nağılınızı Yaradın
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              4 sadə addımda uşağınızın xüsusi nağıl kitabını sifariş edin.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: "👶", title: "Şəkillə Fərdiləşdirmə", desc: "Uşağınızın şəkli ilə əsl nağıl qəhrəmanına çevrilir" },
              { icon: "✨", title: "Unikal Hekayə", desc: "Maraqlarına uyğun sıfırdan yazılmış hekayə" },
              { icon: "📖", title: "Premium Keyfiyyət", desc: "40 səhifə, 20x20sm, bərk üz format" },
            ].map((benefit, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 text-center space-y-4">
                <span className="text-5xl">{benefit.icon}</span>
                <h3 className="font-bold text-xl">{benefit.title}</h3>
                <p className="text-white/80 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Pricing Card */}
          <div className="bg-white text-[#09090d] rounded-3xl p-10 md:p-14 shadow-2xl max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Tam Dəst</div>
              <div className="text-6xl md:text-7xl font-black text-[#3250b0]">85 AZN</div>
              <div className="text-gray-500 text-lg">Bir dəfəlik ödəniş, ömürlük xatirə</div>
            </div>

            <ul className="space-y-4 max-w-md mx-auto">
              {[
                "40 səhifəlik fərdi nağıl kitabı",
                "Uşağınızın şəkilləri ilə illüstrasiyalar",
                "20x20sm bərk üz format",
                "4 gün ərzində çatdırılma",
                "6 dil seçimi",
                "Hədiyyə paketi daxil",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="text-green-500 text-2xl">✓</span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <a 
              href="https://wa.me/994000000000?text=Salam! Sənin Hekayən kitabı sifariş etmək istəyirəm."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-[#3250b0] to-[#9a66d4] text-white py-5 rounded-xl font-bold text-xl hover:opacity-90 transition-opacity shadow-lg text-center"
            >
              🎁 İndi Sifariş Et — WhatsApp
            </a>

            <p className="text-center text-gray-500">
              WhatsApp vasitəsilə sifariş edin, 24 saat ərzində cavab verək
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#09090d] py-16 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-3xl font-bold flex items-center gap-3">
                <span>📚</span> Sənin Hekayən
              </h3>
              <p className="text-white/70 max-w-md leading-relaxed">
                Uşağınızın xəyallarını gerçəkləşdirin. Hər kitab unikal, hər hekayə xüsusi.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/senin.hekayen.az" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-lg transition-colors">
                  📷 Instagram
                </a>
                <a href="https://wa.me/994000000000" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-lg transition-colors">
                  💬 WhatsApp
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-[#aa8267] text-lg">Sürətli Keçidlər</h4>
              <ul className="space-y-3 text-white/70">
                <li><a href="#stories" className="hover:text-white transition-colors">Nümunələr</a></li>
                <li><a href="#create" className="hover:text-white transition-colors">Sifariş Et</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Haqqımızda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Əlaqə</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-[#aa8267] text-lg">Əlaqə</h4>
              <ul className="space-y-3 text-white/70">
                <li>📱 +994 00 000 00 00</li>
                <li>📧 info@seninhekayen.az</li>
                <li>📍 Bakı, Azərbaycan</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50">© 2024 Sənin Hekayən. Bütün hüquqlar qorunur.</p>
            <div className="flex gap-6 text-white/50">
              <a href="#" className="hover:text-white transition-colors">Məxfilik Siyasəti</a>
              <a href="#" className="hover:text-white transition-colors">İstifadə Şərtləri</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/994000000000?text=Salam! Sənin Hekayən kitabı haqqında məlumat almaq istəyirəm."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-xl hover:scale-110 transition-transform z-40"
      >
        💬
      </a>
    </main>
  );
}
