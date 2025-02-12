"use client";
import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling, { FileExtension } from "qr-code-styling";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import useQRStore from "@/store/qrStore";

export default function ClientQR() {
  const { options } = useQRStore();
  const [fileExt, setFileExt] = useState<FileExtension>("svg");
  const [qrCode, setQrCode] = useState<QRCodeStyling>(); // Default size for download
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setQrCode(new QRCodeStyling(options));
  }, [options]);

  useEffect(() => {
    if (ref.current) {
      qrCode?.append(ref.current);
    }
  }, [qrCode, ref]);

  useEffect(() => {
    if (!qrCode) return;
    qrCode?.update(options);
  }, [qrCode, options]);

  const onExtensionChange = (value: string) => {
    setFileExt(value as FileExtension);
  };

  const onDownloadClick = () => {
    if (!qrCode) return;
    qrCode.download({ extension: fileExt });
  };

  return (
    <div className="">
      <div>
        <div ref={ref} />
      </div>
      <div className="space-y-2 mt-2">
        <div className="flex items-center space-x-2 w-[200px]">
          <Select value={fileExt} onValueChange={onExtensionChange}>
            <SelectTrigger className="w-full" id="file-format">
              <SelectValue placeholder="Select a file format" />
            </SelectTrigger>
            <SelectContent>
              {formats.map((format) => (
                <SelectItem key={format} value={format}>
                  {format.toUpperCase()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full" onClick={onDownloadClick}>
          <Download />
          Download
        </Button>
      </div>
    </div>
  );
}
const formats = ["svg", "png", "jpeg", "webp"];
