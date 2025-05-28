
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="font-semibold text-gray-900">HirePro</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              SMARTER HIRING STARTS HERE.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Revolutionary AI-powered recruitment platform that transforms how you discover, evaluate, and hire top talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 flex items-center gap-2">
                <Play className="w-4 h-4" />
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3">
              <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="text-gray-500">Dashboard Preview</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 transform -rotate-6">
              <div className="w-20 h-24 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
