import React from "react";

const Contact = (props)=>
{
    console.log(props);
    return (
        <>
          <h3>{props.header}</h3>
        </>
    );
};


export default Contact;