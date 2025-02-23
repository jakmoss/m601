export default function Home() {
  return (
    <div
      className="min-h-screen p-8 sm:p-12 text-black relative overflow-hidden"
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
      {/* Static Stars */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${15 + Math.random() * 20}px`,
              opacity: 0.5,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            {Math.random() > 0.5 ? "⭐" : "✨"}
          </div>
        ))}
      </div>

      <main className="max-w-6xl mx-auto flex flex-col gap-10 relative z-10">
        {/* Hero Section */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight p-8 rounded-2xl text-black backdrop-blur-sm"
          style={{ backgroundColor: "rgba(3, 108, 95, 0.1)" }}
        >
          GOODBYE M.6/1 <span className="text-black">ไว้เจอกันใหม่</span>
        </h1>

        {/* Video Section */}
        <section
          className="w-full grid gap-8 sm:grid-cols-2 p-8 rounded-2xl backdrop-blur-sm"
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
          className="w-full p-8 rounded-2xl backdrop-blur-sm text-2xl sm:text-3xl font-medium"
          style={{ backgroundColor: "rgba(3, 108, 95, 0.1)" }}
        >
          หวังว่าทุกคนจะได้ตามที่หวังกันทุกคนและขอให้เราเป็นเพื่อนกันไปอีกนานนะ
          <br className="hidden sm:block" />
          โชคดีนะทุกคนรักนะ 🌟
        </div>
      </main>
    </div>
  )
}

