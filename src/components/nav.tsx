import React from "react";
import Ico_menu from "../asesst/Icons/Ico_menu";
import Ico_Plant from "../asesst/Icons/Ico_plant";
import Ico_search from "../asesst/Icons/Ico_search";
import Ico_user from "../asesst/Icons/Ico_user";
import {fadeinTop } from "../Styles/keyframes";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";

function Nav(){
    return(
        <Flex  align={"center"} justify={"between"} css={{
            width:"100%",
            paddingTop:"$2",
            "& svg":{
                fill:"$onBg"
            },
            "& svg[id=menu]":{
                display:"none",
                cursor:"pointer",
                fill:"$onBg800",
                "&:hover":{
                    fill:"$onBg",
                }
            },
            "@bp2":{
                "& svg[id=menu]":{
                    display:"block"
                },
            },
            animation:`${fadeinTop} 1s `
        }}>
            
        <Flex align={"center"} css={{
            cursor:"pointer",
            
            
            
        }}>
            <Ico_Plant width="35" height="35"/>
            <Text cursor={"click"} css={{
                headline4_i:"600"
            }}>Plant Me</Text>
        </Flex>

        <Flex justify={"end"} align="center" css={{
                "@bp2":{
                    display:"none"
                }
        }}>

            <Flex css={{
                "& p":{
                    headline6:"700",
                    cursor:"pointer ",
                    padding:"0 $3",
                    color:"$onBg800",
                    "&:hover":{
                        color:"$onBg"
                    }
                },
                marginRight:"$6",
                "@bp2":{
                    marginRight:"$3",
                }

            }}>
            <Text>Our Services</Text>
            <Text>Plant Care</Text>
            <Text>Pricing</Text>
            <Text>About</Text>
            </Flex>

            <Flex justify={"around"} align="center" css={{
                // width:"10%",
                "& svg":{
                    cursor:"pointer",
                    "&:hover":{
                        transform:"scale(1.1)"
                    }
                },

                "& svg[id=search]":{
                    fill:"none",
                    stroke:"$onBg800",
                    marginRight:"$3",
                    "&:hover":{
                        stroke:"$onBg"
                    }

                },
                "& svg[id=userSvg]":{
                    backgroundColor:"$primary600",
                    fill:"$onPrimary",
                    borderRadius:"$50",
                    padding:"4px",
                    "&:hover":{
                        backgroundColor:"$primary",
                    }

                },
            }}>
                <Ico_search width="30" height="30" id="search"/>
                <Ico_user  width="35" height="35" id="userSvg"/>
            </Flex>

        </Flex>

            <Ico_menu width="32" height="32" id="menu"/>

        </Flex>
    )
}


export default Nav