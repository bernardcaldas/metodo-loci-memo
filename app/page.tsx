"use client";

import { useMemorix } from "./lib/useMemorix";
import {
  Header,
  PasswordInput,
  BlocksSection,
  StorySection,
  Tables,
} from "./components";

export default function Home() {
  const {
    input,
    setInput,
    blocks,
    previewBlocks,
    story,
    showBlocks,
    showStory,
    handleGenerateBlocks,
    handleGenerateStory,
    handleKeyDown,
  } = useMemorix();

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Header />

        <PasswordInput
          value={input}
          onChange={setInput}
          onKeyDown={handleKeyDown}
          onGenerate={handleGenerateBlocks}
          previewBlocks={previewBlocks}
        />

        {showBlocks && (
          <BlocksSection
            blocks={blocks}
            onGenerateStory={handleGenerateStory}
          />
        )}

        {showStory && <StorySection story={story} />}

        <section className="mt-8">
          <Tables />
        </section>
      </div>
    </div>
  );
}
