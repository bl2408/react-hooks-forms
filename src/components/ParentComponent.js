import { useState } from "react";
import Display from "./Display";
import Form from "./Form";

function ParentComponent(){
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");

    const handleFirstNameChange = (e)=>{
        setFirstName(e.target.value);
    };
    const handleLastNameChange = (e)=>{
        setLastName(e.target.value);
    };
    return (
        <>
            <Form 
                firstName={firstName} 
                handleFirstNameChange={handleFirstNameChange}
                lastName={lastName}
                handleLastNameChange={handleLastNameChange}
            />
            <Display firstName={firstName} lastName={lastName}/>
        </>
    );

}

export default ParentComponent;