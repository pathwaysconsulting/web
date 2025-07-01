export default function Services() {
  const services = [
    {
      icon: "📝",
      title: "Essay Writing",
      description: "Craft compelling personal statements and supplemental essays"
    },
    {
      icon: "🎯",
      title: "School Selection",
      description: "Strategic university list building and application planning"
    },
    {
      icon: "📊",
      title: "Profile Building",
      description: "Extracurricular planning and academic optimization"
    },
    {
      icon: "🎤",
      title: "Interview Prep",
      description: "Mock interviews and communication skill development"
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 header-font">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive support throughout your entire college application journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="glass-effect rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2 header-font">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="glass-button px-12 py-4 rounded-full text-lg font-semibold animate-glow">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}
