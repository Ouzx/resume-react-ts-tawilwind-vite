import React from "react";

const DescriptionItem: React.FC<{ title: string; value: string }> = ({
  title,
  value,
}) => {
  return (
    <div className="mb-3">
      <div className="shrink-0 font-black w-28 text-xs">{title}</div>
      <div className="shrink-0 w-48 text-sm">{value}</div>
    </div>
  );
};

export default DescriptionItem;
