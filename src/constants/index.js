export const name = "_lyadh_lagche_";

export const parallaxImages = [
    {   
        key:1,
        classes:'top-[60%] left-[2%] rotate-[-5deg] img1',
        src:'./images/headless_encounter_main.jpg',
        rotation:'-50'
    },
    {   
        key:2,
        classes:'top-[10%] left-[24%] rotate-[5deg] img2',
        src:'./images/mamata.jpeg',
        rotation:'-50'
    },
    {   
        key:3,
        classes:'top-[60%] left-[42%] rotate-[0deg] img3',
        src:'./images/goddess.jpg',
        rotation:'50'
    },
    {   
        key:4,
        classes:'top-[10%] left-[58%] rotate-[-5deg] img4',
        src:'./images/untitled2.jpg',
        rotation:'-50'
    },
    {   
        key:5,
        classes:'top-[60%] left-[84%] rotate-[5deg] img5',
        src:'./images/washed-out-flags.jpg',
        rotation:'360'
    },
];
export const opacity = {
    initial:{
        opacity:1
    },
    exit:{
        opacity:0,
        transition:{
            duration:0.7
        }
    }
};
export const slideUp = {
    initial:{
        top:0
    },
    exit:{
        top:'-100vh',
        transition:{duration: 0.8, ease:[0.76, 0, 0.24, 1], delay: 0.2}

    }
}
export const footer=[
    {
        id:1,
        src:'/assets/react.png'
    },
    {
        id:2,
        src:'/assets/gsap.png'
    },
    {
        id:3,
        src:'/assets/framer.png'
    }
]