
import React, { useEffect, useState } from "react";
import { 
    VerifyDiv,
    VerifySection,
    VerifyFieldDiv,
    VerifyInputDiv,
  } from "../Template_Layout_Verify/TemplateLayoutVerify";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { ReactComponent as Logo } from "../../Image/SVG/horizon_logo.svg";
import * as fa from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [field, SetField] = useState("");
  const [Loading, SetLoading] = useState(false);

  const ClickSign = () => {
    // navigate("/signup");
  };
  
  const LoginAuth = async () => {
    // await fetch("/login/auth", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     username: username,
    //     password: password,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //         console.log(data)
    //   });
  };

  return (

    <VerifyDiv>
      <VerifySection>

        <VerifyFieldDiv style={{alignItems: "center", flexDirection:"row", gap: "10px", padding:"20px 0"}}> 
          <span style={{width: "300px"}}>
            <Logo/>
          </span>
        </VerifyFieldDiv>

        <VerifyFieldDiv style={{
            flexDirection:"column"
        }}>

          <VerifyInputDiv>
            <input
              type="text"
              required={true}
              onChange={(e) =>SetUsername(e.target.value)}
              id="username"
              maxLength={20}
              minLength={1}
            ></input>
            <span><FontAwesomeIcon icon={fa.faUser}/> Tên đăng nhập</span>
            {
            (() => {
              if (field === "username") {
                return <p>* Tài khoản không tồn tại</p>;
              }
            })()
            }
          </VerifyInputDiv>

          <VerifyInputDiv>
            <input
              type="password"
              required={true}
              onChange={(e) => SetPassword(e.target.value)}
              id="password"
              maxLength={30}
              minLength={1}
            ></input>
            <span><FontAwesomeIcon icon={fa.faPen}/> Mật khẩu</span>
            {
            (() => {
              if (field === "password") {
                return <p>* Mật khẩu không chính xác</p>;
              }
            })()
            }
          </VerifyInputDiv>

        </VerifyFieldDiv>

        <VerifyFieldDiv style={{
            justifyContent: "space-between"
        }}>
          <button onClick={LoginAuth}>Đăng nhập</button>
          <button onClick={ClickSign}>Đăng ký</button>
        </VerifyFieldDiv>

      </VerifySection>
    </VerifyDiv>      

  );
}
