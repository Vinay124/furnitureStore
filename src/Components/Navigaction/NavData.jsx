import { MdOutlineKeyboardArrowDown } from "react-icons/md";


export const NavData = [
    {
        "id":1,
        "name":"Home",
        "url":"/"
    },
    {
        "id":2,
        "name":"Shop",
        "url":"/Shop",
        "icon":<MdOutlineKeyboardArrowDown size={20}/>,
        "submenu":[
            {
                "id":11,
                "name":"Explore storage & organisation",
                "url":"",
                "submenus":[
                    {
                        "id":20,
                        "name":"Bookcases & shelving units",
                        "url":"/"
                    },
                    {
                        "id":21,
                        "name":"Storage solution systems",
                        "url":"/"
                    },
                    {
                        "id":22,
                        "name":"Cabinets & cupboards",
                        "url":"/"
                    },
                    {
                        "id":23,
                        "name":"TV & media furniture",
                        "url":"/"
                    },
                ]
            },
            {
                "id":12,
                "name":"Explore furniture",
                "url":"",
                "submenus":[
                    {
                        "id":24,
                        "name":"Gaming furniture",
                        "url":"/"
                    },
                    {
                        "id":25,
                        "name":"Sofas",
                        "url":"/"
                    },
                    {
                        "id":26,
                        "name":"Furniture sets",
                        "url":"/"
                    },
                    {
                        "id":27,
                        "name":"Beds",
                        "url":"/"
                    },
                ]
                
            },
            {
                "id":13,
                "name":"Explore home textiles",
                "url":"",
                "submenus":[
                    {
                        "id":28,
                        "name":"Bedding",
                        "url":"/"
                    },
                    {
                        "id":29,
                        "name":"Curtains & blinds",
                        "url":"/"
                    },
                    {
                        "id":30,
                        "name":"Cushions & cushion covers",
                        "url":"/"
                    },
                    {
                        "id":31,
                        "name":"Children's textiles",
                        "url":"/"
                    },
                ]
                
            },
            {
                "id":14,
                "name":"Explore decoration",
                "url":"",
                "submenus":[
                    {
                        "id":32,
                        "name":"Frames & pictures",
                        "url":"/"
                    },
                    {
                        "id":33,
                        "name":"Plants & flowers",
                        "url":"/"
                    },
                    {
                        "id":34,
                        "name":"Storage boxes & baskets",
                        "url":"/"
                    },
                    {
                        "id":35,
                        "name":"Flower pots & planters",
                        "url":"/"
                    },
                ]
                
            },
            
        ]
    },
    {
        "id":15,
        "name":"Offers",
        "url":"/Shop",
        "icon":<MdOutlineKeyboardArrowDown size={20}/>,
    },
    {
        "id":15,
        "name":"More",
        "icon":<MdOutlineKeyboardArrowDown size={20}/>,
        "url":"/Shop",
    },
    {
        "id":16,
        "name":"Contact",
        "url":"/Shop",
    }
];