export default function Consultants() {
  const consultants = [
    {
      name: "Diya Patel",
      school: "Harvard University",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      bio: "Specialized in STEM applications and research opportunities. Helped 150+ students gain admission to top-tier universities with a focus on academic excellence and extracurricular leadership."
    },
    {
      name: "Aditya Kirubakaran",
      school: "UC Berkeley M.E.T.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      bio: "Expert in engineering and technology programs. Guides students through the competitive landscape of top engineering schools with proven strategies for standout applications."
    },
    {
      name: "Archisa Arora",
      school: "University of Pennsylvania",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      bio: "Specializes in business and liberal arts applications. Known for crafting compelling personal narratives that showcase unique perspectives and leadership potential."
    }
  ];

  return (
    <section id="consultants" className="py-20 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 header-font">
            Meet Your <span className="text-primary">Consultants</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our team consists of graduates from the most prestigious institutions who understand what it takes to succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {consultants.map((consultant, index) => (
            <div 
              key={index}
              className="glass-effect rounded-2xl p-8 text-center group hover:scale-105 transition-transform duration-300"
            >
              <img 
                src={consultant.image}
                alt={`${consultant.name} - ${consultant.school} Graduate`}
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-primary"
              />
              <h3 className="text-2xl font-bold mb-2 header-font">{consultant.name}</h3>
              <div className="text-primary font-semibold mb-4">{consultant.school}</div>
              <p className="text-muted-foreground mb-6">{consultant.bio}</p>
              <button className="glass-button px-6 py-2 rounded-full">
                Schedule Consultation
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
