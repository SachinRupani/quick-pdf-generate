import { addToast } from "@heroui/react";

export const showToast = (title: string, description: string) => {
  addToast({
    title,
    description,
    classNames: {
      base: "rounded-lg bg-secondary-50 border-0",
      title: "text-sm font-semibold text-gray-700",
      description: "text-sm text-gray-500",
      icon: "text-secondary-600",
    },
  });
};
