import React from "react";

type PropsAppHeader = {
  title: string;
};

const AppHeader = ({ title }: PropsAppHeader) => {
  return (
    <div className="flex flex-col p-6 bg-primary-600">
      <p className="text-primary-foreground font-bold text-3xl md:text-4xl">
        {title}
      </p>
    </div>
  );
};

export const AppHeaderMemoized = React.memo(AppHeader);
