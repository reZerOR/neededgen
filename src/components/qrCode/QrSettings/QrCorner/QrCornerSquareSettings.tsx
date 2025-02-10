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
import { cornerSquareTypes } from "@/lib/qrDot";
import useQRStore from "@/store/qrStore";
import { CornerSquareType } from "qr-code-styling";
import { useEffect, useMemo, useState } from "react";

const QrCornerSquareSettings = () => {
  const { options, setCornerSquareType, setCornerSquareColor } = useQRStore();
  const [color, setColor] = useState(options.cornersSquareOptions!.color);

  const squareColorFromStore = useMemo(
    () => options.cornersSquareOptions!.color,
    [options]
  );

  useEffect(() => {
    if (color === squareColorFromStore) return;
    const timeoutId = setTimeout(() => {
      setCornerSquareColor(color!);
    }, 200);
    return () => clearTimeout(timeoutId);
  }, [color, setCornerSquareColor, squareColorFromStore]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Label>Square color</Label>
        <div className="flex items-center">
          <p className="text-sm mr-2">{color}</p>
          <Label
            htmlFor="dot"
            className="size-8 -mr-[2px] block rounded-full border cursor-pointer"
            style={{ backgroundColor: color }}
          ></Label>
          <Input
            id="dot"
            defaultValue={color}
            onChange={(e) => setColor(e.target.value)}
            name="dot"
            type="color"
            className="invisible size-0 p-0"
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <Label>Square type</Label>
        <Select
          defaultValue={options.cornersSquareOptions!.type}
          onValueChange={(v) => setCornerSquareType(v as CornerSquareType)}
        >
          <SelectTrigger className="max-w-52">
            <SelectValue placeholder="Select dot type" />
          </SelectTrigger>
          <SelectContent>
            {cornerSquareTypes.map((type, i) => (
              <SelectItem key={i} value={type.value}>
                {type.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default QrCornerSquareSettings;
