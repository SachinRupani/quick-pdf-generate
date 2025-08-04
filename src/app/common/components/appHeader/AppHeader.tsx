import React from "react";

type PropsAppHeader = {
  title: string;
};

const AppHeader = ({ title }: PropsAppHeader) => {
  return (
    <div className="flex flex-col p-4 bg-primary">
      <p className="text-primary-foreground font-bold text-large md:text-xl">
        {title}
      </p>
    </div>
  );
};

export const AppHeaderMemoized = React.memo(AppHeader);
