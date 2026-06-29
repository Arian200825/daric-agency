import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center gap-6 text-center">
      <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent">
        404
      </p>
      <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
        This page took a different path.
      </h1>
      <p className="max-w-md text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s
        get you back on track.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button href="/">Back to home</Button>
        <Button href="/contact" variant="outline">
          Start a project
        </Button>
      </div>
    </Container>
  );
}
