import { useContext } from "react";
import { NameContext } from "../contexts/NameContext";

const Child = () => {
    
    const { name } = useContext(NameContext);

  return (
    <>
        <p>Profile of  <strong style={{ color: "green" }}>{name}</strong></p>
    </>
  );
};

export default Child;
