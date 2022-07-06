import { keyframes } from "./@stitches.config";

const fadein = keyframes({
    "0%":{
        opac:"0",

    },
    "100%":{
        opac:"1",

    }
})



const fadeinTop = keyframes({
    "0%":{
        opacity:"0",
        transform:"translateY(-100px)",
    },
    "100%":{
        opacity:"1",
        transform:"translateY(0px)",
    }
})

export {fadein , fadeinTop}