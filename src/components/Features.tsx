
import { Brain, Zap, Shield, Users } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Advanced algorithms analyze candidate profiles and match them with perfect job opportunities."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Streamline your hiring process with automated screening and instant candidate recommendations."
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with full GDPR compliance and data protection measures."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless collaboration tools for hiring teams with real-time feedback and decision tracking."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Smarter Hiring with AI-Powered Automation.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your recruitment process with cutting-edge technology that finds the perfect candidates faster than ever before.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional feature sections */}
        <div className="mt-20 space-y-20">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`order-2 ${item % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`order-1 ${item % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Advanced Feature #{item}
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Comprehensive solution that addresses all your hiring challenges with innovative technology and seamless user experience.
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
