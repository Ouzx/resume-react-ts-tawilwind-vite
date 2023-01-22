import React from "react";
import DescriptionItem from "./DescriptionItem";
import { DataContext } from "../../DataContext";

const DescriptionItems = () => {
  const data = React.useContext(DataContext);
  return (
    <div className="flex-1">
      <h2 className="text-thinText mb-8">personal information</h2>
      <DescriptionItem title="FULL NAME" value={data.Name} />
      <DescriptionItem title="D.O.B." value={data.BirthDate} />
      <DescriptionItem title="ADDRESS" value={data.Contact?.address} />
      <DescriptionItem title="E-MAIL" value={data.Contact?.email} />
      <DescriptionItem title="PHONE" value={data.Contact?.phone} />
      <DescriptionItem title="Open For Work" value="Yes" />
    </div>
  );
};

export default DescriptionItems;
