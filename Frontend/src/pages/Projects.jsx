import { useEffect, useState, useMemo } from 'react';
// Parallax for hero background (like About)
function useParallax(speed = 0.15) {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * speed);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
  return offset;
}
import { FaStar, FaTimes, FaDownload, FaImages, FaSearch, FaTh, FaList, FaSort } from 'react-icons/fa';
import { getProjects } from '../utils/api';
import SEO from '../components/SEO';
import RegionSelector from '../components/RegionSelector';
import UKComingSoonCard from '../components/UKComingSoonCard';
import { useNavigate } from 'react-router-dom';
import { ProjectCardSkeleton } from '../components/ui/Skeleton';
import imageConfig from '../config/imageConfig';

// Available regions - easily extensible for future expansion
const AVAILABLE_REGIONS = [
  { value: 'USA', label: '🇺🇸 USA', flag: '🇺🇸' },
  { value: 'UK', label: '🇬🇧 UK', flag: '🇬🇧' },
  // Future regions can be added here:
  // { value: 'Canada', label: '🇨🇦 Canada', flag: '🇨🇦' },
  // { value: 'Australia', label: '🇦🇺 Australia', flag: '🇦🇺' },
];

const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'High-Rise', 'Others'];

// Coming soon card data - customize per region
const COMING_SOON_REGIONS = {
  UK: {
    flag: '🇬🇧',
    title: 'UK Market Expansion',
    tagline: 'Building Virtually and Visually across UK',
    description: 'We\'re actively developing our MEP coordination and BIM modeling capabilities for the United Kingdom market. Our team is preparing to deliver the same industry-leading standards that define KataVerse\'s work across the USA.',
    launchDate: 'Coming 2025',
  },
  // Future coming soon regions:
  // Canada: { ... },
  // Australia: { ... },
};

