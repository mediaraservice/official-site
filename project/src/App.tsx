import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ShoppingCart,
  Smartphone,
  CreditCard,
  BarChart3,
  Calendar,
  Package,
  ChevronDown,
  Instagram,
  MessageCircle,
} from "lucide-react";

import img1 from "./images/IMG_5094.PNG";
import img2 from "./images/IMG_5095.PNG";
import img3 from "./images/IMG_5096.PNG";
import img4 from "./images/IMG_5098.PNG";
import img5 from "./images/IMG_5099.PNG";
import img6 from "./images/IMG_5100.PNG";
import heroImg from "./images/menu-digital.jpg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const whatsappLink =
    "https://wa.me/62895422319218?text=Halo%20Mediara,%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website%20E-Menu.";

  const features = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Menu Interaktif dengan Pemilih Jumlah",
      description:
        "Pelanggan dapat memilih menu dengan mudah, mengatur jumlah pesanan, dan melihat total harga secara real-time.",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Tipe Pesanan yang Fleksibel",
      description:
        "Dukung berbagai tipe pesanan: Dine-in, Takeaway, Pre-order, dan Booking meja dengan sistem yang terintegrasi.",
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Pembayaran Terintegrasi yang Aman",
      description:
        "Integrasi pembayaran aman melalui Midtrans dan QRIS untuk kemudahan transaksi digital.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Dashboard Dapur & Owner Real-time",
      description:
        "Pantau pesanan secara langsung, kelola menu, dan analisis penjualan dari satu dashboard terpusat.",
    },
  ];

  const benefits = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Efisiensi Operasional",
      description:
        "Kurangi waktu tunggu dan tingkatkan produktivitas staff dengan sistem pemesanan digital.",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Pengalaman Pelanggan Lebih Baik",
      description:
        "Menu digital yang menarik dan mudah digunakan meningkatkan kepuasan pelanggan.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Tingkatkan Penjualan",
      description:
        "Dengan sistem yang efisien, Anda dapat melayani lebih banyak pelanggan dan meningkatkan omset.",
    },
  ];

  const faqs = [
    {
      question: "Apa itu Mediara E-Menu?",
      answer:
        "Mediara adalah solusi e-menu profesional yang dirancang khusus untuk bisnis F&B. Kami menyediakan sistem pemesanan digital yang terintegrasi dengan pembayaran dan dashboard management.",
    },
    {
      question: "Berapa lama waktu implementasi?",
      answer:
        "Proses implementasi biasanya memakan waktu 7-14 hari kerja, tergantung kompleksitas menu dan kebutuhan kustomisasi bisnis Anda.",
    },
    {
      question: "Apakah sistem ini sulit digunakan?",
      answer:
        "Tidak sama sekali! Sistem kami dirancang user-friendly untuk pelanggan maupun staff. Kami juga menyediakan training dan support penuh.",
    },
    {
      question: "Bagaimana dengan maintenance dan support?",
      answer:
        "Kami menyediakan maintenance rutin dan customer support yang responsif via WhatsApp untuk memastikan sistem Anda berjalan lancar.",
    },
    {
      question: "Apakah bisa custom sesuai brand kami?",
      answer:
        "Tentu! Kami dapat mengkustomisasi tampilan, warna, dan fitur sesuai dengan identitas brand dan kebutuhan bisnis Anda.",
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const galleryImages = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-12 md:px-20 lg:px-32">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold" style={{ color: "#001BB7" }}>
              Mediara
            </div>

            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-[#0046FF] transition-colors"
              >
                Home
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-[#0046FF] transition-colors"
              >
                Features
              </a>
              <a
                href="#gallery"
                className="text-gray-700 hover:text-[#0046FF] transition-colors"
              >
                Gallery
              </a>
              <a
                href="#faq"
                className="text-gray-700 hover:text-[#0046FF] transition-colors"
              >
                FAQ
              </a>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full text-white font-medium transition-all hover:scale-105"
              style={{ backgroundColor: "#0046FF" }}
            >
              <MessageCircle className="w-4 h-4" />
              Contact Us
            </a>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-8 py-4 space-y-3">
              <a
                href="#home"
                className="block text-gray-700 hover:text-[#0046FF]"
              >
                Home
              </a>
              <a
                href="#features"
                className="block text-gray-700 hover:text-[#0046FF]"
              >
                Features
              </a>
              <a
                href="#gallery"
                className="block text-gray-700 hover:text-[#0046FF]"
              >
                Gallery
              </a>
              <a
                href="#faq"
                className="block text-gray-700 hover:text-[#0046FF]"
              >
                FAQ
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-2 rounded-full text-white font-medium"
                style={{ backgroundColor: "#0046FF" }}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-24 md:pt-48 md:pb-32 px-12 md:px-20 lg:px-32"
        style={{ backgroundColor: "#001BB7" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div
              id="hero-content"
              data-animate
              className={`text-white transition-all duration-1000 ${isVisible["hero-content"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Digitalize Your Dining Experience with Mediara E-Menu
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Boost efficiency, reduce wait times, and increase sales with our
                integrated e-menu system.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-lg"
                style={{ backgroundColor: "#FF8040", color: "#FFFFFF" }}
              >
                <MessageCircle className="w-5 h-5" />
                Hubungi Kami via WhatsApp
              </a>
            </div>
            <div
              id="hero-image"
              data-animate
              className={`transition-all duration-1000 delay-300 ${isVisible["hero-image"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="aspect-square bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center">
                  <img
                    src={heroImg}
                    alt="Customer using E-Menu"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section
        className="py-24 md:py-32 px-12 md:px-20 lg:px-32"
        style={{ backgroundColor: "#F5F1DC" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div
              id="problem"
              data-animate
              className={`transition-all duration-1000 ${isVisible["problem"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ color: "#001BB7" }}
              >
                Masalah yang Sering Dihadapi
              </h2>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">❌</span>
                  <span>Antrian panjang karena proses pemesanan manual</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">❌</span>
                  <span>Kesalahan pencatatan pesanan oleh staff</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">❌</span>
                  <span>Sulit tracking penjualan dan inventori</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">❌</span>
                  <span>
                    Menu fisik yang mudah rusak dan mahal untuk update
                  </span>
                </li>
              </ul>
            </div>
            <div
              id="solution"
              data-animate
              className={`transition-all duration-1000 delay-300 ${isVisible["solution"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ color: "#0046FF" }}
              >
                Solusi dari Mediara
              </h2>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <span>
                    Pemesanan cepat dan efisien dengan e-menu interaktif
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <span>Pesanan langsung masuk ke dapur, minim kesalahan</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <span>
                    Dashboard analytics untuk monitor bisnis real-time
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <span>Update menu kapan saja tanpa cetak ulang</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-24 md:py-32 px-12 md:px-20 lg:px-32 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div
            id="features-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${isVisible["features-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "#001BB7" }}
            >
              Fitur Unggulan Mediara
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi lengkap untuk digitalisasi restoran Anda dengan teknologi
              terkini
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                id={`feature-${index}`}
                data-animate
                className={`p-8 rounded-2xl border-2 transition-all duration-1000 hover:shadow-xl hover:scale-105 ${isVisible[`feature-${index}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{
                  borderColor: "#0046FF",
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#E6EEFF", color: "#0046FF" }}
                >
                  {feature.icon}
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#001BB7" }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        className="py-24 md:py-32 px-12 md:px-20 lg:px-32"
        style={{ backgroundColor: "#0046FF" }}
      >
        <div className="max-w-7xl mx-auto">
          <div
            id="benefits-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${isVisible["benefits-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Kenapa Memilih Mediara?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                id={`benefit-${index}`}
                data-animate
                className={`bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 transition-all duration-1000 hover:bg-white/20 ${isVisible[`benefit-${index}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#FF8040" }}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  {benefit.title}
                </h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery/Mockup Section */}
      <section
        id="gallery"
        className="py-24 md:py-32 px-12 md:px-20 lg:px-32"
        style={{ backgroundColor: "#F5F1DC" }}
      >
        <div className="max-w-7xl mx-auto">
          <div
            id="gallery-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${isVisible["gallery-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "#001BB7" }}
            >
              Lihat E-Menu dalam Aksi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Screenshot aplikasi e-menu kami yang telah membantu berbagai
              bisnis F&B
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                id={`gallery-${index}`}
                data-animate
                className={`bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-1000 hover:shadow-2xl hover:scale-105 ${isVisible[`gallery-${index}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[9/16] bg-gray-100 relative group">
                  <img
                    src={img}
                    alt={`E-Menu Screenshot ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-24 md:py-32 px-12 md:px-20 lg:px-32"
        style={{ backgroundColor: "#001BB7" }}
      >
        <div className="max-w-4xl mx-auto">
          <div
            id="faq-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${isVisible["faq-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-blue-100">
              Pertanyaan yang sering ditanyakan tentang Mediara E-Menu
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                id={`faq-${index}`}
                data-animate
                className={`bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden transition-all duration-1000 ${isVisible[`faq-${index}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-white transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-blue-100">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-12 md:px-20 lg:px-32 bg-white">
        <div
          id="cta"
          data-animate
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible["cta"] ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "#001BB7" }}
          >
            Siap Digitalisasi Restoran Anda?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan puluhan bisnis F&B yang telah meningkatkan
            efisiensi dan penjualan mereka dengan Mediara E-Menu
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-xl font-bold transition-all hover:scale-105 shadow-xl"
            style={{ backgroundColor: "#FF8040", color: "#FFFFFF" }}
          >
            <MessageCircle className="w-6 h-6" />
            Konsultasi Gratis Sekarang
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-24 px-12 md:px-20 lg:px-32"
        style={{ backgroundColor: "#001BB7" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Mediara</h3>
              <p className="text-blue-100">
                Solusi E-Menu profesional untuk bisnis F&B modern
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h4>
              <div className="space-y-2">
                <a
                  href="#home"
                  className="block text-blue-100 hover:text-white transition-colors"
                >
                  Home
                </a>
                <a
                  href="#features"
                  className="block text-blue-100 hover:text-white transition-colors"
                >
                  Features
                </a>
                <a
                  href="#gallery"
                  className="block text-blue-100 hover:text-white transition-colors"
                >
                  Gallery
                </a>
                <a
                  href="#faq"
                  className="block text-blue-100 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Connect With Us
              </h4>
              <div className="space-y-3">
                <a
                  href="https://www.instagram.com/mediaraservice/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  @mediaraservice
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-blue-100">
              © 2024 Mediara. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 z-50"
        style={{ backgroundColor: "#FF8040" }}
      >
        <MessageCircle className="w-8 h-8" style={{ color: "#FFFFFF" }} />
      </a>
    </div>
  );
}

export default App;
