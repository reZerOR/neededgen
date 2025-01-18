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
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import useQRStore from "@/store/qrStore";

export default function ClientQR() {
  const { options } = useQRStore();
  const [fileExt, setFileExt] = useState<FileExtension>("svg");
  const [qrCode, setQrCode] = useState<QRCodeStyling>();
  const [downloadSize, setDownloadSize] = useState(200); // Default size for download
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

  const onSizeChange = (value: string) => {
    setDownloadSize(parseInt(value));
  };

  const onDownloadClick = () => {
    if (!qrCode) return;

    const customQRCode = new QRCodeStyling({
      ...options,
      width: downloadSize,
      height: downloadSize,
    });
    customQRCode.download({ extension: fileExt });
  };

  return (
    <>
      <div>
        <div ref={ref} />
      </div>
      <div className="space-y-2">
        <div className="flex items-center space-x-2 w-[200px]">
          <div className="space-y-1 flex-1">
            <Label htmlFor="file-format">Format:</Label>
            <Select value={fileExt} onValueChange={onExtensionChange}>
              <SelectTrigger id="file-format">
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
          <div className="space-y-1 flex-1">
            <Label htmlFor="file-format">Size:</Label>
            <Select
              value={downloadSize.toString()}
              onValueChange={onSizeChange}
            >
              <SelectTrigger id="size">
                <SelectValue placeholder="Select a file format" />
              </SelectTrigger>
              <SelectContent>
                {resulation.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item} px
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button className="w-full" onClick={onDownloadClick}>
          <Download />
          Download
        </Button>
      </div>
    </>
  );
}

const resulation = [
  "200",
  "500",
  "1000",
  "1500",
  "2000",
];
const formats = ["svg", "png", "jpeg", "webp"];
