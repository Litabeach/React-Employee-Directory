import React from "react";
import "./style.css";


function Navbar(props) {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">

            <div className="navbar-collapse row" id="navbarNav">

                <div className="searchbox"><form className="form-inline">
                    <input 
                        value={props.search}
                        onChange={props.handleInputChange}
                        name="term"
                        list="term"
                        type="search"
                        //should type be text?
                        className="form-control"
                        id="term"
                        placeholder="Search" 
                        aria-label="Search" />
                </form>
                </div>
            </div>
        </nav>


    );
}

export default Navbar;

