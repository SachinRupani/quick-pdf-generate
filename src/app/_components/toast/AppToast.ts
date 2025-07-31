import { addToast } from "@heroui/react";

export const showToast = (title: string, description: string) => {
  addToast({
    title,
    description,
    classNames: {
      base: "rounded-lg bg-gray-100",
      title: "text-sm font-semibold text-gray-700",
      description: "text-sm text-gray-500",
      icon: "text-gray-500",
    },
  });
};
