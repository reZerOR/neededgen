import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/phone-input";
import useQRStore from "@/store/qrStore";
import { isValidPhoneNumber } from "react-phone-number-input";

const QrPhone = () => {
  const { options, value } = useQRStore();
  return (
    <form>
      <Label>Phone</Label>
      <PhoneInput
        value={isValidPhoneNumber(options.data!) ? options.data : ""}
        onChange={(e) => value('tel:' + e)}
      />
    </form>
  );
};

export default QrPhone;
