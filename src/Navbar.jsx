import React from "react";
import { useSelector, useDispatch } from 'react-redux'
const Navbar = ()=>{
    const count = useSelector((state) => state.counter.value);

    return(
        <h2>Total file count: {count}</h2>
    )
};

export default Navbar;