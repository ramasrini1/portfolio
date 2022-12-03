import Image1 from '../../assets/rentMySpace.png'
import Image2 from '../../assets/ct.png'
import Image3 from '../../assets/job-hunting.jpeg'
import Image4 from '../../assets/gd.png'

// import Image1 from '../../assets/project1.jpg'
// import Image2 from '../../assets/project2.jpg'
// import Image3 from '../../assets/project3.jpg'
// import Image4 from '../../assets/project4.jpg'
// import Image5 from '../../assets/project5.jpg'
// import Image6 from '../../assets/project6.jpg'
// import Image7 from '../../assets/project7.jpg'
// import Image8 from '../../assets/project8.jpg'
// import Image9 from '../../assets/project9.jpg'

const data = [
    {
        id: 1,
        category: 'MERN',
        image: Image1,
        title: "Rent My Space",
        desc: "A single page app to rent your space",
        features: "Features: Authentication/Authorization, Property listings, Booking calendar and FileUpload features",
        API: "API: Google Maps API",
        stack: "Stack: NodeJS, Express, React, PostgreSQL DB",
        demo: 'https://rentmyspace.surge.sh/',
        github: 'https://github.com/ramasrini1/RentMySpace'
    },
    {
        id: 2,
        category: 'MERN',
        image: Image3,
        title: "Jobly - Job Search Engine",
        desc: "A Job Search Engine, interactive web app",
        features: "Features: User sign in/authentication/authorization, search filters",
        stack: "Stack: React frontend and express/node.js backend PostgreSQL DB",
        API:"API: User generated data",
        demo: 'https://rsjobly-client.surge.sh/',
        github: 'https://github.com/ramasrini1'
    },
    {
        id: 3,
        category: 'FLASK',
        image: Image2,
        title: "Expense Tracker",
        desc: "App to split expenses between family and friends",
        features: "Features: Authentication/Authorization, Message board, integration with Venmo api for payment transaction",
        API: "API: Venmo Api",
        stack: "Stack: React frontend and express/node.js backend, PostgreSQL DB.",
        demo: 'https://rs-cost-tracker.herokuapp.com/',
        github: 'https://github.com/ramasrini1'
    },

    {
        id: 4,
        category: 'GRAPHICS_DESIGN',
        image: Image4,
        title: "Graphics Design",
        desc: "A digital design Portfolio using Adobe Suites",
        features: "Features: Book cover design, photo restoration, billboards, Corporate Card and Logo Design ",
        stack: "Tools: Adobe Photoshop, Illustrator and InDesign",
        demo: 'https://ramasrini1.github.io/resume/srinivas_portfolio.pdf',
        github: 'https://github.com/ramasrini1'
    },
   
    
   
]


export default data