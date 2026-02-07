"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Story covers data
const storyCovers = [
  { id: 1, title: "Kosmos Macərası", emoji: "🚀", color: "from-blue-500 to-purple-600", age: "6-10", description: "Uşağınız kosmosun qəhrəmanı olur, planetlər kəşf edir və yadplanetlilərlə dostluq edir." },
  { id: 2, title: "Peri Dünyası", emoji: "🧚‍♀️", color: "from-pink-400 to-rose-500", age: "4-8", description: "Sehrli peri çiçəklər və sehrli meşədə uşağınız very special bir macəraya atılır." },
  { id: 3, title: "Dinozavr Səfəri", emoji: "🦕", color: "from-green-400 to-emerald-600", age: "5-9", description: "Zaman maşını ilə keçmişə səyahət, dinozavrlarla dostluq və qədim dünyanın sirrləri." },
  { id: 4, title: "Super Qəhrəman", emoji: "🦸", color: "from-red-500 to-orange-500", age: "7-12", description: "Özünəməxsus super güclər ilə şəhəri qorumaq və qəhrəmanlıq macərası." },
  { id: 5, title: "Pirat Xəzinəsi", emoji: "🏴‍☠️", color: "from-yellow-400 to-amber-600", age: "6-11", description: "Xəritə ilə gizli ada axtarışı, dəryada macəra və qədim xəzinəni tapmaq." },
  { id: 6, title: "Şahzadə Nağılı", emoji: "👸", color: "from-purple-400 to-pink-500", age: "4-8", description: "Şahzadə və əjdaha arasında dostluq, qəsrin sirrləri və sehrli aləm." },
];

// Testimonials
const testimonials = [
  { name: "Günay M.", text: "Qızım Leyla kitabını görəndə ağladı. Deyir 'Mənim şəklim var!' Həqiqətən unikal hədiyyə oldu.", rating: 5 },
  { name: "Rəşad K.", text: "2 gün ərzində gəldi, keyfiyyət əla. Oğlum hər gecə yatmazdan əvvəl oxuyur.", rating: 5 },
  { name: "Nigar Ə.", text: "Artıq 3-cü kitabı sifariş etdim. Hər dəfə fərqli hekayə, hər dəfə gözəl.", rating: 5 },
];

