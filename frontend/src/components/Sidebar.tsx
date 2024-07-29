import {
    Home,
    Boards,
    Setting,
    Analytics,
    Teams,
    DoubleArrow,
    Cycle,
    Notifications,
} from ".././assets/Icons";
// const menuItems = [
//     { icon: <Home />, text: "Home", path: "/" },
//     { icon: <Job />, text: "Job", path: "/job" },
//     { icon: <Referral />, text: "Referral", path: "/referral" },
//     { icon: <Setting />, text: "Settings", path: "/settings" },
// ];
import React from "react";
import { Button } from "./ui/button";
const menuItems = [
    { icons: <Home />, text: "Home" },
    { icons: <Boards />, text: "Boards" },
    { icons: <Setting />, text: "Settings" },
    { icons: <Teams />, text: "Teams" },
    { icons: <Analytics />, text: "Analytics" },
];
const Sidebar = () => {
    return (
        <div className="w-88 bg-sidebarBG border-solid border-r-2 border-sidebarBorder px-4 py-8 flex flex-col items-start justify-between h-screen">
            <div className="w-full flex flex-col items-start gap-4 ">
                <div>
                    {/* <Image /> */}
                    <div className="text-black font-medium">Joe Gardner</div>
                </div>
                <div className="flex flex-row gap-12 items-center w-full ">
                    <div className="flex flex-row gap-5">
                        <Notifications />
                        <Cycle />
                        <DoubleArrow />
                    </div>
                    <Button variant="secondary">Logout </Button>
                </div>
                <nav>
                    <div>
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                className="w-48 flex flex-row hover:duration-150 border-transparent border-[1px] focus:ring focus:ring-gray-400 hover:border-hover-gray-300 items-center rounded-lg hover:shadow-hover-inset hover:bg-white hover:text-black group gap-3.5 mb-2 text-itemGray  py-2"
                            >
                                {item.icons}
                                <div className="text-xl">{item.text}</div>
                            </div>
                        ))}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
