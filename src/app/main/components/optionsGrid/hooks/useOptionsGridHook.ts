"use client";

import { useState } from "react";
import {
  defaultOptionsGridState,
  OptionsGridState,
} from "../data/OptionsGridState";

export const useOptionsGridHook = () => {
  const [optionsGridState, setOptionsGridState] = useState<OptionsGridState>(
    defaultOptionsGridState
  );

  return {
    optionsGridState,
  };
};
