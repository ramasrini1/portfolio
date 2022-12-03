import AboutImage from '../../assets/profile.jpeg'
//import AboutImage from '../../assets/about1.png'
import CV from '../../assets/cv2.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                I'm a Software Engineer who takes an analytical and practical approach to technical problem solving. 
                I am comfortable digging into existing code, debugging issues and exploring new technologies. 
                </p>
        
                <p>
                I love collaborating with team members and I thrive in different types of environments. In my current projects I am using my creativity and latest technologies to create dynamic web applications that are responsive and user friendly and impactful to a large community of audience. My passion for tackling complex problems inspires my professional work as well as many hours spent contributing to non-profit projects. Reach out to me if you are looking for a developer with my profile and skill sets.
                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About
// import CV from '../../assets/cv.pdf'
// import {HiDownload} from 'react-icons/hi'
// //import data from './data'
// //import Card from '../../components/Card'
// import './about.css'

// const About = () => {
//   return (
//     <section id="about">
//         <div className="container about__container">
//             <div className="about__left">
//                 <div className="about__portrait">
//                     <img src={AboutImage} alt="About Image" />
//                 </div>
//             </div>
//             <div className="about__right">
//                 <h2>About Me</h2>
//                 <div className="about__cards"></div>
//                 <p>
//                 Building projects my clients love have always been my passion. Being in the web development industry for over 3 years and serving more than 70 happy clients worldwide, I'm always motivated to do more!
//                 </p>
//                 <p>
//                 Hi, my name is Hajia Bintu from Accra, Ghana. I'm a full-stack web developer with a Bachelors degree in Computer Science. My top priority is to get your business online the right way, giving you industry-standard design and all the functionality you need to operate smoothly online. Get in touch today with the details of your project let's get started! Check out my resume below!
//                 </p>
//                 <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default About
