
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
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [field, SetField] = useState("");
  const [Loading, SetLoading] = useState(false);

  const ClickSign = () => {
    localStorage.removeItem("auth");
    navigate("/signup");
  };
  
  const LoginAuth = async () => {
    await fetch("/login/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.status === "accepted") {
          localStorage.setItem("auth", JSON.stringify({id: data.field.value, authen: true}));
          window.location = "/";
        }
        else {
          SetField(data.field[0].name);
        }
      });
  };

  useEffect(() => {
    document.title = "Vegetable - Login";
  }, [])

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
            <span><FontAwesomeIcon icon={fa.faUser}/> Username</span>
            {
            (() => {
              if (field === "username") {
                return <p>* Username is not exist</p>;
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
            <span><FontAwesomeIcon icon={fa.faPen}/> Password</span>
            {
            (() => {
              if (field === "password") {
                return <p>* Incorrect password</p>;
              }
            })()
            }
          </VerifyInputDiv>

        </VerifyFieldDiv>

        <VerifyFieldDiv style={{
            justifyContent: "space-between"
        }}>
          <button onClick={LoginAuth}>Login</button>
          <button onClick={ClickSign}>Signup</button>
        </VerifyFieldDiv>

      </VerifySection>
    </VerifyDiv>      

  );
}
