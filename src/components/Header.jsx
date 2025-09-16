import { useState } from "react";
import { useContext } from "react";
import { NameContext } from "../contexts/NameContext";
import GrandChild from "./GrandChild";

const Header = () => {
    
    const { name, setName } = useContext(NameContext);
    const [nameInput, setNameInput] = useState('');

    const handleName = () => {
        setName(nameInput);
    };

  return (
    <>
        <h1>Welcome {name}. I'm Her</h1>
        <input
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
        />
        <button onClick={handleName}>Update</button>
    </>
  );
};

export default Header;
