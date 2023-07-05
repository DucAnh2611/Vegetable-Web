
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { Buffer } from "buffer";
import ConvertImageToBuffer from "../../../AssistsFunc/ConvertImageToBuffer";
import ConvertToImage from "../../../AssistsFunc/ConvertBlobToImage";

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
        fullname: /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]{10,30}$/,
        address: /^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]{10,150}$/,
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
    }, []);

    return(
        <div>

            <div>

                <div>   
                    <h1>Account detail</h1>
                </div>

                {
                    userInfo.avatar !== "" && 
                    (
                        <div>

                            <div>

                                <div>
                                    <img src={ConvertToImage(userInfo.avatar)} alt="user preview"/>
                                </div>

                                <div>
                                    <input 
                                    type="file" 
                                    accept=".jpg, .jpeg, .png" 
                                    onInput={e => ConvertImageToBuffer(e.target.files[0]).then(buf => {
                                        handleChangeData("avatar", {
                                            type: "Buffer", 
                                            data: Array.from(new Uint8Array(buf))
                                        }) ;

                                    } )}/>
                                </div>

                            </div>

                            <div>
                                <label for="fullname">Fullname</label>
                                <input 
                                id="fullname" 
                                type="text" 
                                min={10} 
                                value={userInfo.fullname}
                                onChange= {e => handleChangeData("fullname", e.target.value)}
                                />
                                <ul>
                                    {userInfo.fullname.length >= 10 ?<li>ok</li> : <li>At least 10 characters</li>}
                                    {userInfo.fullname.length <=30 ? <li>ok</li> : <li>Maximum 30 characters</li>}
                                    {!new RegExp("[0-9!@#\$%\^\&*\)\(+=._-]", "g").test(userInfo.fullname) ? <p>ok</p> : <li>Do not contain special characters or number</li>}
                                </ul>
                            </div>
                            
                            <div>
                                <label for="order-address">Address</label>
                                <input 
                                id="order-address" 
                                type="text" 
                                min={10} 
                                value={userInfo.address}
                                onChange= {e => handleChangeData("address", e.target.value)}
                                />
                                <ul>
                                    {userInfo.address.length >=10 ?<li>ok</li> : <li>At least 10 characters</li>}
                                    {userInfo.address.length <=150 ?<li>ok</li> : <li>Maximum 150 characters</li>}
                                </ul>
                            </div>

                            <div>
                                <label for="phone-num">Phone number</label>
                                <input 
                                id="phone-num" 
                                type="text" 
                                min={10} 
                                value={userInfo.phone}
                                onChange= {e => handleChangeData("phone", e.target.value)}
                                />
                                <ul>
                                    { userInfo.phone.length>=10 ?<li>ok</li> : <li>At least 10 characters</li>}
                                    { userInfo.phone.length<=11 ?<li>ok</li> : <li>Maximum 11 characters</li>}
                                    {new RegExp("^[0-9]+$").test(userInfo.phone) ? <li>ok</li> : <li>Contain numbers only</li>}
                                </ul>
                            </div>

                            <div>
                                <label for="email">Email</label>
                                <input 
                                id="email" 
                                type="text" 
                                min={10} 
                                value={userInfo.email}
                                onChange= {e => handleChangeData("email", e.target.value)}
                                />
                                <ul>
                                    {userInfo.email.length >=10 ?<li>ok</li> : <li>At least 10 characters</li>}
                                    {userInfo.email.length <=50 ?<li>ok</li> : <li>Maximum 50 characters</li>}
                                    {new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$").test(userInfo.email) ? <li>ok</li> : <li>Match format: abc@example.com</li>}
                                </ul>
                            </div>

                            <div>
                                <button onClick={changeInfo} disabled={filterConditionToSubmit() !== -1}>Confirm change</button>
                            </div>

                        </div>                        
                    )
                }



            </div>

            
            <div>

                <div>
                    <h1>Change password</h1>
                </div>

                <div>
                    {
                        Object.keys(changePassFail).length !==0 
                        && (
                            <div>
                                <p>{changePassFail.name}</p>
                                <p>Message: {changePassFail.msg}</p>
                            </div>
                        )
                    }

                    <div>
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
                        </div>

                        <ul>
                            {passwordChangeInfo.currentpass.length > 0 ?<li>ok</li> : <li>At least 1 characters</li>}
                            {passwordChangeInfo.currentpass.length <=30 ?<li>ok</li> : <li>Maximum 30 characters</li>}
                            {!passwordChangeInfo.currentpass.includes(" ") ? <li>ok</li> : <li>Do not contain space</li>}
                        </ul>
                    </div>

                    <div>
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
                        </div>

                        <ul>
                            {passwordChangeInfo.newpass.length > 0 ?<li>ok</li> : <li>At least 1 characters</li>}
                            {passwordChangeInfo.newpass.length <=30 ?<li>ok</li> : <li>Maximum 30 characters</li>}
                            {passwordChangeInfo.newpass !== passwordChangeInfo.currentpass ? <li>ok</li> : <li>New password must different with current password</li>}
                            {!passwordChangeInfo.newpass.includes(" ") ? <li>ok</li> : <li>Do not contain space</li>}
                        </ul>
                    </div>

                    <div>
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
                        </div>

                        <ul>
                            {passwordChangeInfo.confirmpass.length > 0 ?<li>ok</li> : <li>At least 1 characters</li>}
                            {passwordChangeInfo.confirmpass.length <=30 ?<li>ok</li> : <li>Maximum 50 characters</li>}
                            {passwordChangeInfo.confirmpass === passwordChangeInfo.newpass ? <li>ok</li> : <li>Confirm password must match with New password</li>}
                            {!passwordChangeInfo.confirmpass.includes(" ") ? <li>ok</li> : <li>Do not contain space</li>}
                        </ul>
                    </div>

                    <div>
                        <button onClick={changePassword} disabled={enableButtonChangePassword()}>Confirm change</button>
                    </div>

                </div>
                
            </div>

        </div>
    )
}