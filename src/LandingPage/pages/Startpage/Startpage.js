import React from 'react'
import "./Startpage.sass"
import NavHeader from "../../../Shared/NavHeader/NavHeader"
import AnimPcBoy from "../../components/AnimPcBoy"

const Startpage = () => {
    return (
        <div className="main">

            <NavHeader/>
            <AnimPcBoy/>
            
        </div>
    )
}

export default Startpage
