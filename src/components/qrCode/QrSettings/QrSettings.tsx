import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QrBgSetting from "./QrBgSetting";
import QrDotSettings from "./QrDotSettings";
import QrCornerSettings from "./QrCornerSettings";

const QrSettings = () => {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="background" className="w-[400px] space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger className="gap-2" value="background">
            Background
          </TabsTrigger>
          <TabsTrigger className="gap-2" value="dot">
            Dot
          </TabsTrigger>
          <TabsTrigger className="gap-2" value="corners">
            Corners
          </TabsTrigger>
        </TabsList>
        <TabsContent value="background">
          <QrBgSetting />
        </TabsContent>
        <TabsContent value="dot">
          <QrDotSettings />
        </TabsContent>
        <TabsContent value="corners">
          <QrCornerSettings/>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default QrSettings;
