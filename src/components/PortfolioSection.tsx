import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { X, Play } from 'lucide-react';

interface PortfolioWork {
  id: number;
  title: string;
  category: 'storyboard' | 'animation' | 'character';
  subcategory?: 'action' | 'drama';
  mediaType: 'image' | 'video';
  image: string;
  videoUrl?: string;
  description: string;
}

const portfolioWorks: PortfolioWork[] = [
  // Animation Works
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
    id: 3,
    title: "Motion Graphics Demo",
    category: "animation",
    mediaType: "video",
    image: "https://images.unsplash.com/photo-1730641884360-0f6bb86e70e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBhcnR3b3JrJTIwZHJhd2luZ3xlbnwxfHx8fDE3NTg3MTA5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    description: "2D animation sequences for commercial project"
  },
  {
    id: 6,
    title: "Animated Series Pilot",
    category: "animation",
    mediaType: "video",
    image: "https://images.unsplash.com/photo-1730641884360-0f6bb86e70e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBhcnR3b3JrJTIwZHJhd2luZ3xlbnwxfHx8fDE3NTg3MTA5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    description: "2D animation work for series pilot episode"
  },
  
  // Character Design Works
  {
    id: 2,
    title: "Fantasy Character Series",
    category: "character",
    mediaType: "image",
    image: "https://images.unsplash.com/photo-1741894785509-d87c84bdc275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwyZCUyMGNoYXJhY3RlciUyMGRlc2lnbiUyMGNvbmNlcHQlMjBhcnR8ZW58MXx8fHwxNzU4NzEwOTc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Character design concepts for fantasy adventure"
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

  // Storyboard - Action Subcategory
  {
    id: 7,
    title: "She Fights a KILLER AI Robot to Save the Hostage",
    category: "storyboard",
    subcategory: "action",
    mediaType: "video",
    image: "https://img.youtube.com/vi/ddlT0A40nM0/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/ddlT0A40nM0",
    description: "An intense storyboard animatic depicting a heroine battling a rogue AI robot to rescue a hostage"
  },
  {
    id: 8,
    title: "SAKUGA FIGHT SCENE - DRAGON VS KNIGHT LADY",
    category: "storyboard",
    subcategory: "action",
    mediaType: "video",
    image: "https://img.youtube.com/vi/zPcgLWg0Nug/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/zPcgLWg0Nug",
    description: "A dynamic fight scene showcasing a fierce battle between a dragon and a knight lady, animated in sakuga style"
  },
  {
    id: 9,
    title: "Spider-Man Action Sequence",
    category: "storyboard",
    subcategory: "action",
    mediaType: "video",
    image: "https://img.youtube.com/vi/h_jW3p9av8U/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/h_jW3p9av8U",
    description: "An action-packed sequence featuring Spider-Man in a thrilling adventure"
  },
  {
    id: 10,
    title: "I Created the MOST EPIC Storyboard Animatic Action Fight Scene EVER!",
    category: "storyboard",
    subcategory: "action",
    mediaType: "video",
    image: "https://img.youtube.com/vi/dALDBM5aEuU/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/dALDBM5aEuU",
    description: "A creator's ambitious attempt to craft the most epic action fight scene in storyboard animatic form"
  },
  {
    id: 15,
    title: "My Cut of Devil May Cry | Storyboard Animatic Action Scene",
    category: "storyboard",
    subcategory: "action",
    mediaType: "video",
    image: "https://img.youtube.com/vi/cmXTRgQHBwU/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/cmXTRgQHBwU",
    description: "A personal interpretation of a Devil May Cry action scene, presented as a storyboard animatic"
  },
  {
    id: 16,
    title: "I Created the MOST EPIC Storyboard Animatic Action Fight Scene EVER! 2",
    category: "storyboard",
    subcategory: "action",
    mediaType: "video",
    image: "https://img.youtube.com/vi/tWB9GyuaGew/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/tWB9GyuaGew",
    description: "A sequel to the creator's previous work, aiming to surpass the original in epicness and action"
  },
  {
    id: 17,
    title: "Unstoppable Force vs Immovable Object – Action Storyboard Fight",
    category: "storyboard",
    subcategory: "action",
    mediaType: "video",
    image: "https://img.youtube.com/vi/JZ4-WF6w3XM/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/JZ4-WF6w3XM",
    description: "A conceptual fight scene exploring the clash between an unstoppable force and an immovable object"
  },
  {
    id: 18,
    title: "FLY GIRL | Epic City Flight & Missile Battle",
    category: "storyboard",
    subcategory: "action",
    mediaType: "video",
    image: "https://img.youtube.com/vi/xCbZB8EOId0/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/xCbZB8EOId0",
    description: "An exhilarating animatic featuring a female protagonist navigating a cityscape while engaging in a missile battle"
  },
  {
    id: 19,
    title: "MAN vs ZOMBIES | Brutal Storyboard Animatic Fight",
    category: "storyboard",
    subcategory: "action",
    mediaType: "video",
    image: "https://img.youtube.com/vi/VBw6ncOZeCY/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/VBw6ncOZeCY",
    description: "A brutal and intense animatic depicting a man's fight for survival against a horde of zombies"
  },

  // Storyboard - Drama Subcategory
  {
    id: 11,
    title: "Emotional Dialogue Scene",
    category: "storyboard",
    subcategory: "drama",
    mediaType: "image",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbW90aW9uYWwlMjBkaWFsb2d1ZSUyMHNjZW5lfGVufDF8fHx8MTc1ODcxMDk4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Intimate dialogue scene storyboard focusing on character emotions"
  },
  {
    id: 12,
    title: "Family Reunion Storyboard",
    category: "storyboard",
    subcategory: "drama",
    mediaType: "video",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjByZXVuaW9uJTIwc3Rvcnlib2FyZHxlbnwxfHx8fDE3NTg3MTA5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    description: "Heartwarming family reunion storyboard with emotional beats"
  },
  {
    id: 13,
    title: "Romantic Moment Storyboard",
    category: "storyboard",
    subcategory: "drama",
    mediaType: "image",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMG1vbWVudCUyMHN0b3J5Ym9hcmR8ZW58MXx8fHwxNzU4NzEwOTg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Tender romantic scene storyboard with subtle character interactions"
  },
  {
    id: 14,
    title: "Loss and Grief Sequence",
    category: "storyboard",
    subcategory: "drama",
    mediaType: "video",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3NzJTIwYW5kJTIwZ3JpZWYlMjBzZXF1ZW5jZXxlbnwxfHx8fDE3NTg3MTA5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    description: "Powerful dramatic sequence storyboard exploring themes of loss and grief"
  }
];

