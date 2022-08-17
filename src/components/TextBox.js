import React from "react"

export function TextBox({title, texts}) {
    function displayText()  {
        let toDisplay = []
        let jsx = []

        texts.forEach((item) => {
            if (item.name === "subtitle") {
                if (item.href) {
                    toDisplay.push(<h3 className={item.name}><a href={item.href} target="_blank">{item.content}</a></h3>)
                } else {
                    toDisplay.push(<h3 className={item.name}>{item.content}</h3>)
                }
                
            } else if (item.name === "text") {
                if (item.href) {
                    toDisplay.push(<p className={item.name}><a href={item.href} target="_blank">{item.content}</a></p>)
                } else {
                    toDisplay.push(<p className={item.name}>{item.content}</p>)
                }
                
            } else if (item.name === "img") {
                toDisplay.push(<img src={item.content} height={item.height} width={item.width}/>)
            }
        })
        return toDisplay
        
    }

    return (
        <div className="textBox" style={{padding: "10px"}}>
            <h1 className="heading">{title}</h1>
            {displayText()}
            {/* <h2>{subtitle}</h2>
            <p>{text}</p> */}
        </div>
    )
}
