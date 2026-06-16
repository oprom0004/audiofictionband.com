import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 88,
          background: "#06b6d4", // Cyan 500
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#09090b", // Dark Gray 950
          fontWeight: 800,
          fontFamily: "sans-serif",
          borderRadius: "40px",
        }}
      >
        AFB
      </div>
    ),
    {
      ...size,
    }
  );
}
