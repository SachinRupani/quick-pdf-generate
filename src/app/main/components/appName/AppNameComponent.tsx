"use client";

import { APP_NAME } from "@/app/config/MainAppConfig";
import { Image } from "@heroui/react";

export const AppNameComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-primary gap-4 py-4">
      <Image
        alt={`${APP_NAME}`}
        src={"images/img_quick_pdf_logo.png"}
        width={72}
      />
      <p className="font-semibold text-2xl text-white text-center">{`${APP_NAME}`}</p>
    </div>
  );
};
