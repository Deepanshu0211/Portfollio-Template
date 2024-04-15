import React from 'react'
import "./skill.scss"
import Htmlpng from "../app/html.png";
import CssPng from "../app/css.png"
import Image from 'next/image';
import JsPng from "../app/js.png"
import Reactjs from "../app/react.png"
import Nextpng from "../app/nextjs.png"
import Tspng from "../app/ts.png"
import Pypng from "../app/py.png"
import Flupng from "../app/flutter.png"
{/* MORE IMAGE FROM HERE FUCK */}

import VSpng from "../app/vs.png"
import ASpng from "../app/AS.png"
import Kalipng from "../app/kali.png"
import gitpng from "../app/git.png"
import Githubpng from "../app/github.png"
import AEpng from "../app/AE.png"
import Atompng from "../app/atom.png"
import firepng from "../app/fire.png"
import Cpng from "../app/c.png"
import Cpluspng from "../app/c++.png"



const skill = () => {
  return (
    <div className="section5">
        <div className="title">SKILLS</div><span className='title2'>& FRAMEWORK, TECHNOLOGIES</span>
        <div className="skill">
        <div className="Html">
          <Image src={Htmlpng} alt="HTML" width={80} height={80} />
        </div>
        <div className="Css">
          <Image src={CssPng} alt="css" width={100} height={80} />
        </div>
        <div className="javascript">
          <Image src={JsPng} alt="css" width={90} height={80} />
        </div>
        <div className="react">
          <Image src={Reactjs} alt="css" width={80} height={80} />
        </div>
        <div className="next">
          <Image src={Nextpng} alt="css" width={80} height={80} />
        </div>
        <div className="typescript">
          <Image src={Tspng} alt="css" width={1000} height={80} />
        </div>
        <div className="python">
          <Image src={Pypng} alt="css" width={80} height={80} />
        </div>
        <div className="flutter">
         <Image src={Flupng} alt="css" width={1000} height={80} />
        </div>
        <div className="Vs">
          <Image src={VSpng} alt="vs" width={80} height={80} />
        </div>
        <div className="AS">
          <Image src={ASpng} alt="AS" width={80} height={80} />
        </div>
        <div className="LINUX">
          <Image src={Kalipng} alt="css" width={80} height={80} />
        </div>
        <div className="GIT">
          <Image src={gitpng} alt="css" width={80} height={80} />
        </div>
        <div className="GITHUB">
          <Image src={Githubpng} alt="css" width={80} height={80} />
        </div>
        <div className="AE">
          <Image src={AEpng} alt="css" width={1000} height={80} />
        </div>
        <div className="ATOM">
          <Image src={Atompng} alt="css" width={1000} height={80} />
        </div>
        <div className="FIREBASE">
         <Image src={firepng} alt="css" width={100} height={80} />
        </div>
        <div className="c">
         <Image src={Cpng} alt="css" width={70} height={80} />
        </div>
        <div className="cplus">
         <Image src={Cpluspng} alt="css" width={80} height={80} />
        </div>
       

        </div>

    </div>
  )
}

export default skill