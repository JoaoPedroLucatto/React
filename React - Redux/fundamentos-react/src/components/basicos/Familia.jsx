import React from 'react'

export default (props) => {

    console.log(props)

    return(
        <div>
            {React.Children.map(props.children, (child, i) => {
                return React.cloneElement(child, {...props, key:i});
            })}
        </div>
    ) 

}