
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-100 via-purple-50 to-blue-50 min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="w-full z-50 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">❄</span>
            </div>
            <span className="font-semibold text-gray-900 text-lg">JOB SPRING</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Login</a>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">Book a Call</Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              SMARTER HIRING STARTS HERE.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              AI-powered tools to filter, interview, and hire — all in one seamless platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4">
                Book a Call
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 flex items-center gap-2">
                <Play className="w-4 h-4" />
                Watch Video
              </Button>
            </div>
          </div>

          {/* Resume Card - Left */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 hidden lg:block">
            <div className="bg-white rounded-lg shadow-lg p-6 w-64 transform -rotate-12">
              <div className="space-y-3">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                <div className="space-y-2 mt-4">
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Card - Right */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 hidden lg:block">
            <div className="bg-white rounded-lg shadow-lg p-6 w-64 transform rotate-12">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div className="space-y-1">
                    <div className="h-3 bg-gray-300 rounded w-20"></div>
                    <div className="h-2 bg-gray-200 rounded w-16"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
