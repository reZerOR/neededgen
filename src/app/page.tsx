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
          <div></div>
        </div>
      </div>
    </div>
  );
}
