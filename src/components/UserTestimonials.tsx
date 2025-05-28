
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const UserTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "This platform has made it easier & faster to match candidates to the right roles. It helps them become job-ready, & we now receive better-quality applicants, streamlining our hiring process.",
      author: "Priya Sharma",
      role: "Talent Acquisition Head",
      company: "HireConnect Solutions"
    },
    {
      quote: "The AI-powered matching system has revolutionized how we find talent. Our time-to-hire has decreased by 60% while candidate quality has improved significantly.",
      author: "Mark Johnson",
      role: "HR Director",
      company: "TechFlow Innovations"
    },
    {
      quote: "Amazing platform! The automated screening process saves us countless hours, and the candidates we receive are much better aligned with our requirements.",
      author: "Sarah Chen",
      role: "Recruitment Manager", 
      company: "Global Dynamics"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            USER <span className="text-blue-600">SPOTLIGHTS</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto relative">
            {/* Card flip animation container */}
            <div className="min-h-[200px] flex flex-col justify-center">
              <div 
                key={currentIndex}
                className="animate-fade-in"
              >
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                <div className="text-center">
                  <div className="font-bold text-gray-900 text-lg mb-1">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:border-blue-700"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:border-blue-700"
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
