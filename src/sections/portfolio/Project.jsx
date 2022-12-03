import Card from '../../components/Card'


const Project = ({project}) => {
  return (
    
      <Card className="portfolio__project">
        <div className="portfolio__project-image">
            <img src={project.image} alt="Portfolio Project Image" />
         </div>
         <h4>{project.title}</h4>
         <p>{project.desc}
         <div>{project.features}</div>
         <div>{project.API}</div>
         <div>{project.stack}</div>

         </p>
        <div className="portfolio__project-cta">
             <a href={project.demo} className="btn sm" target="_blank" rel="noopner noreferrer">Demo</a>
             <a href={project.github} className="btn sm primary" target="_blank" rel="noopner noreferrer">Gitbub</a>
         </div>
     </Card> 
     )
    
}

export default Project;

// import Card from '../../components/Card'

// const Project = ({project}) => {
//   return (
//     <Card className="portfolio__project">
//         <div className="portfolio__project-image">
//             <img src={project.image} alt="Portfolio Project Image" />
//         </div>
//         <h4>{project.title}</h4>
//         <p>{project.desc}</p>
//         <div>{project.stack}</div>
//         <div className="portfolio__project-cta">
//             <a href={project.demo} className="btn sm" target="_blank" rel="noopner noreferrer">Demo</a>
//             <a href={project.github} className="btn sm primary" target="_blank" rel="noopner noreferrer">Gitbub</a>
//         </div>
//     </Card>
//   )
// }

// export default Project;