import { create } from "zustand";
import { persist } from "zustand/middleware";
import useQRStore from "./qrStore";

type QRType = "text" | "url" | "phone" | "sms" | "wi-fi" | "email";

interface FormData {
  text: string;
  url: string;
  phone: string;
  sms: {
    number: string;
    message: string;
  };
  wifi: {
    ssid: string;
    password: string;
    encryption: "WPA" | "WEP" | "nopass";
    hidden: boolean;
  };
  email: string;
  imageStr: string | null
  imageSize: number | null
}

interface QRStore {
  qrType: QRType;
  formData: FormData;
  qrValue: string;
  setQrType: (type: QRType) => void;
  updateFormData: (path: string, value: string) => void;
  generateQR: () => void;
}

const useQrSettings = create<QRStore>()(
  persist(
    (set, get) => ({
      qrType: "text",
      formData: {
        imageStr: null,
        text: "",
        url: "",
        phone: "",
        sms: { number: "", message: "" },
        wifi: { ssid: "", password: "", encryption: "WPA", hidden: false },
        email: "",
        imageSize: null
      },
      qrValue: "",
      setQrType: (type) => set({ qrType: type }),
      updateFormData: (path: string, value: string) => {
        set((state) => {
          const pathParts = path.split(".") as (keyof FormData)[];
          const newFormData = { ...state.formData };

          // Type guard for nested objects
          const isNestedObject = (
            obj: unknown,
            key: string
          ): obj is Record<string, unknown> =>
            typeof obj === "object" && obj !== null && key in obj;

          let current: Record<string, unknown> = newFormData;

          for (let i = 0; i < pathParts.length - 1; i++) {
            const key = pathParts[i];

            if (!isNestedObject(current, key as string)) {
              return state; // Invalid path, return original state
            }

            current[key] = { ...(current[key] as Record<string, unknown>) };
            current = current[key] as Record<string, unknown>;
          }

          const lastKey = pathParts[pathParts.length - 1] as string;
          current[lastKey] = value;

          return {
            formData: newFormData as FormData,
          };
        });
      },
      generateQR: () => {
        const { qrType, formData } = get();
        let qrData = "";

        switch (qrType) {
          case "text":
            qrData = formData.text;
            break;
          case "url":
            qrData = formData.url;
            break;
          case "phone":
            qrData = `tel:${formData.phone}`;
            break;
          case "sms":
            qrData = `SMSTO:${formData.sms.number}:${formData.sms.message}`;
            break;
          case "wi-fi":
            qrData = `WIFI:S:${formData.wifi.ssid};T:${
              formData.wifi.encryption || "WPA"
            };P:${formData.wifi.password}${
              formData.wifi.hidden ? ";H:true" : ""
            };;`;
            break;
          case "email":
            qrData = `mailto:${formData.email}`;
            break;
        }

        set({ qrValue: qrData });
        useQRStore.getState().value(qrData);
      },
    }),
    { name: "qr-storage" }
  )
);

export default useQrSettings;
