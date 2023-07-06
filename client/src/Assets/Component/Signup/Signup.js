
import React, { useState, useCallback, useEffect } from "react";
import {Outlet, useNavigate} from "react-router-dom";
import { 
    VerifyDiv,
    VerifySection,
    VerifyFieldDiv,
    VerifyInputDiv,
  } from "../Template_Layout_Verify/TemplateLayoutVerify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as Logo } from "../../Image/SVG/horizon_logo.svg";
import * as fa from "@fortawesome/free-solid-svg-icons";

function Signup() {
  const navigate = useNavigate();
  const [ValidData, SetValidData] = useState(true);
  const [field, SetField] = useState([]);
  const [userInfo, SetUserInfo] = useState({
    username: "",
    password: "",
    email: "",
    phoneNum: "",
    fullname: "",
    birthday: `${new Date().getFullYear()}-${parseInt((new Date().getMonth()+1) /10)}${(new Date().getMonth()+1) % 10}-${parseInt(new Date().getDate()/10)}${new Date().getDate() % 10}`
  });

  const emailFormat =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const phoneFormat = /^[0-9]{10}$/

  const filterData = () => {

    SetField([]);
    SetValidData(true);

    Object.keys(userInfo).forEach(e => {
      if(userInfo[e] === "") {
        SetValidData(false);
      }
      else {

        if(e === "email" & !Boolean(userInfo[e].match(emailFormat)) ) {
          SetValidData(false);
          SetField(field => [...field, {
            field: e,
            msg: "Incorrect  Email format"
          }]);
        } 
        else if(e === "phoneNum" & !Boolean(userInfo[e].match(phoneFormat)) ) {
          SetValidData(false);
          SetField(field => [...field, {
            field: e,
            msg: "Incorrect Phone number format"
          }]);
        }
        else if((e==="username" || e==="pass") && userInfo[e].includes(' ')) {
          SetValidData(false);
          SetField(field => [...field, {
            field: e,
            msg: "Can not contain space ' '"
          }]);
        }
        else if(e === "birthday") {

          let CurrentDate = new Date();
          let userPickDate = new Date(userInfo[e]);
          let diff_day = parseInt((Date.parse(userPickDate) - Date.parse(CurrentDate))/(1000*60*60*24));
          let diff_year = CurrentDate.getFullYear()-userPickDate.getFullYear();


          if(diff_day >=0) {
            SetValidData(false);
            SetField(field => [...field, {
              field: e,
              msg: "Can not choose date in the future"
            }]);
          }else {
            if(diff_year < 18) {
              SetValidData(false);
              SetField(field => [...field, {
                field: e,
                msg: "18 year old required"
              }]);
            }
          }

        }

      }
    })
  }

  useEffect(()=>{
    filterData();
  }, [userInfo])

  const InputChange = useCallback(
    (type) => (e) => {
      SetUserInfo({ ...userInfo, [type]: e.target.value });
    },
    [userInfo]
  );

  const SignupAuth = () => {
    if(ValidData) {

      fetch("/signup/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...userInfo,
        }),
      })
      .then((res) => res.json())
      .then((data) => {

        if(data.status === "accepted") {
          navigate("/");
          localStorage.setItem("auth", JSON.stringify({id: data.field.userid, authen: true}));
        }
        else {
          SetField(Object.keys(data.field).map(e => ({
            field: e,
            msg: `${e} is existed`
          })));
        }

      });

    }

  };

  const ClickToLogin = () => {
    navigate("/login");
  }

  useEffect(() => {
    document.title = "Vegetable - Signup";
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
              onChange={InputChange("username")}
              value={userInfo.username}
              maxLength={20}
              minLength={1}
            ></input>
            <span><FontAwesomeIcon icon={fa.faUser}/> Username</span>
            {field.map((element) => {
              if (element.field === "username") {
                return <p>* {element.msg}</p>;
              }
              return <Outlet />;
            })}
          </VerifyInputDiv>

          <VerifyInputDiv>
            <input
              type="password"
              required={true}
              onChange={InputChange("password")}
              value={userInfo.password}
              maxLength={30}
              minLength={1}
            ></input>
            <span><FontAwesomeIcon icon={fa.faPen}/> Password</span>
            {field.map((element) => {
              if (element.field === "password") {
                return <p>* {element.msg}</p>;
              }
              return <Outlet />;
            })}
          </VerifyInputDiv>

          <VerifyInputDiv>
            <input
              type="text"
              required={true}
              onChange={InputChange("fullname")}
              value={userInfo.fullname}
              maxLength={100}
              minLength={1}
            ></input>
            <span><FontAwesomeIcon icon={fa.faInbox}/> Fullname</span>
            {field.map((element) => {
              if (element.field === "fullname") {
                return <p>* {element.msg}</p>;
              }
              return <Outlet />;
            })}
          </VerifyInputDiv>

          <VerifyInputDiv>
            <input
              type="text"
              required={true}
              onChange={InputChange("email")}
              value={userInfo.email}
              maxLength={50}
              minLength={1}
            ></input>
            <span><FontAwesomeIcon icon={fa.faMailBulk}/> Email</span>
            {field.map((element) => {
              if (element.field === "email") {
                return <p>* {element.msg}</p>;
              }
              return <Outlet />;
            })}
          </VerifyInputDiv>

          <VerifyInputDiv>
            <input
              type="text"
              required={true}
              onChange={InputChange("phoneNum")}
              value={userInfo.phoneNum}
              maxLength={10}
              minLength={10}
            ></input>
            <span><FontAwesomeIcon icon={fa.faPhone}/> Phone Number</span>
            {field.map((element) => {
              if (element.field === "phoneNum") {
                return <p>* {element.msg}</p>;
              }
              return <Outlet />;
            })}
          </VerifyInputDiv>

          <VerifyInputDiv>
            <input
              type="date"
              required={true}
              onChange={InputChange("birthday")}
              value={userInfo.birthday}
            ></input>
            <span style={{        
              zIndex: "1",
              top: "0",
              backgroundColor: "var(--Primary_White)"}}
          ><FontAwesomeIcon icon={fa.faBirthdayCake}/> Birthday</span>
            {field.map((element) => {
              if (element.field === "birthday") {
                return <p>* {element.msg}</p>;
              }
              return <Outlet />;
            })}
          </VerifyInputDiv>

        </VerifyFieldDiv>

        <VerifyFieldDiv style={{
            justifyContent: "space-between"
        }}>
          <button onClick={SignupAuth} disabled={!ValidData}>Sign up</button>
          <button onClick={ClickToLogin}>Login</button>
        </VerifyFieldDiv>

      </VerifySection>

    </VerifyDiv>
  );
}
export default Signup;
