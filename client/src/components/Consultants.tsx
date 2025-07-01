export default function Consultants() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const consultants = [
    {
      name: "Diya Patel",
      school: "Harvard University",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGBOYuTViXTqA/profile-displayphoto-shrink_800_800/B4DZZgSM54HIAc-/0/1745372108012?e=1756944000&v=beta&t=DvUuw3pUupxxPPF3fBuZ_h7Kkl_LYSUTpE4NPy8LUGY",
      bio: "Medicine and pre-health specialist with extensive experience in medical school preparation. Expert in crafting compelling narratives for healthcare programs and research opportunities."
    },
    {
      name: "Aditya Kirubakaran",
      school: "UC Berkeley M.E.T.",
      image: "https://i.imgur.com/11F5NtV.png",
      bio: "Business and engineering expert specializing in dual-degree programs. Guides students through business profiles, extracurriculars, and competitive engineering applications with proven success strategies."
    },
    {
      name: "Archisa Arora",
      school: "University of Pennsylvania",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQGdJxQyezrA8A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729811053003?e=1756944000&v=beta&t=yu-LYIl0jWQn5SLPTqwZCeuJQqTe6uuR1JaVAS68cd0",
      bio: "Engineering and computer science specialist. Expert in technical program applications, research opportunities, and crafting compelling narratives for STEM fields."
    }
  ];

  return (
    <section id="consultants" className="py-20 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('https://i.imgur.com/Wg9yEHo.png')"
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
              <button 
                onClick={scrollToContact}
                className="glass-button px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300"
              >
                Schedule Consultation
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
