
import React, { useEffect, useState } from "react";
import { 
    LoadingPageWrap 
} from "./PageLoading";

export default function LoadingPage() {
    
    const [idxChar, SetIndexChar] = useState(0);
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            SetIndexChar(idxChar => idxChar+1 >= Array.from('vegetable').length ? 0 : idxChar +1)
          }, 200);
      
          return () => {
            clearInterval(intervalId);
          };
    }, [])

    return (
        <LoadingPageWrap>
            <div>
                {
                    Array.from('vegetable').map((e, idx) => <p className={idx === idxChar ? "ok" : "not"}>{e}</p>)
                }
            </div>
        </LoadingPageWrap>
    )
}