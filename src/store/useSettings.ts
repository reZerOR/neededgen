import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface SettingsState {
  qrType: string;
  setQrType: (value: string) => void;
}

const useSettingsStore = create<SettingsState>()(
  persist(
    (set, get) => ({
      qrType: "text",
      setQrType: (value) => set({ qrType: value }),
    }),
    {
      name: "settings-storage", // name of the local storage key
    }
  )
);

export default useSettingsStore;
