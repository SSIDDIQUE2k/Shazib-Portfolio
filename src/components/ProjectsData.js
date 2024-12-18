import { BiLogoBootstrap, BiLogoCss3, BiLogoFirebase, BiLogoHtml5, BiLogoMongodb, BiLogoReact, BiLogoRedux, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs, TbApi, TbDatabase, TbBrandPrisma } from "react-icons/tb";
import { SiThemoviedatabase, SiExpress } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { FaBootstrap, FaCss3, FaJs } from "react-icons/fa";

const ProjectsData = [

  {
    id: "8",
    name: "Uber Clone ",
    image: "./uberclone.png",
    icons: [TbBrandNextjs, BiLogoTailwindCss, BiLogoMongodb,TbBrandPrisma],
    description: "This application allows users to express their thoughts and experiences through blogs.",
    github: "https://github.com/SSIDDIQUE2k/uber-next-clone",
    demo: "https://shazib-portfolio.vercel.app/",
  },
    {
      id: "brooklyn_college",
      name: "Brooklyn College Athletics",
      description: "Full Stack Developer Recreation Aid. Worked on ASP.NET Portal to develop and maintain web pages for the Athletics Site, collaborated with a team, and optimized image loading.",
      image: "./bklyn.png",
      icons: [BiLogoBootstrap, BiLogoCss3,BiLogoHtml5],
      github: "", // Link to GitHub if available
      demo: "", // Link to live demo if available
    },
    {
      id: "Family-Website",
      name: "Accounting Standards Inc ",
      image: "https://i.ibb.co/WWr8frs/2-2.png",
      icons: [FaHtml5,FaCss3,FaJs,FaBootstrap],
      description: "This application allows users to express their thoughts and experiences through blogs.",
      github: ""
    },

    

  
];

export default ProjectsData;
