import ClientQR from "@/components/qrCode/QrCode";
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
        <div>
          <div></div>
          <div className="mx-auto w-full max-w-3xl flex justify-center flex-col items-center">
            <ClientQR/>
          </div>
        </div>
      </div>
    </div>
  );
}
