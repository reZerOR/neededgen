"use client"
import useQRStore from "@/store/qrStore";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const QrSettings = () => {
  const { options, value } = useQRStore();
  return (
    <div>
      <Label>Message</Label>
      <Textarea value={options.data} onChange={(e) => value(e.target.value)} />
    </div>
  );
};

export default QrSettings;
