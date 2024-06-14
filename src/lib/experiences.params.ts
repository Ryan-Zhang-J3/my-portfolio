import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'telus-software-developer',
		company: 'TELUS',
		description: 'Responsible for developing, debugging, and maintaining NodeJS microservices making up Converged Mediation Framework compatible on Cloud, On-Prem, and at the Edge. Deployed applications, database, and other services as components of CMF.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Toronto, ON',
		period: { from: new Date('May 2024'), to: new Date('August 2022') },
		skills: getSkills('reactjs', 'SASS', 'ExpressJS', 'Java'),
		name: 'Software Developer',
		color: '#ffffff',
		links: [],
		logo: Assets.TELUS,
		shortDescription: ''
	},
	{
		slug: 'data-analyst',
		company: 'First Capital REIT',
		description: 'Responsible for the creation, deployment, and maintenance of Robotic Process Automation flows to automate business processes. Developed applications used by system administrators to manage company resources. Queried and manipulated data for relevant PowerBI visualizations and business optimization.',
		contract: ContractType.Internship,
		type: 'Data and Automation Analysis',
		location: 'Toronto, ON',
		period: { from: new Date('May 2023'), to: new Date('August 2023') },
		skills: getSkills('html', 'css', 'js', 'microsoft-power-platform', 'PostgreSQL'),
		name: 'Data and Automation Analyst',
		color: '#ffffff',
		links: [],
		logo: Assets.FCR,
		shortDescription: ''
	},
	{
		slug: 'software-developer',
		company: 'Linkall Technologies',
		description: 'Worked in development team to create software solutions for clients using Python. Utilised multiple technologies and programming languages to build continuously adapted projects satisfying business requirements.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Virtual',
		period: { from: new Date('April 2022'), to: new Date('August 2022') },
		skills: getSkills('python', 'git'),
		name: 'Software Developer',
		color: '#ffffff',
		links: [],
		logo: Assets.Linkall,
		shortDescription: ''
	}
];

export default MY_EXPERIENCES;
