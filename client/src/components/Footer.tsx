export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-primary mb-4 header-font">Pathways Consulting</div>
            <p className="text-muted-foreground text-sm">Guiding exceptional students to extraordinary futures.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 header-font">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="hover:text-primary transition-colors"
                >
                  College Selection
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="hover:text-primary transition-colors"
                >
                  Essay Writing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="hover:text-primary transition-colors"
                >
                  Interview Prep
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="hover:text-primary transition-colors"
                >
                  Profile Building
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 header-font">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button className="hover:text-primary transition-colors">
                  Application Timeline
                </button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors">
                  Scholarship Guide
                </button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors">
                  Success Stories
                </button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors">
                  Blog
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 header-font">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>pathwaysconsultingorg@gmail.com</li>
              <li>New Jersey, USA</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Pathways Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
