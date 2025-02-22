import ClientQR from "@/components/qrCode/QrCode";
import QrTabs from "@/components/qrCode/QrTabs";
import { SparklesText } from "@/components/ui/sparkles-text";
import { QrCode } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center gap-4 my-5 md:my-20">
          <QrCode size={56} className="text-green-500" />
          <SparklesText text="Generate QRs" className="text-center overflow-clip" />
        </div>
        <div className="flex justify-center flex-col-reverse md:flex-row p-4 container mx-auto gap-10">
          <div className="flex justify-center md:justify-end">
            <div className="md:max-w-96 mx-auto md:mx-0">
              <QrTabs />
            </div>
          </div>
          <div className="w-fit mx-auto md:mx-0">
            <ClientQR />
          </div>
        </div>
      </div>
    </div>
  );
}
