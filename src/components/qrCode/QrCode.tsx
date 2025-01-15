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

  // const onDataChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setOptions((options) => ({
  //     ...options,
  //     data: event.target.value,
  //   }));
  // };

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
      <div ref={ref} />
      <div className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="file-format">File Format:</Label>
          <Select value={fileExt} onValueChange={onExtensionChange}>
            <SelectTrigger className="w-[180px]" id="file-format">
              <SelectValue placeholder="Select a file format" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="svg">SVG</SelectItem>
              <SelectItem value="png">PNG</SelectItem>
              <SelectItem value="jpeg">JPEG</SelectItem>
              <SelectItem value="webp">WEBP</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1">
          <Label htmlFor="file-format">Download Size:</Label>
          <Select value={downloadSize.toString()} onValueChange={onSizeChange}>
            <SelectTrigger className="w-[180px]" id="size">
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
        <Button onClick={onDownloadClick}>
          <Download />
          Download
        </Button>
      </div>
    </>
  );
}

const resulation = [
  "200",
  "400",
  "600",
  "800",
  "1000",
  "1200",
  "1400",
  "1600",
  "1800",
  "2000",
];
