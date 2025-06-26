import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Zap, Clock, Eye } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  cls: number; // Cumulative Layout Shift
  fid: number; // First Input Delay
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [showMetrics, setShowMetrics] = useState(false);

  useEffect(() => {
    // Only show in development
    if (import.meta.env.DEV) {
      measurePerformance();
    }
  }, []);

  const measurePerformance = () => {
    // Wait for page to fully load
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        // Get Web Vitals
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
              setMetrics(prev => prev ? { ...prev, fcp: entry.startTime } : null);
            }
          }
        });

        observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift', 'first-input'] });

        // Basic metrics
        const loadTime = navigation.loadEventEnd - navigation.navigationStart;
        
        setMetrics({
          loadTime,
          fcp: 0,
          lcp: 0,
          cls: 0,
          fid: 0
        });
      }, 1000);
    });
  };

  const getScoreColor = (score: number, thresholds: [number, number]) => {
    if (score <= thresholds[0]) return 'text-green-600';
    if (score <= thresholds[1]) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (!import.meta.env.DEV || !metrics) return null;

  return (
    <>
      {/* Performance Toggle */}
      <button
        onClick={() => setShowMetrics(!showMetrics)}
        className="fixed top-20 left-4 z-40 bg-green-600 text-white p-2 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300"
        title="Performance Metrics"
      >
        <Activity className="w-5 h-5" />
      </button>

      {/* Performance Panel */}
      <AnimatePresence>
        {showMetrics && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            className="fixed top-32 left-4 z-40 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-64"
          >
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <Activity className="w-5 h-5 mr-2 text-green-600" />
              Performance Metrics
            </h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-blue-600" />
                  <span className="text-sm">Load Time</span>
                </div>
                <span className={`text-sm font-medium ${getScoreColor(metrics.loadTime, [1000, 3000])}`}>
                  {(metrics.loadTime / 1000).toFixed(2)}s
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Eye className="w-4 h-4 mr-2 text-purple-600" />
                  <span className="text-sm">FCP</span>
                </div>
                <span className={`text-sm font-medium ${getScoreColor(metrics.fcp, [1800, 3000])}`}>
                  {(metrics.fcp / 1000).toFixed(2)}s
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-yellow-600" />
                  <span className="text-sm">LCP</span>
                </div>
                <span className={`text-sm font-medium ${getScoreColor(metrics.lcp, [2500, 4000])}`}>
                  {(metrics.lcp / 1000).toFixed(2)}s
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-200">
              <div className="text-xs text-gray-500">
                <div className="flex items-center justify-between">
                  <span>Good</span>
                  <span className="text-green-600">●</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Needs Improvement</span>
                  <span className="text-yellow-600">●</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Poor</span>
                  <span className="text-red-600">●</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PerformanceMonitor;