import { useRef } from "react"
import "./portfolio.scss"
import {motion, useScroll, useSpring, useTransform } from "framer-motion"


const items = [
    {
        id:1,
        title:"React Commerce",
        img:"https://th.bing.com/th/id/R.36f0b088c6da2c331c85547a3c3be55d?rik=%2b6fpwR30N7lKLg&pid=ImgRaw&r=0",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus quod ab labore eaque autem, suscipit officiis fugiat nihil odio consectetur tenetur incidunt ad. Officia sapiente obcaecati nobis porro dolores ab!"
    },
    {
        id:2,
        title:"Next.js Commerce",
        img:"https://th.bing.com/th/id/OIP.Us3vornr4pB02KFIC55WZwHaFF?rs=1&pid=ImgDetMain",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus quod ab labore eaque autem, suscipit officiis fugiat nihil odio consectetur tenetur incidunt ad. Officia sapiente obcaecati nobis porro dolores ab!"
    },
    {
        id:3,
        title:"Vanilla Js App",
        img:"https://th.bing.com/th/id/OIP.uSMLtFQty4jVVUo-a-59WAHaF7?rs=1&pid=ImgDetMain",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus quod ab labore eaque autem, suscipit officiis fugiat nihil odio consectetur tenetur incidunt ad. Officia sapiente obcaecati nobis porro dolores ab!"
    },
    {
        id:4,
        title:"Music App",
        img:"https://th.bing.com/th/id/OIP.eCmSKEJpTruEH3_vkFwnRQHaFA?w=1920&h=1300&rs=1&pid=ImgDetMain",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus quod ab labore eaque autem, suscipit officiis fugiat nihil odio consectetur tenetur incidunt ad. Officia sapiente obcaecati nobis porro dolores ab!"
    },
    
]

const Single = ({item}) => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({target:ref,
    // offset:["start start" , "end start"]
    });
    const y = useTransform(scrollYProgress, [0,1], [-300, 300] )
    return(
        <section  >
            <div className="container">
                <div className="wrapper">
                <div className="imageContainer" ref={ref}>

                <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref= useRef()
    const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"]});
    const scaleX = useSpring(scrollYProgress, {
        stiffness:100,
        damping:30,
    })
    
  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
       {items.map((item)=>(
        <Single item={item} key={item.id}/>
       ))}
    </div>
  );
}

export default Portfolio;
