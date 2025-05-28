
import { Play } from "lucide-react";

export const VideoSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative">
          <div className="bg-gray-900 rounded-2xl aspect-video flex items-center justify-center shadow-2xl">
            <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-gray-900 ml-1" />
            </button>
          </div>
        </div>
        
        {/* Trusted by section */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm uppercase tracking-wide mb-8">Trusted by the best</p>
          <div className="flex items-center justify-center space-x-12 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Google</div>
            <div className="text-2xl font-bold text-gray-400">Meta</div>
            <div className="text-2xl font-bold text-gray-400">Apple</div>
            <div className="text-2xl font-bold text-gray-400">Microsoft</div>
          </div>
        </div>
      </div>
    </section>
  );
};
