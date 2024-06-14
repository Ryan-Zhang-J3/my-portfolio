import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'python',
		color: '',
		logo: Assets.Python,
		name: 'Python'
	})
	,
	s({
		slug: 'js',
		color: 'yellow',
		logo: Assets.JavaScript,
		name: 'Javascript'
	}),
	s({
		slug: 'css',
		color: 'blue',
		logo: Assets.CSS,
		name: 'CSS'
	}),
	s({
		slug: 'html',
		color: 'orange',
		logo: Assets.HTML,
		name: 'HTML'
	}),
	s({
		slug: 'reactjs',
		color: 'cyan',
		logo: Assets.ReactJs,
		name: 'React Js'
	}),
	s({
		slug: 'nodejs',
		color: 'green',
		logo: Assets.NodeJs,
		name: 'Node JS'
	})
	,
	s({
		slug: 'aws',
		color: 'blue',
		logo: Assets.AWS,
		name: 'AWS'
	})
	,
	s({
		slug: 'PostgreSQL',
		color: 'blue',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL'
	})
	,
	s({
		slug: 'Flask',
		color: 'black',
		logo: Assets.Flask,
		name: 'Flask'
	})
	,
	s({
		slug: 'Java',
		color: 'red',
		logo: Assets.Java,
		name: 'Java'
	})
	,
	s({
		slug: 'MongoDB',
		color: 'green',
		logo: Assets.MongoDB,
		name: 'MongoDB'
	})
	,
	s({
		slug: 'Bootstrap',
		color: 'purple',
		logo: Assets.Bootstrap,
		name: 'Bootstrap'
	})
	,
	s({
		slug: 'git',
		color: 'white',
		logo: Assets.Git,
		name: 'Git'
	}),
	s({
		slug: 'microsoft-power-platform',
		color: 'blue',
		logo: Assets.MPP,
		name: 'Microsoft Power Platform'
	}),
	s({
		slug: 'ExpressJS',
		color: 'blue',
		logo: Assets.ExpressJs,
		name: 'ExpressJS'
	}),
	s({
		slug: 'C',
		color: 'blue',
		logo: Assets.C,
		name: 'C'
	}),
	s({
		slug: 'SASS',
		color: 'pink',
		logo: Assets.SASS,
		name: 'SASS'
	}),
	s({
		slug: 'Docker',
		color: 'blue',
		logo: Assets.Docker,
		name: 'Docker'
	}),
	s({
		slug: 'Kubernetes',
		color: 'blue',
		logo: Assets.Kubernetes,
		name: 'SASS'
	}),
	s({
		slug: 'GCP',
		color: 'blue',
		logo: Assets.GCP,
		name: 'GCP'
	}),
	s({
		slug: 'Prometheus',
		color: 'red',
		logo: Assets.Prometheus,
		name: 'Prometheus'
	}),
	s({
		slug: 'Grafana',
		color: 'red',
		logo: Assets.Grafana,
		name: 'Grafana'
	}),
	s({
		slug: 'Redis',
		color: 'red',
		logo: Assets.Redis,
		name: 'Redis'
	})
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
