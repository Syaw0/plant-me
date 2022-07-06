import { styled } from "../@stitches.config";

const Text = styled("p" , {
    color:"$onBg",

    variants:{
        "cursor":{
            "click":{
                "cursor":"pointer"
            } ,
            "default":{
                "cursor":"default"
            }
        } ,

    },
    defaultVariants:{
        cursor:"default"
    }
})


export default Text 