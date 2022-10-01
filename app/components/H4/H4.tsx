import { FC } from "react";

const H4: FC = ({ children }) => {
  return (
    <>
      <div className="horizontal-separator" />
      <h4>{children}</h4>
    </>
  );
};

export default H4;
