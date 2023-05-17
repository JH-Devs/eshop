import React from 'react'
import {FiMoreVertical} from "react-icons/fi"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from "react-icons/md"


const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Celkové příjmy</h1>
                <FiMoreVertical fontSize='small' />
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text={'60%'}  strokeWidth={5} />
            </div>
            <p className="title">celkové dnešní prodeje</p>
            <p className="amount">42 852 Kč</p>
            <p className="desc">Zpracování předchozích transakcí, poslední platby nemusí být započítány.</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Cíle</div>
                    <div className="itemResult negative">
                        <MdKeyboardArrowDown fontSize='small'/>
                        <div className="resultAmount">450 000 Kč</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">za týden</div>
                    <div className="itemResult positive">
                        <MdKeyboardArrowUp fontSize='small'/>
                        <div className="resultAmount">150 350 Kč</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">za měsíc</div>
                    <div className="itemResult positive">
                        <MdKeyboardArrowUp fontSize='small'/>
                        <div className="resultAmount">350 350 Kč</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured