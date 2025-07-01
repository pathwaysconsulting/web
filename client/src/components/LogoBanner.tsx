export default function LogoBanner() {
  const colleges = [
    { 
      name: "Harvard", 
      logo: "https://i.imgur.com/SBE19yg.png"
    },
    { 
      name: "UC Berkeley", 
      logo: "https://i.imgur.com/JpmX5qm.png"
    },
    { 
      name: "UPenn", 
      logo: "https://i.imgur.com/HrL5xh1.png"
    },
    { 
      name: "Northwestern", 
      logo: "https://i.imgur.com/G6M44eK.png"
    },
    { 
      name: "Columbia", 
      logo: "https://i.imgur.com/BnEHttx.png"
    },
    { 
      name: "Brown", 
      logo: "https://i.imgur.com/OnE8EuM.png"
    },
    { 
      name: "Cornell", 
      logo: "https://i.imgur.com/nOh5tKo.png"
    },
    { 
      name: "Princeton", 
      logo: "https://i.imgur.com/mz60RAr.png"
    },
    { 
      name: "NYU Stern", 
      logo: "https://i.imgur.com/0ZFHS00.png"
    },
    { 
      name: "UMich Ross", 
      logo: "https://i.imgur.com/9Muc8EP.png"
    },
    { 
      name: "UNC", 
      logo: "https://i.imgur.com/zVzaFPU.png"
    },
  ];

  return (
    <section className="py-12 overflow-hidden bg-cosmic-black/50 backdrop-blur-sm">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-semibold text-primary header-font">Admitted to Top Universities</h3>
      </div>
      <div className="relative">
        <div className="flex animate-scroll whitespace-nowrap">
          {/* First set of logos */}
          <div className="flex items-center space-x-12 px-8">
            {colleges.map((college, index) => (
              <div key={index} className="glass-effect rounded-lg p-4 min-w-[120px] text-center hover:scale-105 transition-transform duration-300">
                <img 
                  src={college.logo} 
                  alt={`${college.name} logo`}
                  className="w-16 h-16 mx-auto object-contain"
                />
                <div className="text-sm font-semibold text-white mt-2">{college.name}</div>
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center space-x-12 px-8">
            {colleges.map((college, index) => (
              <div key={`duplicate-${index}`} className="glass-effect rounded-lg p-4 min-w-[120px] text-center hover:scale-105 transition-transform duration-300">
                <img 
                  src={college.logo} 
                  alt={`${college.name} logo`}
                  className="w-16 h-16 mx-auto object-contain"
                />
                <div className="text-sm font-semibold text-white mt-2">{college.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
