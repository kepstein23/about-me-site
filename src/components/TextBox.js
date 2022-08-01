import React from "react"

export function TextBox({title, subtitle, text}) {
    return (
        <div className="textBox">
            <h1 class="title">{title}</h1>
            <h2>{subtitle}</h2>
            <p>{text}</p>
        </div>
    )
}
