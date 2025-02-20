export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-white text-black">
      <main className="flex flex-col gap-12 row-start-2 text-center">
        {/* Hero Section */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight p-8 rounded-2xl text-black"
          style={{ backgroundColor: "rgba(3, 108, 95, 0.1)" }}
        >
          Goodbye <span className="text-black">ไว้เจอกันใหม่</span>
        </h1>

        {/* Video Section */}
        <section
          className="w-full max-w-4xl mx-auto grid gap-8 sm:grid-cols-2 p-8 rounded-2xl"
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
      </main>
    </div>
  )
}

