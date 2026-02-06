import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-[80vh] flex items-center">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <span className="text-sm uppercase tracking-widest text-muted-foreground">
          Welcome
        </span>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-primary">
          Hi, I’m <span className="text-foreground"> Caya an IT Student</span>
          <br />
          who builds thoughtful digital experiences.
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          I design and develop simple, clean, and functional systems while
          continuously learning modern technologies. This space showcases my
          work, skills, and growth as a developer.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <Button className="rounded-2xl px-8">
            View Projects
          </Button>

          <Button variant="outline" className="rounded-2xl px-8">
            About Me
          </Button>
        </div>
      </div>
    </div>
  );
}
