import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { X, Play } from 'lucide-react';

interface PortfolioWork {
  id: number;
  title: string;
  category: 'storyboard' | 'animation' | 'character';
  mediaType: 'image' | 'video';
  image: string;
  videoUrl?: string;
  description: string;
}

const portfolioWorks: PortfolioWork[] = [
  {
    id: 1,
    title: "Animated Short Film",
    category: "animation",
    mediaType: "video",
    image: "https://images.unsplash.com/photo-1714251638558-349c2f49ea33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9yeWJvYXJkJTIwc2tldGNoJTIwYW5pbWF0aW9ufGVufDF8fHx8MTc1ODcxMDk3OHww&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    description: "2D animated short film with custom character design"
  },
  {
    id: 2,
    title: "Fantasy Character Series",
    category: "character",
    mediaType: "image",
    image: "https://images.unsplash.com/photo-1741894785509-d87c84bdc275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwyZCUyMGNoYXJhY3RlciUyMGRlc2lnbiUyMGNvbmNlcHQlMjBhcnR8ZW58MXx8fHwxNzU4NzEwOTc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Character design concepts for fantasy adventure"
  },
  {
    id: 3,
    title: "Motion Graphics Demo",
    category: "animation",
    mediaType: "video",
    image: "https://images.unsplash.com/photo-1730641884360-0f6bb86e70e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBhcnR3b3JrJTIwZHJhd2luZ3xlbnwxfHx8fDE3NTg3MTA5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    description: "2D animation sequences for commercial project"
  },
  {
    id: 4,
    title: "Commercial Storyboard",
    category: "storyboard",
    mediaType: "image",
    image: "https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzU4Njk4OTE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Storyboard for television commercial campaign"
  },
  {
    id: 5,
    title: "Character Animation Reel",
    category: "character",
    mediaType: "video",
    image: "https://images.unsplash.com/photo-1732811798242-6d31a6164660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyYWN0ZXIlMjBkZXNpZ24lMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzU4NjgwMzQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    description: "Character design and animation showcase reel"
  },
  {
    id: 6,
    title: "Animated Series Pilot",
    category: "animation",
    mediaType: "video",
    image: "https://images.unsplash.com/photo-1730641884360-0f6bb86e70e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBhcnR3b3JrJTIwZHJhd2luZ3xlbnwxfHx8fDE3NTg3MTA5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    description: "2D animation work for series pilot episode"
  }
];

const categories = [
  { id: 'all', label: 'All Work' },
  { id: 'storyboard', label: 'Storyboards' },
  { id: 'animation', label: '2D Animation' },
  { id: 'character', label: 'Character Design' },
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedWork, setSelectedWork] = useState<PortfolioWork | null>(null);

  const filteredWorks = activeCategory === 'all' 
    ? portfolioWorks 
    : portfolioWorks.filter(work => work.category === activeCategory);

  const openModal = (work: PortfolioWork) => {
    setSelectedWork(work);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedWork(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of my work spanning storyboards, 2D animation, and character design
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <div className="flex md:flex-wrap gap-4 bg-card rounded-full p-2 shadow-lg overflow-x-auto md:overflow-x-visible scrollbar-hide snap-x snap-mandatory">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 whitespace-nowrap flex-shrink-0 snap-center ${
                    activeCategory === category.id
                      ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-md'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredWorks.map((work, index) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-border cursor-pointer"
                onClick={() => openModal(work)}
              >
                <div className="relative overflow-hidden">
                  {work.mediaType === 'video' ? (
                    <div className="relative">
                      <ImageWithFallback
                        src={work.image}
                        alt={work.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/30 transition-colors duration-300">
                          <Play className="w-8 h-8 text-white" fill="white" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <ImageWithFallback
                      src={work.image}
                      alt={work.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h3 className="text-lg font-semibold mb-1">{work.title}</h3>
                    <p className="text-sm opacity-90">{work.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                    work.category === 'storyboard' ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200' :
                    work.category === 'animation' ? 'bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-200' :
                    'bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200'
                  }`}>
                    {work.category === 'storyboard' ? 'Storyboard' :
                     work.category === 'animation' ? '2D Animation' :
                     'Character Design'}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-card rounded-xl overflow-hidden max-w-4xl max-h-[90vh] w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Media Content */}
              <div className="relative">
                {selectedWork.mediaType === 'video' && selectedWork.videoUrl ? (
                  <video
                    controls
                    autoPlay
                    className="w-full max-h-[70vh] object-contain"
                    poster={selectedWork.image}
                  >
                    <source src={selectedWork.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <ImageWithFallback
                    src={selectedWork.image}
                    alt={selectedWork.title}
                    className="w-full max-h-[70vh] object-contain"
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-foreground">{selectedWork.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    selectedWork.category === 'storyboard' ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200' :
                    selectedWork.category === 'animation' ? 'bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-200' :
                    'bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200'
                  }`}>
                    {selectedWork.category === 'storyboard' ? 'Storyboard' :
                     selectedWork.category === 'animation' ? '2D Animation' :
                     'Character Design'}
                  </span>
                </div>
                <p className="text-muted-foreground text-lg">{selectedWork.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}