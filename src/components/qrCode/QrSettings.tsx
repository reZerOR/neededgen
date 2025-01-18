"use client";
import useQRStore from "@/store/qrStore";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { ReactElement } from "react";
import { AtSign, Link, MessageCircle, Phone, Text, Wifi } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const QrSettings = () => {
  const { options, value } = useQRStore();
  return (
    <>
      <div>
        <Label>QR Types</Label>
        <Select>
          <SelectTrigger id="size">
            <SelectValue placeholder="Select a file format" />
          </SelectTrigger>
          <SelectContent>
            {qrContentTypes.map((item) => (
              <SelectItem
                key={item.value}
                value={item.value}
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  {item.value}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label>Message</Label>
        <Textarea
          value={options.data}
          onChange={(e) => value(e.target.value)}
        />
      </div>
    </>
  );
};
const qrContentTypes: { value: string; icon: ReactElement }[] = [
  {
    value: "url",
    icon: <Link className="size-4"/>,
  },
  {
    value: "text",
    icon: <Text className="size-4"/>,
  },
  {
    value: "email",
    icon: <AtSign className="size-4"/>,
  },
  {
    value: "Phone",
    icon: <Phone className="size-4"/>,
  },
  {
    value: "wi-fi",
    icon: <Wifi className="size-4"/>,
  },
  {
    value: "sms",
    icon: <MessageCircle className="size-4"/>,
  },
];

export default QrSettings;
