import React, { useState, useEffect } from "react";
import { Resume } from "./types";

const DataContext = React.createContext({} as Resume);

const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<Resume>({} as Resume);
  useEffect(() => {
    fetch("resume.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export { DataContext, DataProvider };
