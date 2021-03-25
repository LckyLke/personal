import React from 'react'
import "./Startpage.sass"
import NavHeader from "../../../Shared/NavHeader/NavHeader"
import AnimPcBoy from "../../components/AnimPcBoy"
import Logo from "../../components/Logo"

const Startpage = () => {

    const destructureStringAndAssingClassForChar = (string, classNamee) => {
       return string.split("").map((char) => <span key={Math.random()} className={classNamee}>{char}</span>)
    } 

    return (
        <div className="main">

            {/*<NavHeader/>*/}
            <Logo/>
            <div className="AboutTextField">
                <h1>{destructureStringAndAssingClassForChar("I'm Luke.", "char")}</h1>
                <span className="subText">A fullstack developer and web designer.</span>
            </div>
            <AnimPcBoy/>
            
        </div>
    )
}

export default Startpage
