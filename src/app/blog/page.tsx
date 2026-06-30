import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

export const metadata = {
  title: 'Blog & Insights | Grow Infinity',
  description: 'Latest news, corporate tax updates, and business setup guides in the UAE.'
};

export const blogPosts = [
  {
    slug: 'corporate-tax-uae-2024-guide',
    title: 'UAE Corporate Tax 2024: A Complete Guide for Free Zone Entities',
    excerpt: 'Understand how the new 9% corporate tax affects your Free Zone company and what qualifying income means.',
    date: 'Oct 15, 2023',
    category: 'Tax & Compliance',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop'
  },
  {
    slug: 'why-ifza-is-perfect-for-ecommerce',
    title: 'Why IFZA Dubai is the Perfect Launchpad for E-Commerce Brands',
    excerpt: 'Discover why thousands of digital entrepreneurs are choosing IFZA for their global e-commerce operations.',
    date: 'Nov 02, 2023',
    category: 'Jurisdictions',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    slug: 'golden-visa-requirements-2024',
    title: 'UAE Golden Visa: Updated Requirements for Investors in 2024',
    excerpt: 'The complete breakdown of the AED 2 Million property investment route for securing your 10-year Golden Visa.',
    date: 'Dec 12, 2023',
    category: 'Visas',
    image: 'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?q=80&w=1000&auto=format&fit=crop'
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#F8FAFC]">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#0D3B66] bg-blue-100 px-4 py-2 rounded-full border border-blue-200">
            Insights
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-medium text-[#0F172A] tracking-tight">
            Latest <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0D3B66] to-[#1565C0]">News & Guides</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col">
              <div className="h-[240px] overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#0D3B66] uppercase tracking-widest">
                  {post.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <h2 className="text-2xl font-display font-bold text-[#0F172A] mb-4 group-hover:text-[#0EA5E9] transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">
                  {post.excerpt}
                </p>
                <div className="text-[#0D3B66] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                  Read Article <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
