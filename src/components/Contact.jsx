import {CONTACT} from "../constants"
import {motion} from 'framer-motion';
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className="my-10 text-center text-4xl">Get in Touch</motion.h2>
        <div className="text-center tracking-tighter">
            <motion.p 
            whileInView={{opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -100}}
            transition={{duration: 1}}
            className="my-4">{CONTACT.address}</motion.p>
            <motion.p 
            whileInView={{opacity: 1, x: 0}}
            initial={{ opacity: 0, x: 100}}
            transition={{duration: 1}}
            className="my-4">{CONTACT.phoneNo}</motion.p>
            <a href="#" className="border-b">{CONTACT.email}</a>
            <motion.div
            whileInView={{opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -100}}
            transition={{duration: 1}}  >
            <a href="https://github.com/WalidNuev9" target="_blank" className="my-4 border-b">{CONTACT.github} </a>
            </motion.div>
            <motion.div
            whileInView={{opacity: 1, x: 0}}
            initial={{ opacity: 0, x: 100}}
            transition={{duration: 1}}  >
            <a href="https://www.linkedin.com/in/walid-belegchour-5a929a157/" target="_blank" className="my-4 border-b">{CONTACT.linkedin} </a>
            </motion.div>
        </div>
    </div>
  )
}

export default Contact