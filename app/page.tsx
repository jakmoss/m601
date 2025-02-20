import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-12 row-start-2 items-center sm:items-start">
        {/* Hero Section */}
        <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority />

        {/* Instructions */}
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-mono">
          <li className="mb-2">
            HI{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        {/* Call to Action Buttons */}
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Button
            asChild
            className="rounded-full bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] h-10 sm:h-12"
          >
            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert mr-2 inline-block"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full h-10 sm:h-12 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] sm:min-w-44"
          >
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </Button>
        </div>

        {/* Video Section */}
        <section className="w-full max-w-4xl mx-auto grid gap-8 sm:grid-cols-2">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Introduction to Next.js"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/KjY94sAKLlw"
              title="Next.js Tutorial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <FooterLink
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          icon="/file.svg"
          text="Learn"
        />
        <FooterLink
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          icon="/window.svg"
          text="Examples"
        />
        <FooterLink
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          icon="/globe.svg"
          text="Go to nextjs.org →"
        />
      </footer>
    </div>
  )
}

function FooterLink({ href, icon, text }: { href: string; icon: string; text: string }) {
  return (
    <a
      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image aria-hidden src={icon || "/placeholder.svg"} alt={`${text} icon`} width={16} height={16} />
      {text}
    </a>
  )
}

