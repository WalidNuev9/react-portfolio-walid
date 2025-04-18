import { PROJECTS } from "../constants"
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa";
const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
       className="my-20 text-center text-4xl">Projects</motion.h2>

      <div> 
        {PROJECTS.map((project, index)=>(
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}} 
            transition={{duration: 1}}
            className="w-full lg:w-1/4">
            <img 
              src={project.image}
              width={200}
              height={200} 
              alt={project.title}
              className="mb-6 rounded"
              />
              </motion.div>
              <motion.div 
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 1, x: 100}} 
              transition={{duration: 1}}
              className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-500">{project.description}</p>
              <p  className="mb-4 text-neutral-300">{project.link}</p>
              {project.technologies.map((tech, index)=>(
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900" key={index}>
                  {tech}
                </span>
              ))}
              <div className="mt-4 flex items-end justify-end">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="h-8 w-8 flex text-neutral-300 hover:text-purple-900 cursor-pointer" />
                </a>
                </div>
              </motion.div>
          </div>
      ))} 
      </div>
    </div>
  );
};

export default Projects