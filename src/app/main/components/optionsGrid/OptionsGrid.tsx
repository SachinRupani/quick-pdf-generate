"use client";

import { showToast } from "@/app/_components/toast/AppToast";
import { DocumentType } from "@/app/common/dataEntity/DocumentType";
import { useRouter } from "next/navigation";
import { AppMainOption } from "../appMainOption/AppMainOption";
import { OptionEntity } from "./data/OptionEntity";
import { useOptionsGridHook } from "./hooks/useOptionsGridHook";

export const OptionsGrid = () => {
  const { optionsGridState } = useOptionsGridHook();

  const router = useRouter();

  const _handleOptionClick = (optionEntity: OptionEntity) => {
    switch (optionEntity.documentType) {
      case DocumentType.Notes:
        router.push("/notes");
        break;

      default:
        showToast(optionEntity.title, "Feature coming soon!");
        break;
    }
  };

  return (
    <div className="flex flex-col bg-white p-8">
      {/* Title */}
      <p className="text-2xl font-bold text-primary">
        {optionsGridState.title}
      </p>

      {/* Sub-Title */}
      <p className="text-gray-400 font-semibold mt-1 text-sm">
        {optionsGridState.subTitle}
      </p>

      {/* Options */}
      <div className="grid mt-1 sm:grid-cols-1 md:grid-cols-2 gap-4 py-4">
        {optionsGridState.options.map((option, index) => (
          <AppMainOption
            key={`option-${index}`}
            optionEntity={option}
            onClickAction={_handleOptionClick}
          />
        ))}
      </div>
    </div>
  );
};
