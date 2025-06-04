import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Crown, Clock } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    type: 'cozy' | 'glam' | 'legend';
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "How far in advance do you usually plan parties?",
    options: [
      { text: "Months ahead - I love planning!", type: 'glam' },
      { text: "A few weeks is perfect", type: 'cozy' },
      { text: "Last minute magic is my specialty", type: 'legend' }
    ]
  },
  {
    id: 2,
    text: "What's your ideal party vibe?",
    options: [
      { text: "Instagram-worthy & luxurious", type: 'glam' },
      { text: "Warm & intimate", type: 'cozy' },
      { text: "Fun & spontaneous", type: 'legend' }
    ]
  },
  {
    id: 3,
    text: "What's your party planning style?",
    options: [
      { text: "Every detail perfectly coordinated", type: 'glam' },
      { text: "Focus on comfort & connection", type: 'cozy' },
      { text: "Go with the flow & adapt", type: 'legend' }
    ]
  }
];

const results = {
  cozy: {
    title: "The Cozy Parent",
    description: "You create warm, intimate celebrations that make everyone feel at home. Our Enchanted Dreams package is perfect for your style!",
    icon: Star,
    package: "Enchanted Dreams",
    color: "bg-primary-100 text-primary-600"
  },
  glam: {
    title: "The Glam Parent",
    description: "You love creating picture-perfect moments that wow everyone. Our Ultimate Fantasy package will match your vision!",
    icon: Crown,
    package: "Ultimate Fantasy",
    color: "bg-accent-100 text-accent-600"
  },
  legend: {
    title: "The Last-Minute Legend",
    description: "You're spontaneous and always make it work! Our Magical Celebration package gives you flexibility with flair.",
    icon: Clock,
    package: "Magical Celebration",
    color: "bg-secondary-100 text-secondary-600"
  }
};

const ParentQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<keyof typeof results | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const savedResult = localStorage.getItem('quizResult');
    if (savedResult) {
      setResult(savedResult as keyof typeof results);
    }
  }, []);

  const handleAnswer = (type: string) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Calculate result
      const counts = newAnswers.reduce((acc, type) => {
        acc[type] = (acc[type] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      const finalResult = Object.entries(counts).reduce((a, b) => 
        counts[a] > counts[b[0]] ? a : b[0]
      ) as keyof typeof results;

      setResult(finalResult);
      localStorage.setItem('quizResult', finalResult);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setHasStarted(false);
    localStorage.removeItem('quizResult');
  };

  const renderIcon = (result: keyof typeof results) => {
    const IconComponent = results[result].icon;
    return <IconComponent className="w-8 h-8" />;
  };

  return (
    <div className="glass-card p-8 relative overflow-hidden">
      {/* Sparkle effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-400 rounded-full"
            animate={{
              opacity: [0, 1, 0],
              scale: [1, 1.2, 1],
              x: Math.random() * 40 - 20,
              y: Math.random() * 40 - 20,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {!hasStarted && !result ? (
          <motion.div
            key="start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-primary-900 mb-4">
              What Kind of Glamp Parent Are You? 🎪
            </h3>
            <p className="text-gray-700 mb-6">
              Take our quick quiz to discover your perfect glamping style!
            </p>
            <motion.button
              className="btn btn-primary"
              onClick={() => setHasStarted(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Quiz ✨
            </motion.button>
          </motion.div>
        ) : result ? (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center"
          >
            <div className={`w-16 h-16 ${results[result].color} rounded-full flex items-center justify-center mx-auto mb-4`}>
              {renderIcon(result)}
            </div>
            <h3 className="text-2xl font-bold text-primary-900 mb-2">
              {results[result].title}
            </h3>
            <p className="text-gray-700 mb-6">
              {results[result].description}
            </p>
            <div className="space-y-4">
              <motion.a
                href={`/book-now?package=${results[result].package}`}
                className="btn btn-primary block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your {results[result].package} Package ✨
              </motion.a>
              <button
                onClick={resetQuiz}
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                Take Quiz Again
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="question"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
          >
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <motion.div
                  className="h-full bg-primary-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            <h3 className="text-xl font-bold text-primary-900 mb-6">
              {questions[currentQuestion].text}
            </h3>

            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  className="w-full p-4 text-left rounded-lg border-2 border-gray-200 hover:border-primary-500 transition-colors"
                  onClick={() => handleAnswer(option.type)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {option.text}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ParentQuiz;