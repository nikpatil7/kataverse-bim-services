// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const Preloader = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     document.body.style.overflow = 'hidden';
    
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//       document.body.style.overflow = 'unset';
//     }, 2000);

//     return () => {
//       clearTimeout(timer);
//       document.body.style.overflow = 'unset';
//     };
//   }, []);

//   return (
//     <AnimatePresence mode="wait">
//       {isLoading && (
//         <motion.div
//           initial={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.4 }}
//           className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-900"
//           style={{ willChange: 'opacity' }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-teal-900/20" />

//           <div className="relative z-10 flex flex-col items-center gap-8">
//             {/* Logo */}
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="w-48 h-48 md:w-56 md:h-56">
//                 <img 
//                   src="/images/kataverse-logo-final.png" 
//                   alt="KataVerse BIM Services" 
//                   className="w-full h-full object-contain rounded-2xl shadow-2xl" 
//                 />
//               </div>
//             </motion.div>

//             {/* Company name */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.2, duration: 0.3 }}
//               className="text-center"
//             >
//               <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">
//                 KataVerse BIM Services
//               </h1>
//               <p className="text-gray-400 text-sm md:text-base">
//                 Building Virtually and Visually
//               </p>
//             </motion.div>

//             {/* Modern dot wave loader */}
//             <div className="flex gap-2">
//               {[0, 1, 2, 3, 4].map((index) => (
//                 <motion.div
//                   key={index}
//                   className="w-3 h-3 bg-blue-500 rounded-full"
//                   animate={{
//                     y: [0, -20, 0],
//                     backgroundColor: ['#3b82f6', '#14b8a6', '#3b82f6'],
//                   }}
//                   transition={{
//                     duration: 0.8,
//                     repeat: Infinity,
//                     delay: index * 0.1,
//                     ease: 'easeInOut',
//                   }}
//                 />
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Preloader;

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PRELOADER_DURATION = 3200;

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = '';
    }, PRELOADER_DURATION);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.65,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#11161b]"
        >
          {/* Subtle background atmosphere */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,122,142,0.14),transparent_55%)]" />

          {/* Very subtle architectural grid */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.025]
              bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
              bg-[size:70px_70px]
            "
          />

          {/* Soft ambient glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="
              absolute
              w-[420px]
              h-[420px]
              rounded-full
              bg-[#2d7a8e]/[0.06]
              blur-[100px]
            "
          />

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center">

            {/* Small brand category */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="w-8 h-px bg-[#2d7a8e]" />

              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.35em] text-[#75c8d8]">
                BIM • MEP • VDC
              </span>

              <span className="w-8 h-px bg-[#2d7a8e]" />
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.88,
                y: 12,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              {/* Logo glow */}
              <div className="absolute inset-0 bg-[#2d7a8e]/10 blur-3xl" />

              <img
                src="/images/branding/kataverse-symbol.png"
                alt="KataVerse BIM Services"
                className="
                  relative
                  w-[230px]
                  sm:w-[280px]
                  md:w-[330px]
                  h-auto
                  object-contain
                "
                loading="eager"
                decoding="async"
              />
            </motion.div>

            {/* Company name */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.65,
                duration: 0.5,
              }}
              className="
                mt-7
                text-2xl
                sm:text-3xl
                font-semibold
                tracking-tight
                text-white
              "
            >
              KataVerse BIM Services
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.9,
                duration: 0.5,
              }}
              className="
                mt-2
                text-sm
                sm:text-base
                tracking-wide
                text-gray-400
              "
            >
              Building Virtually and Visually
            </motion.p>

            {/* Loading indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.15,
                duration: 0.5,
              }}
              className="mt-10 flex items-center gap-2"
            >
              {[0, 1, 2, 3, 4].map((index) => (
                <motion.span
                  key={index}
                  className="block w-2.5 h-2.5 rounded-full"
                  style={{
                    backgroundColor:
                      index === 4 ? '#c9a44c' : '#2d7a8e',
                  }}
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.35, 1, 0.35],
                    scale: [0.85, 1, 0.85],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: index * 0.12,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </motion.div>

            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.3,
                duration: 0.5,
              }}
              className="
                mt-4
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-gray-600
              "
            >
              Preparing your experience
            </motion.p>
          </div>

          {/* Bottom subtle branding */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.4,
              duration: 0.5,
            }}
            className="
              absolute
              bottom-7
              left-0
              right-0
              flex
              justify-center
            "
          >
            <span className="text-[8px] uppercase tracking-[0.35em] text-gray-700">
              Precision • Coordination • Visualization
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;