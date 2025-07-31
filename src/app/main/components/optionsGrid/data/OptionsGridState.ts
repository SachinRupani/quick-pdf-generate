import { defaultOptionsList, OptionEntity } from "./OptionEntity";

export interface OptionsGridState {
  title: string;
  subTitle: string;
  options: Array<OptionEntity>;
}

export const defaultOptionsGridState: OptionsGridState = {
  title: "Let's get started!",
  subTitle: "Choose an option to create PDF",
  options: defaultOptionsList,
};
