
import React, { useState } from "react";

export default function Pagenation({current, max, setPage}) {

    const [listButtonIdx, SetListButtonIdx] = useState([]);

    const changePage = (id) => {
        if(id <=max) {
            if(id >=1) {
                setPage(id);                
            }
            else {
                setPage(1);
            }

        }
        else {
            setPage(max)
        }
    }

    return (
        <div>

            <button onClick={e => changePage(1)}>1</button>

            <p>...</p>

            <input type="number" value={current} onInput={e => changePage(parseInt(e.target.value))} onFocus={e => e.target.value = ""}/>

            <p>...</p>

            <button onClick={e => changePage(max)}>{max}</button>

        </div>
    )



}