
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  FaCogs,
  FaList,
  FaQuoteRight,
  FaFolderOpen,
  FaInbox,
  FaSignOutAlt,
  FaHome,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const AdminLayout = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Protect admin routes
  useEffect(() => {
    const token = localStorage.getItem('adminToken');

    if (!token) {
      navigate('/admin/login', { replace: true });
    }
  }, [navigate]);

  // Close drawer when screen becomes desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setDrawerOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close drawer with Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setDrawerOpen(false);
      }
    };

    if (drawerOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [drawerOpen]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login', { replace: true });
  };

  const handleNavClick = () => {
    setDrawerOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    `group flex items-center gap-3 px-4 py-3 rounded-xl
     transition-all duration-200 font-semibold text-base
     cursor-pointer select-none
     ${
       isActive
         ? 'bg-accent/15 text-primary border-l-4 border-accent'
         : 'text-gray-700 hover:bg-primary/10 hover:text-primary'
     }`;

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">

      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8">
          <div className="h-16 flex items-center justify-between">

            {/* Left side */}
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">

              {/* Mobile / Tablet Menu Button */}
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="
                  lg:hidden
                  flex items-center justify-center
                  w-11 h-11
                  rounded-lg
                  text-secondary
                  hover:bg-gray-100
                  focus:outline-none
                  focus:ring-2
                  focus:ring-accent/50
                  transition
                "
                aria-label="Open navigation menu"
                aria-expanded={drawerOpen}
              >
                <FaBars className="text-xl sm:text-2xl" />
              </button>

              {/* Desktop Home Icon */}
              <FaHome className="hidden lg:block text-primary text-lg" />

              <div className="min-w-0">
                <h1 className="font-bold text-secondary text-base sm:text-lg truncate">
                  Admin Dashboard
                </h1>

                <p className="hidden sm:block text-xs text-gray-500">
                  Manage your website
                </p>
              </div>
            </div>

            {/* Logout */}
            <button
              type="button"
              onClick={handleLogout}
              className="
                flex items-center justify-center gap-2
                px-3 sm:px-4
                h-10 sm:h-11
                rounded-lg
                text-red-600
                hover:bg-red-50
                hover:text-red-700
                transition
                font-medium
              "
              aria-label="Logout"
            >
              <FaSignOutAlt className="text-base sm:text-lg" />

              <span className="hidden sm:inline">
                Logout
              </span>
            </button>
          </div>
        </div>
      </header>


      {/* =====================================================
          MOBILE DRAWER OVERLAY
      ===================================================== */}
      {drawerOpen && (
        <div
          className="
            fixed inset-0
            z-50
            bg-black/40
            backdrop-blur-[2px]
            lg:hidden
          "
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        />
      )}


      {/* =====================================================
          MOBILE DRAWER
      ===================================================== */}
      <aside
        className={`
          fixed
          top-0
          left-0
          bottom-0
          z-[60]
          w-[280px]
          max-w-[85vw]
          bg-white
          shadow-2xl
          transform
          transition-transform
          duration-300
          ease-in-out
          lg:hidden
          ${
            drawerOpen
              ? 'translate-x-0'
              : '-translate-x-full'
          }
        `}
        aria-label="Mobile navigation"
      >

        {/* Drawer Header */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-gray-200">

          <div className="flex items-center gap-2">
            <FaHome className="text-primary" />

            <span className="font-bold text-secondary">
              Admin Menu
            </span>
          </div>

          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            className="
              flex items-center justify-center
              w-10 h-10
              rounded-lg
              text-gray-600
              hover:bg-gray-100
              hover:text-secondary
              transition
            "
            aria-label="Close navigation menu"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>


        {/* Mobile Navigation */}
        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100%-64px)]">

          <NavLink
            to="/admin"
            end
            className={navLinkClass}
            onClick={handleNavClick}
          >
            <FaHome className="text-xl" />
            <span>Overview</span>
          </NavLink>

          <NavLink
            to="/admin/projects"
            className={navLinkClass}
            onClick={handleNavClick}
          >
            <FaFolderOpen className="text-xl" />
            <span>Projects</span>
          </NavLink>

          <NavLink
            to="/admin/testimonials"
            className={navLinkClass}
            onClick={handleNavClick}
          >
            <FaQuoteRight className="text-xl" />
            <span>Testimonials</span>
          </NavLink>

          <NavLink
            to="/admin/inquiries"
            className={navLinkClass}
            onClick={handleNavClick}
          >
            <FaInbox className="text-xl" />
            <span>Inquiries</span>
          </NavLink>

          <NavLink
            to="/admin/services"
            className={navLinkClass}
            onClick={handleNavClick}
          >
            <FaList className="text-xl" />
            <span>Services</span>
          </NavLink>

          <NavLink
            to="/admin/settings"
            className={navLinkClass}
            onClick={handleNavClick}
          >
            <FaCogs className="text-xl" />
            <span>Settings</span>
          </NavLink>

        </nav>
      </aside>


      {/* =====================================================
          DESKTOP CONTENT LAYOUT
      ===================================================== */}
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8 py-4 sm:py-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">

          {/* =================================================
              DESKTOP SIDEBAR
          ================================================= */}
          <aside
            className="
              hidden
              lg:block
              lg:col-span-3
              sticky
              top-20
              self-start
              bg-white
              rounded-2xl
              border
              border-gray-200
              shadow-sm
              p-5
            "
            aria-label="Desktop navigation"
          >

            <div className="mb-5 px-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Navigation
              </p>
            </div>

            <nav className="space-y-1">

              <NavLink
                to="/admin"
                end
                className={navLinkClass}
              >
                <FaHome className="text-xl group-hover:scale-110 transition-transform" />
                <span>Overview</span>
              </NavLink>

              <NavLink
                to="/admin/projects"
                className={navLinkClass}
              >
                <FaFolderOpen className="text-xl group-hover:scale-110 transition-transform" />
                <span>Projects</span>
              </NavLink>

              <NavLink
                to="/admin/testimonials"
                className={navLinkClass}
              >
                <FaQuoteRight className="text-xl group-hover:scale-110 transition-transform" />
                <span>Testimonials</span>
              </NavLink>

              <NavLink
                to="/admin/inquiries"
                className={navLinkClass}
              >
                <FaInbox className="text-xl group-hover:scale-110 transition-transform" />
                <span>Inquiries</span>
              </NavLink>

              <NavLink
                to="/admin/services"
                className={navLinkClass}
              >
                <FaList className="text-xl group-hover:scale-110 transition-transform" />
                <span>Services</span>
              </NavLink>

              <NavLink
                to="/admin/settings"
                className={navLinkClass}
              >
                <FaCogs className="text-xl group-hover:scale-110 transition-transform" />
                <span>Settings</span>
              </NavLink>

            </nav>
          </aside>


          {/* =================================================
              MAIN CONTENT
          ================================================= */}
          <main
            className="
              lg:col-span-9
              min-w-0
              w-full
            "
          >
            <Outlet />
          </main>

        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
