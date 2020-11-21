import React, { useState, useEffect } from "react";
import "./styles.css";

function BorderRadius() {
    const [border, setBorder] = useState({ topL: 0, topR: 0, bottomL: 0, bottomR: 0 });

    useEffect(() => {
        handleUpdate(border);
    }, [border]);

    function handleUpdate(e) {
        var borderEl = document.getElementById("border");
        borderEl.style.borderTopLeftRadius = e.topL + "px";
        borderEl.style.borderTopRightRadius = e.topR + "px";
        borderEl.style.borderBottomLeftRadius = e.bottomL + "px";
        borderEl.style.borderBottomRightRadius = e.bottomR + "px";
    }

    function handleOnChange(e) {
        const { name, value } = e.target;
        setBorder({ ...border, [name]: value });
    }

    return (
        <div className="page_borderRadius">
            <div id="border" className="border">
                <a>TOP LEFT:</a>
                <div>
                    <input
                        name="topL"
                        id="typeinp"
                        onChange={handleOnChange.bind(this)}
                        value={border.topL}
                        type="range"
                        min="0"
                        max="255"
                        step="1"
                    />
                </div>
                <a>TOP RIGHT:</a>
                <div>
                    <input
                        name="topR"
                        id="typeinp"
                        onChange={handleOnChange.bind(this)}
                        value={border.topR}
                        type="range"
                        min="0"
                        max="255"
                        step="1"
                    />
                </div>
                <a>BOTTOM LEFT:</a>
                <div>
                    <input
                        name="bottomL"
                        id="typeinp"
                        onChange={handleOnChange.bind(this)}
                        value={border.bottomL}
                        type="range"
                        min="0"
                        max="255"
                        step="1"
                    />
                </div>
                <a>BOTTOM RIGHT:</a>
                <div>
                    <input
                        name="bottomR"
                        id="typeinp"
                        onChange={handleOnChange.bind(this)}
                        value={border.bottomR}
                        type="range"
                        min="0"
                        max="255"
                        step="1"
                    />
                </div>

                <input type="button" value="copy to clipboard"></input>

                <textarea
                    id="textCopy"
                    readOnly
                    value={`border-top-left-radius: ${border.topL};
                    border-top-Right-radius: ${border.topR};
                    border-bottom-left-radius: ${border.bottomL};
                    border-bottom-right-radius: ${border.bottomR};`}
                ></textarea>
            </div>
        </div>
    );
}

export default BorderRadius;
