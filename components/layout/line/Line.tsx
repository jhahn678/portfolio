import React from "react";

interface Props{
    height?: number | string
    width?: number | string
    color?: string
    className?: string
    ml?: number
    mr?: number
    mt?: number
    mb?: number
    pl?: number
    pr?: number
    pt?: number
    pb?: number
}

const Line = ({ height=8, width=100, color='var(--black)',...props}: Props) => {
  return <div className={props.className} style={{
    height, width, 
    backgroundColor: color, 
    marginLeft: props.ml,
    marginRight: props.mr,
    marginBottom: props.mb,
    marginTop: props.mt,
    paddingLeft: props.pl,
    paddingRight: props.pr,
    paddingTop: props.pt,
    paddingBottom: props.pb
   }}/>
};

export default Line;
