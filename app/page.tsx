export default function Home() {
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 text-black relative overflow-hidden"
      style={{
        background: `
          linear-gradient(
            135deg,
            #d4f0ff 0%,
            #ffe4f2 25%,
            #e1f9ff 50%,
            #ffe0ef 75%,
            #d4f0ff 100%
          )
        `,
      }}
    >
      {/* Floating Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${3 + Math.random() * 8}s linear infinite`,
              fontSize: `${15 + Math.random() * 25}px`,
              opacity: 0.7,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {Math.random() > 0.5 ? "⭐" : "✨"}
          </div>
        ))}
      </div>

      <main className="flex flex-col gap-12 row-start-2 text-center relative z-10">
        {/* Hero Section */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight p-8 rounded-2xl text-black backdrop-blur-sm"
          style={{ backgroundColor: "rgba(3, 108, 95, 0.1)" }}
        >
          Goodbye <span className="text-black">ไว้เจอกันใหม่</span>
        </h1>

        {/* Video Section */}
        <section
          className="w-full max-w-4xl mx-auto grid gap-8 sm:grid-cols-2 p-8 rounded-2xl backdrop-blur-sm"
          style={{ backgroundColor: "rgba(3, 108, 95, 0.15)" }}
        >
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/BqOY4IRMK-A"
              title="Goodbye Video 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/EBeJB58o70M"
              title="Goodbye Video 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        {/* Additional Text Box */}
        <div
          className="w-full max-w-4xl mx-auto p-8 rounded-2xl backdrop-blur-sm text-2xl sm:text-3xl font-medium"
          style={{ backgroundColor: "rgba(3, 108, 95, 0.1)" }}
        >
          Thank you for all the memories and friendship.
          <br className="hidden sm:block" />
          Until we meet again! 🌟
        </div>
      </main>
    </div>
  )
}

