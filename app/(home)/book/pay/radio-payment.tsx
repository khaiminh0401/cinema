"use client"

import { Radio, RadioChangeEvent, Space } from "antd";
import React, { useEffect, useMemo, useRef, useState } from "react";
import SelectWallet from "./select-wallet";

interface Props {
    value: string
}


const RadioPayment = ({value,onChange,component}:any) => {

    return (
        <Radio.Group className="text-black" onChange={onChange} value={value}>
            <Space direction="vertical">
                <Radio value={1}><span className="text-black">Tiền mặt</span></Radio>
                <Radio value={2}><span className="text-black">Ví điện tử Paypal</span>
                    {/* {
                        value == 2 ? component: <></>
                    } */}
                </Radio>
                <Radio value={3}><span className="text-black">Thanh toán ATM</span></Radio>
            </Space>
        </Radio.Group>
    );
}
export default RadioPayment;