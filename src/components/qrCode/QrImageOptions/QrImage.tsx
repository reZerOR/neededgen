"use client";
import ImageUpload from "@/components/kokonutui/imageUpload";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import useQRStore from "@/store/qrStore";
import useQrSettings from "@/store/useSettings";

const QrImage = () => {
  const {
    setImage,
    defaultImage,
    options,
    setImageSize,
    setImageMargin,
    setImageDots,
  } = useQRStore();
  const { formData, updateFormData } = useQrSettings();
  const onChange = (checked: boolean) => {
    if (checked) {
      setImage(formData.imageStr || defaultImage);
    } else {
      setImage("");
    }
    updateFormData("imageInclude", checked);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Label>Include Image</Label>
        <Switch
          checked={formData.imageInclude}
          onCheckedChange={onChange}
          className=""
        />
      </div>
      <div className="flex justify-between items-center">
        <Label>Hide Background dots</Label>
        <Switch
          checked={options.imageOptions?.hideBackgroundDots}
          onCheckedChange={setImageDots}
          className=""
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label>Image size</Label>
          {options.imageOptions!.imageSize! * 10}
        </div>
        <Slider
          defaultValue={[options.imageOptions!.imageSize!]}
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
          {options.imageOptions?.margin}
        </div>
        <Slider
          defaultValue={[options.imageOptions!.margin!]}
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
