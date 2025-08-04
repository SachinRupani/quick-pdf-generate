import { Switch } from "@heroui/react";
import { memo } from "react";

type PropsAppSwitch = {
  title: string;
  isOn: boolean;
  onToggleAction: (isSelected: boolean) => void;
};

const AppSwitch = ({ title, isOn, onToggleAction }: PropsAppSwitch) => {
  return (
    <Switch
      size="sm"
      color="primary"
      defaultSelected={isOn}
      onValueChange={onToggleAction}
      classNames={{
        label: "text-sm text-primary-800 font-semibold",
      }}
    >
      {title}
    </Switch>
  );
};

export const AppSwitchMemoized = memo(AppSwitch);
