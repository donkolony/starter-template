import React from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [active, setActive] = React.useState("hero");

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "features", "contact"];
      const scrollPos = window.scrollY + 150;

      for (let sec of sections) {
        const element = document.getElementById(sec);
        if (
          element &&
          element.offsetTop <= scrollPos &&
          element.offsetTop + element.offsetHeight > scrollPos
        ) {
          setActive(sec);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-md z-50 transition duration-300">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <h1 className="text-xl font-bold text-blue-700">YourBrand</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <button
              onClick={() =>
                document
                  .getElementById("hero")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className={`hover:text-blue-600 ${
                active === "hero" ? "text-blue-600 font-semibold" : ""
              }`}
            >
              Home
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className={`hover:text-blue-600 ${
                active === "about" ? "text-blue-600 font-semibold" : ""
              }`}
            >
              About
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("features")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className={`hover:text-blue-600 ${
                active === "features" ? "text-blue-600 font-semibold" : ""
              }`}
            >
              Features
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className={`hover:text-blue-600 ${
                active === "contact" ? "text-blue-600 font-semibold" : ""
              }`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-6 h-0.5 bg-gray-700 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-700 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-700"></div>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg flex flex-col p-4 space-y-3 text-gray-700 font-medium animate-fadeIn">
            <button
              onClick={() => {
                document
                  .getElementById("hero")
                  .scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }}
            >
              Home
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }}
            >
              About
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("features")
                  .scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }}
            >
              Features
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }}
            >
              Contact
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 text-center pt-32"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Modern One‑Page Website
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl opacity-90">
          A clean, simple, and professional one‑page design built with React &
          TailwindCSS.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition">
          Get Started
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">About the Service</h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          This Starter Package includes a high‑quality landing page to showcase
          your brand, product, or service. Designed to be fast, responsive, and
          visually engaging.
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">What You Get</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <h3 className="font-semibold text-xl mb-2">Clean Layout</h3>
            <p className="text-gray-600">
              Simple, professional design focused on clarity and conversion.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <h3 className="font-semibold text-xl mb-2">Fully Responsive</h3>
            <p className="text-gray-600">
              Optimized for all screen sizes — mobile, tablet, and desktop.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <h3 className="font-semibold text-xl mb-2">Fast Performance</h3>
            <p className="text-gray-600">
              Built with best practices to ensure smooth user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contact"
        className="py-20 px-6 bg-blue-600 text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-4">
          Want This for Your Business?
        </h2>
        <p className="max-w-2xl mx-auto text-blue-100 text-lg mb-6">
          This is an example of what your one‑page website could look like.
        </p>
        <button className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition">
          Contact Me
        </button>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-900 text-gray-400 text-sm">
        © {new Date().getFullYear()} Your Brand Name. All rights reserved.
      </footer>
    </div>
  );
}
