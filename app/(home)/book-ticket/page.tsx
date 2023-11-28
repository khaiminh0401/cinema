'use client'

import OrderDetail from "./orderdetail";

const Order = () => {
    return (
        <div className="flex flex-row">
            <div className="basis-1/4 flex items-center justify-center"><OrderDetail /></div>
        </div>
    );
}

export default Order;