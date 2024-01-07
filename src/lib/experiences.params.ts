import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'data-analyst',
		company: 'First Capital REIT',
		description: 'Responsible for the creation, deployment, and maintenance of Robotic Process Automation flows to automate business processes. Developed applications used by system administrators to manage company resources. Queried and manipulated data for relevant PowerBI visualizations and business optimization.',
		contract: ContractType.Internship,
		type: 'Data and Automation Analysis',
		location: 'Toronto, ON',
		period: { from: new Date('May 2022'), to: new Date('August 2022') },
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
		period: { from: new Date('April 2020'), to: new Date('August 2020') },
		skills: getSkills('python', 'git'),
		name: 'Software Developer',
		color: '#ffffff',
		links: [],
		logo: Assets.Linkall,
		shortDescription: ''
	}
];

export default MY_EXPERIENCES;
