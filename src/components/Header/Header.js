import React from "react";
import "./style.css";


function Header() {
    return (<div className ="header">
        <h1> Employee Directory </h1>
        <h5> Use the search box to narrow your results.</h5>
        <h5> Click the 'name' header to sort employees by last name in ascending or descending order.</h5>
    </div>
    );
}

export default Header;
