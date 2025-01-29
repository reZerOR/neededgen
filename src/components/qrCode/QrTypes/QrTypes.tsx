"use client";
import { ReactElement } from "react";
import { AtSign, Link, MessageCircle, Phone, Text, Wifi } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useQrSettings from "@/store/useSettings";
import useQRStore from "@/store/qrStore";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import QrUrl from "./QrUrl";
import QrText from "./QrText";
import QrEmail from "./QrEmail";
import QrPhone from "./QrPhone";
import QrWifi from "./QrWifi";
import QrSms from "./QrSms";
const QrType = () => {
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

export default QrType;
