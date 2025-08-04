import { addToast } from "@heroui/react";

export const showSecondaryToast = (title: string, description: string) => {
  addToast({
    title,
    description,
    color: "secondary",
    classNames: {
      base: "rounded-lg bg-secondary-50 border-0",
      title: "text-sm font-semibold text-gray-700",
      description: "text-sm text-gray-500",
      icon: "text-secondary-600",
    },
  });
};

export const showSuccessToast = (title: string, description: string) => {
  addToast({
    title,
    description,
    color: "success",
    classNames: {
      base: "rounded-lg bg-success-50 border-0",
      title: "text-sm font-semibold text-gray-700",
      description: "text-sm text-gray-500",
      icon: "text-success-600",
    },
  });
};

export const showErrorToast = (title: string, description: string) => {
  addToast({
    title,
    description,
    color: "danger",
    classNames: {
      base: "rounded-lg bg-danger-50 border-0",
      title: "text-sm font-semibold text-gray-700",
      description: "text-sm text-gray-500",
      icon: "text-danger-600",
    },
  });
};
