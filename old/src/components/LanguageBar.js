import React from "react";
import "./LanguageBar.css"

export function LanguageBar ({language, background}) {
    //d2eaf1
    return (
        <div style={{display: "flex"}}>
                <div className="circle" style={{position: "relative", textAlign: "center", background: `${background}`}}>
                    {language}
                </div>
        </div>
        
    )
}