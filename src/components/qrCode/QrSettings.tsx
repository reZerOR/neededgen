"use client";
import { Label } from "../ui/label";
import { ReactElement } from "react";
import { AtSign, Link, MessageCircle, Phone, Text, Wifi } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent } from "../ui/tabs";
import useSettingsStore from "@/store/useSettings";
import QrText from "./QrTypes/QrText";
import QrUrl from "./QrTypes/QrUrl";

const QrSettings = () => {
  const { qrType, setQrType } = useSettingsStore();
  return (
    <>
      <Tabs value={qrType}>
        <div>
          <Label>QR Types</Label>
          <Select onValueChange={setQrType}>
            <SelectTrigger value={qrType || "text"} id="size">
              <SelectValue placeholder="Select a file format" />
            </SelectTrigger>
            <SelectContent>
              {qrContentTypes.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  <div className="flex items-center gap-2">
                    {item.icon}
                    {item.value}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <TabsContent value="text">
          <QrText />
        </TabsContent>
        <TabsContent value="url">
          <QrUrl />
        </TabsContent>
      </Tabs>
    </>
  );
};
const qrContentTypes: { value: string; icon: ReactElement }[] = [
  {
    value: "url",
    icon: <Link className="size-4" />,
  },
  {
    value: "text",
    icon: <Text className="size-4" />,
  },
  {
    value: "email",
    icon: <AtSign className="size-4" />,
  },
  {
    value: "Phone",
    icon: <Phone className="size-4" />,
  },
  {
    value: "wi-fi",
    icon: <Wifi className="size-4" />,
  },
  {
    value: "sms",
    icon: <MessageCircle className="size-4" />,
  },
];

export default QrSettings;
