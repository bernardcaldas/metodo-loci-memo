"use client";

interface StorySectionProps {
  story: string;
}

export function StorySection({ story }: StorySectionProps) {
  if (!story) return null;

  return (
    <section className="mb-6">
      <h2 className="font-semibold mb-4">Historia do Palacio</h2>
      <div className="card p-4 whitespace-pre-line leading-relaxed">
        {story}
      </div>
    </section>
  );
}
