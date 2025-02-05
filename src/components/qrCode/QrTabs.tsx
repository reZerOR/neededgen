
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import QrType from "./QrTypes/QrTypes";
import QrImage from "./QrImageOptions/QrImage";
import { ImageIcon, QrCode, Settings } from "lucide-react";
import QrSettings from "./QrSettings/QrSettings";

const QrTabs = () => {
  return (
    <Tabs defaultValue="qrType" className="w-[400px] space-y-4">
      <TabsList className="grid w-full h-10 grid-cols-3">
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
      <TabsContent value="advanced">
        <QrSettings/>
      </TabsContent>
    </Tabs>
  );
};

export default QrTabs;
