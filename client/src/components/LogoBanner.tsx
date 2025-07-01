export default function LogoBanner() {
  const colleges = [
    { name: "HARVARD", color: "text-red-400" },
    { name: "UC BERKELEY", color: "text-yellow-400" },
    { name: "UPENN", color: "text-blue-400" },
    { name: "NORTHWESTERN", color: "text-purple-400" },
    { name: "COLUMBIA", color: "text-blue-300" },
    { name: "BROWN", color: "text-orange-400" },
    { name: "CORNELL", color: "text-red-300" },
    { name: "PRINCETON", color: "text-orange-500" },
    { name: "NYU STERN", color: "text-violet-400" },
    { name: "UMICH ROSS", color: "text-yellow-300" },
    { name: "UNC KENAN FLAGLER", color: "text-blue-500" },
  ];

  return (
    <section className="py-12 overflow-hidden bg-cosmic-black/50 backdrop-blur-sm">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-semibold text-primary">Admitted to Top Universities</h3>
      </div>
      <div className="relative">
        <div className="flex animate-scroll whitespace-nowrap">
          {/* First set of logos */}
          <div className="flex items-center space-x-16 px-8">
            {colleges.map((college, index) => (
              <div key={index} className="glass-effect rounded-lg p-6 min-w-[160px] text-center">
                <div className={`text-xl font-bold ${college.color}`}>{college.name}</div>
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center space-x-16 px-8">
            {colleges.map((college, index) => (
              <div key={`duplicate-${index}`} className="glass-effect rounded-lg p-6 min-w-[160px] text-center">
                <div className={`text-xl font-bold ${college.color}`}>{college.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
