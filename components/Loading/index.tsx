import {Result} from "antd";
import {useEffect, useState} from "react";
import {RingLoader} from "react-spinners";

const Loading = ({ ...props }: { isLoading?: boolean, message?: string, data?: any }) => {
    const [flag, setFlag] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            if (props.data == null) {
                setFlag(false);
            }
        }, 5000);
    }, [props.data])
    return (
        <>
            {flag ?
                <div className="w-full">
                    {props.isLoading ? (
                        <div className="flex justify-center min-h-screen items-center w-full">
                            <RingLoader size={50} color="#ff0000" />
                            {/* <p className="p-4 md:text-2xl text-red-500">{props.message}</p> */}
                        </div>
                    ) : props.data ? null : (
                        <div className="flex justify-center min-h-screen items-center w-full">
                            <RingLoader size={50} color="#ff0000" />
                            {/* <p className="p-4 md:text-2xl text-red-500">{props.message}</p> */}
                        </div>
                    )}
                </div>
                : <div className="bg-white flex justify-center min-h-screen items-center">
                    <Result status="500" title="Sorry, something went wrong." subTitle="Bạn hãy liên hệ đến nhân viên để được hỗ trợ." />
                </div>
            }
        </>
    )
}
export default Loading;