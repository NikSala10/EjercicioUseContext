import { useContext } from "react";
import { NameContext } from "../contexts/NameContext";
import Child from "./Child";

const Father = () => {
    
    const { name } = useContext(NameContext);

  return (
    <>
        <p>I'm the ProfileChild of the Profile of <strong style={{ color: "purple" }}>{name}</strong></p>
        <Child />
    </>
  );
};

export default Father;
