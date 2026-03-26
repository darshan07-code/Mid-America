/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Users, 
  TrendingUp, 
  MapPin, 
  ArrowRight, 
  Menu, 
  X, 
  ChevronRight, 
  Search, 
  Phone, 
  Mail, 
  ExternalLink,
  Award,
  BarChart3,
  Globe,
  Filter,
  ArrowUpRight,
  Star,
  CheckCircle2,
  LayoutGrid,
  Zap,
  Linkedin,
  Twitter,
  Facebook,
  Instagram
} from 'lucide-react';

// --- Types ---
interface Property {
  id: string;
  title: string;
  location: string;
  type: string;
  size: string;
  price: string;
  image: string;
  tags: string[];
}

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  size: 'small' | 'large';
  color: string;
}

// --- Data ---
const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'Tenant Representation',
    description: 'Strategic site selection and lease negotiation for global retailers.',
    icon: <Users className="w-6 h-6" />,
    size: 'small',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    id: '2',
    title: 'Market Intelligence',
    description: 'Proprietary real-time data and analytics that drive strategic decision-making across the Midwest region.',
    icon: <BarChart3 className="w-6 h-6" />,
    size: 'large',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    id: '3',
    title: 'Investment Sales',
    description: 'Expert guidance on acquisitions and dispositions.',
    icon: <TrendingUp className="w-6 h-6" />,
    size: 'small',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    id: '4',
    title: 'Regional Dominance',
    description: 'Deepest coverage across Illinois, Michigan, Wisconsin, and Minnesota with over 100+ broker experts.',
    icon: <Globe className="w-6 h-6" />,
    size: 'large',
    color: 'bg-emerald-50 text-emerald-600',
  },
];

