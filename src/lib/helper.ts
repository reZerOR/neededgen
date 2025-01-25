// Adjust the import path

import useQRStore from "@/store/qrStore";

export const useGenerateQrCode = () => {
  const { value } = useQRStore();

  const generateQrCodeWithValue = (data: string) => {
    value(data);
  };

  return generateQrCodeWithValue;
};
