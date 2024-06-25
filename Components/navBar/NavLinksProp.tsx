import React from 'react';
interface Links {
  text?: string;
  className: string;
  href?: string;
}

const NavLinksProp = (props: Links) => {
  return (
    <a className={props.className} href={props.href}>
      {props.text}
    </a>
  );
};

export default NavLinksProp;
