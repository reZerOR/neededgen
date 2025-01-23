import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/phone-input";
import useQRStore from "@/store/qrStore";
import { isValidPhoneNumber } from "react-phone-number-input";

const QrSms = () => {
  const { options, value } = useQRStore();
  return (
    <form>
      <Label>Sms</Label>
      <PhoneInput
        value={isValidPhoneNumber(options.data!) ? options.data : ""}
        onChange={(e) => value('sms:' + e)}
      />
    </form>
  );
};

export default QrSms;
