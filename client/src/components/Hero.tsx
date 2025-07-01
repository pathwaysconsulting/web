export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="parallax-stars absolute inset-0 opacity-30"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: "url('https://i.imgur.com/LZkr5nj.png')"
        }}
      ></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-float header-font">
          Your Journey to{" "}
          <span className="text-primary">Elite Universities</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Guided by consultants from Harvard, UC Berkeley, and University of Pennsylvania
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="glass-button px-8 py-4 rounded-full text-lg font-semibold"
          >
            Start Your Application
          </button>
          <button 
            onClick={() => {
              const element = document.getElementById("about");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="glass-effect px-8 py-4 rounded-full text-lg font-medium border border-white/20"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
