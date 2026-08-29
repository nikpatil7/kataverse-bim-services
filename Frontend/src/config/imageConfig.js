// Centralized Image Configuration
// Use this file to manage all image paths consistently across the application

const imageConfig = {
  // Hero Background Images
  hero: {
    home: '/vectors/hero/hero_bim.jpg',
    services: '/vectors/hero/services-hero.jpg',
    about: '/images/team/coordination-collab.jpg',
    projects: '/images/projects/3D-MEP-Coordination.png',
    contact: '/vectors/hero/services-hero.jpg',
    // Alternative hero images
    wireframe: '/vectors/hero/vecteezy_3d-perspective-render-of-building-wireframe-structure-vector_.jpg',
    vector004: '/vectors/hero/Vector_20180703_004.jpg',
  },

  // Service Images - Organized by service type
  services: {
    mepf: '/images/services/mepf-services.jpg',
    clashDetection: '/images/services/clash-detection-coordination.jpg',
    mepModeling: '/images/services/mep-modeling.jpg',
    mepBimModel: '/images/services/mep-bim-model.jpg',
    drafting: '/images/services/MEP-drafting-1.jpg.webp',
    bimCad: '/images/services/BIM-XS-CAD.jpg',
    commercial: '/images/services/MEP_Commercial_Retail.jpg',
  },

  // Project Images
  projects: {
    mepCoordination: '/images/projects/3D-MEP-Coordination.png',
    bimScope: '/images/projects/BIM-scope-overlap.jpg',
    residential: '/images/projects/Residential-complex.jpg',
    revitModeling: '/images/projects/Revit-MEP-3D-modeling.jpg',
    floorplan: '/images/projects/floorplan-400x284.jpg.webp',
    mepGallery: '/images/projects/mep-gal-01-2.jpg.webp',
  },

  // Team/About Images
  team: {
    coordination: '/images/team/coordination-collab.jpg',
    consulting1: '/images/team/bim-consulting-1-1.jpg.webp',
    consulting2: '/images/team/bim-consulting-2.jpg.webp',
    consulting9: '/images/team/bim-consulting-9.jpg.webp',
    contentCreation: '/images/team/content-creation.jpg',
  },

  // Process/Workflow Images
  process: {
    modularBim: '/images/process/modular-bim-model-400x284.jpg.webp',
    pointCloud: '/images/process/pointcloudmodel-output.jpg.webp',
    revitThumbnail: '/images/process/revitthumbnail.jpg',
  },

  // Background Patterns (for subtle overlays)
  patterns: {
    hexagon: '/vectors/patterns/Hexagon-dotted-connect-line-background.jpg',
    // Use with very low opacity (0.02-0.05)
  },

  // Background Vectors
  backgrounds: {
    bimBg: '/vectors/background/BIM_bg.webp',
    digitalBuilding: '/vectors/background/vecteezy_digital-building-in-matrix-style-abstract-background_.jpg',
    hexagon: '/vectors/background/Hexagon-dotted-connect-line-background.jpg',
  },

  // CTA Section Backgrounds
  cta: {
    coordination: '/images/mechtron-images/coordination-collab.jpg',
    mepModeling: '/images/services/mep-bim-model.jpg',
  },

  // Helper function to get service image by index
  getServiceImage: (index) => {
    const serviceImages = [
      imageConfig.services.mepf,
      imageConfig.services.clashDetection,
      imageConfig.services.mepModeling,
      imageConfig.services.drafting,
      imageConfig.services.bimCad,
      imageConfig.services.clashDetection, // fallback
    ];
    return serviceImages[index] || serviceImages[0];
  },
};

export default imageConfig;

