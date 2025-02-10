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
import { cornerDotTypes} from "@/lib/qrDot";
import useQRStore from "@/store/qrStore";
import { CornerDotType } from "qr-code-styling";
import { useEffect, useMemo, useState } from "react";

const QrCornerDotSettings = () => {
  const {
    options,
    setCornerDotColor,
    setCornerDotType,
  } = useQRStore();
  const [dotColor, setDotColor] = useState(options.cornersDotOptions!.color);

  const dotColorFromStore = useMemo(
    () => options.cornersDotOptions!.color,
    [options]
  );

  useEffect(() => {
    if (dotColor === dotColorFromStore) return;
    const timeoutId = setTimeout(() => {
      setCornerDotColor(dotColor!);
    }, 200); // 200ms debounce delay

    return () => clearTimeout(timeoutId);
  }, [dotColor, setCornerDotColor, dotColorFromStore]);
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Label>Dot color</Label>
        <div className="flex items-center">
          <p className="text-sm mr-2">{dotColor}</p>
          <Label
            htmlFor="background"
            className="size-8 -mr-[2px] block rounded-full border cursor-pointer"
            style={{ backgroundColor: dotColor }}
          ></Label>
          <Input
            id="background"
            defaultValue={dotColor}
            onChange={(e) => setDotColor(e.target.value)}
            name="background"
            type="color"
            className="invisible size-0 p-0"
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <Label>Dot type</Label>
        <Select
          defaultValue={options.cornersSquareOptions!.type}
          onValueChange={(v) => setCornerDotType(v as CornerDotType)}
        >
          <SelectTrigger className="max-w-52">
            <SelectValue placeholder="Select dot type" />
          </SelectTrigger>
          <SelectContent>
            {cornerDotTypes.map((type, i) => (
              <SelectItem key={type.value + i} value={type.value}>
                {type.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default QrCornerDotSettings;
