import React from "react";
import ResponsiveAppBar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

const Index: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <>
      <ResponsiveAppBar />
      {props.children}
    </>
  );
};

export default Index;
