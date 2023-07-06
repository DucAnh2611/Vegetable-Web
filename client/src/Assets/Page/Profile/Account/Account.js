
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { Buffer } from "buffer";
import ConvertImageToBuffer from "../../../AssistsFunc/ConvertImageToBuffer";
import ConvertToImage from "../../../AssistsFunc/ConvertBlobToImage";
import { 
    PartWrap,
    InputButton,
    InputImage,
    InputPass,
    InputText,
    Notification,
    SectionContent,
    SectionHeader,
    SectionPart
} from "./Account_Styled";

export default function Account() {
    const [userInfo, SetUserInfo] = useState({
        fullname: "", 
        birthday: "", 
        email: "", 
        phone: "", 
        address: "", 
        avatar: ""
    });
    const [passwordChangeInfo, SetPasswordChangeInfo] = useState({
        currentpass: '',
        newpass: '',
        confirmpass: ''
    });
    const [changePassFail, SetChangePassFail] = useState({});
    const [showInput, SetShowInput] = useState({
        currentpass: false,
        newpass: false,
        confirmpass: false
    });

    const RegExpInput = {
        fullname: /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]{10,30}$/,
        address: /^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s,/-]{10,150}$/,
        phone: /^[0-9]{10,11}$/,
        email: new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")
    };
    
    const handleChangeData = (type, data) => {
        SetUserInfo(info => ({...info, [type]: data}))
    };

    const handleChangePasswordData = (type, data) => {
        SetPasswordChangeInfo(info => ({...info, [type]: data}))
        SetChangePassFail({});
    };

    const changeInfo = () => {
        if( !(filterConditionToSubmit() !== -1) ){
            fetch(`/profile/${JSON.parse(localStorage.getItem("auth")).id}/update`, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({...userInfo}),
            })
            .then((res) => res.json())
            .then((data) => {
                if(data.status === "accepted") {
                    window.location.reload();
                }

            }) ;            
        }

    };

    const changePassword = () => {
        if(!enableButtonChangePassword()) {
            fetch(`/profile/${JSON.parse(localStorage.getItem("auth")).id}/password-change`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({...passwordChangeInfo}),
            })
            .then(res => res.json())
            .then(data=> {
                if(data.status === "accepted") {
                    SetPasswordChangeInfo({        
                        currentpass: '',
                        newpass: '',
                        confirmpass: ''
                    });
                    SetChangePassFail({name: "Successfully", msg :"Change password successfully"});
                }
                else {
                    SetChangePassFail({...data.field});
                }
            });            
        }

    };

    const filterConditionToSubmit = () => {
        return Object.keys(RegExpInput).map(e => RegExpInput[e].test(userInfo[e])).findIndex(e => e !== true)
    };

    const enableButtonChangePassword = () => {

        if(Object.keys(passwordChangeInfo).map(e => passwordChangeInfo[e].length > 0).filter(e => e === false).length ===0) {

            if(passwordChangeInfo.confirmpass === passwordChangeInfo.newpass && passwordChangeInfo.newpass !== passwordChangeInfo.currentpass) {

                return Object.keys(passwordChangeInfo).map(e => 
                    passwordChangeInfo[e].includes(" ") 
                    ).filter(e => e === false).length ===0
                
            }  
            return true;

        }
        return true;

    };

    const fetchUserInfo = () => {
        fetch(`/profile/${JSON.parse(localStorage.getItem("auth")).id}`)
        .then(res => res.json())
        .then(data => {
            if(data.status === "accepted") {
                SetUserInfo(data.field);
            }
        })
    };

    useEffect(() => {
        fetchUserInfo();
        document.title = "Vegetable - Account Details";
    }, []);

    return(
        <PartWrap>

            <SectionPart>

                <SectionHeader>   
                    <h1>Account detail</h1>
                </SectionHeader>

                {
                    userInfo.avatar !== "" && 
                    (
                        <SectionContent>

                            <InputImage>

                                <div>
                                    <img src={ConvertToImage(userInfo.avatar)} alt="user preview"/>
                                </div>

                                <div>
                                    <label for="selectimg">Change picture</label>
                                    <input 
                                    id="selectimg"
                                    type="file" 
                                    accept=".jpg, .jpeg, .png" 
                                    onInput={e => ConvertImageToBuffer(e.target.files[0]).then(buf => {
                                        handleChangeData("avatar", {
                                            type: "Buffer", 
                                            data: Array.from(new Uint8Array(buf))
                                        }) ;

                                    } )}/>
                                </div>

                            </InputImage>

                            <InputText>
                                <label for="fullname">Fullname</label>
                                <input 
                                id="fullname" 
                                type="text" 
                                min={10} 
                                value={userInfo.fullname}
                                onChange= {e => handleChangeData("fullname", e.target.value)}
                                />
                                <ul>
                                    {<li className={userInfo.fullname.length >= 10 ? "ok" : "not"}>At least 10 characters</li>}
                                    {<li className={userInfo.fullname.length <=30 ? "ok" : 'not'}>Maximum 30 characters</li>}
                                    {<li className={!new RegExp("[0-9!@#\$%\^\&*\)\(+=._-]", "g").test(userInfo.fullname) ? "ok" : 'not'}>Do not contain special characters or number</li>}
                                </ul>
                            </InputText>
                            
                            <InputText>
                                <label for="order-address">Address</label>
                                <input 
                                id="order-address" 
                                type="text" 
                                min={10} 
                                value={userInfo.address}
                                onChange= {e => handleChangeData("address", e.target.value)}
                                />
                                <ul>
                                    {<li className={userInfo.address.length >= 10 ? "ok" : "not"}>At least 10 characters</li>}
                                    {<li li className={userInfo.address.length <=150  ? "ok" : "not"}>Maximum 150 characters</li>}
                                    {<li className={!new RegExp("[!@#\$%\^\&*\)\(=_+.]", "g").test(userInfo.address) ? "ok" : 'not'}>Do not contain special characters except: "-"</li>}
                                </ul>
                            </InputText>

                            <InputText>
                                <label for="phone-num">Phone number</label>
                                <input 
                                id="phone-num" 
                                type="text" 
                                min={10} 
                                value={userInfo.phone}
                                onChange= {e => handleChangeData("phone", e.target.value)}
                                />
                                <ul>
                                    {<li className={userInfo.phone.length >= 10 ? "ok" : "not"}>At least 10 characters</li>}
                                    {<li className={userInfo.phone.length <= 11  ? "ok" : "not"}>Maximum 11 characters</li>}
                                    {<li className={new RegExp("^[0-9]+$").test(userInfo.phone) ? "ok" : "not"}>Contain numbers only</li>}
                                </ul>
                            </InputText>

                            <InputText>
                                <label for="email">Email</label>
                                <input 
                                id="email" 
                                type="text" 
                                min={10} 
                                value={userInfo.email}
                                onChange= {e => handleChangeData("email", e.target.value)}
                                />
                                <ul>
                                    {<li className={userInfo.email.length >= 10 ? "ok" : "not"}>At least 10 characters</li>}
                                    {<li className={userInfo.email.length <= 150  ? "ok" : "not"}>Maximum 11 characters</li>}
                                    {<li className={ new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$").test(userInfo.email) ? "ok" : "not"}>Match format: abc@example.com</li>}
                                </ul>
                            </InputText>

                            <InputButton>
                                <button onClick={changeInfo} disabled={filterConditionToSubmit() !== -1}>Confirm change</button>
                            </InputButton>

                        </SectionContent>                        
                    )
                }



            </SectionPart>
            
            <SectionPart>

                <SectionHeader>
                    <h1>Change password</h1>
                </SectionHeader>

                <SectionContent>
                    {
                        Object.keys(changePassFail).length !==0 
                        && (
                            <Notification className={changePassFail.name === "Successfully" ? "ok" : "not"}>
                                <p><b>{changePassFail.name}</b></p>
                                <p>Message: {changePassFail.msg}</p>
                            </Notification>
                        )
                    }

                    <InputPass>
                        <label for="current">Current password</label>
                        <div>
                            <input 
                            id="current" 
                            type={!showInput.currentpass ? "password" : "text"}
                            min={1} 
                            value={passwordChangeInfo.currentpass}
                            onChange= {e => handleChangePasswordData("currentpass", e.target.value)}
                            />  

                             <button onClick={e => SetShowInput(show => ({...show, currentpass : !showInput.currentpass}) )}>
                                <FontAwesomeIcon icon={showInput.currentpass ? fa.faEyeSlash : fa.faEye}/>
                            </button> 

                            <ul>
                                {<li className={passwordChangeInfo.currentpass.length > 0 ? "ok": "not"}>At least 1 characters</li>}
                                {<li className={passwordChangeInfo.currentpass.length <=30? "ok" :"not"}>Maximum 30 characters</li>}
                                {<li className={!passwordChangeInfo.currentpass.includes(" ") ? "ok" : "not"}>Do not contain space</li>}
                            </ul>                         
                        </div>

                    </InputPass>

                    <InputPass>
                        <label for="new">New password</label>

                        <div>
                            <input 
                            id="new" 
                            type={!showInput.newpass ? "password" : "text"}
                            min={1} 
                            value={passwordChangeInfo.newpass}
                            onChange= {e => handleChangePasswordData("newpass", e.target.value)}
                            />

                            <button onClick={e => SetShowInput(show => ({...show, newpass : !showInput.newpass}) )}>
                                <FontAwesomeIcon icon={showInput.newpass ? fa.faEyeSlash : fa.faEye}/>
                            </button>

                            <ul>
                                {<li className={passwordChangeInfo.newpass.length > 0? "ok" : "not"}>At least 1 characters</li>}
                                {<li className={passwordChangeInfo.newpass.length <=30? "ok" : "not"}>Maximum 30 characters</li>}
                                {<li className={passwordChangeInfo.newpass !== passwordChangeInfo.currentpass ? "ok" : "not"}>New password must different with current password</li>}
                                {<li className={!passwordChangeInfo.newpass.includes(" ") ? "ok" : "not"}>Do not contain space</li>}
                            </ul>                            
                        </div>


                    </InputPass>

                    <InputPass>
                        <label for="confirm">Confirm password</label>

                        <div>
                            <input 
                            id="confirm" 
                            type={!showInput.confirmpass ? "password" : "text"}
                            min={1} 
                            value={passwordChangeInfo.confirmpass}
                            onChange= {e => handleChangePasswordData("confirmpass", e.target.value)}
                            />     

                            <button onClick={e => SetShowInput(show => ({...show, confirmpass : !showInput.confirmpass}) )}>
                                <FontAwesomeIcon icon={showInput.confirmpass ? fa.faEyeSlash : fa.faEye}/>
                            </button>

                            <ul>
                                {<li className={passwordChangeInfo.confirmpass.length > 0 ? "ok" : "not"}>At least 1 characters</li>}
                                {<li className={passwordChangeInfo.confirmpass.length <=30 ? "ok" : "not"}>Maximum 50 characters</li>}
                                {<li className={passwordChangeInfo.confirmpass === passwordChangeInfo.newpass ? "ok" : "not"}>Confirm password must match with New password</li>}
                                {<li className={!passwordChangeInfo.confirmpass.includes(" ") ? "ok" : "not"}>Do not contain space</li>}
                            </ul>                            
                        </div>


                    </InputPass>

                    <InputButton>
                        <button onClick={changePassword} disabled={enableButtonChangePassword()}>Confirm change</button>
                    </InputButton>

                </SectionContent>
                
            </SectionPart>

        </PartWrap>
    )
}