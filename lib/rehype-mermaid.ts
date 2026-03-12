import { visit } from "unist-util-visit";
import type { Root, Element } from "hast";

/**
 * Rehype plugin that transforms ```mermaid code blocks into
 * <Mermaid chart="..." /> JSX elements before rehype-pretty-code
 * processes them. This prevents mermaid blocks from being syntax-highlighted
 * and instead renders them as actual diagrams.
 */
export function rehypeMermaid() {
  return (tree: Root) => {
    visit(tree, "element", (node: Element, index, parent) => {
      if (
        node.tagName !== "pre" ||
        !parent ||
        index === undefined ||
        index === null
      ) {
        return;
      }

      const codeEl = node.children.find(
        (child): child is Element =>
          child.type === "element" && child.tagName === "code"
      );

      if (!codeEl) return;

      const className = codeEl.properties?.className;
      if (!Array.isArray(className)) return;

      const isMermaid = className.some(
        (cls) => typeof cls === "string" && cls === "language-mermaid"
      );

      if (!isMermaid) return;

      // Extract the text content from the code element
      const chartText = extractText(codeEl);

      // Replace the <pre> node with a custom MDX element
      // that will be mapped to our Mermaid component
      const mermaidNode: Element = {
        type: "element",
        tagName: "Mermaid",
        properties: {
          chart: chartText,
        },
        children: [],
      };

      (parent as Element).children[index] = mermaidNode;
    });
  };
}

function extractText(node: Element): string {
  let text = "";
  for (const child of node.children) {
    if (child.type === "text") {
      text += child.value;
    } else if (child.type === "element") {
      text += extractText(child);
    }
  }
  return text;
}
