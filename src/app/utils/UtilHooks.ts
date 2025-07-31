import { useEffect, useState } from "react";

export const useMobileDetection = () => {
  const [isRunningOnMobileDevice, setIsRunningOnMobileDevice] =
    useState<boolean>(false);

  useEffect(() => {
    setIsRunningOnMobileDevice(
      typeof window !== "undefined" &&
        /iPhone|iPad|Android|Mobile/.test(navigator.userAgent)
    );
  }, []);

  return {
    isRunningOnMobileDevice,
  };
};
