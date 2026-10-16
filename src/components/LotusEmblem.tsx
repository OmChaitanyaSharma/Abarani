interface LotusEmblemProps {
  className?: string;
  size?: number;
  color?: string;
}

export default function LotusEmblem({
  className = "",
  size = 40,
  color = "#D4AF37",
}: LotusEmblemProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Central Majestic Lotus Petal */}
      <path
        d="M50 8C48 24 43 45 50 68C57 45 52 24 50 8Z"
        fill={color}
        fillOpacity="0.95"
      />
      {/* Inner Left Petal */}
      <path
        d="M48 18C41 30 33 46 44 67C46 51 47 34 48 18Z"
        fill={color}
        fillOpacity="0.85"
      />
      {/* Inner Right Petal */}
      <path
        d="M52 18C53 34 54 51 56 67C67 46 59 30 52 18Z"
        fill={color}
        fillOpacity="0.85"
      />
      {/* Outer Left Petal */}
      <path
        d="M44 30C32 40 18 53 35 68C38 56 42 43 44 30Z"
        fill={color}
        fillOpacity="0.75"
      />
      {/* Outer Right Petal */}
      <path
        d="M56 30C58 43 62 56 65 68C82 53 68 40 56 30Z"
        fill={color}
        fillOpacity="0.75"
      />
      {/* Far Left Flare */}
      <path
        d="M36 44C23 51 8 61 28 71C33 62 35 53 36 44Z"
        fill={color}
        fillOpacity="0.65"
      />
      {/* Far Right Flare */}
      <path
        d="M64 44C65 53 67 62 72 71C92 61 77 51 64 44Z"
        fill={color}
        fillOpacity="0.65"
      />
      {/* Base Lotus Calyx & Golden Foundation */}
      <path
        d="M20 72C35 77 65 77 80 72C68 76 32 76 20 72Z"
        fill={color}
      />
      <circle cx="50" cy="71" r="2.5" fill={color} />
      <circle cx="43" cy="71.5" r="1.8" fill={color} />
      <circle cx="57" cy="71.5" r="1.8" fill={color} />
    </svg>
  );
}
