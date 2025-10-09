import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import QualtyLogo from "../assets/QualtyLogo.png";
import { useSelector } from "react-redux";

const NewHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user?.user);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
  ];
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-black text-white shadow-md transition-all duration-300 font-sans ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 py-1 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105"
          onClick={() => navigate("/")}
        >
          <img
            src={QualtyLogo}
            alt="Qualty.AI Logo"
            className="h-20 w-20 rounded-full shadow-sm"
          />
        </div>

        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              to={href}
              className="relative text-md font-normal text-white hover:text-black hover:bg-white px-4 py-1 rounded-lg transition duration-300"
            >
              {label}
              <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-white scale-x-0 hover:scale-x-100 origin-left transition-transform duration-300" />
            </Link>
          ))}

          {user ? (
            <button
              onClick={() => navigate(`/${user.role}/dashboard`)}
              className="px-4 py-2 bg-white text-black cursor-pointer rounded-md text-sm font-semibold shadow hover:bg-gray-200 transition-transform hover:scale-105"
            >
              Dashboard
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-2 bg-white text-black cursor-pointer rounded-md text-sm font-semibold shadow hover:bg-gray-200 transition-transform hover:scale-105"
            >
              Login
            </button>
          )}
        </nav>

        <button
          className="md:hidden p-2 rounded-md bg-gray-900 hover:bg-gray-800 transition-all"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={24} color="white" />
          ) : (
            <Menu size={24} color="white" />
          )}
        </button>
      </div>

      <div
        className={`md:hidden bg-black transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen
            ? "max-h-[500px] py-4 px-6 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 animate-fade-in">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className="text-base text-white hover:text-gray-300 transition-colors"
            >
              {label}
            </a>
          ))}

          {user ? (
            <button
              onClick={() => {
                navigate(`/${user.role}/dashboard`);
                setIsMenuOpen(false);
              }}
              className="px-4 py-2 bg-white text-black cursor-pointer rounded-md text-sm font-medium shadow hover:bg-gray-200 transition-transform hover:scale-105"
            >
              Dashboard
            </button>
          ) : (
            <button
              onClick={() => {
                handleAuthClick();
                setIsMenuOpen(false);
              }}
              className="px-4 py-2 bg-white text-black cursor-pointer rounded-md text-sm font-medium shadow hover:bg-gray-200 transition-transform hover:scale-105"
            >
              Login
            </button>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default NewHeader;
