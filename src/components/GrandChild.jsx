import { useContext } from "react";
import { NameContext } from "../contexts/NameContext";
import Father from "./Father";

const GrandChild = () => {
    
    const { name } = useContext(NameContext);

  return (
    <>
        <p>I'm <strong style={{ color: "red" }}>{name}</strong></p>
        <Father />
    </>
  );
};

export default GrandChild;
