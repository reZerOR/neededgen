import ClientQR from "@/components/qrCode/QrCode";
import QrTabs from "@/components/qrCode/QrTabs";
import { SparklesText } from "@/components/ui/sparkles-text";
import { Dot, QrCode } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col min-h-svh">
        <div className="flex flex-col justify-center items-center gap-4 my-5 md:my-20">
          <QrCode size={56} className="text-green-500" />
          <SparklesText
            text="Generate QRs"
            className="text-center overflow-clip"
          />
        </div>
        <div className="flex justify-center h-full flex-grow flex-col-reverse md:flex-row p-4 container mx-auto gap-10">
          <div className="flex justify-center md:justify-end">
            <div className="md:max-w-96 mx-auto md:mx-0">
              <QrTabs />
            </div>
          </div>
          <div className="w-fit mx-auto md:mx-0">
            <ClientQR />
          </div>
        </div>
        <div className="flex my-20 md:my-0 justify-center flex-wrap gap-1 text-gray-500 mb-5">
          <p>Developed by</p>
          <a
            href="https://www.linkedin.com/in/md-golam-kibria-raihan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline transition-colors duration-200"
            title="Visit my linkedIn profile"
            aria-label="Visit my linkedIn profile"
            data-umami-event="LinkedIn Profile Click"
          >
            Md. Golam Kibria Raihan
          </a>
          <Dot />
          <a
            href="https://github.com/reZerOR/neededgen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline transition-colors duration-200"
            title="Visit GitHub and give a star"
            aria-label="Visit GitHub and give a star"
            data-umami-event="GitHub Profile Click"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
