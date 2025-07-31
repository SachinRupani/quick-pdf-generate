import { Button } from "@heroui/react";

type PropsAppButton = {
  title: string;
  buttonVariant: "flat" | "solid";
  size: "lg" | "sm" | "md" | undefined;
  buttonColor?: "primary" | "secondary";
  shouldBeDisabled?: boolean;
  extraClassName?: string;
  onClickAction?: () => void;
};

export const AppButton = ({
  title,
  size,
  buttonVariant,
  shouldBeDisabled,
  buttonColor,
  extraClassName,
  onClickAction,
}: PropsAppButton) => {
  return (
    <Button
      size={size}
      isDisabled={shouldBeDisabled}
      variant={buttonVariant}
      color={buttonColor}
      className={extraClassName}
      onPress={onClickAction}
    >
      {title}
    </Button>
  );
};
