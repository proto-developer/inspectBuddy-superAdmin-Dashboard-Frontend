"use client";
import { Toaster } from "sonner";

export default function ToastProvider() {
  return (
    <Toaster
      style={{
        fontFamily: "Plus Jakarta Sans",
      }}
      toastOptions={{
        classNames: {
          title: "text-[14px] font-semibold text-darkBlue",
          description: "text-[12px] text-[#808494]",
        },
      }}
    />
  );
}
