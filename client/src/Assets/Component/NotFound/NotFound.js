
import React from "react";
import { ReactComponent as MyLogo} from "../../Image/SVG/horizon_logo.svg";
import { NotFoundWrap } from "./NotFound_Styled";

export default function NotFound (){
    return (
        <NotFoundWrap>
            <div>
                <MyLogo/>
                <p>Not found</p>
            </div>
        </NotFoundWrap>
    )
}