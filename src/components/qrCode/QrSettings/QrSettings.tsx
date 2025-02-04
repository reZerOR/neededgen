"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useQRStore from "@/store/qrStore";
import { useEffect, useState } from "react";

const QrSettings = () => {
  const { options, setBackgroundColor } = useQRStore();
  const [color, setColor] = useState(options.backgroundOptions!.color);

  // Debounced color update
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setBackgroundColor(color!);
    }, 200); // 200ms debounce delay

    return () => clearTimeout(timeoutId);
  }, [color, setBackgroundColor]);
  return (
    <div>
      <div className="flex justify-between items-center">
        <Label>Background Color</Label>
        <div className="flex items-center gap-2">
          <p className="text-sm">{color}</p>
          <Label
            htmlFor="background"
            className="size-8 block rounded-full cursor-pointer"
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
    </div>
  );
};

export default QrSettings;
