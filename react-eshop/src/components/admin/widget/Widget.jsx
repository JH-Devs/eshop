import React from 'react'
import {BsPersonCircle, BsFillCartCheckFill} from "react-icons/bs"
import {MdMonetizationOn, MdAccountBalance, MdKeyboardArrowUp} from "react-icons/md"

const Widget = ({ type }) => {
  let data;

  // temporary
  const amount = 150;
  const diff = 20;

    switch(type) {
      case 'user':
        data={
          title:'uživatelé',
          isMoney: false,
          link: 'zobrazit všechny uživatele',
          icon: <BsPersonCircle className='icon' style={{color:'#fff', backgroundColor:'#f8c291'}} />,          
        };
        break;
        case 'order':
          data={
            title:'objednávky',
            isMoney: false,
            link: 'zobrazit všechny objednávky',
            icon: <BsFillCartCheckFill className='icon' style={{color:'#fff', backgroundColor:'#82ccdd'}}/>,          
          };
          break;
          case 'erarning':
            data={
              title:'zisk',
              isMoney: true,
              link: 'zobrazit všechny zisky',
              icon: <MdMonetizationOn className='icon' style={{color:'#fff', backgroundColor:'#b8e994'}}/>,          
            };
            break;
            case 'balance':
              data={
                title:'zůstatek',
                isMoney: true,
                link: 'zobrazit všechny zůstatky',
                icon: <MdAccountBalance className='icon' style={{color:'#fff', backgroundColor:'#6a89cc'}}/>,          
              };
              break;
        default:
          break;
    }


  return (
    <div className='widget'>
        <div className='left'>
            <span className='title'> {data.title}</span>
            <span className='counter'> {amount} {data.isMoney && 'Kč'}   </span>
            <span className='link'>{data.link}</span>
        </div>
        <div className='right'>
          <div className="percentage positive">
            <MdKeyboardArrowUp />
            {diff} %
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget 