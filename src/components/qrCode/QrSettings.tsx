import { TabsContent } from "@radix-ui/react-tabs";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import QrType from "./QrTypes/QrTypes";
import QrImage from "./QrImageOptions/QrImage";

const QrSettings = () => {
  return (
    <Tabs defaultValue="qrType" className="w-[400px] space-y-4">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="qrType">Qr Types</TabsTrigger>
        <TabsTrigger value="imageOptions">Image Options</TabsTrigger>
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
