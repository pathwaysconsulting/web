export default function LogoBanner() {
  const colleges = [
    { 
      name: "Harvard", 
      logo: (
        <svg className="w-16 h-16 mx-auto" viewBox="0 0 100 100" fill="none">
          <rect width="100" height="100" rx="8" fill="#A41E22"/>
          <path d="M25 20h50v60H25z" fill="white"/>
          <text x="50" y="55" textAnchor="middle" className="text-xs font-bold fill-red-800">HARVARD</text>
        </svg>
      )
    },
    { 
      name: "UC Berkeley", 
      logo: (
        <svg className="w-16 h-16 mx-auto" viewBox="0 0 100 100" fill="none">
          <rect width="100" height="100" rx="8" fill="#003262"/>
          <circle cx="50" cy="50" r="30" fill="#FDB515"/>
          <text x="50" y="55" textAnchor="middle" className="text-xs font-bold fill-blue-900">CAL</text>
        </svg>
      )
    },
    { 
      name: "UPenn", 
      logo: (
        <svg className="w-16 h-16 mx-auto" viewBox="0 0 100 100" fill="none">
          <rect width="100" height="100" rx="8" fill="#011F5B"/>
          <path d="M20 30h60l-10 40H30z" fill="#990000"/>
          <text x="50" y="55" textAnchor="middle" className="text-xs font-bold fill-white">PENN</text>
        </svg>
      )
    },
    { 
      name: "Northwestern", 
      logo: (
        <svg className="w-16 h-16 mx-auto" viewBox="0 0 100 100" fill="none">
          <rect width="100" height="100" rx="8" fill="#4E2A84"/>
          <polygon points="50,20 70,40 50,60 30,40" fill="white"/>
          <text x="50" y="75" textAnchor="middle" className="text-xs font-bold fill-white">NU</text>
        </svg>
      )
    },
    { 
      name: "Columbia", 
      logo: (
        <svg className="w-16 h-16 mx-auto" viewBox="0 0 100 100" fill="none">
          <rect width="100" height="100" rx="8" fill="#B9D9EB"/>
          <rect x="20" y="30" width="60" height="40" fill="#002B7F"/>
          <text x="50" y="55" textAnchor="middle" className="text-xs font-bold fill-white">COLUMBIA</text>
        </svg>
      )
    },
    { 
      name: "Brown", 
      logo: (
        <svg className="w-16 h-16 mx-auto" viewBox="0 0 100 100" fill="none">
          <rect width="100" height="100" rx="8" fill="#8B4513"/>
          <circle cx="50" cy="50" r="25" fill="#FFA500"/>
          <text x="50" y="55" textAnchor="middle" className="text-xs font-bold fill-brown-800">B</text>
        </svg>
      )
    },
    { 
      name: "Cornell", 
      logo: (
        <svg className="w-16 h-16 mx-auto" viewBox="0 0 100 100" fill="none">
          <rect width="100" height="100" rx="8" fill="#B31B1B"/>
          <rect x="25" y="25" width="50" height="50" fill="white"/>
          <text x="50" y="55" textAnchor="middle" className="text-xs font-bold fill-red-700">CORNELL</text>
        </svg>
      )
    },
    { 
      name: "Princeton", 
      logo: (
        <svg className="w-16 h-16 mx-auto" viewBox="0 0 100 100" fill="none">
          <rect width="100" height="100" rx="8" fill="#FF8F00"/>
          <rect x="20" y="20" width="60" height="60" fill="#000000"/>
          <text x="50" y="55" textAnchor="middle" className="text-xs font-bold fill-orange-400">P</text>
        </svg>
      )
    },
    { 
      name: "NYU Stern", 
      logo: (
        <svg className="w-16 h-16 mx-auto" viewBox="0 0 100 100" fill="none">
          <rect width="100" height="100" rx="8" fill="#57068C"/>
          <rect x="25" y="35" width="50" height="30" fill="white"/>
          <text x="50" y="55" textAnchor="middle" className="text-xs font-bold fill-purple-700">NYU</text>
        </svg>
      )
    },
    { 
      name: "UMich Ross", 
      logo: (
        <svg className="w-16 h-16 mx-auto" viewBox="0 0 100 100" fill="none">
          <rect width="100" height="100" rx="8" fill="#00274C"/>
          <rect x="20" y="25" width="60" height="50" fill="#FFCB05"/>
          <text x="50" y="55" textAnchor="middle" className="text-xs font-bold fill-blue-900">MICH</text>
        </svg>
      )
    },
    { 
      name: "UNC", 
      logo: (
        <svg className="w-16 h-16 mx-auto" viewBox="0 0 100 100" fill="none">
          <rect width="100" height="100" rx="8" fill="#4B9CD3"/>
          <circle cx="50" cy="50" r="30" fill="white"/>
          <text x="50" y="55" textAnchor="middle" className="text-xs font-bold fill-blue-600">UNC</text>
        </svg>
      )
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
                {college.logo}
                <div className="text-sm font-semibold text-white mt-2">{college.name}</div>
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center space-x-12 px-8">
            {colleges.map((college, index) => (
              <div key={`duplicate-${index}`} className="glass-effect rounded-lg p-4 min-w-[120px] text-center hover:scale-105 transition-transform duration-300">
                {college.logo}
                <div className="text-sm font-semibold text-white mt-2">{college.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
