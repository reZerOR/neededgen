import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import useQRStore from "@/store/qrStore";

const QrText = () => {
  const { options, value } = useQRStore();
  return (
    <div>
      <Label>Text</Label>
      <Textarea value={options.data} onChange={(e) => value(e.target.value)} />
    </div>
  );
};

export default QrText;
