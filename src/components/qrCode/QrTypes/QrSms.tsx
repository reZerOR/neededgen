import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/phone-input";
import { Textarea } from "@/components/ui/textarea";
import useQrSettings from "@/store/useSettings";

const QrSms = () => {
  const { formData, updateFormData } = useQrSettings();
  return (
    <div className="space-y-4">
      <div>
        <Label>Sms</Label>
        <PhoneInput
          placeholder="Phone number"
          value={formData.sms.number}
          onChange={(e) => updateFormData("sms.number", e)}
        />
      </div>
      <div>
        <Label>Message</Label>
        <Textarea
          placeholder="Hello World"
          value={formData.sms.number}
          onChange={(e) => updateFormData("sms.message", e.target.value)}
        />
      </div>
    </div>
  );
};

export default QrSms;
