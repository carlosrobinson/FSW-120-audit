import React from "react"
import Navbar from "./Navbar"

function Header() {
    return(
        <div id= "my-header">
            <Navbar />
            <h1>My Blog Spot</h1>
            <h4 id= "myh4">by Carlos Robinson</h4>
        </div>
    )
}

export default Header