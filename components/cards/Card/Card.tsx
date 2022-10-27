import React from "react";
import styles from './Card.module.css'

interface Props {
    children?: React.ReactNode
    className?: string
    
}

const Card = (props: Props): JSX.Element => {
  return (
    <div className={`${styles.container} ${props.className}`}>
        {props.children}
    </div>
  )
};

export default Card;
