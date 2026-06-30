import { notFound } from 'next/navigation';
import { Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '../page'; // import mock data

// In Next.js App Router, params is a promise in the latest versions, 
// but for standard synchronous usage in older Next.js 13/14, it's a direct prop.
// To avoid build errors if the framework expects a Promise, we use any or assume it's synchronous.

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-24 bg-white">
      <div className="max-w-[800px] mx-auto px-6">
        
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#0D3B66] font-medium transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <div className="space-y-6 mb-12">
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0EA5E9] bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              {post.category}
            </span>
            <span className="text-sm text-gray-500 flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {post.date}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] leading-tight">
            {post.title}
          </h1>
        </div>

        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-[400px] object-cover rounded-3xl shadow-lg mb-12"
        />

        <div className="prose prose-lg prose-blue max-w-none text-gray-600 font-light leading-relaxed">
          <p className="text-xl font-normal text-gray-800 mb-8">{post.excerpt}</p>
          
          <h2>Introduction to {post.category}</h2>
          <p>
            The United Arab Emirates has continuously evolved its regulatory frameworks to remain a globally competitive hub for business and investment. Understanding the nuances of these changes is critical for both new entrants and established enterprises.
          </p>
          
          <h2>Key Takeaways</h2>
          <ul>
            <li>Strategic advantages of operating within designated UAE zones.</li>
            <li>Regulatory updates affecting compliance and reporting standards.</li>
            <li>Cost-benefit analysis of structural realignment.</li>
          </ul>

          <p>
            For expert guidance on how these updates impact your specific corporate structure, our advisory team at Grow Infinity is available for complimentary consultations.
          </p>

          <div className="mt-12 p-8 bg-[#F8FAFC] rounded-2xl border border-gray-100 text-center">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Need personalized advice?</h3>
            <Link href="/#calculator" className="inline-block bg-[#0D3B66] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#1565C0] transition-colors">
              Calculate Your Setup Cost Today
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
