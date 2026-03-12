"use client";

import { useEffect, useRef, useState, useId } from "react";
import { useTheme } from "next-themes";

interface MermaidProps {
  chart: string;
}

export function Mermaid({ chart }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const { resolvedTheme } = useTheme();
  const uniqueId = useId().replace(/:/g, "m");

  useEffect(() => {
    if (!chart || !containerRef.current) return;

    let cancelled = false;

    async function renderChart() {
      try {
        const mermaid = (await import("mermaid")).default;

        mermaid.initialize({
          startOnLoad: false,
          theme: resolvedTheme === "dark" ? "dark" : "default",
          securityLevel: "loose",
          fontFamily: "inherit",
        });

        const { svg: renderedSvg } = await mermaid.render(
          `mermaid-${uniqueId}`,
          chart.trim()
        );

        if (!cancelled) {
          setSvg(renderedSvg);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to render diagram");
          setSvg("");
        }
      }
    }

    renderChart();

    return () => {
      cancelled = true;
    };
  }, [chart, resolvedTheme, uniqueId]);

  if (error) {
    return (
      <div className="my-6 rounded-lg border border-red-300 bg-red-50 p-4 dark:border-red-700 dark:bg-red-950">
        <p className="text-sm font-medium text-red-800 dark:text-red-200">
          Failed to render Mermaid diagram
        </p>
        <pre className="mt-2 overflow-auto text-xs text-red-600 dark:text-red-400">
          {chart}
        </pre>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="my-6 flex justify-center overflow-x-auto [&_svg]:max-w-full"
      dangerouslySetInnerHTML={svg ? { __html: svg } : undefined}
    />
  );
}
