import React from "react";
import DescriptionItem from "./DescriptionItem";

const DescriptionItems = () => {
  return (
    <div>
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
