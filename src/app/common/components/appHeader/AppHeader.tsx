import React from "react";

type PropsAppHeader = {
  title: string;
};

const AppHeader = ({ title }: PropsAppHeader) => {
  return (
    <div className="flex flex-col p-6 bg-gray-200">
      <p className="text-black font-bold text-3xl md:text-4xl">{title}</p>
    </div>
  );
};

export const AppHeaderMemoized = React.memo(AppHeader);
