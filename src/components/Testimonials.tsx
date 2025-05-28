
export const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tailored for Modern Talent Builders
          </h2>
          <p className="text-xl text-gray-600">
            See how leading companies are transforming their hiring process
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { title: "Faster Hiring", value: "75%", desc: "Reduction in time-to-hire" },
            { title: "Better Matches", value: "90%", desc: "Candidate satisfaction rate" },
            { title: "Cost Savings", value: "60%", desc: "Lower recruitment costs" },
            { title: "Success Rate", value: "95%", desc: "Successful placements" }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-blue-50 rounded-xl p-8">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="font-semibold text-gray-900 mb-1">{stat.title}</div>
              <div className="text-sm text-gray-600">{stat.desc}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Why Teams Choose JobFinder
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { perc: "94%", title: "Accuracy", desc: "AI matching precision" },
            { perc: "89%", title: "Efficiency", desc: "Process improvement" },
            { perc: "92%", title: "Satisfaction", desc: "Client happiness rate" },
            { perc: "96%", title: "Retention", desc: "Employee retention" }
          ].map((item, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">{item.perc}</div>
              <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
              <div className="text-sm text-gray-600">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
