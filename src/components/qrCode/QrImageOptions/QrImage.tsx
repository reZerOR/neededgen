"use client";
import ImageUpload from "@/components/kokonutui/imageUpload";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import useQRStore from "@/store/qrStore";
import useQrSettings from "@/store/useSettings";
import { useState } from "react";

const QrImage = () => {
  const { setImage, defaultImage } = useQRStore();
  const { formData } = useQrSettings();
  const [inlude, setInlude] = useState(false);
  const onChange = (checked: boolean) => {
    if(checked){  
      setImage(formData.imageStr || defaultImage)
    }else{
      setImage('')
    }
    setInlude(checked);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Label>Include Image</Label>
        <Switch checked={inlude} onCheckedChange={onChange} className="" />
      </div>
      <ImageUpload />
    </div>
  );
};

export default QrImage;
