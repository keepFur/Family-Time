import React from 'react';
import './Square.css';
/**
 * 函数的方式定义组件（必须传一个props参数）
 * 
 * @param {any} props 
 * @returns 
 */
function Square(props) {
    return (
        <div className="square" onClick={props.onClick}>
            {props.value}
        </div>
    );
}
export default Square;