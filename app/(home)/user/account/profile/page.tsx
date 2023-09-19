'use client'

import { useEffect } from "react";
import Navbar from "../../navbar";
import ChangeAvatar from "./changeAvatar";
import EditProfile from "./editProfile";
import { fetchAPI } from "@/util/API/axios";
import { customerAPI } from "@/util/API/Customer";

const Profile = ({...props} : customer) => {
    // useEffect(() => {
    //     const init = async () => {
    //         const customer = await customerAPI.findId(1);
    //     }

    //     init();
    // }, []);

    return (
        <div className="flex flex-row">
            <div className="basis-1/4"><Navbar /> </div>

            <div className="basis-2/4"><EditProfile {...props} /> </div>

            <div className="basis-1/4 ms-16"><ChangeAvatar /> </div>
        </div>
    );
}

export default Profile;