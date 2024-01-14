import { MY_EDUCATIONS } from './educations.params';
import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
    Platform,
    type HomePageParams,
    type ProjectPageParams,
    type ExperiencePageParams,
    type SkillsPageParams,
    type ResumePageParams,
    type SearchPageParams,
    type EducationPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'Ryan\'s Portfolio';

export const NavBar = {
    home: 'Home',
    personal: 'Projects',
    career: 'Experiences',
    resume: 'Resume',
    skills: 'Skills',
    Education: 'Education'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
    switch (platform) {
        case Platform.GitHub:
            return Icons.GitHub;
        case Platform.Linkedin:
            return Icons.LinkedIn;
        case Platform.StackOverflow:
            return Icons.StackOverflow;
        case Platform.Facebook:
            return Icons.Facebook;
        case Platform.Email:
            return Icons.Email;
        case Platform.Twitter:
            return Icons.Twitter;
        case Platform.Youtube:
            return Icons.Youtube;
    }
};

export const HOME: HomePageParams = {
    title: 'Home',
    name: 'Ryan',
    lastName: 'Zhang',
    description: `Hey, nice to meet you! I'm Ryan, a second year Computer Science student at McMaster University. I'm passionate about anything tech - I would love to talk about anything from the software that lets computers see to the hardware that makes it possible. Besides software development, studying, or trying out new food, there's not much I enjoy more than getting to know more people and having great interactions with others.

I'm constantly learning and growing - trying to find new, better solutions and develop as a professional.`,
    links: [
        { platform: Platform.GitHub, link: 'https://github.com/Ryan-Zhang-J3' },
        {
            platform: Platform.Linkedin,
            link: 'https://www.linkedin.com/in/ryan-zhang-4b2631218/'
        },
        {
            platform: Platform.Email,
            link: 'ryan.zhang.formal@gmail.com'
        }
    ]
};

export const PROJECTS: ProjectPageParams = {
    title: 'Projects',
    items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
    title: 'Experiences',
    items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
    title: 'Skills',
    items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
    title: 'Resumé',
    item: 'Ryan_Resume_2023.pdf'
};

export const SEARCH: SearchPageParams = {
    title: 'Search'
};

export const EDUCATION: EducationPageParams = {
    items: MY_EDUCATIONS,
    title: 'Education'
};