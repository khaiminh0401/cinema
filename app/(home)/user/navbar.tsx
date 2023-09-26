import React, {useState} from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Avatar, Button, Menu} from 'antd';
import {FaClipboard, FaKey, FaCreditCard, FaTicket, FaUser, FaPencil} from 'react-icons/fa6';
import Link from 'next/link';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    href?: string,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label: (
            <Link href={href || ''} key={key}>
                {label}
            </Link>
        ),
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Tài khoản của tôi', 'sub1', <FaUser/>, '', [
        getItem('Hồ sơ', '1', <FaClipboard/>, '/user/account/profile'),
        getItem('Ngân hàng', '2', <FaCreditCard/>, ''),
        getItem('Đổi mật khẩu', '3', <FaKey/>, '/user/account/password'),
    ]),

    getItem('Vé đã mua', '4', <FaTicket/>, '/user/booked-ticket'),
];

const Navbar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <>
            <Button
                data-drawer-target="sidebar-multi-level-sidebar"
                data-drawer-toggle="sidebar-multi-level-sidebar"
                aria-controls="sidebar-multi-level-sidebar"
                className="border-none inline-flex items-center p-2 py-5 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden"
                // onClick={toggleCollapsed1}
            >
                <Avatar
                    src={<img
                        src={"https://th.bing.com/th/id/R.d7800ae0e7bce71f7474026872829021?rik=J9LLGXJjZtfBBw&riu=http%3a%2f%2fwww.arts-wallpapers.com%2fmovie_wallpapers%2fAVATAR-MOVIE%2fimages%2favatar_movie_11.jpg&ehk=9JZC3ur5pdrG0zwiCPRAfAsP9cjGNihKKSuVIdLbPoQ%3d&risl=&pid=ImgRaw&r=0"}
                        alt="avatar"/>}
                    className='hover:scale-110'
                />
            </Button>

            <div className={"left-0 transition-transform -translate-x-full sm:translate-x-0 xs:hidden md:h-72"}>
                <div
                    id="sidebar-multi-level-sidebar"
                    className={"fixed"}
                >
                    <Button
                        type="link"
                        onClick={toggleCollapsed}
                        style={{marginBottom: 16}}
                        className="text-white">
                        {/* {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} */}
                        <div className='grid grid-rows-2 grid-flow-col gap-x-4 text-white px-2'>
                            <section className='row-span-2 my-auto'>
                                <Avatar
                                    src={<img
                                        src={"https://th.bing.com/th/id/R.d7800ae0e7bce71f7474026872829021?rik=J9LLGXJjZtfBBw&riu=http%3a%2f%2fwww.arts-wallpapers.com%2fmovie_wallpapers%2fAVATAR-MOVIE%2fimages%2favatar_movie_11.jpg&ehk=9JZC3ur5pdrG0zwiCPRAfAsP9cjGNihKKSuVIdLbPoQ%3d&risl=&pid=ImgRaw&r=0"}
                                        alt="avatar"/>}
                                    className='hover:scale-110'
                                />
                            </section>

                            <section className='col-span-2 hover:text-red-400'>khangho2307</section>

                            <section className='col-span-2 hover:text-red-400'>
                                <Link
                                    href="/user/account/profile"
                                    className="row-span-1 col-span-2 flex items-center hover:text-gray-600 text-gray-600"
                                >
                                    <FaPencil/> <span className="ms-2 hover:text-red-400">chỉnh sửa</span>
                                </Link>
                            </section>
                        </div>
                    </Button>

                    <Menu
                        // defaultSelectedKeys={['1']}
                        // defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={collapsed}
                        items={items}
                        rootClassName='bg-inherit'
                    />
                </div>
            </div>
        </>
    );
}

export default Navbar;