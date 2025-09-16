import { useContext } from "react";
import { NameContext } from "../contexts/NameContext";

const Footer = () => {
    const { name } = useContext(NameContext);
    
  return (
    <>
        <h1>You're on the Footer, {name}</h1>
    </>
  );
};

export default Footer;
