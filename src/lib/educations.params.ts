import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [
	{
		degree: 'Bachelors Degree of Computer Science',
		description: '',
		location: 'Hamilton, ON',
		logo: Assets.McMaster,
		name: 'maccs',
		organization: 'McMaster',
		period: { from: new Date(2022, 9, 5), to: new Date(2027, 5, 1) },
		shortDescription: '',
		slug: 'undergrad',
		subjects: ['C', 'Data Structures and Algorithms', 'Computer Architecture', 'Python', 'Haskell', 'Java', 'Web Development', 'Design Patterns', 'Discrete Math']
	},
	{
		degree: 'International Baccalaureate Degree',
		description: '',
		location: 'Thornhill, ON',
		logo: Assets.IB,
		name: 'maccs',
		organization: 'McMaster',
		period: { from: new Date(2018, 9, 5), to: new Date(2023, 4, 18) },
		shortDescription: '',
		slug: 'highschool',
		subjects: ['Biology', 'Chemistry', 'Literature', 'French', 'Mathematics', 'Theory of Knowledge']
	}
];
