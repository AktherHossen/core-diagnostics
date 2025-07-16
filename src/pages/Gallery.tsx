import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from "@/components/Navbar";

interface GalleryItem {
  id: number;
  imageUrl: string;
  caption: string;
}

const Gallery = () => {
  const [galleryItems] = useState<GalleryItem[]>([
    {
      id: 1,
      imageUrl: "/Gallery/event1.jpeg",
      caption: "Entrance of Core Diagnostic Center"
    },
    {
      id: 2,
      imageUrl: "/Gallery/event2.jpeg",
      caption: "Published by Prothom Alo newspaper"
    },
    {
      id: 3,
      imageUrl: "/Gallery/event3.jpeg",
      caption: "EEG TEST"
    },
    {
      id: 4,
      imageUrl: "/Gallery/event4.jpeg",
      caption: "Meeting with Transcom Beverages Ltd"
    },
    {
      id: 5,
      imageUrl: "/Gallery/event5.jpeg",
      caption: "Bangla New year celebration"
    },
    {
      id: 6,
      imageUrl: "/Gallery/event6.jpeg",
      caption: "Haz Package"
    },
    {
      id: 7,
      imageUrl: "/Gallery/employee.jpeg",
      caption: "Support Staff"
    },
    {
      id: 8,
      imageUrl: "/Gallery/waiting_area.jpeg",
      caption: "Waiting Area"
    },
    {
      id: 9,
      imageUrl: "/Gallery/lab_assistant.jpeg",
      caption: "Lab Assistants in Action"
    },
    {
      id: 10,
      imageUrl: "/Gallery/reception.jpeg",
      caption: "Reception Area"
    },
    {
      id: 11,
      imageUrl: "/Gallery/lab1.jpeg",
      caption: "Inside Our Laboratory"
    },
    {
      id: 12,
      imageUrl: "/Gallery/lab2.jpeg",
      caption: "Lab Assistants in Action"
    },
    {
      id: 13,
      imageUrl: "/Gallery/lab3.jpeg",
      caption: "Inside Our Laboratory"
    },
    {
      id: 14,
      imageUrl: "/Gallery/lab4.jpeg",
      caption: "Inside Our Laboratory"
    },
    {
      id: 15,
      imageUrl: "/Gallery/lab5.jpeg",
      caption: "Inside Our Laboratory"
    },
    {
      id: 16,
      imageUrl: "/Gallery/lab6.jpeg",
      caption: "Inside Our Laboratory"
    },
  ]);

  const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>({});
  const [errorImages, setErrorImages] = useState<{ [key: number]: boolean }>({});

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const handleImageError = (id: number) => {
    setErrorImages(prev => ({ ...prev, [id]: true }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold text-gray-900 text-center mb-12"
          >
            📸 Event Gallery
          </motion.h1>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {galleryItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative">
                    {!loadedImages[item.id] && !errorImages[item.id] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                    {errorImages[item.id] ? (
                      <div className="h-64 flex items-center justify-center bg-gray-100">
                        <p className="text-gray-500 text-center px-4">Image not available</p>
                      </div>
                    ) : (
                      <img
                        src={item.imageUrl}
                        alt={item.caption}
                        className={`w-full h-64 object-cover ${!loadedImages[item.id] ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                        loading="lazy"
                        onLoad={() => handleImageLoad(item.id)}
                        onError={() => handleImageError(item.id)}
                      />
                    )}
                  </div>
                  <div className="p-4 bg-white">
                    <p className="text-gray-800 text-center font-semibold">
                      {item.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
