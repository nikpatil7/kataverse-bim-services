require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('../models/Project');
const Testimonial = require('../models/Testimonial');

async function run() {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/KataVerseBIMDB';
  await mongoose.connect(uri);

  const projects = [
    {
      title: '25-Story Commercial Tower',
      category: 'Commercial',
      description: 'MEP coordination and clash detection for 25-story commercial office tower in Oregon',
      images: [],
      tags: ['MEP Coordination', 'Clash Detection', 'Commercial'],
      metrics: { 'Floors': '25', 'Timeline': '6 months', 'Cost Saved': '$1M' },
      client: { name: 'General Contractor - Oregon', testimonial: 'Efficient coordination with significant cost savings', rating: 5 },
      country: 'USA',
    },
    {
      title: 'Residential Complex',
      category: 'Residential',
      description: 'Full BIM modeling and coordination for 60-unit residential development in Virginia',
      images: [],
      tags: ['BIM Modeling', 'Residential', 'MEP'],
      metrics: { 'Units': '60', 'Buildings': '1', 'Timeline': '2 months' },
      client: { name: 'Subcontractors - Virginia', testimonial: 'Professional service with attention to detail', rating: 5 },
      country: 'USA',
    },
    {
      title: 'Manufacturing Facility Expansion',
      category: 'Industrial',
      description: 'MEP shop drawings and as-built documentation for industrial manufacturing plant expansion',
      images: [],
      tags: ['Shop Drawings', 'Industrial', 'As-Built'],
      metrics: { 'Area': '150,000 sq ft', 'Systems': 'HVAC, Electrical, Plumbing', 'Timeline': '8 months', 'Accuracy': '99.5%' },
      client: { name: 'Industrial Solutions Ltd', testimonial: 'Precise documentation helped us avoid costly installation errors', rating: 5 },
      country: 'USA',
    },
    {
      title: 'Educational Campus Development',
      category: 'Educational',
      description: 'Comprehensive BIM modeling and MEP coordination for multi-building educational campus',
      images: [],
      tags: ['BIM Modeling', 'Educational', 'Multi-Building'],
      metrics: { 'Buildings': '8', 'Students': '5000', 'Timeline': '24 months', 'Clash Reduction': '92%' },
      client: { name: 'State Education Board', testimonial: 'Outstanding coordination across multiple buildings', rating: 5 },
      country: 'USA',
    },
    {
      title: 'Mixed-Use Development',
      category: 'Commercial',
      description: 'Integrated MEP design for mixed-use development with retail, office, and residential spaces',
      images: [],
      tags: ['Mixed-Use', 'MEP Design', 'Coordination'],
      metrics: { 'Area': '500,000 sq ft', 'Zones': 'Retail, Office, Residential', 'Timeline': '20 months', 'Cost Saved': '$1.8M' },
      client: { name: 'Subcontractors - Michigan', testimonial: 'Complex project delivered with precision', rating: 5 },
      country: 'USA',
    },
  ];

  const testimonials = [
    {
      quote: 'Outstanding MEP coordination. Their clash detection reduced rework significantly and saved us millions in potential delays.',
      author: 'Sarah Johnson',
      role: 'Lead Architect',
      company: 'Design Innovators',
      rating: 5,
      featured: true,
    },
    {
      quote: 'Professional team with deep technical knowledge. The shop drawings were accurate and helped us complete installation 2 weeks early.',
      author: 'Amit Patel',
      role: 'MEP Contractor',
      company: 'Industrial Solutions Ltd',
      rating: 5,
      featured: true,
    },
  ];

  await Project.deleteMany({});
  await Testimonial.deleteMany({});
  
  // Insert projects one by one to trigger pre-validate hooks properly
  for (const project of projects) {
    await Project.create(project);
  }
  
  await Testimonial.insertMany(testimonials);

  console.log('Seed complete');
  await mongoose.disconnect();
}

run().catch((e) => { console.error(e); process.exit(1); });
