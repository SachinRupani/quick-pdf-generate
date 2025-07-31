"use client";

import { OptionEntity } from "../optionsGrid/data/OptionEntity";

export type PropsAppCard = {
  optionEntity: OptionEntity;
  onClickAction?: (givenOption: OptionEntity) => void;
};

export const AppMainOption = ({
  optionEntity,
  onClickAction,
}: PropsAppCard) => {
  const _handleClick = () => {
    onClickAction?.(optionEntity);
  };

  return (
    <div
      className="flex flex-col rounded-large bg-gray-100 p-4 gap-1 cursor-pointer hover:bg-gray-300"
      onClick={_handleClick}
    >
      <p className="text-sm font-semibold text-gray-600">
        {optionEntity.title}
      </p>
      <p className="text-xs font-medium text-gray-500">
        {optionEntity.description}
      </p>
    </div>
  );
};
