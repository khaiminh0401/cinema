'use client'

import Navbar from "../../navbar";
import ChangeAvatar from "./changeAvatar";
import EditProfile from "./editProfile";
import {useSession} from "next-auth/react";

const Profile = ({...props} : customer) => {
    // useEffect(() => {
    //     const init = async () => {
    //         const customer = await customerAPI.findId(1);
    //     }

    //     init();
    // }, []);
    // const {data: session} = useSession();

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8">
                {/* Cột 1: Navbar */}
                <div className="col-span-1 sm:col-span-2 md:col-span-2">
                    <div className="p-4">
                        <Navbar />
                    </div>
                </div>

                {/* Cột 2: EditProfile */}
                <div className="col-span-1 sm:col-span-1 md:col-span-4">
                    <div className="p-4">
                        <EditProfile {...props} />
                    </div>
                </div>

                {/* Cột 3: ChangeAvatar */}
                <div className="col-span-1 sm:col-span-1 md:col-span-2">
                    <div className="p-4">
                        <ChangeAvatar />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;