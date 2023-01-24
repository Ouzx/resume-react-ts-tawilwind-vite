import React from "react";
import DescriptionItem from "./DescriptionItem";
import { DataContext } from "../../DataContext";

const DescriptionItems = () => {
  const data = React.useContext(DataContext);
  const phone = data.Contact?.phone;
  const phoneNum = phone?.replace(/\D/g, "");
  return (
    <div className="flex-1">
      <h2 className="text-thinText mb-8">personal information</h2>
      <DescriptionItem title="FULL NAME" value={data.Name} />
      <DescriptionItem title="D.O.B." value={data.BirthDate} />
      <DescriptionItem title="ADDRESS" value={data.Contact?.address} />
      <a href={`mailto:${data.Contact?.email}`}>
        <DescriptionItem title="E-MAIL" value={data.Contact?.email} />
      </a>
      <a href={`tel:+${phoneNum}`}>
        <DescriptionItem title="PHONE" value={data.Contact?.phone} />
      </a>
      <DescriptionItem title="Open For Work" value="Yes" />
    </div>
  );
};

export default DescriptionItems;
