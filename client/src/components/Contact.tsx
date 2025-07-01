export default function Contact() {

  return (
    <section id="contact" className="py-20 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('https://i.imgur.com/z3y5PfL.png')"
        }}
      ></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-6 header-font">
          Ready to Start Your <span className="text-primary">Journey?</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Take the first step towards your dream university. Schedule a free consultation with our expert team today.
        </p>

        <div className="glass-effect rounded-2xl p-12 max-w-lg mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 header-font">Ready to Get Started?</h3>
            <p className="text-lg text-muted-foreground">
              Book your free consultation today and begin your journey to your dream university.
            </p>
          </div>
          <a 
            href="https://calendar.app.google/DzjneFCj2F2ukBRD9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block glass-button px-12 py-4 rounded-full text-lg font-semibold animate-glow hover:scale-105 transition-transform duration-300"
          >
            Schedule Free Consultation
          </a>
        </div>

        <div className="mt-12 flex justify-center text-muted-foreground">
          <div className="text-center">
            <div className="font-semibold">Email</div>
            <div>pathwaysconsultingorg@gmail.com</div>
          </div>
        </div>
      </div>
    </section>
  );
}
