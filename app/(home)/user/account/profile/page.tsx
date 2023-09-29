'use client'

import Slidemenu from "../../slidemenu";
import ChangeAvatar from "./changeAvatar";
import EditProfile from "./editProfile";
import {useSession} from "next-auth/react";
import {useEffect, useState} from "react";
import {customerAPI} from "@/util/API/Customer";

const Profile = () => {
    const {data: session} = useSession();
    const [customer, setCustomer] = useState<customer>();

    const customerId = Number(session?.user.id);

    useEffect(() => {
        if (session) {
            const init = async () => {
                try {
                    await customerAPI.findId(customerId).then((response) => {
                        setCustomer(response);
                    });

                } catch (error) {
                    console.error("Error fetching customer:", error);
                }
            }

            init();
        }
    }, [customerId]);

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-9 gap-4">
                {/* Cột 1: Slidemenu */}
                <div className="col-span-1 sm:col-span-2 md:col-span-2">
                    <div className="p-4">
                        <Slidemenu customerId={customerId} />
                    </div>
                </div>

                {/* Cột 2: EditProfile */}
                <div className="col-span-1 sm:col-span-1 md:col-span-5">
                    <div className="p-4">
                        <EditProfile editCustomer={customer}/>
                    </div>
                </div>

                {/* Cột 3: ChangeAvatar */}
                <div className="col-span-1 sm:col-span-1 md:col-span-2">
                    <div className="p-4">
                        <ChangeAvatar customerId={customerId} keyfacebook={customer?.keyfacebook} avatar={customer?.avatar || ''}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;