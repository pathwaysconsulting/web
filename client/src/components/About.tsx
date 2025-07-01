export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
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

        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-effect rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold text-primary mb-4">98%</div>
            <h3 className="text-xl font-semibold mb-2 header-font">Success Rate</h3>
            <p className="text-muted-foreground">Students admitted to their top choice universities</p>
          </div>
          <div className="glass-effect rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold text-primary mb-4">500+</div>
            <h3 className="text-xl font-semibold mb-2 header-font">Students Guided</h3>
            <p className="text-muted-foreground">Successful applications and admissions</p>
          </div>
          <div className="glass-effect rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold text-primary mb-4">50+</div>
            <h3 className="text-xl font-semibold mb-2 header-font">Top Universities</h3>
            <p className="text-muted-foreground">Partner institutions and alumni networks</p>
          </div>
        </div>
      </div>
    </section>
  );
}
