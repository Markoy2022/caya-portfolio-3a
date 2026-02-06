import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 space-y-6">
      <h1 className="text-4xl font-bold tracking-tight text-primary">
        About Me
      </h1>

      <p className="text-muted-foreground text-lg leading-relaxed">
        I’m an IT student who enjoys building simple but meaningful digital
        experiences. I like turning ideas into working systems, learning how
        things connect behind the scenes, and improving my skills step by step.
        I’m especially interested in web development, system design, and
        creating projects that actually help people.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        Right now, I’m focused on growing my knowledge through hands-on projects,
        experimenting with modern tools, and sharpening my problem-solving
        mindset. I believe good software doesn’t need to be complicated — it
        just needs to work well and feel right.
      </p>

      <div className="pt-4">
        <Button className="rounded-2xl px-6">
          View My Projects
        </Button>
      </div>
    </div>
  );
}
