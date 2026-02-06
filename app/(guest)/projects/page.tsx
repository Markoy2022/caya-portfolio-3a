import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-6">
      <h1 className="text-4xl font-bold tracking-tight text-primary">
        Projects
      </h1>

      <p className="text-muted-foreground text-lg leading-relaxed">
        These are some of the projects I’ve worked on during my journey as an IT
        student. Each project helped me understand concepts better, improve my
        coding skills, and learn how to solve real problems using technology.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        From simple systems to more complete applications, I focus on writing
        clean code, learning best practices, and building things that are both
        functional and easy to use.
      </p>

      <div className="pt-4 flex gap-3">
        <Button className="rounded-2xl px-6">
          View All Projects
        </Button>

        <Button variant="outline" className="rounded-2xl px-6">
          GitHub Repository
        </Button>
      </div>
    </div>
  );
}
