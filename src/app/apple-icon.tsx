import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#08080f",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Outer glow */}
        <div
          style={{
            position: "absolute",
            width: 110,
            height: 110,
            borderRadius: "50%",
            background: "rgba(168,85,247,0.15)",
          }}
        />
        {/* Mid glow */}
        <div
          style={{
            position: "absolute",
            width: 85,
            height: 85,
            borderRadius: "50%",
            background: "rgba(168,85,247,0.25)",
          }}
        />
        {/* Neon purple core */}
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "#a855f7",
          }}
        />
      </div>
    ),
    { width: 180, height: 180 }
  );
}
