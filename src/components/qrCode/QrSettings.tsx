import { TabsContent } from "@radix-ui/react-tabs";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import QrType from "./QrTypes/QrTypes";
import QrImage from "./QrImageOptions/QrImage";
import { ImageIcon, QrCode, Settings } from "lucide-react";

const QrSettings = () => {
  return (
    <Tabs defaultValue="qrType" className="w-[400px] space-y-4">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger className="gap-2" value="qrType"><QrCode/>Types</TabsTrigger>
        <TabsTrigger className="gap-2" value="imageOptions"><ImageIcon/>Options</TabsTrigger>
        <TabsTrigger className="gap-2" value="advanced"><Settings/>Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="qrType">
        <QrType/>
      </TabsContent>
      <TabsContent value="imageOptions">
        <QrImage/>
      </TabsContent>
    </Tabs>
  );
};

export default QrSettings;
