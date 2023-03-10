import React from "react";
import { Link } from "react-router-dom";


import { MailOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(<Link to={"/"}>Home</Link>, 'sub1', <MailOutlined />, [
    getItem('Item 1', null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', null, null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),
  getItem(<Link to={"/about"}>About</Link>, 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem(<Link to={"/contact"}>Contact</Link>, 'sub4', <SettingOutlined />, ),
];
const onClick = (e) => {
  console.log('click', e);
};

  


function Header() {
  return (
    <>
        <header>
        <Menu 
    onClick={onClick}
    style={{
      width: 256,
      height: '100%',
    }}
    mode="vertical"
    items={items}
  />
        </header>
        
    </>
  );
}


export default Header;
