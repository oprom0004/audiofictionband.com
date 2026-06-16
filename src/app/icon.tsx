import { ImageResponse } from "next/og";

export const dynamic = "force-static";

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
          background: "#06b6d4", // Cyan 500
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#09090b", // Dark Gray 950
          fontWeight: 800,
          fontFamily: "sans-serif",
          borderRadius: "8px",
        }}
      >
        A
      </div>
    ),
    {
      ...size,
    }
  );
}
