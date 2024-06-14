import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'watch-activation',
		color: '#5e95e3',
		description:
			'This Watch Activation project was a project taken on for a company in which I had the opportunity to work completely independently to finish the project end-to-end. The Watch Activation project allows owners of Smart Watches to manage their usage plan, billing, and connectivity with their mobile phone.',
		shortDescription:
			'The Watch Activation project allows owners of Smart Watches to manage their usage plan, billing, and connectivity with their mobile phone. This was built with a ReactJS and SASS front-end, and Java backend.',
		links: [],
		logo: Assets.WatchActivation,
		name: 'Watch Activation App',
		period: {
			from: new Date('June 2024')
		},
		skills: getSkills('reactjs', 'SASS', 'ExpressJS', 'Java'),
		type: 'Webapp',
		screenshots: [
		]
	},
	{
		slug: 'giftver-project',
		color: '#5e95e3',
		description:
			'Giftver is an easy to use web application that allows friends to create, manage, and run Secret Santa Gift Exchanges from anywhere.',
		shortDescription:
			'Giftver is an easy to use web application that allows friends to create, manage, and run Secret Santa Gift Exchanges from anywhere.',
		links: [{ to: 'https://github.com/Ryan-Zhang-J3/Giftver', label: 'GitHub' }, { to: 'https://youtu.be/EPajGnAjCQI', label: 'Video Demo' }],
		logo: Assets.Giftver,
		name: 'Giftver',
		period: {
			from: new Date('December 2023')
		},
		skills: getSkills('flask', 'python', 'postgresql'),
		type: 'Webapp',
		screenshots: [
			{
				label: 'Adding Users',
				src: 'https://private-user-images.githubusercontent.com/122586539/293528856-6049eeab-dfbb-491d-9d51-7cb0173510cf.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQ1MTQxMTksIm5iZiI6MTcwNDUxMzgxOSwicGF0aCI6Ii8xMjI1ODY1MzkvMjkzNTI4ODU2LTYwNDllZWFiLWRmYmItNDkxZC05ZDUxLTdjYjAxNzM1MTBjZi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMTA2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDEwNlQwNDAzMzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kOTVmNmRiNWFiZDZjYTVjN2Y1NzAyZThiZTZhZGE3YjBkOTFiN2Y3OGRjYzliNDcyNGM4MTgxNDU0OTBhYzgzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.uuuFdL5vqjmwx4wdd0ayiMf0pUHMcv3Opxbn6y69Ry0'
			},
			{
				label: 'Exchange Management',
				src: 'https://private-user-images.githubusercontent.com/122586539/293572250-3209087c-4acd-4f41-a771-de34f8370dcf.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQ3NDk5ODIsIm5iZiI6MTcwNDc0OTY4MiwicGF0aCI6Ii8xMjI1ODY1MzkvMjkzNTcyMjUwLTMyMDkwODdjLTRhY2QtNGY0MS1hNzcxLWRlMzRmODM3MGRjZi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMTA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDEwOFQyMTM0NDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03M2JjZWZlMmI1Yjk2MDRmY2M5OGZmMGJkNzJkNTQ5Mzk1NTYyMmIzNWU1ZTZhZDk3NjkxZjNmYjkxNmJlMTIwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.-UQh6UTY9zyT5GXN70i5GXKl975SVM8hKKRAGqzVTrM'
			},
			{
				label: 'Recieving your secret santa recipient',
				src: 'https://private-user-images.githubusercontent.com/122586539/294647304-46f19b37-d6a1-497e-9756-6aac2085068a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQ1MTQ0NDIsIm5iZiI6MTcwNDUxNDE0MiwicGF0aCI6Ii8xMjI1ODY1MzkvMjk0NjQ3MzA0LTQ2ZjE5YjM3LWQ2YTEtNDk3ZS05NzU2LTZhYWMyMDg1MDY4YS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMTA2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDEwNlQwNDA5MDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xZjZiNTY3MDEyZWU4ZmYxMzUwOWExZmRjY2IzYjRmNDE1ZmIyYjExYTFlZmQzZDM4ODY5ZmMxODIzZDM4OWU1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.zIZb85h-r7ARfR9Y1OKCCs2I-tJG1FVg7qis2jx29VE'
			},
		]
	},
	{
		slug: 'metamorphosis-project',
		color: '#5e95e3',
		description:
			'A lifestyle website for fitness and self-improvement built using the MERN tech stack',
		shortDescription:
			'A lifestyle website for fitness and self-improvement built using the MERN tech stack',
		links: [{ to: 'https://github.com/Ryan-Zhang-J3/Metamorphosis', label: 'GitHub' }],
		logo: Assets.Metamorphosis,
		name: 'Metamorphosis',
		period: {
			from: new Date('August 2023')
		},
		skills: getSkills('js', 'ExpressJS', 'MongoDB', 'nodejs'),
		type: 'Webapp',
		screenshots: [
		]
	},
	{
		slug: 'hocusfocus',
		color: '#5e95e3',
		description:
			'A program designed for users looking to maximize their productivity for extended periods of time.',
		shortDescription:
			'A program designed for users looking to maximize their productivity for extended periods of time.',
		links: [{ to: 'https://github.com/Ryan-Zhang-J3/HocusFocus', label: 'GitHub' }],
		logo: Assets.HocusFocus,
		name: 'hocusfocus',
		period: {
			from: new Date('January 2022')
		},
		skills: getSkills('python', 'opencv'),
		type: 'Application',
		screenshots: [
		]
	},
];

export default MY_PROJECTS;
