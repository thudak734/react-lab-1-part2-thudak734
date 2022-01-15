import React from "react";
import './Styles.css';

interface Props{
    user:string
}

const Header  = ({user}:Props) => {
    return (
        <h1>Ice Cream Wars {user}</h1>
    )
}

export default Header