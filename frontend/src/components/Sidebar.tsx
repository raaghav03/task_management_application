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
                <div className="position: relative; display: flex; height: 3.25rem; padding: 0.5rem; justify-content: center; align-items: center; gap: 0.5rem; border-radius: 0.5rem; overflow: hidden;">
                    <div className="position: absolute; inset: 0; pointer-events: none; border-radius: 0.5rem; background: linear-gradient(180deg, #4C38C2 0%, #2F2188 100%); border: 1px solid transparent; background-origin: border-box; background-clip: padding-box, border-box; background-image: linear-gradient(#4C38C2, #2F2188), linear-gradient(to bottom, #9C93D4, #4B36CC); box-shadow: inset 0px 12px 16px rgba(186, 186, 186, 0.20), 0px 1px 8px rgba(0, 0, 0, 0.25);"></div>
                    <div className="position: relative; flex: 1; display: flex; justify-content: center; align-items: center;">
                        Create New Task
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;
