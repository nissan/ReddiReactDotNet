import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => (
<ul className="sidebar">
{props.items &&
            props.items.map((item, key) => (
              <li key={key}>
              <a href={item.url}>{item.title}</a>
              </li>
            ))}
            {!props.items &&
            <React.Fragment>
            <li><a href="/">Home</a></li>
            <li><a href="https://www.cnn.com">CNN News</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About</a></li>
            </React.Fragment>
            }
  
</ul>
);

export default Sidebar;