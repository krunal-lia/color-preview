import React from 'react';
import styleClasses from './Preview.css';


const Preview = (props) => {

    const style = {
        backgroundColor: props.back,
        color: props.font
    };

    return (
        <div>
            <p className={styleClasses.input} style={style}> {props.text} </p>
            {//<input type="text" value={props.text} className={styleClasses.input} style={style}/>
            }
        </div>
    );
};

export default Preview;