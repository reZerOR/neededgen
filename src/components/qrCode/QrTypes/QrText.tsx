import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import useQrSettings from "@/store/useSettings";

const QrText = () => {
  const { formData, updateFormData } = useQrSettings();
  return (
    <div>
      <Label>Text</Label>
      <Textarea
        value={formData.text}
        placeholder="Hello World"
        onChange={(e) => updateFormData("text", e.target.value)}
      />
    </div>
  );
};

export default QrText;
