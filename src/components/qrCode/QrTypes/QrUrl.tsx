import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useQrSettings from "@/store/useSettings";

const QrUrl = () => {
  const { formData, updateFormData } = useQrSettings();
  return (
    <form>
      <Label>Url</Label>
      <Input
        type="url"
        placeholder="https://example.com"
        value={formData.url}
        onChange={(e) => updateFormData("url", e.target.value)}
      />
    </form>
  );
};

export default QrUrl;
