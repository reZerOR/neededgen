"use client";
import ImageUpload from "@/components/kokonutui/imageUpload";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import useQRStore from "@/store/qrStore";
import useQrSettings from "@/store/useSettings";
import { useState } from "react";

const QrImage = () => {
  const { setImage, defaultImage, options, setImageSize, setImageMargin} = useQRStore();
  const { formData } = useQrSettings();
  const [inlude, setInlude] = useState(false);
  const onChange = (checked: boolean) => {
    if (checked) {
      setImage(formData.imageStr || defaultImage);
    } else {
      setImage("");
    }
    setInlude(checked);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Label>Include Image</Label>
        <Switch checked={inlude} onCheckedChange={onChange} className="" />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label>Image size</Label>
          {(formData.imageSize || options.imageOptions?.imageSize)! * 10 }
        </div>
        <Slider
          defaultValue={[
            formData.imageSize! || options.imageOptions!.imageSize!,
          ]}
          min={0.1}
          max={0.4}
          step={0.1}
          onValueCommit={(value) => {
            setImageSize(value[0]);
          }}
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label>Image margin</Label>
          {formData.imageMargin || options.imageOptions?.margin}
        </div>
        <Slider
          defaultValue={[
            formData.imageMargin! || options.imageOptions!.margin!,
          ]}
          min={0}
          max={10}
          step={1}
          onValueCommit={(value) => {
            setImageMargin(value[0]);
          }}
        />
      </div>
      <ImageUpload />
    </div>
  );
};

export default QrImage;
