
export const Features = () => {
  const features = [
    {
      title: "Validate real-world job skills.",
      description: "Simply write, select the job function, and our AI will create smart job matching and validation opportunities.",
      buttonText: "Learn More",
      position: "left"
    },
    {
      title: "Interview smarter, hire faster.",
      description: "Our conversational interviews using smart intelligence AI fast processes automatic questions through voice interactions.",
      buttonText: "Learn More", 
      position: "right"
    },
    {
      title: "Track every student's job-readiness.",
      description: "Get real-time dashboards showing each student's performance, placement history, and opportunities easily and for all.",
      buttonText: "Learn More",
      position: "left"
    },
    {
      title: "Focus on the right candidates.",
      description: "Auto-rank students/candidates based on job fit. Generate tailored ready questions and interviews for higher conversion.",
      buttonText: "Learn More",
      position: "right"
    },
    {
      title: "Turn hiring data into decisions.",
      description: "Track your entire hiring funnel, from candidate applications to job placements, all from one comprehensive dashboard.",
      buttonText: "Learn More",
      position: "left"
    }
  ];

  const categories = [
    "SKILLS VALIDATION",
    "INTELLIGENT INTERVIEWING", 
    "TALENT MANAGEMENT",
    "PLACEMENT OPTIMIZATION",
    "ANALYTICS DASHBOARD"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Smarter <span className="text-blue-600">Hiring</span> with AI-Powered Automation.
          </h2>
        </div>

        {/* Features */}
        <div className="space-y-20">
          {features.map((feature, index) => (
            <div key={index} className={`flex items-center ${feature.position === 'right' ? 'flex-row-reverse' : ''} gap-16`}>
              {/* Content */}
              <div className="flex-1">
                <div className="mb-4">
                  <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                    {categories[index]}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  {feature.buttonText}
                </button>
              </div>

              {/* Geometric Illustration */}
              <div className="flex-1 flex justify-center">
                <div className="relative w-80 h-80 flex items-center justify-center">
                  {/* Background Circle */}
                  <div className="absolute inset-0 bg-white/50 rounded-full border border-gray-200"></div>
                  
                  {/* Triangle Shapes */}
                  <div className="relative">
                    <svg width="120" height="120" viewBox="0 0 120 120" className="text-gray-300">
                      <path 
                        d="M60 20 L95 80 L25 80 Z" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      />
                      <path 
                        d="M60 40 L80 70 L40 70 Z" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
