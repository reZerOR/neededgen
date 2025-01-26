// components/QrTypes/QrWifi.tsx
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import useQrSettings from "@/store/useSettings";

const QrWifi = () => {
  const { formData, updateFormData } = useQrSettings();
  const wifiData = formData.wifi;

  return (
    <div className="space-y-4">
      <div>
        <Label>SSID (Network Name)*</Label>
        <Input
          value={wifiData.ssid}
          onChange={(e) => updateFormData("wifi.ssid", e.target.value)}
          placeholder="MyWiFiNetwork"
          required
        />
      </div>

      <div>
        <Label>Encryption Type*</Label>
        <Select
          value={wifiData.encryption}
          onValueChange={(v) => updateFormData("wifi.encryption", v)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select encryption" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="WPA">WPA/WPA2</SelectItem>
            <SelectItem value="WEP">WEP</SelectItem>
            <SelectItem value="nopass">None (Open Network)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {wifiData.encryption !== "nopass" && (
        <div>
          <Label>Password*</Label>
          <Input
            type="password"
            value={wifiData.password}
            onChange={(e) => updateFormData("wifi.password", e.target.value)}
            placeholder="Network password"
            required
          />
        </div>
      )}

      <div className="flex items-center space-x-2">
        <Checkbox
          id="hidden"
          checked={wifiData.hidden}
          onCheckedChange={(checked) =>
            updateFormData("wifi.hidden", checked.toString())
          }
        />
        <Label htmlFor="hidden">Hidden Network</Label>
      </div>
    </div>
  );
};

export default QrWifi;
