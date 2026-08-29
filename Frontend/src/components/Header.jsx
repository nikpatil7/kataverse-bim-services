// import { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { FaBars, FaTimes, FaShieldAlt } from 'react-icons/fa';

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     { name: 'Services', path: '/services' },
//     { name: 'Projects', path: '/projects' },
//   ];
//   const showAdminLink = true;

//   const isActive = (path) => location.pathname === path;

//   return (
//     <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100">
//       <nav className="container-custom py-4">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-3 group">
//             <img 
//               // src="/images/kataverse-logo-final.png" 
//               src="/images/kataverse-logo-updated.jpeg"
//               alt="KataVerse BIM Services" 
//               className="w-14 h-14 rounded-xl shadow-lg group-hover:scale-110 transition-transform object-cover"
//               loading="lazy"
//             />
//             <span className="text-xl font-bold text-secondary hidden sm:block tracking-tight">
//               KataVerse BIM Services
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`text-sm font-semibold transition-all duration-300 hover:text-primary relative group ${
//                   isActive(link.path)
//                     ? 'text-primary'
//                     : 'text-gray-600'
//                 }`}
//               >
//                 {link.name}
//                 <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
//                   isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
//                 }`}></span>
//               </Link>
//             ))}
//             {showAdminLink && (
//               <div className="relative group">
//                 <Link
//                   to="/admin"
//                   className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-primary transition-colors"
//                 >
//                   <FaShieldAlt className="opacity-70" />
//                   Admin
//                 </Link>
//                 <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/80 text-white text-xs px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
//                   Admin Dashboard
//                 </div>
//               </div>
//             )}
//             <Link
//               to="/contact"
//               className="bg-gradient-to-r from-accent to-accent/90 text-white px-7 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/30 hover:scale-105 transition-all duration-300"
//             >
//               Contact Us
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-2xl text-secondary hover:text-primary transition-colors"
//           >
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden mt-4 pb-4 border-t pt-4">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 onClick={() => setIsOpen(false)}
//                 className={`block py-2 text-base font-medium transition-colors ${
//                   isActive(link.path) ? 'text-primary' : 'text-gray-600'
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//             {showAdminLink && (
//               <div className="relative group">
//                 <Link
//                   to="/admin"
//                   onClick={() => setIsOpen(false)}
//                   className="block py-2 text-base font-medium text-gray-600 hover:text-primary transition-colors"
//                 >
//                   <span className="inline-flex items-center gap-2"><FaShieldAlt className="opacity-70" /> Admin</span>
//                 </Link>
//                 <div className="pointer-events-none absolute -bottom-8 left-0 whitespace-nowrap rounded-md bg-black/80 text-white text-xs px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
//                   Admin Dashboard
//                 </div>
//               </div>
//             )}
//             <Link
//               to="/contact"
//               onClick={() => setIsOpen(false)}
//               className="block mt-4 bg-primary text-white px-6 py-2 rounded-lg font-semibold text-center hover:bg-[#246273]"
//             >
//               Contact Us
//             </Link>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }
import { useState, useEffect } from "react";
import { Menu, X, Shield } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

// Update this path according to your actual logo location
const LOGO_PATH = "/images/branding/kataverse-transparent-logo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when screen becomes desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(11,31,42,0.10)]"
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      {/* Subtle top accent */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        
        {/* ================= LOGO ================= */}
        <Link
          to="/"
          className="group flex items-center shrink-0"
          aria-label="KataVerse BIM Services Home"
        >
          <div className="relative flex items-center">
            
            {/* Logo glow/effect */}
            <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

            <img
              src={LOGO_PATH}
              alt="KataVerse BIM Services"
              className="
                relative
                h-[62px]
                w-auto
                max-w-[280px]
                object-contain
                object-left
                transition-transform
                duration-300
                group-hover:scale-[1.02]

                sm:h-[66px]
                md:h-[68px]
              "
            />
          </div>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `
                relative px-4 py-3 text-[15px] font-medium
                transition-colors duration-200

                ${
                  isActive
                    ? "text-primary"
                    : "text-secondary/75 hover:text-secondary"
                }

                after:absolute
                after:bottom-[7px]
                after:left-1/2
                after:h-[2px]
                after:w-0
                after:-translate-x-1/2
                after:rounded-full
                after:bg-primary
                after:transition-all
                after:duration-300

                ${
                  isActive
                    ? "after:w-7"
                    : "hover:after:w-5"
                }
                `
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Admin */}
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `
              ml-2 flex items-center gap-2 rounded-xl
              px-4 py-2.5 text-[15px] font-medium
              transition-all duration-200

              ${
                isActive
                  ? "bg-secondary/5 text-secondary"
                  : "text-secondary/70 hover:bg-secondary/5 hover:text-secondary"
              }
              `
            }
          >
            <Shield size={16} strokeWidth={1.8} />
            Admin
          </NavLink>

          {/* Contact CTA */}
          <Link
            to="/contact"
            className="
              ml-4 inline-flex items-center justify-center
              rounded-xl
              bg-gradient-to-r from-[#D96F3D] to-accent
              px-6 py-3
              text-[15px] font-semibold text-white
              shadow-[0_8px_20px_rgba(230,126,77,0.22)]
              transition-all duration-300

              hover:-translate-y-[1px]
              hover:shadow-[0_12px_28px_rgba(230,126,77,0.32)]
              active:translate-y-0
            "
          >
            Contact Us
          </Link>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="
            relative flex h-12 w-12 items-center justify-center
            rounded-2xl
            border border-secondary/10
            bg-white
            text-secondary
            shadow-[0_4px_14px_rgba(11,31,42,0.08)]
            transition-all duration-300

            hover:border-primary/30
            hover:bg-primary/5
            hover:text-primary
            active:scale-95

            md:hidden
          "
        >
          {isOpen ? (
            <X size={24} strokeWidth={2.2} />
          ) : (
            <Menu size={25} strokeWidth={2.2} />
          )}
        </button>
      </div>

      {/* ================= MOBILE NAV ================= */}
      <div
        className={`
          overflow-hidden border-t border-secondary/5
          bg-white/98 backdrop-blur-xl
          transition-all duration-300 ease-out
          md:hidden

          ${
            isOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <nav className="mx-auto max-w-7xl px-5 py-4 sm:px-6">
          
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `
                mb-1 flex items-center justify-between
                rounded-xl px-4 py-3.5
                text-[16px] font-medium
                transition-all duration-200

                ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-secondary/80 hover:bg-secondary/5"
                }
                `
              }
            >
              {item.name}

              <span
                className={`h-2 w-2 rounded-full transition-all ${
                  location.pathname === item.path
                    ? "bg-primary"
                    : "bg-transparent"
                }`}
              />
            </NavLink>
          ))}

          <NavLink
            to="/admin"
            onClick={() => setIsOpen(false)}
            className="
              mb-4 flex items-center gap-3
              rounded-xl px-4 py-3.5
              text-[16px] font-medium text-secondary/80
              hover:bg-secondary/5
            "
          >
            <Shield size={18} />
            Admin
          </NavLink>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="
              flex w-full items-center justify-center
              rounded-xl
              bg-gradient-to-r from-[#D96F3D] to-accent
              px-5 py-4
              font-semibold text-white
              shadow-[0_8px_20px_rgba(230,126,77,0.22)]
            "
          >
            Contact Us
          </Link>

        </nav>
      </div>
    </header>
  );
}