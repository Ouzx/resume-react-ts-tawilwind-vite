import React from "react";
import DescriptionItem from "./DescriptionItem";

const DescriptionItems = () => {
  return (
    <div className="flex-1">
      <h2 className="text-thinText mb-8">personal information</h2>
      <DescriptionItem title="FULL NAME" value="Ola Maria Lowe" />
      <DescriptionItem title="D.O.B." value="05 Sep 1986" />
      <DescriptionItem
        title="ADDRESS"
        value="24058, Belgium, Brussels, Liutte 27, BE"
      />
      <DescriptionItem title="E-MAIL" value="support@px-lab.com" />
      <DescriptionItem title="PHONE" value="+1 256 254 84 56" />
      <DescriptionItem title="FREELANCE" value="Available" />
    </div>
  );
};

export default DescriptionItems;
