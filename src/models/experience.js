import cafeynLogo from '../assets/images/cafeyn_logo.png'
import yazakiLogo from '../assets/images/yazaki_logo.png'
import mtessLogo from '../assets/images/mtess_logo.png'
import mcnLogo from '../assets/images/mcn_logo.png'
import stgLogo from '../assets/images/stg_logo.png'

export class ExperienceModel {
  constructor(title, subTitle, description, image, link, date){
    this.title = title;
    this.subTitle = subTitle;
    this.description = description;
    this.image = image;
    this.date = date;
    this.link = link;
  }
}

export const experiences = [
  {
    title: 'Fullstack developper',
    subTitle: 'Ministry of Employment and Social Solidarity of Québec', 
    description: 'Analysis & Development C#/.Net and Razor Web Pages, Ajax Jquery, TFS, Azure DevOps', 
    image: mtessLogo,
    link: 'https://www.mtess.gouv.qc.ca/', 
    date: 'Mar 2023 - Today'
  },
  {
    title: 'Fullstack developper',
    subTitle: 'Ministry of Cybersecurity and Digital of Québec', 
    description: 'Analysis & Development C#/.Net and JavaEE Quarkus Framework, Reactjs Typescript, Kafka, ArgoCD, Docker, Amazon Web Services, TFS, Azure DevOps.', 
    image: mcnLogo,
    link: 'https://www.quebec.ca/gouvernement/ministere/cybersecurite-numerique', 
    date: 'Aug 2021 - Mar 2023'
  },
  {
    title: 'Fullstack developper',
    subTitle: 'Cafeyn', 
    description: 'Analysis & Platform Design of the architecture. Development C#/.Net Core, ReactJS Typscript, ElasticSearch, Docker, Azure DevOps, Amazon Web Services.', 
    image: cafeynLogo,
    link: 'https://www.cafeyn.co/', 
    date: 'May 2019 - Aug 2021'
  },
  {
    title: 'Fullstack developper',
    subTitle: 'YAZAKI Europe Limited', 
    description: 'Analysis & Development ASP.NET MVC Application', 
    image: yazakiLogo,
    link: 'https://www.cafeyn.co/', 
    date: 'May 2019 - Aug 2021'
  },
  {
    title: 'C#/.NET Developper',
    subTitle: 'STG Telematics', 
    description: 'Analysis & Platform Design of the architecture. Development .Net/.Net Core, JS, Azure services, Amazon services, Docker...', 
    image: stgLogo,
    link: 'https://www.cafeyn.co/', 
    date: 'May 2019 - Aug 2021'
  },
]; 
