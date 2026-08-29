// import { Link } from 'react-router-dom';
// import { FaLinkedin, FaTwitter, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt, FaShieldAlt } from 'react-icons/fa';
// import siteConfig from '../config/siteConfig';

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gradient-to-br from-secondary via-[#1a1c1c] to-secondary text-white relative overflow-hidden">
//       {/* Decorative Top Border */}
//       <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
      
//       <div className="container-custom py-16 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//           {/* Company Info */}
//           <div>
//             <div className="flex items-center gap-3 mb-6">
//               <img 
//                 // src="/images/kataverse-logo-final.png" 
//                 src="/images/branding/kataverse-symbol.png"
//                 alt="KataVerse BIM Services" 
//                 className="w-16 h-16 rounded-xl shadow-lg object-cover"
//                 loading="lazy"
//               />
//               <span className="text-xl font-bold text-white tracking-tight">
//                 KataVerse BIM Services
//               </span>
//             </div>
//             <p className="text-gray-400 text-sm mb-6 leading-relaxed">
//               Your dedicated partner for advanced BIM solutions, specializing in MEPF disciplines. We empower engineers, contractors, and subcontractors to achieve superior project delivery.
//             </p>
//             <div className="flex gap-4">
//               <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" 
//                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all hover:scale-110">
//                 <FaLinkedin size={20} />
//               </a>
//               <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer"
//                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all hover:scale-110">
//                 <FaTwitter size={20} />
//               </a>
//               <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer"
//                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all hover:scale-110">
//                 <FaFacebook size={20} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-bold mb-6 text-accent">Quick Links</h3>
//             <ul className="space-y-3">
//               <li>
//                 <Link to="/" className="text-gray-400 hover:text-white hover:pl-2 transition-all inline-block">
//                   → Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about" className="text-gray-400 hover:text-white hover:pl-2 transition-all inline-block">
//                   → About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/services" className="text-gray-400 hover:text-white hover:pl-2 transition-all inline-block">
//                   → Services
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/projects" className="text-gray-400 hover:text-white hover:pl-2 transition-all inline-block">
//                   → Projects
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contact" className="text-gray-400 hover:text-white hover:pl-2 transition-all inline-block">
//                   → Contact
//                 </Link>
//               </li>
//               <li className="relative group">
//                 <Link to="/admin" className="text-gray-400 hover:text-white hover:pl-2 transition-all inline-flex items-center gap-2">
//                   → Admin <FaShieldAlt className="opacity-70" />
//                 </Link>
//                 <div className="pointer-events-none absolute -top-8 left-0 whitespace-nowrap rounded-md bg-black/80 text-white text-xs px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
//                   Admin Dashboard
//                 </div>
//               </li>
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-lg font-bold mb-6 text-accent">Our Services</h3>
//             <ul className="space-y-3 text-gray-400 text-sm">
//               <li className="hover:text-white transition-colors cursor-default">• MEPF Services</li>
//               <li className="hover:text-white transition-colors cursor-default">• MEP Coordination</li>
//               <li className="hover:text-white transition-colors cursor-default">• MEP Modeling</li>
//               <li className="hover:text-white transition-colors cursor-default">• MEP Shop Drawings</li>
//               <li className="hover:text-white transition-colors cursor-default">• Clash Detection</li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-bold mb-6 text-accent">Contact Us</h3>
//             <ul className="space-y-4 text-gray-400 text-sm">
//               <li className="flex items-start gap-3 group hover:text-white transition-colors">
//                 <FaEnvelope className="mt-1 flex-shrink-0 text-accent" />
//                 <span>{siteConfig.contact.email}</span>
//               </li>
//               <li className="flex items-start gap-3 group hover:text-white transition-colors">
//                 <FaPhone className="mt-1 flex-shrink-0 text-accent" />
//                 <span>{siteConfig.contact.phone}</span>
//               </li>
//               <li className="flex items-start gap-3 group hover:text-white transition-colors">
//                 <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-accent" />
//                 <span>{siteConfig.contact.address}</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
//           <p>&copy; {currentYear} {siteConfig.siteName}. All rights reserved. | Built with precision and passion.</p>
//         </div>
//       </div>
      
//       {/* Background Decoration */}
//       <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl -z-0"></div>
//       <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl -z-0"></div>
//     </footer>
//   );
// }
import { Link } from 'react-router-dom';
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaArrowRight,
} from 'react-icons/fa';
import siteConfig from '../config/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    'MEPF Services',
    'MEP Coordination',
    'MEP Modeling',
    'MEP Shop Drawings',
    'Clash Detection',
  ];

  const quickLinks = [
    ['Home', '/'],
    ['About Us', '/about'],
    ['Services', '/services'],
    ['Projects', '/projects'],
    ['Contact', '/contact'],
  ];

  return (
    <footer className="relative overflow-hidden bg-[#0d171c] text-white">

      {/* =========================================================
          TOP ACCENT LINE
      ========================================================= */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-primary to-accent" />

      {/* =========================================================
          BACKGROUND ARCHITECTURAL DETAILS
      ========================================================= */}

      {/* Subtle architectural grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
          bg-[size:70px_70px]
        "
      />

      {/* Ambient glows */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          bottom-0
          h-80
          w-80
          rounded-full
          bg-primary/[0.07]
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-0
          h-80
          w-80
          rounded-full
          bg-accent/[0.06]
          blur-[100px]
        "
      />

      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}

      <div className="container-custom relative z-10">

        {/* =======================================================
            TOP CTA / BRAND STATEMENT
        ======================================================= */}

        <div
          className="
            flex
            flex-col
            gap-6
            border-b
            border-white/[0.08]
            py-9
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <div>
            <p
              className="
                mb-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-primary
              "
            >
              BIM • MEP • VDC
            </p>

            <h2
              className="
                text-2xl
                font-semibold
                tracking-tight
                text-white
                md:text-3xl
              "
            >
              Building better, before construction begins.
            </h2>

            <p
              className="
                mt-2
                max-w-2xl
                text-sm
                leading-6
                text-gray-400
              "
            >
              Precision BIM modeling, coordination and visualization
              for modern construction projects.
            </p>
          </div>

          <Link
            to="/contact"
            className="
              inline-flex
              w-fit
              shrink-0
              items-center
              gap-3
              rounded-lg
              bg-accent
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              shadow-lg
              shadow-accent/10
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-accent/90
              hover:shadow-xl
            "
          >
            Start a Conversation
            <FaArrowRight className="text-xs" />
          </Link>
        </div>

        {/* =======================================================
            FOUR COLUMN CONTENT
        ======================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-12
            py-12
            sm:grid-cols-2
            lg:grid-cols-[1.35fr_0.8fr_1fr_1.2fr]
            lg:gap-14
          "
        >

          {/* =====================================================
              COMPANY
          ===================================================== */}

          <div>

            {/* Brand */}
            <Link
              to="/"
              className="
                group
                inline-flex
                items-center
                gap-4
              "
              aria-label="KataVerse BIM Services - Home"
            >

              {/* Larger transparent symbol */}
              <div
                className="
                  flex
                  h-[88px]
                  w-[88px]
                  shrink-0
                  items-center
                  justify-center
                  overflow-visible
                  sm:h-[96px]
                  sm:w-[96px]
                "
              >
                <img
                  src="/images/branding/kataverse-symbol.png"
                  alt="KataVerse BIM Services"
                  className="
                    h-full
                    w-full
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-[1.04]
                  "
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Brand text */}
              <div className="flex flex-col">
                <div
                  className="
                    text-[22px]
                    font-bold
                    leading-none
                    tracking-tight
                    text-white
                  "
                >
                  KataVerse
                </div>

                <div
                  className="
                    mt-2
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-gray-400
                  "
                >
                  BIM Services
                </div>
              </div>
            </Link>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-sm
                text-sm
                leading-7
                text-gray-400
              "
            >
              Your dedicated partner for advanced BIM solutions,
              specializing in MEPF disciplines. We empower engineers,
              contractors and subcontractors to achieve superior
              project delivery.
            </p>

            {/* Social */}
            <div className="mt-7 flex items-center gap-3">

              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/[0.08]
                  bg-white/[0.04]
                  text-gray-400
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/40
                  hover:bg-primary
                  hover:text-white
                "
              >
                <FaLinkedin size={17} />
              </a>

              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/[0.08]
                  bg-white/[0.04]
                  text-gray-400
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/40
                  hover:bg-primary
                  hover:text-white
                "
              >
                <FaTwitter size={17} />
              </a>

              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/[0.08]
                  bg-white/[0.04]
                  text-gray-400
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/40
                  hover:bg-primary
                  hover:text-white
                "
              >
                <FaFacebook size={17} />
              </a>

            </div>
          </div>

          {/* =====================================================
              QUICK LINKS
          ===================================================== */}

          <div>
            <h3
              className="
                mb-6
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white
              "
            >
              Explore
            </h3>

            <ul className="space-y-4">

              {quickLinks.map(([name, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      text-gray-400
                      transition-colors
                      duration-200
                      hover:text-white
                    "
                  >
                    <span
                      className="
                        h-px
                        w-0
                        bg-accent
                        transition-all
                        duration-300
                        group-hover:w-3
                      "
                    />

                    {name}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  to="/admin"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    text-gray-500
                    transition-colors
                    hover:text-white
                  "
                >
                  <FaShieldAlt className="text-xs opacity-60" />
                  Admin
                </Link>
              </li>

            </ul>
          </div>

          {/* =====================================================
              SERVICES
          ===================================================== */}

          <div>
            <h3
              className="
                mb-6
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white
              "
            >
              Capabilities
            </h3>

            <ul className="space-y-4">

              {services.map((service) => (
                <li
                  key={service}
                  className="
                    flex
                    items-center
                    gap-3
                    text-sm
                    text-gray-400
                    transition-colors
                    duration-200
                    hover:text-white
                  "
                >
                  <span
                    className="
                      h-1
                      w-1
                      shrink-0
                      rounded-full
                      bg-primary
                    "
                  />

                  {service}
                </li>
              ))}

            </ul>
          </div>

          {/* =====================================================
              CONTACT
          ===================================================== */}

          <div>
            <h3
              className="
                mb-6
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white
              "
            >
              Contact
            </h3>

            <ul className="space-y-5 text-sm">

              {/* Email */}
              <li className="flex items-start gap-4">

                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/[0.07]
                    bg-white/[0.04]
                    text-accent
                  "
                >
                  <FaEnvelope size={14} />
                </span>

                <div className="min-w-0">
                  <p
                    className="
                      mb-1
                      text-[10px]
                      uppercase
                      tracking-[0.15em]
                      text-gray-600
                    "
                  >
                    Email
                  </p>

                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="
                      break-all
                      leading-6
                      text-gray-400
                      transition-colors
                      hover:text-white
                    "
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>

              </li>

              {/* Phone */}
              <li className="flex items-start gap-4">

                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/[0.07]
                    bg-white/[0.04]
                    text-accent
                  "
                >
                  <FaPhone size={14} />
                </span>

                <div>
                  <p
                    className="
                      mb-1
                      text-[10px]
                      uppercase
                      tracking-[0.15em]
                      text-gray-600
                    "
                  >
                    Phone
                  </p>

                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="
                      text-gray-400
                      transition-colors
                      hover:text-white
                    "
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>

              </li>

              {/* Location */}
              <li className="flex items-start gap-4">

                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/[0.07]
                    bg-white/[0.04]
                    text-accent
                  "
                >
                  <FaMapMarkerAlt size={14} />
                </span>

                <div>
                  <p
                    className="
                      mb-1
                      text-[10px]
                      uppercase
                      tracking-[0.15em]
                      text-gray-600
                    "
                  >
                    Location
                  </p>

                  <span
                    className="
                      leading-6
                      text-gray-400
                    "
                  >
                    {siteConfig.contact.address}
                  </span>
                </div>

              </li>

            </ul>
          </div>

        </div>

        {/* =======================================================
            BOTTOM BAR
        ======================================================= */}

        <div
          className="
            flex
            flex-col
            gap-4
            border-t
            border-white/[0.08]
            py-6
            text-xs
            text-gray-500
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <p>
            © {currentYear} {siteConfig.siteName}. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <span className="hidden h-3 w-px bg-white/10 sm:block" />

            <span className="tracking-wide">
              Precision • Coordination • Visualization
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-accent sm:block" />

            <span className="hidden sm:block">
              Built with precision and passion.
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
}