import { create } from "zustand";
import { persist, createJSONStorage, StateStorage } from "zustand/middleware";
import { Options } from "qr-code-styling";

// Define your state interface
interface QRStoreState {
  options: Options;
  defaultImage: string;
  value: (value: string) => void;
  setImage: (image: string) => void;
  setImageSize: (size: number) => void;
  setImageMargin: (size: number) => void;
  setImageDots: (bool: boolean) => void;
}

// Create a custom storage object that handles encryption/decryption
const createEncryptedStorage = (): StateStorage => ({
  getItem: (name: string): string | null => {
    const str = localStorage.getItem(name);
    if (!str) return null;
    try {
      return atob(str);
    } catch {
      return null;
    }
  },
  setItem: (name: string, value: string): void => {
    localStorage.setItem(name, btoa(value));
  },
  removeItem: (name: string): void => {
    localStorage.removeItem(name);
  },
});

const useQRStore = create<QRStoreState>()(
  persist(
    (set, get) => ({
      options: {
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
          imageSize: 0.4,
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
          type: "dots",
        },
        cornersDotOptions: {
          type: "dot",
        },
      },
      defaultImage:
        "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
      value(value) {
        set((state) => ({
          options: {
            ...state.options,
            data: value,
          },
        }));
      },
      setImage(image) {
        set((state) => ({
          options: {
            ...state.options,
            image,
          },
        }));
      },
      setImageSize(size) {
        set((state) => ({
          options: {
            ...state.options,
            imageOptions: {
              ...state.options.imageOptions,
              imageSize: size,
            },
          },
        }));
      },
      setImageMargin(margin) {
        set((state) => ({
          options: {
            ...state.options,
            imageOptions: {
              ...state.options.imageOptions,
              margin: margin,
            },
          },
        }));
      },
      setImageDots(bool) {
        set((state) => ({
          options: {
            ...state.options,
            imageOptions: {
              ...state.options.imageOptions,
              hideBackgroundDots: bool,
            },
          },
        }));
      },
    }),
    {
      name: "qr-store",
      storage: createJSONStorage(() => createEncryptedStorage()),
    }
  )
);

export default useQRStore;
