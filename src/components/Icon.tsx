interface IconProps {
  name: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "text-[18px]",
  md: "text-[22px]",
  lg: "text-[26px]",
};

export default function Icon({ name, className = "", size = "md" }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined leading-none select-none ${sizeMap[size]} ${className}`}
      aria-hidden="true"
      style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
    >
      {name}
    </span>
  );
}
