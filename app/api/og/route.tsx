import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title") || "Angel Kurten";
  const description =
    searchParams.get("description") ||
    "Engineering Leader building scalable distributed systems and AI-driven products.";
  const tags = searchParams.get("tags");
  const readingTime = searchParams.get("readingTime");
  const lang = searchParams.get("lang") || "en";

  const tagList = tags ? tags.split(",").filter(Boolean).slice(0, 5) : [];

  const titleFontSize = title.length > 80 ? 36 : title.length > 50 ? 44 : 52;
  const displayTitle =
    title.length > 120 ? title.slice(0, 117) + "..." : title;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          padding: "60px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top section: tags and reading time */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          {tagList.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 14,
                color: "#a1a1aa",
                backgroundColor: "#27272a",
                padding: "4px 12px",
                borderRadius: "9999px",
                border: "1px solid #3f3f46",
              }}
            >
              {tag.trim()}
            </span>
          ))}
          {readingTime && (
            <span
              style={{
                fontSize: 14,
                color: "#71717a",
                marginLeft: tagList.length > 0 ? "8px" : "0",
              }}
            >
              {readingTime}
            </span>
          )}
        </div>

        {/* Middle section: title and description */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontSize: titleFontSize,
              fontWeight: 700,
              color: "#fafafa",
              lineHeight: 1.2,
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            {displayTitle}
          </h1>
          {description && (
            <p
              style={{
                fontSize: 20,
                color: "#a1a1aa",
                lineHeight: 1.4,
                margin: 0,
                maxWidth: "90%",
              }}
            >
              {description.length > 150
                ? description.slice(0, 147) + "..."
                : description}
            </p>
          )}
        </div>

        {/* Bottom section: author and site */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #27272a",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "9999px",
                backgroundColor: "#3f3f46",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                fontWeight: 700,
                color: "#fafafa",
              }}
            >
              AK
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{ fontSize: 16, fontWeight: 600, color: "#fafafa" }}
              >
                Angel Kurten
              </span>
              <span style={{ fontSize: 14, color: "#71717a" }}>
                Engineering Leader
              </span>
            </div>
          </div>
          <span style={{ fontSize: 14, color: "#52525b" }}>
            angelkurten.com
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
