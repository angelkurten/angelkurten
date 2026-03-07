import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: "#171717",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fafafa",
          borderRadius: 6,
          fontWeight: 700,
          letterSpacing: "-0.02em",
        }}
      >
        AK
      </div>
    ),
    {
      ...size,
    }
  );
}
