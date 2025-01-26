import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/phone-input";
import useQrSettings from "@/store/useSettings";

const QrPhone = () => {
  const { formData, updateFormData } = useQrSettings();
  return (
    <div>
      <Label>Phone</Label>
      <PhoneInput
        placeholder="phone number"
        value={formData.phone}
        onChange={(e) => updateFormData("phone", e)}
      />
    </div>
  );
};

export default QrPhone;
