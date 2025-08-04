import { Input, Textarea } from "@heroui/react";
import { memo } from "react";
import { AppTextInputModeType } from "./AppTextInputModeType";

type PropsAppTextInput = {
  textValue: string;
  handleTextChangeAction: (updatedText: string) => void;
  inputMode: AppTextInputModeType;
  placeholderText?: string;
  boxSize?: "lg" | "sm" | "md";
  boxRadius?: "sm" | "md" | "lg" | "none" | "full";
  inputlabel?: string;
  colorVariant?: "default" | "primary" | "secondary" | "success" | "warning";
  isInputDisabled?: boolean;
  isMandatoryInput?: boolean;
  extraInputClassName?: string;
  extraInputWrapperClassName?: string;
  extraLabelClassName?: string;
  extraContainerClassName?: string;
};

const AppTextInput = ({
  inputMode,
  textValue,
  boxSize,
  boxRadius,
  colorVariant,
  inputlabel,
  isInputDisabled,
  isMandatoryInput,
  placeholderText,
  extraInputClassName,
  extraInputWrapperClassName,
  extraLabelClassName,
  extraContainerClassName,
  handleTextChangeAction,
}: PropsAppTextInput) => {
  const _renderNormalInput = () => {
    return (
      <Input
        isDisabled={isInputDisabled}
        isRequired={isMandatoryInput}
        value={textValue}
        size={boxSize}
        label={inputlabel}
        radius={boxRadius}
        labelPlacement="outside-top"
        color={colorVariant}
        className={extraContainerClassName}
        classNames={{
          label: `text-primary-700 text-sm font-semibold ${extraLabelClassName}`,
          input: `font-medium text-sm text-primary-800 ${extraInputClassName}`,
          inputWrapper: `bg-primary-50 ${extraInputWrapperClassName}`,
        }}
        placeholder={placeholderText}
        onValueChange={handleTextChangeAction}
      />
    );
  };

  const _renderTextAreaInput = () => {
    return (
      <Textarea
        isDisabled={isInputDisabled}
        isRequired={isMandatoryInput}
        value={textValue}
        size={boxSize}
        label={inputlabel}
        radius={boxRadius}
        labelPlacement="outside-top"
        color={colorVariant}
        className={extraContainerClassName}
        classNames={{
          label: `text-primary-700 text-sm font-semibold ${extraLabelClassName}`,
          input: `font-medium text-sm text-primary-800 ${extraInputClassName}`,
          inputWrapper: `py-3 bg-primary-50 ${extraInputWrapperClassName}`,
        }}
        placeholder={placeholderText}
        onValueChange={handleTextChangeAction}
      />
    );
  };

  return inputMode === AppTextInputModeType.TextArea
    ? _renderTextAreaInput()
    : _renderNormalInput();
};

export const AppTextInputMemoized = memo(AppTextInput);
