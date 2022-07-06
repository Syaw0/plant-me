import { styled } from "../@stitches.config";

const Flex = styled("div" , {
    display:"flex",
    zIndex:"$bottom",
    variants:{
        dir:{
            "column":{
                flexDirection:"column",
            } , 
            "row":{
                flexDirection:"row"
            },
        },
        "justify":{
            "start":{
                justifyContent:"flex-start"
            },
            "end":{
                justifyContent:"flex-end"
            },
            "center":{
                justifyContent:"center"
            },
            "between":{
                justifyContent:"space-between"
            },
            "around":{
                justifyContent:"space-around"
            },
        },
        "align":{
            "start":{
                alignItems:"flex-start"
            },
            "end":{
                alignItems:"flex-end"
            },
            "center":{
                alignItems:"center"
            },
            "between":{
                alignItems:"space-between"
            },
            "around":{
                alignItems:"space-around"
            },
        },
        "position":{
            "relative":{
                position:"relative"
            },
            "absolute":{
                position:"absolute"
            },
            "fixed":{
                position:"fixed"
            },
        },
        "overflow":{
            "hidden":{
                "overflow":"hidden"
            },
            "scrollX":{
                "overflowX":"scroll"
            },
            "scrollY":{
                "overflowY":"scroll"
            },

        } ,
        "cursor":{
            "click":{
                "cursor":"pointer"
            } ,
        }
    },
    defaultVariants:{
        position:"relative"
    }
})

export default Flex