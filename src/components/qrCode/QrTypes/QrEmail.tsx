import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useQrSettings from "@/store/useSettings";

const QrEmail = () => {
  const { formData, updateFormData } = useQrSettings();
  return (
    <div>
      <Label>Email</Label>
      <Input
        value={formData.email}
        placeholder="example@me.com"
        onChange={(e) => updateFormData("email", e.target.value)}
      />
    </div>
  );
};

export default QrEmail;
