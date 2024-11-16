// import { useContext } from "react";
// import { GetSession } from "../firestore/session";
// import { personContext } from "./context";
// import { GetBMI, person } from "./person";

const LoadButton = function () {
    // const {currentPerson, setCurrentPerson} = useContext(personContext);
    // console.log(currentPerson);
    return (
        <button className = "btn btn-primary text-white mx-1 rounded-full hover:btn-secondary hover:text-white transition duration-300"
        >
           Load Session
        </button>
    );
}

export default LoadButton;