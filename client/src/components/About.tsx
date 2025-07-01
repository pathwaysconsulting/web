export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('https://i.imgur.com/zkX3ASK.png')"
        }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 header-font">
            About <span className="text-primary">Pathways</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a premier college consulting firm founded by successful graduates from the world's most prestigious universities. Our mission is to guide exceptional students through the complex admissions process.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="glass-effect rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold text-primary mb-4">98%</div>
            <h3 className="text-xl font-semibold mb-2 header-font">Success Rate</h3>
            <p className="text-muted-foreground">Students admitted to their top choice universities</p>
          </div>
          <div className="glass-effect rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold text-primary mb-4">200+</div>
            <h3 className="text-xl font-semibold mb-2 header-font">Essays Edited</h3>
            <p className="text-muted-foreground">Crafted and perfected personal statements</p>
          </div>
          <div className="glass-effect rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold text-primary mb-4">T10</div>
            <h3 className="text-xl font-semibold mb-2 header-font">Universities</h3>
            <p className="text-muted-foreground">Students guided to top 10 institutions</p>
          </div>
          <div className="glass-effect rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold text-primary mb-4">2</div>
            <h3 className="text-xl font-semibold mb-2 header-font">Day Turnaround</h3>
            <p className="text-muted-foreground">For any submissions and feedback</p>
          </div>
        </div>
      </div>
    </section>
  );
}