export default function Projects() {
    const offset = useParallax(0.15);
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState('USA');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [displayCount, setDisplayCount] = useState(6);
  const [pagination, setPagination] = useState({ hasMore: false, totalPages: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest'); // newest, oldest, alphabetical
  const [viewMode, setViewMode] = useState('grid'); // grid, list

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError('');
        console.log('Fetching projects with:', { selectedCategory, currentPage, selectedRegion });
        
        // Only fetch projects if the region has active projects (not a coming soon region)
        if (!COMING_SOON_REGIONS[selectedRegion]) {
          const res = await getProjects(
            selectedCategory === 'All' ? null : selectedCategory,
            currentPage,
            20 // Fetch 20 per page
          );
          console.log('Projects response:', res);
          
          if (currentPage === 1) {
            setProjects(res.data || []);
          } else {
            // Append for pagination
            setProjects(prev => [...prev, ...(res.data || [])]);
          }
          
          setPagination(res.pagination || { hasMore: false });
        } else {
          // Coming soon region - no projects to fetch
          setProjects([]);
          setPagination({ hasMore: false, totalPages: 0 });
        }
        setDisplayCount(6); // Reset display count on region/category change
      } catch (e) {
        console.error('Error fetching projects:', e);
        setError(e.response?.data?.error || e.message || 'Failed to load projects');
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, [selectedCategory, currentPage, selectedRegion]);

  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = [...projects];

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(project => 
        project.title?.toLowerCase().includes(query) ||
        project.description?.toLowerCase().includes(query) ||
        project.category?.toLowerCase().includes(query) ||
        project.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Sort projects
    switch (sortBy) {
      case 'oldest':
        filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        break;
      case 'alphabetical':
        filtered.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
        break;
      case 'newest':
      default:
        filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
    }

    return filtered;
  }, [projects, searchQuery, sortBy]);

  const displayedProjects = filteredAndSortedProjects.slice(0, displayCount);
  const hasMore = displayCount < filteredAndSortedProjects.length;
  const hasProjectsInRegion = projects.length > 0;
  const isComingSoonRegion = COMING_SOON_REGIONS[selectedRegion];

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
    setSelectedCategory('All');
    setCurrentPage(1);
    setProjects([]);
  };

  return (
    <div className="min-h-screen bg-light">
      <SEO
        title="Projects — KataVerse BIM Services"
        description="Explore KataVerse BIM Services portfolio across commercial, residential, industrial, and educational sectors in the USA and UK."
        url="https://www.kataversebim.com/projects"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 bg-[#0B1F2A] text-white overflow-hidden" data-aos="fade-up">
        {/* Background Image + Parallax (like About) */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-55 will-change-transform transition-transform duration-75"
            style={{
              backgroundImage:
                "url('/vectors/city/5779c9_60490090342d4d6cae77a378551f35f7~mv2.avif')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'brightness(0.45) contrast(1.15)',
              transform: `translateY(${offset}px)`,
            }}
          />
          {/* Stronger gradient for clean text */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F2A]/95 via-[#0B1F2A]/92 to-[#0B1F2A]/97" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F2A]/96 via-transparent to-transparent" />
        </div>
        
        {/* Blueprint Grid Pattern - Technical Drawing Style */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="blueprint-grid-projects" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#14B8A6" strokeWidth="0.5" opacity="0.4"/>
              </pattern>
              <pattern id="blueprint-dots-projects" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="#14B8A6" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blueprint-grid-projects)" />
            <rect width="100%" height="100%" fill="url(#blueprint-dots-projects)" />
          </svg>
        </div>
        
        {/* Technical Measurement Lines */}
        <div className="absolute inset-0 opacity-8">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="measurement-lines-projects" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <line x1="0" y1="50" x2="100" y2="50" stroke="#14B8A6" strokeWidth="0.3" opacity="0.2" strokeDasharray="2,2"/>
                <line x1="50" y1="0" x2="50" y2="100" stroke="#14B8A6" strokeWidth="0.3" opacity="0.2" strokeDasharray="2,2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#measurement-lines-projects)" />
          </svg>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center px-4 py-8 md:py-12">
            {/* Badge with Project Icon */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#14B8A6]/20 backdrop-blur-sm border border-[#14B8A6]/30 rounded-full text-[#14B8A6] text-xs font-semibold uppercase tracking-wider mb-6">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Portfolio</span>
            </div>
            
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Our Projects
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Explore our portfolio of successful BIM implementations across diverse sectors
            </p>
            
            {/* Technical Indicators */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#14B8A6] rounded-full"></div>
                <span>Commercial</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#14B8A6] rounded-full"></div>
                <span>Residential</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#14B8A6] rounded-full"></div>
                <span>Industrial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Region Selector Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-custom py-6 md:py-8">
          <RegionSelector selectedRegion={selectedRegion} onRegionChange={handleRegionChange} />
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
        {/* Very Subtle Background Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `url('${imageConfig.patterns.hexagon}')`,
            backgroundSize: '400px 400px',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat',
          }}
        />
        <div className="container-custom relative z-10">
          {/* Show Coming Soon Card if region has no projects and is marked as coming soon */}
          {!hasProjectsInRegion && isComingSoonRegion ? (
            <div className="min-h-[60vh] flex items-center justify-center py-12 md:py-16 lg:py-20">
              <div className="max-w-2xl w-full bg-gradient-to-br from-[#0a2f47] to-[#1a4d6d] rounded-2xl shadow-2xl p-8 md:p-12 lg:p-16 text-white text-center">
                {/* Flag Emoji */}
                <div className="text-6xl md:text-7xl mb-6">{isComingSoonRegion.flag}</div>

                {/* Main Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {isComingSoonRegion.title}
                </h2>

                {/* Tagline */}
                <p className="text-lg md:text-xl text-blue-100 mb-6">
                  {isComingSoonRegion.tagline}
                </p>

                {/* Description */}
                <p className="text-base md:text-lg text-blue-50 mb-8 leading-relaxed">
                  {isComingSoonRegion.description}
                </p>

                {/* Timeline Info */}
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-blue-200 border-opacity-20">
                  <p className="text-sm md:text-base text-blue-100">
                    <span className="font-semibold">Expected Launch:</span> {isComingSoonRegion.launchDate}
                  </p>
                  <p className="text-sm md:text-base text-blue-100 mt-3">
                    Featuring comprehensive BIM modeling, MEP coordination, and clash detection services for commercial, residential, and industrial projects.
                  </p>
                </div>

                {/* Support Info */}
                <p className="text-xs md:text-sm text-blue-200 mt-8 pt-8 border-t border-blue-200 border-opacity-20">
                  In the meantime, if you have questions about our services or want to discuss your project needs, please contact us at <a href="mailto:Admin@KataVerseBIMServices.onmicrosoft.com" className="underline hover:text-white">Admin@KataVerseBIMServices.onmicrosoft.com</a>
                </p>
              </div>
            </div>
          ) : (
            /* Show Projects Grid for regions with projects */
            <>
              {/* Search and Controls Section */}
              <div className="mb-10 md:mb-12 lg:mb-16 space-y-6 md:space-y-8" data-aos="fade-up">
                {/* Search Bar */}
                <div className="relative max-w-2xl mx-auto">
                  <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                  <input
                    type="text"
                    placeholder="Search projects by name, category, or tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-14 pr-12 py-4 md:py-4 text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm hover:shadow-md"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
                      aria-label="Clear search"
                    >
                      <FaTimes className="text-lg" />
                    </button>
                  )}
                </div>

                {/* Controls Row */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              {/* Category Filters */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3 w-full lg:w-auto">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setCurrentPage(1);
                      setProjects([]);
                    }}
                        className={`px-5 py-2.5 rounded-lg font-medium transition-all text-sm md:text-base ${
                      selectedCategory === category
                            ? 'bg-primary text-white shadow-lg scale-105'
                            : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

                  {/* Sort and View Controls */}
                  <div className="flex items-center gap-4 w-full lg:w-auto justify-center lg:justify-end">
                    {/* Sort Dropdown */}
                    <div className="relative">
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="appearance-none bg-white border-2 border-gray-200 rounded-lg px-5 py-2.5 pr-10 text-sm md:text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary cursor-pointer hover:border-gray-300 transition-all shadow-sm hover:shadow-md"
                      >
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                        <option value="alphabetical">A-Z</option>
                      </select>
                      <FaSort className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>

                    {/* View Toggle */}
                    <div className="flex bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`p-3 transition-all ${
                          viewMode === 'grid' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-50'
                        }`}
                        title="Grid View"
                        aria-label="Grid View"
                      >
                        <FaTh className="text-base" />
                      </button>
                      <div className="w-px bg-gray-200"></div>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`p-3 transition-all ${
                          viewMode === 'list' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-50'
                        }`}
                        title="List View"
                        aria-label="List View"
                      >
                        <FaList className="text-base" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Results Count */}
                {!loading && (
                  <div className="text-center text-gray-600 text-sm md:text-base pt-2 border-t border-gray-200">
                    <span className="font-medium text-gray-700">
                      Showing {displayedProjects.length} of {filteredAndSortedProjects.length} projects
                    </span>
                    {searchQuery && (
                      <span className="text-gray-500 ml-2">
                        matching "{searchQuery}"
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Projects Grid/List */}
              {error && (
                <div className="max-w-3xl mx-auto mb-8 md:mb-10 p-5 md:p-6 bg-red-50 border-2 border-red-200 rounded-xl text-red-700 text-center shadow-sm">
                  <p className="font-medium">{error}</p>
                </div>
              )}
              
              {loading ? (
                <div className={viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'
                  : 'space-y-6 md:space-y-8'
                }>
                  {[...Array(6)].map((_, i) => (
                    <ProjectCardSkeleton key={i} />
                  ))}
                </div>
              ) : displayedProjects.length === 0 ? (
                // Empty State
                <div className="flex items-center justify-center py-16 md:py-20 lg:py-24">
                  <div className="text-center max-w-lg px-4">
                    <div className="mb-8 inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full">
                      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
                      {searchQuery ? 'No Projects Found' : 'Explore Our Complete Portfolio'}
                    </h3>
                    <p className="text-gray-600 mb-8 leading-relaxed text-base md:text-lg">
                      {searchQuery 
                        ? `No projects found matching "${searchQuery}". Try a different search term or browse all categories.`
                        : `The ${selectedCategory} category is currently being updated. View our complete portfolio to discover projects across all sectors.`
                      }
                    </p>
                    <button
                      onClick={() => {
                        setSelectedCategory('All');
                        setSearchQuery('');
                        setCurrentPage(1);
                        setProjects([]);
                      }}
                      className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-100"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      View All Projects
                    </button>
                  </div>
                </div>
              ) : (
                <div className={viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8' 
                  : 'space-y-6 md:space-y-8'
                }>
                  {displayedProjects.map((project) => (
                    <div
                      key={project._id}
                      className={viewMode === 'grid'
                        ? "relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer group transition-all duration-500 hover:-translate-y-1"
                        : "bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer group transition-all duration-500 flex flex-col md:flex-row border border-gray-100 hover:border-gray-200"
                      }
                      onClick={() => navigate(project.slug ? `/projects/slug/${project.slug}` : `/projects/${project._id}`)}
                      data-aos="fade-up"
                    >
                      {viewMode === 'grid' ? (
                        <>
                          {/* Grid View - Image with overlay */}
                          {project.images && project.images.length > 0 ? (
                            <>
                              <img
                                src={project.images[0]}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  const fallback = e.target.nextElementSibling;
                                  if (fallback) {
                                    fallback.classList.remove('hidden');
                                    fallback.classList.add('flex');
                                  }
                                }}
                              />
                              {/* Fallback gradient */}
                              <div className="h-full w-full bg-gradient-to-br from-primary via-[#0a2f47] to-secondary hidden items-center justify-center text-white">
                                <span className="text-xl font-bold text-center px-4">{project.title}</span>
                              </div>
                            </>
                          ) : (
                            <div className="h-full w-full bg-gradient-to-br from-primary via-[#0a2f47] to-secondary flex items-center justify-center text-white">
                              <span className="text-xl font-bold text-center px-4">{project.title}</span>
                            </div>
                          )}
                          
                          {/* Dark overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                          
                          {/* Project Title Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                            <h3 className="text-white text-xl md:text-2xl font-bold mb-1 drop-shadow-lg">
                              {project.title}
                            </h3>
                            {project.category && (
                              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full font-semibold border border-white/30">
                                {project.category}
                              </span>
                            )}
                          </div>

                          {/* Image count indicator (top right) */}
                          {project.images && project.images.length > 1 && (
                            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg z-20 flex items-center gap-2">
                              <FaImages className="text-white text-sm" />
                              <span className="text-white text-sm font-semibold">
                                {project.images.length}
                              </span>
                            </div>
                          )}
                        </>
                      ) : (
                        <>
                          {/* List View - Image on left, content on right */}
                          <div className="relative w-full md:w-72 lg:w-80 h-56 md:h-auto flex-shrink-0">
                        {project.images && project.images.length > 0 ? (
                          <img
                            src={project.images[0]}
                            alt={project.title}
                                className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                              <div className="w-full h-full bg-gradient-to-br from-primary via-[#0a2f47] to-secondary flex items-center justify-center text-white">
                                <span className="text-lg font-bold text-center px-4">{project.title}</span>
                          </div>
                        )}
                          </div>
                          <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col">
                            <div className="flex items-start justify-between mb-3 md:mb-4 gap-4">
                              <h3 className="text-xl md:text-2xl font-bold text-secondary group-hover:text-primary transition-colors flex-1">
                            {project.title}
                          </h3>
                              {project.category && (
                                <span className="px-3 py-1.5 bg-primary/10 text-primary text-xs md:text-sm rounded-full font-semibold flex-shrink-0">
                            {project.category}
                          </span>
                              )}
                        </div>
                            {project.description && (
                              <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-5 line-clamp-3 leading-relaxed">
                                {project.description}
                              </p>
                            )}
                            {project.tags && project.tags.length > 0 && (
                              <div className="flex gap-2 flex-wrap mb-4 md:mb-5">
                                {project.tags.slice(0, 4).map((tag, idx) => (
                                  <span key={idx} className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs md:text-sm rounded-full font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                            )}
                            <div className="mt-auto pt-4 md:pt-5 border-t border-gray-100">
                              <span className="text-primary text-sm md:text-base font-semibold group-hover:text-accent transition-colors inline-flex items-center gap-2">
                                View Details
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Load More Buttons Section */}
              {!loading && (hasMore || (displayCount >= projects.length && pagination.hasMore)) && (
                <div className="flex flex-col items-center gap-4 mt-12 md:mt-16 lg:mt-20 pt-8 md:pt-12 border-t border-gray-200" data-aos="fade-up">
                  {hasMore && (
                  <button
                      onClick={() => setDisplayCount(prev => prev + (viewMode === 'grid' ? 6 : 4))}
                      className="px-8 md:px-10 py-3.5 md:py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-100 text-base md:text-lg"
                  >
                      Load More Projects ({filteredAndSortedProjects.length - displayCount} more)
                  </button>
              )}

                  {displayCount >= projects.length && pagination.hasMore && (
                  <button
                    onClick={() => setCurrentPage(prev => prev + 1)}
                      className="px-8 md:px-10 py-3.5 md:py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-100 text-base md:text-lg"
                  >
                    Load More from Server (Page {currentPage + 1}/{pagination.totalPages})
                  </button>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {/* Modal removed in favor of dedicated detail route */}
    </div>
  );
}


