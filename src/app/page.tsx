import ClientQR from "@/components/qrCode/QrCode";
import QrTabs from "@/components/qrCode/QrTabs";
import { SparklesText } from "@/components/ui/sparkles-text";
import { QrCode } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center gap-4 my-20">
          <QrCode size={56} className="text-green-500" />
          <SparklesText text="Generate QRs" />
        </div>
        <div className="grid grid-cols-2 container mx-auto gap-10">
          <div className="flex justify-end">
            <div className="w-96">
              <QrTabs />
            </div>
          </div>
          <div className="flex flex-col w-fit">
            <ClientQR />
          </div>
        </div>
      </div>
    </div>
  );
}
