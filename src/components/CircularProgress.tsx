import React from "react";

type Props = {
  filledColor?: string;
  outlineColor?: string;
  percentage?: number;
  height?: number;
  width?: number;
};

const ProgressCircle = ({
  filledColor = "#FFA97A",
  outlineColor = "#FFA97A",
  percentage = 0,
  height = 12,
  width = 12,
}: Props) => {
  // Ensure percentage is within 0 to 100
  const normalizedPercentage = Math.min(Math.max(percentage, 0), 100);

  // Calculate the angle for the arc (0 to 360 degrees)
  const angle = (normalizedPercentage / 100) * 360;

  // Calculate the endpoint of the arc
  const x = Math.cos(((angle - 90) * Math.PI) / 180);
  const y = Math.sin(((angle - 90) * Math.PI) / 180);
  const largeArcFlag = angle > 180 ? 1 : 0; // Determine if arc is greater than 180 degrees

  // Calculate the radius of the circle
  const radius = Math.min(height, width) / 2;

  // Special case: if percentage is 100, ensure the path forms a complete circle
  const pathData =
    normalizedPercentage === 100
      ? `M ${radius}, ${radius} m -${radius}, 0 a ${radius},${radius} 0 1,0 ${
          radius * 2
        },0 a ${radius},${radius} 0 1,0 -${radius * 2},0`
      : `M ${radius},${radius} L ${radius},${0} A ${radius},${radius} 0 ${largeArcFlag} 1 ${
          radius + x * radius
        },${radius + y * radius} Z`;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <circle
        cx={radius}
        cy={radius}
        r={radius - 0.5}
        stroke={outlineColor}
        strokeWidth="1"
        fill="none"
      />
      <path d={pathData} fill={filledColor} />
    </svg>
  );
};

export default ProgressCircle;
