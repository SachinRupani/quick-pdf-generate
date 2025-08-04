import { memo, PropsWithChildren } from "react";
import { AppHeaderMemoized } from "../appHeader/AppHeader";

type PropsAppPageContainer = {
  pageTitle: string;
};

const AppPageContainer = ({
  pageTitle,
  children,
}: PropsWithChildren<PropsAppPageContainer>) => {
  return (
    <div className="flex flex-col flex-1 bg-white min-h-screen">
      <AppHeaderMemoized title={pageTitle} />
      <div className="flex flex-col p-6 gap-4 sm:w-full md:w-3/4">
        {children}
      </div>
    </div>
  );
};

export const AppPageContainerMemoized = memo(AppPageContainer);
