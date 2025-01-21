import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useQRStore from "@/store/qrStore";

const QrUrl = () => {
  const { options, value } = useQRStore();
  return (
    <div>
      <Label>Url</Label>
      <Input
        type="url"
        value={options.data}
        onChange={(e) => value(e.target.value)}
      />
    </div>
  );
};

export default QrUrl;
