import React, { MouseEventHandler, ReactNode } from 'react';

interface Links {
  text?: string;
  className: string;
  onMouseEnter?: MouseEventHandler<HTMLAnchorElement>;
  onMouseLeave?: MouseEventHandler<HTMLAnchorElement>;
  children?: ReactNode;
}

const NavLinksProp = (props: Links) => {
  return (
    <a className={props.className} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
      {props.text}
      {props.children}
    </a>
  );
};

export default NavLinksProp;