const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'The Shops at Oak Brook',
    location: 'Oak Brook, IL',
    type: 'Retail Center',
    size: '120,000 SF',
    price: '$45.00 / SF',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    tags: ['High Traffic', 'Anchor Space'],
  },
  {
    id: '2',
    title: 'Michigan Avenue Plaza',
    location: 'Chicago, IL',
    type: 'Mixed-Use',
    size: '45,000 SF',
    price: 'Contact for Price',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    tags: ['Luxury', 'Prime Location'],
  },
  {
    id: '3',
    title: 'Suburban Retail Hub',
    location: 'Naperville, IL',
    type: 'Power Center',
    size: '250,000 SF',
    price: '$28.50 / SF',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800',
    tags: ['Parking', 'Visibility'],
  },
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl transition-all duration-700 rounded-[2rem] ${scrolled ? 'glass-nav py-3 px-8 shadow-2xl shadow-slate-200/50' : 'bg-transparent py-5 px-4'}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="w-11 h-11 bg-brand-navy flex items-center justify-center rounded-2xl shadow-lg shadow-brand-navy/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
            <Building2 className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-black text-xl tracking-tight text-brand-navy">Mid-America</span>
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold">Real Estate Group</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 bg-slate-100/40 backdrop-blur-md p-1.5 rounded-[1.5rem] border border-slate-200/30">
          {['Services', 'Properties', 'Edge', 'Team'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="px-6 py-2.5 text-sm font-bold text-slate-500 hover:text-brand-navy hover:bg-white rounded-xl transition-all duration-300">
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm font-bold text-brand-navy px-4">Sign In</button>
          <button className="bg-brand-navy text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-brand-accent transition-all shadow-md shadow-brand-navy/10">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 bg-white rounded-xl shadow-sm border border-slate-100" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-brand-navy w-5 h-5" /> : <Menu className="text-brand-navy w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute top-full left-0 right-0 mt-4 bg-white rounded-3xl shadow-2xl p-6 md:hidden flex flex-col gap-4 border border-slate-100"
          >
            {['Services', 'Properties', 'Edge', 'Team'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-brand-navy font-bold py-3 px-4 hover:bg-slate-50 rounded-xl transition-all" onClick={() => setIsOpen(false)}>
                {item}
              </a>
            ))}
            <div className="h-px bg-slate-100 my-2"></div>
            <button className="bg-brand-navy text-white py-4 rounded-xl font-bold">Contact Us</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-48 pb-32 px-6 overflow-hidden mesh-gradient">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 -skew-x-12 -z-10 blur-3xl"></div>
      <div className="absolute top-40 left-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-brand-accent/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/80 backdrop-blur-md rounded-full shadow-sm border border-slate-100 mb-10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-accent"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Midwest Retail Experts</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-brand-navy leading-[0.95] mb-10 text-balance tracking-tighter">
              Find the Perfect <br/> <span className="text-brand-accent italic">Retail Space</span> <br/> for Your Brand.
            </h1>
            <p className="text-xl text-slate-500 font-medium mb-12 leading-relaxed max-w-lg">
              Unmatched market intelligence and strategic execution for the Midwest's most valuable retail assets.
            </p>

            {/* Search Bar Component */}
            <div className="bg-white p-4 rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col md:flex-row gap-2 max-w-2xl group">
              <div className="flex-1 flex items-center gap-4 px-6 py-4 hover:bg-slate-50 rounded-[2rem] transition-all duration-500 cursor-pointer">
                <div className="w-10 h-10 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                  <MapPin className="text-brand-accent w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Location</span>
                  <span className="text-base font-bold text-brand-navy">Chicago, IL</span>
                </div>
              </div>
              <div className="w-px bg-slate-100 hidden md:block my-4"></div>
              <div className="flex-1 flex items-center gap-4 px-6 py-4 hover:bg-slate-50 rounded-[2rem] transition-all duration-500 cursor-pointer">
                <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
                  <LayoutGrid className="text-indigo-600 w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Property Type</span>
                  <span className="text-base font-bold text-brand-navy">Retail Center</span>
                </div>
              </div>
              <button className="bg-brand-navy text-white p-6 rounded-[2.2rem] hover:bg-brand-accent transition-all duration-500 flex items-center justify-center shadow-2xl shadow-brand-navy/30 hover:scale-105 active:scale-95">
                <Search className="w-7 h-7" />
              </button>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
                  <span className="text-sm font-bold ml-2">4.9/5</span>
                </div>
                <span className="text-xs font-semibold text-slate-400">Trusted by 500+ Retailers</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200" 
                alt="Retail Space" 
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 flex items-center justify-center rounded-2xl">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-brand-navy">50M+</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">SF Managed</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-2xl">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-brand-navy">#1</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Midwest Brokerage</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BentoFeatures = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6">Our Comprehensive Services</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            We provide a full spectrum of retail real estate solutions tailored to the unique needs of our clients across the Midwest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className={`bento-card group flex flex-col justify-between ${feature.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'}`}
            >
              <div>
                <div className={`w-16 h-16 ${feature.color} flex items-center justify-center rounded-[1.5rem] mb-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm`}>
                  {React.cloneElement(feature.icon as React.ReactElement, { className: "w-7 h-7" })}
                </div>
                <h3 className="text-3xl font-black text-brand-navy mb-6 tracking-tight">{feature.title}</h3>
                <p className="text-lg text-slate-500 font-medium leading-relaxed opacity-80">{feature.description}</p>
              </div>
              <div className="mt-12 flex justify-end">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-brand-navy group-hover:text-white transition-all duration-500 cursor-pointer shadow-sm">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="property-card group"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-6 left-6 flex flex-wrap gap-2">
          {property.tags.map(tag => (
            <span key={tag} className="bg-white/95 backdrop-blur-md text-brand-navy text-[10px] font-black uppercase tracking-[0.15em] px-4 py-2 rounded-full shadow-lg border border-white/20">
              {tag}
            </span>
          ))}
        </div>
        <div className="absolute bottom-6 right-6">
          <div className="bg-brand-navy/90 backdrop-blur-md text-white px-5 py-2.5 rounded-2xl font-black text-sm shadow-2xl border border-white/10">
            {property.price}
          </div>
        </div>
      </div>
      <div className="p-10">
        <div className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
          <MapPin className="w-3.5 h-3.5 text-brand-accent" /> {property.location}
        </div>
        <h3 className="text-3xl font-black text-brand-navy mb-8 group-hover:text-brand-accent transition-all duration-500 tracking-tight leading-tight">{property.title}</h3>
        
        <div className="flex items-center justify-between pt-8 border-t border-slate-100">
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Size</span>
              <span className="text-base font-bold text-brand-navy">{property.size}</span>
            </div>
            <div className="w-px h-10 bg-slate-100"></div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Type</span>
              <span className="text-base font-bold text-brand-navy">{property.type}</span>
            </div>
          </div>
          <button className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center hover:bg-brand-navy hover:text-white transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1">
            <ArrowUpRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const PropertiesSection = () => {
  return (
    <section id="properties" className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6">Featured Properties</h2>
            <p className="text-slate-500 font-medium">Explore our curated selection of premium retail spaces across the Midwest.</p>
          </div>
          <div className="flex gap-3">
            <button className="p-4 bg-white rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all shadow-sm">
              <Filter className="w-5 h-5 text-brand-navy" />
            </button>
            <button className="btn-primary flex items-center gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROPERTIES.map(prop => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  return (
    <section className="py-32 bg-brand-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-navy via-transparent to-brand-navy opacity-80"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 text-center">
          {[
            { label: "SF Managed", value: "50M+" },
            { label: "Broker Experts", value: "100+" },
            { label: "Years Experience", value: "30+" },
            { label: "Market Share", value: "#1" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tighter group-hover:scale-110 transition-transform duration-500">{stat.value}</div>
              <div className="text-[10px] font-black text-brand-accent uppercase tracking-[0.4em] opacity-80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-brand-navy flex items-center justify-center rounded-xl">
                <Building2 className="text-white w-5 h-5" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg tracking-tight text-brand-navy">Mid-America</span>
                <span className="text-[10px] uppercase tracking-widest opacity-50 font-semibold">Real Estate Group</span>
              </div>
            </div>
            <p className="text-slate-500 font-medium leading-relaxed mb-8">
              The Midwest's leading full-service retail real estate organization, specializing in tenant representation, leasing, and investment sales.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
                { icon: <Twitter className="w-5 h-5" />, label: 'Twitter' },
                { icon: <Facebook className="w-5 h-5" />, label: 'Facebook' },
                { icon: <Instagram className="w-5 h-5" />, label: 'Instagram' }
              ].map((social, i) => (
                <a key={i} href="#" aria-label={social.label} className="w-11 h-11 bg-slate-50 rounded-xl flex items-center justify-center hover:bg-brand-navy hover:text-white transition-all duration-500 cursor-pointer border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-brand-navy mb-8 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              {['About Us', 'Services', 'Properties', 'The Edge', 'Our Team', 'News'].map(link => (
                <li key={link}><a href="#" className="hover:text-brand-accent transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-navy mb-8 uppercase tracking-widest text-xs">Offices</h4>
            <ul className="space-y-6 text-sm font-medium text-slate-500">
              <li>
                <span className="block text-brand-navy font-bold uppercase text-[10px] tracking-widest mb-2">Chicago (HQ)</span>
                One Parkview Plaza, 9th Floor<br/>Oakbrook Terrace, IL 60181
              </li>
              <li>
                <span className="block text-brand-navy font-bold uppercase text-[10px] tracking-widest mb-2">Milwaukee</span>
                600 N. Plankinton Avenue<br/>Milwaukee, WI 53203
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-navy mb-8 uppercase tracking-widest text-xs">Contact</h4>
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <Phone className="w-5 h-5 text-brand-accent" />
                <span className="text-sm font-bold text-brand-navy">630.954.7300</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <Mail className="w-5 h-5 text-brand-accent" />
                <span className="text-sm font-bold text-brand-navy">info@midamericagrp.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
          <p>© 2026 Mid-America Real Estate Group. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-navy transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-accent/30">
      <Navbar />
      <Hero />
      
      {/* Client Logos Section */}
      <section className="py-12 bg-white border-y border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale contrast-125">
            {['Target', 'Starbucks', 'Whole Foods', 'Apple', 'Nike', 'Sephora'].map(client => (
              <span key={client} className="text-2xl font-black tracking-tighter">{client}</span>
            ))}
          </div>
        </div>
      </section>

      <BentoFeatures />
      <StatsSection />
      <PropertiesSection />
      
      {/* CTA Section */}
      <section className="py-32 px-6 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand-navy rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-[0_64px_128px_-24px_rgba(15,23,42,0.3)]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-5xl md:text-7xl font-black text-white mb-10 leading-[0.95] tracking-tighter">Ready to elevate your <br/>retail strategy?</h2>
              <p className="text-slate-400 text-xl mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
                Join the world's most successful retailers and property owners who trust Mid-America for their Midwest expansion.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <button className="btn-primary !bg-brand-accent !text-white !px-12 !py-6 !rounded-3xl !text-base shadow-2xl shadow-brand-accent/30">
                  Get Started Today
                </button>
                <button className="bg-white/5 text-white backdrop-blur-xl px-12 py-6 rounded-3xl font-bold text-base border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 active:scale-95">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