export default function Home() {
  const [selectedStory, setSelectedStory] = useState<typeof storyCovers[0] | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });
      
      gsap.from(".hero-subtitle", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
      });
      
      gsap.from(".hero-cta", {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        delay: 0.6,
        ease: "back.out(1.7)",
      });

      // Scroll-triggered animations
      gsap.from(".carousel-title", {
        scrollTrigger: {
          trigger: carouselRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from(".story-card", {
        scrollTrigger: {
          trigger: carouselRef.current,
          start: "top 70%",
        },
        y: 80,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#aa8267]/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Book showcase */}
        <div className="relative mb-8">
          <div className="w-64 h-80 bg-gradient-to-br from-red-400 to-red-500 rounded-r-2xl rounded-l-lg shadow-2xl transform rotate-y-12 hover:rotate-0 transition-transform duration-500 flex flex-col items-center justify-center border-l-8 border-red-600">
            <span className="text-6xl mb-4">👧</span>
            <h3 className="text-white font-bold text-lg text-center px-4">Leylanın<br/>Macəraları</h3>
          </div>
        </div>

        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
          <span className="text-yellow-400">★★★★★</span>
          <span className="text-sm font-medium">1000+ valideynin etibar etdiyi xidmət</span>
        </div>

        {/* Main headline */}
        <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-black mb-6 max-w-4xl leading-tight">
          Uşağınız <span className="text-[#e9e1d0]">Baş Qəhrəman</span> Olan Nağıl Kitabı!
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle text-lg md:text-xl text-white/90 max-w-2xl mb-8">
          Şəkilləri və maraqları ilə fərdiləşdirilmiş unikal nağıl kitabı. 
          Hər kitab dünyada tək olan əsərdir.
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta flex flex-col sm:flex-row gap-4">
          <a 
            href="#create" 
            className="bg-gradient-to-r from-[#aa8267] to-[#c4956a] text-[#09090d] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
          >
            ✨ Nağıl Yarat — 85 AZN
          </a>
          <a 
            href="#stories" 
            className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white/20 transition-colors"
          >
            Nümunələrə Bax
          </a>
        </div>
      </section>

      {/* Carousel Section */}
      <section 
        ref={carouselRef}
        id="stories"
        className="py-20 px-4 bg-black/20 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
            Nümunə Kitablar
          </h2>
          <p className="text-center text-white/80 mb-12 text-lg">
            Klikləyin və səhnələri kəşf edin
          </p>

          {/* Carousel */}
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {storyCovers.map((story) => (
              <div
                key={story.id}
                onClick={() => setSelectedStory(story)}
                className="flex-shrink-0 w-72 snap-center cursor-pointer group"
              >
                <div className={`h-80 bg-gradient-to-br ${story.color} rounded-2xl shadow-xl transform group-hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden`}>
                  <span className="text-8xl mb-4 transform group-hover:scale-110 transition-transform">{story.emoji}</span>
                  <h3 className="text-white font-bold text-xl text-center px-4">{story.title}</h3>
                  <span className="absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full text-sm">{story.age} yaş</span>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
              </div>
            ))}
          </div>

          {/* Scroll hint */}
          <p className="text-center text-white/60 mt-4 text-sm md:hidden">
            Sürüşdürün →
          </p>
        </div>

        {/* Modal for expanded view */}
        {selectedStory && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedStory(null)}
          >
            <div 
              className="bg-gradient-to-br from-white to-gray-100 rounded-3xl p-8 max-w-lg w-full text-[#09090d] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 text-2xl hover:text-gray-600"
              >
                ×
              </button>
              <div className={`h-48 bg-gradient-to-br ${selectedStory.color} rounded-2xl mb-6 flex items-center justify-center`}>
                <span className="text-7xl">{selectedStory.emoji}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{selectedStory.title}</h3>
              <p className="text-gray-600 mb-4">
                Bu kitab {selectedStory.age} yaş arası uşaqlar üçün idealdir. 
                Uşağınızın şəkli ilə fərdiləşdirilmiş, onun maraqlarına uyğun yazılmış unikal hekayə.
              </p>
              <a 
                href="#create"
                onClick={() => setSelectedStory(null)}
                className="block w-full bg-gradient-to-r from-[#3250b0] to-[#9a66d4] text-white text-center py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Bu Nümunə İlə Başla
              </a>
            </div>
          </div>
        )}
      </section>

      {/* Create Story CTA Section */}
      <section 
        ref={ctaRef}
        id="create"
        className="py-24 px-4 relative"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Öz Nağılınızı Yaradın
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            4 sadə addımda uşağınızın xüsusi nağıl kitabını sifariş edin. 
            Hər kitab dünyada tək olan əsərdir.
          </p>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <span className="text-4xl mb-4 block">👶</span>
              <h3 className="font-bold text-lg mb-2">Şəkillə Fərdiləşdirmə</h3>
              <p className="text-white/80 text-sm">Uşağınızın şəkli ilə əsl nağıl qəhrəmanına çevrilir</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <span className="text-4xl mb-4 block">✨</span>
              <h3 className="font-bold text-lg mb-2">Unikal Hekayə</h3>
              <p className="text-white/80 text-sm">Maraqlarına uyğun sıfırdan yazılmış hekayə</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <span className="text-4xl mb-4 block">📖</span>
              <h3 className="font-bold text-lg mb-2">Premium Keyfiyyət</h3>
              <p className="text-white/80 text-sm">40 səhifə, 20x20sm, bərk üz format</p>
            </div>
          </div>

          {/* Price and CTA */}
          <div className="bg-white text-[#09090d] rounded-3xl p-8 md:p-12 shadow-2xl max-w-2xl mx-auto">
            <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-2">Tam Dəst</div>
            <div className="text-5xl md:text-6xl font-black text-[#3250b0] mb-2">85 AZN</div>
            <div className="text-gray-500 mb-6">Bir dəfəlik ödəniş, ömürlük xatirə</div>

            <ul className="text-left space-y-3 mb-8 max-w-md mx-auto">
              {[
                "40 səhifəlik fərdi nağıl kitabı",
                "Uşağınızın şəkilləri ilə illüstrasiyalar",
                "20x20sm bərk üz format",
                "4 gün ərzində çatdırılma",
                "6 dil seçimi",
                "Hədiyyə paketi daxil",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a 
              href="https://wa.me/994000000000?text=Salam! Sənin Hekayən kitabı sifariş etmək istəyirəm."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-[#3250b0] to-[#9a66d4] text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              🎁 İndi Sifariş Et — WhatsApp
            </a>

            <p className="mt-4 text-sm text-gray-500">
              WhatsApp vasitəsilə sifariş edin, 24 saat ərzində cavab verək
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#09090d] py-16 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span>📚</span> Sənin Hekayən
              </h3>
              <p className="text-white/70 mb-4 max-w-md">
                Uşağınızın xəyallarını gerçəkləşdirin. Hər kitab unikal, hər hekayə xüsusi.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/senin.hekayen.az" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
                >
                  📷 Instagram
                </a>
                <a 
                  href="https://wa.me/994000000000" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4 text-[#aa8267]">Sürətli Keçidlər</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#stories" className="hover:text-white transition-colors">Nümunələr</a></li>
                <li><a href="#create" className="hover:text-white transition-colors">Sifariş Et</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Haqqımızda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Əlaqə</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4 text-[#aa8267]">Əlaqə</h4>
              <ul className="space-y-2 text-white/70">
                <li>📱 +994 00 000 00 00</li>
                <li>📧 info@seninhekayen.az</li>
                <li>📍 Bakı, Azərbaycan</li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © 2024 Sənin Hekayən. Bütün hüquqlar qorunur.
            </p>
            <div className="flex gap-6 text-white/50 text-sm">
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
        className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform z-40"
        title="WhatsApp"
      >
        💬
      </a>
    </main>
  );
}
