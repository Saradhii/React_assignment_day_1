import React from "react";

const List = (props)=>
{
    console.log(props);
    return (
        <>
          <li>{props.m1} {props.v1}</li>
          <li>{props.m2} {props.v2} </li>
          <li>{props.m3} {props.v3}</li>
          <li>{props.m4} {props.v4}</li>
        </>
    );
};


export default List;