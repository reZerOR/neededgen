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
import QrText from "./QrTypes/QrText";
import QrUrl from "./QrTypes/QrUrl";
import QrPhone from "./QrTypes/QrPhone";
import QrSms from "./QrTypes/QrSms";
import useQrSettings from "@/store/useSettings";
import { Button } from "../ui/button";
import QrWifi from "./QrTypes/QrWifi";
import useQRStore from "@/store/qrStore";
import QrEmail from "./QrTypes/QrEmail";

const QrSettings = () => {
  const { qrType, setQrType, generateQR } = useQrSettings();
  const { options } = useQRStore();
  console.log(options.data);
  return (
    <>
      <Tabs value={qrType || "text"}>
        <div>
          <Label>QR Types</Label>
          <Select onValueChange={setQrType} value={qrType || "text"}>
            <SelectTrigger id="size">
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
        {qrContentTypes.map((item) => (
          <TabsContent key={item.value} value={item.value}>
            {item.component}
          </TabsContent>
        ))}
      </Tabs>
      <Button onClick={generateQR} className="w-full mt-4">
        Generate QR Code
      </Button>
    </>
  );
};
const qrContentTypes: {
  value: string;
  icon: ReactElement;
  component: ReactElement;
}[] = [
  {
    value: "url",
    icon: <Link className="size-4" />,
    component: <QrUrl />,
  },
  {
    value: "text",
    icon: <Text className="size-4" />,
    component: <QrText />,
  },
  {
    value: "email",
    icon: <AtSign className="size-4" />,
    component: <QrEmail />,
  },
  {
    value: "phone",
    icon: <Phone className="size-4" />,
    component: <QrPhone />,
  },
  {
    value: "wi-fi",
    icon: <Wifi className="size-4" />,
    component: <QrWifi />,
  },
  {
    value: "sms",
    icon: <MessageCircle className="size-4" />,
    component: <QrSms />,
  },
];

export default QrSettings;
