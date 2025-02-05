"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useQRStore from "@/store/qrStore";
import { DotType } from "qr-code-styling";
import { useEffect, useState } from "react";
const dotTypes = [
  { value: "dots", name: "Dots" },
  { value: "rounded", name: "Rounded" },
  { value: "classy", name: "Classy" },
  { value: "classy-rounded", name: "Classy Rounded" },
  { value: "square", name: "Square" },
  { value: "extra-rounded", name: "Extra Rounded" },
];

const QrDotSettings = () => {
  const { options, setDotColor, setDotType } = useQRStore();
  const [color, setColor] = useState(options.dotsOptions!.color);

  // Debounced color update
  useEffect(() => {
    if (color === options.dotsOptions!.color) return;
    const timeoutId = setTimeout(() => {
      setDotColor(color!);
    }, 200); // 200ms debounce delay

    return () => clearTimeout(timeoutId);
  }, [color, setDotColor, options]);
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Label>Color</Label>
        <div className="flex items-center">
          <p className="text-sm mr-2">{color}</p>
          <Label
            htmlFor="background"
            className="size-8 -mr-[2px] block rounded-full border cursor-pointer"
            style={{ backgroundColor: color }}
          ></Label>
          <Input
            id="background"
            defaultValue={color}
            onChange={(e) => setColor(e.target.value)}
            name="background"
            type="color"
            className="invisible size-0 p-0"
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <Label>Type</Label>
        <Select
          defaultValue={options.dotsOptions!.type}
          onValueChange={(v) => setDotType(v as DotType)}
        >
          <SelectTrigger className="max-w-52">
            <SelectValue placeholder="Select dot type" />
          </SelectTrigger>
          <SelectContent>
            {dotTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default QrDotSettings;
