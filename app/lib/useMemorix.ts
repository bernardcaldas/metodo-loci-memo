import { useState, useCallback, useMemo } from "react";
import { parse, generateStory, type Block } from "./parser";

interface UseMemorixReturn {
  input: string;
  setInput: (value: string) => void;
  blocks: Block[];
  previewBlocks: Block[];
  story: string;
  showBlocks: boolean;
  showStory: boolean;
  handleGenerateBlocks: () => void;
  handleGenerateStory: () => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
}

export function useMemorix(): UseMemorixReturn {
  const [input, setInput] = useState("");
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [story, setStory] = useState("");
  const [showBlocks, setShowBlocks] = useState(false);
  const [showStory, setShowStory] = useState(false);

  const previewBlocks = useMemo(() => (input ? parse(input) : []), [input]);

  const handleGenerateBlocks = useCallback(() => {
    if (!input.trim()) return;
    const parsed = parse(input);
    setBlocks(parsed);
    setShowBlocks(true);
    setShowStory(false);
  }, [input]);

  const handleGenerateStory = useCallback(() => {
    if (!blocks.length) return;
    setStory(generateStory(blocks));
    setShowStory(true);
  }, [blocks]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && input.trim()) {
        handleGenerateBlocks();
      }
    },
    [input, handleGenerateBlocks]
  );

  return {
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
  };
}
