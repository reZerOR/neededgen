"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import useQRStore from "@/store/qrStore";
import { useEffect, useState } from "react";

const QrSettings = () => {
  const { options, setBackgroundColor, setBgRoundness } = useQRStore();
  const [color, setColor] = useState(options.backgroundOptions!.color);

  // Debounced color update
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setBackgroundColor(color!);
    }, 200); // 200ms debounce delay

    return () => clearTimeout(timeoutId);
  }, [color, setBackgroundColor]);
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Label>Background Color</Label>
        <div className="flex items-center">
          <p className="text-sm mr-2">{color}</p>
          <Label
            htmlFor="background"
            className="size-8 -mr-[2px] block rounded-full cursor-pointer"
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
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label>Background Roundness</Label>
          {options.backgroundOptions!.round!}
        </div>
        <Slider
          defaultValue={[options.backgroundOptions!.round!]}
          min={0}
          max={1}
          step={0.1}
          onValueCommit={(value) => {
            setBgRoundness(value[0]);
          }}
        />
      </div>
    </div>
  );
};

export default QrSettings;
