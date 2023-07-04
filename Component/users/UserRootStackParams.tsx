import React from "react";

import Screen3 from "./Screen3";
import Screen4 from "./Screen4";

// tạo 1 enum để định nghĩa các tên của các màn hình
export enum UserScreenEnum {
    Screen3 = "Screen3",
    Screen4 = "Screen4",
}

// tạo 1 type để định nghĩa các params của các màn hình
export type UserRootStackParams = {
    Screen3: undefined;
    Screen4: undefined;
}

// tạo 1 mảng để định nghĩa các các màn hình của Users
export const UserRootStackScreens: any[] = [
    {
        id: 1, name: UserScreenEnum.Screen3,
        component: Screen3, option: { headerShown: true }
    },
    {
        id: 2, name: UserScreenEnum.Screen4,
        component: Screen4, option: { headerShown: false }
    },
]