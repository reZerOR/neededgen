"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useQRStore from "@/store/qrStore";

const QrSettings = () => {
  const { options, setBackgroundColor } = useQRStore();
  return (
    <div>
      <div className="flex justify-between items-center">
        <Label>Background Color</Label>
        <div>
          <label htmlFor="background" className="size-10 rounded-full"></label>
          <Input
            id="background"
            defaultValue={options.backgroundOptions!.color}
            onChange={(e) => setBackgroundColor(e.target.value)}
            name="background"
            type="color"
          />
        </div>
      </div>
    </div>
  );
};

export default QrSettings;
