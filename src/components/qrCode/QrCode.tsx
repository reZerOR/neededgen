"use client";
import React, { useEffect, useRef, useState, ChangeEvent } from "react";
import QRCodeStyling, { Options, FileExtension } from "qr-code-styling";
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

export default function ClientQR() {
  const [options, setOptions] = useState<Options>({
    width: 200,
    height: 200,
    type: "svg",
    data: "http://qr-code-styling.com",
    image:
      "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
    margin: 5,
    qrOptions: {
      typeNumber: 0,
      mode: "Byte",
      errorCorrectionLevel: "Q",
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.3,
      margin: 5,
      crossOrigin: "anonymous",
      saveAsBlob: true,
    },
    dotsOptions: {
      color: "#222222",
      type: "rounded",
    },
    backgroundOptions: {
      color: "#5FD4F3",
      round: 0.1,
    },
    cornersSquareOptions: {
      type: "dot",
    },
    cornersDotOptions: {
      type: "dot",
    },
  });

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

  const onSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const size = Math.min(
      2000,
      Math.max(100, parseInt(event.target.value, 10) || 200)
    );
    setDownloadSize(size);
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
      <h2>Client QR code styling for Next.js</h2>
      <div ref={ref} />
      <div>
        {/* <label>
          QR Code Data:
          <input value={options.data} onChange={onDataChange} />
        </label> */}
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
        <label>
          Download Size (px):
          <input
            type="number"
            value={downloadSize}
            onChange={onSizeChange}
            min={100}
            max={2000}
            step={10}
          />
        </label>
        <Button onClick={onDownloadClick}>
          {" "}
          <Download />
          Download
        </Button>
      </div>
    </>
  );
}
