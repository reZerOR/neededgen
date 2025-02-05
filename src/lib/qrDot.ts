import { CornerDotType, CornerSquareType, DotType } from "qr-code-styling";

export const dotTypes: { value: DotType; name: string }[] = [
  { value: "dots", name: "Dots" },
  { value: "rounded", name: "Rounded" },
  { value: "classy", name: "Classy" },
  { value: "classy-rounded", name: "Classy Rounded" },
  { value: "square", name: "Square" },
  { value: "extra-rounded", name: "Extra Rounded" },
];

export const cornerDotTypes: { value: CornerDotType; name: string }[] = [
  { value: "dot", name: "Dot" },
  ...dotTypes, // Spread existing dotTypes for reusability
];

export const cornerSquareTypes: { value: CornerSquareType; name: string }[] = [
  { value: "dot", name: "Dot" },
  ...dotTypes, // Spread existing dotTypes for reusability
];
