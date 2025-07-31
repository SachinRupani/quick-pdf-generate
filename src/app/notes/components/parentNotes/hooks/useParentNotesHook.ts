"use client";

import { useState } from "react";

export const useParentNotesHook = () => {
  const [shouldDisplayPreview, setShouldDisplayPreview] =
    useState<boolean>(false);

  const displayPreview = () => {
    setShouldDisplayPreview(true);
  };

  const hidePreview = () => {
    setShouldDisplayPreview(false);
  };

  return {
    shouldDisplayPreview,
    displayPreview,
    hidePreview,
  };
};
