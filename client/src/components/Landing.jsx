import React from "react";
import {Link} from "react-router-dom";

export default function Landing(){
    return(
        <div>
            <h1>Dogs!</h1>
            <Link to='/home'>
                <button>
                    HOME
                </button>
            </Link>
        </div>
    )
}