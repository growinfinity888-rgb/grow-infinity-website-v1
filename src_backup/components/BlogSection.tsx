import { useState } from 'react';
import { articlesData } from '../data';
import { Article } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Calendar, User, Clock, ArrowLeft, BookOpen, Share2, CornerDownRight, Landmark } from 'lucide-react';

export default function BlogSection() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Business Setup', 'Corporate Tax', 'Golden Visa', 'Compliance'];

  const filteredArticles = articlesData.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8" id="ai-knowledge-hub">
      <AnimatePresence mode="wait">
        {!selectedArticle ? (
          // Grid List View
          <motion.div
            key="list-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-neutral-50 border border-neutral-100 p-4 rounded-2xl" id="blog-filters">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-display transition-all ${selectedCategory === cat ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-300'}`}
                    id={`filter-${cat.toLowerCase().replace(' ', '-')}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Instant Search input */}
              <div className="relative max-w-xs w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Query knowledge graphs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white pl-9 pr-4 py-2 border border-neutral-200 rounded-xl text-xs focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                  id="blog-search-input"
                />
              </div>
            </div>

            {/* Articles Bento Grid */}
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="blog-grid">
                {filteredArticles.map((article, idx) => (
                  <motion.div
                    key={article.slug}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => setSelectedArticle(article)}
                    className="bg-white border border-neutral-200 rounded-2xl p-6 cursor-pointer hover:shadow-premium hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between"
                    id={`blog-card-${article.slug}`}
                  >
                    <div>
                      {/* Meta info */}
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-bold font-display uppercase tracking-widest text-[#0F4CFF] bg-[#0F4CFF]/10 px-2 py-0.5 rounded">
                          {article.category}
                        </span>
                        <div className="flex items-center space-x-1.5 text-[10px] text-neutral-400">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      <h4 className="font-display font-extrabold text-neutral-900 text-base mt-4 leading-snug hover:text-[#0F4CFF] transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-xs text-neutral-500 mt-2 line-clamp-3 leading-relaxed font-medium">
                        {article.summary}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400">
                      <span className="truncate max-w-[150px] font-medium text-neutral-600">By {article.author}</span>
                      <span className="font-mono text-[10px]">{article.date}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white border border-neutral-100 rounded-2xl" id="blog-empty-state">
                <BookOpen className="w-10 h-10 text-neutral-300 mx-auto" />
                <p className="text-sm font-semibold text-neutral-700 mt-3 font-display">No Knowledge Artifacts Found</p>
                <p className="text-xs text-neutral-400 mt-1">Refine your query filters or try a different search expression.</p>
              </div>
            )}
          </motion.div>
        ) : (
          // Rich Article Detail View (RAG-structure optimized)
          <motion.div
            key="detail-view"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="bg-white border border-neutral-200 rounded-[2rem] p-6 lg:p-10 shadow-premium"
            id={`blog-content-${selectedArticle.slug}`}
          >
            {/* Back Button and Meta */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-100 pb-6 mb-8">
              <button
                onClick={() => setSelectedArticle(null)}
                className="flex items-center space-x-2 text-xs font-semibold text-neutral-600 hover:text-neutral-950 font-display transition-colors"
                id="blog-back-btn"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Knowledge base</span>
              </button>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Knowledge document link copied to clipboard!');
                  }}
                  className="p-2 text-neutral-400 hover:text-neutral-900 rounded-lg bg-neutral-50 border border-neutral-100 transition-colors"
                  title="Copy Document URI"
                  id="blog-share-btn"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <span className="text-[10px] uppercase font-bold font-display tracking-widest text-[#0F4CFF] bg-[#0F4CFF]/10 px-2.5 py-1 rounded-full">
                  {selectedArticle.category}
                </span>
              </div>
            </div>

            {/* Title Area */}
            <div className="max-w-3xl mx-auto space-y-4">
              <h1 className="font-display font-extrabold text-neutral-900 text-2xl lg:text-3.5xl leading-tight">
                {selectedArticle.title}
              </h1>

              <div className="flex items-center space-x-4 text-xs text-neutral-500 pt-2 border-b border-neutral-100/60 pb-4">
                <div className="flex items-center space-x-1.5">
                  <User className="w-3.5 h-3.5" />
                  <span className="font-semibold text-neutral-700">{selectedArticle.author}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{selectedArticle.date}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{selectedArticle.readTime}</span>
                </div>
              </div>
            </div>

            {/* AI retrieval & RAG indices (Very unique feature for LLM indexing!) */}
            <div className="max-w-3xl mx-auto my-8 bg-neutral-50 border border-neutral-200 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6" id="rag-index-panel">
              <div className="md:col-span-2 space-y-2">
                <div className="flex items-center space-x-1.5 text-[#0F4CFF]">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-[10px] font-bold font-display uppercase tracking-wider">Semantic Knowledge summary (RAG Index)</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed font-medium">
                  {selectedArticle.ragSummary}
                </p>
              </div>

              <div className="space-y-3 pt-4 md:pt-0 md:pl-6 md:border-l border-neutral-200">
                <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest font-display">Target Entities</p>
                <div className="flex flex-wrap gap-1">
                  {selectedArticle.entityFocus.map((ent, idx) => (
                    <span key={idx} className="bg-white border border-neutral-200 text-neutral-700 text-[9px] font-medium px-2 py-0.5 rounded font-mono">
                      {ent}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content Render */}
            <div 
              className="max-w-3xl mx-auto prose prose-neutral prose-sm lg:prose-base leading-relaxed text-neutral-700 my-8 space-y-6"
              dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              id="article-html-body"
            />

            {/* Key Takeaways */}
            <div className="max-w-3xl mx-auto mt-10 pt-8 border-t border-neutral-100" id="takeaways-panel">
              <h5 className="font-display font-bold text-neutral-900 text-sm uppercase tracking-wider mb-4">
                Core Compliance Takeaways
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {selectedArticle.keyTakeaways.map((take, idx) => (
                  <div key={idx} className="bg-neutral-50/50 border border-neutral-100 p-4 rounded-xl flex items-start space-x-2.5">
                    <span className="text-[#0F4CFF] text-xs font-extrabold font-mono mt-0.5">0{idx + 1}.</span>
                    <p className="text-xs text-neutral-600 leading-relaxed font-medium">{take}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Return footer button */}
            <div className="max-w-3xl mx-auto mt-12 pt-6 border-t border-neutral-100 text-center">
              <button
                onClick={() => {
                  setSelectedArticle(null);
                  window.scrollTo({ top: document.getElementById('ai-knowledge-hub')?.offsetTop, behavior: 'smooth' });
                }}
                className="inline-flex items-center space-x-2 bg-neutral-950 hover:bg-neutral-900 text-white font-display text-xs font-semibold py-3 px-6 rounded-xl transition-all"
                id="blog-bottom-back-btn"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Knowledge base</span>
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