const categories = [
  { id: 'storyboard', label: 'Storyboards' },
  { id: 'animation', label: '2D Animation' },
  { id: 'character', label: 'Character Design' },
];

const storyboardSubcategories = [
  { id: 'action', label: 'Action' },
  { id: 'drama', label: 'Drama' },
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('storyboard');
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [selectedWork, setSelectedWork] = useState<PortfolioWork | null>(null);

  const filteredWorks = (() => {
    if (activeCategory === 'storyboard' && activeSubcategory) {
      return portfolioWorks.filter(work => 
        work.category === 'storyboard' && work.subcategory === activeSubcategory
      );
    }
    
    if (activeCategory === 'storyboard' && !activeSubcategory) {
      return portfolioWorks.filter(work => work.category === 'storyboard');
    }
    
    return portfolioWorks.filter(work => work.category === activeCategory);
  })();

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setActiveSubcategory(null); // Reset subcategory when changing main category
  };

  const handleSubcategoryChange = (subcategoryId: string) => {
    setActiveSubcategory(subcategoryId);
  };

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
            className="flex flex-col items-center mb-12"
          >
            {/* Main Categories */}
            <div className="flex md:flex-wrap gap-4 bg-card rounded-full p-2 shadow-lg overflow-x-auto md:overflow-x-visible scrollbar-hide snap-x snap-mandatory mb-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
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

            {/* Storyboard Subcategories */}
            {activeCategory === 'storyboard' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex gap-3 bg-accent rounded-full p-2 shadow-md"
              >
                {storyboardSubcategories.map((subcategory) => (
                  <button
                    key={subcategory.id}
                    onClick={() => handleSubcategoryChange(subcategory.id)}
                    className={`px-4 py-2 rounded-full transition-all duration-300 text-sm ${
                      activeSubcategory === subcategory.id
                        ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-md'
                        : 'text-muted-foreground hover:text-foreground hover:bg-card'
                    }`}
                  >
                    {subcategory.label}
                  </button>
                ))}
              </motion.div>
            )}
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
              className="relative bg-card rounded-xl overflow-hidden max-w-6xl max-h-[95vh] w-full shadow-2xl"
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
                  selectedWork.videoUrl.includes('youtube.com/embed') ? (
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <iframe
                        src={selectedWork.videoUrl}
                        title={selectedWork.title}
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <video
                      controls
                      autoPlay
                      className="w-full max-h-[70vh] object-contain"
                      poster={selectedWork.image}
                    >
                      <source src={selectedWork.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )
                ) : (
                  <ImageWithFallback
                    src={selectedWork.image}
                    alt={selectedWork.title}
                    className="w-full max-h-[70vh] object-contain"
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-4 md:p-6">
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