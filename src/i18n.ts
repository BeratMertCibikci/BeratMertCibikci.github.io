// All interface text lives here, in both languages.
// To change a sentence on the site, edit it here (and in projects.ts for project text).

export type Lang = 'en' | 'fr';

// A piece of text that exists in both languages
export type T = { en: string; fr: string };

export const profile = {
	name: 'Berat Mert Cibikci',
	github: 'https://github.com/BeratMertCibikci',
	email: 'beratmert.cibikci@gmail.com',
	linkedin: 'https://www.linkedin.com/in/berat-mert-cibikci',
	// TODO: add the CV PDF to /public and put its path here, e.g. '/cv-berat-mert-cibikci.pdf' (leave '' to hide)
	cv: '',
};

export const ui = {
	nav: {
		projects: { en: 'projects', fr: 'projets' },
		about: { en: 'about', fr: 'à propos' },
		contact: { en: 'contact', fr: 'contact' },
	},
	hero: {
		title1: { en: 'Many agents.', fr: 'Plusieurs agents.' },
		title2: { en: 'One decision.', fr: 'Une décision.' },
		subtitle: {
			en: 'M1 student in Distributed AI at Université Paris Cité. I build agents that search, plan and decide: game AIs, solvers and LLM assistants.',
			fr: "Étudiant en M1 Intelligence Artificielle Distribuée à l'Université Paris Cité. Je construis des agents qui cherchent, planifient et décident : IA de jeux, solveurs et assistants LLM.",
		},
		status: { en: 'Looking for an internship · 2027', fr: 'Recherche un stage · 2027' },
		ctaProjects: { en: 'See my projects', fr: 'Voir mes projets' },
		hint: { en: 'move your mouse · click to add an agent', fr: 'bougez la souris · cliquez pour ajouter un agent' },
	},
	projects: {
		title: { en: 'Selected projects', fr: 'Projets choisis' },
		myRole: { en: 'My role', fr: 'Mon rôle' },
		built: { en: 'What I built', fr: "Ce que j'ai fait" },
		code: { en: 'Code', fr: 'Code' },
		privateRepo: { en: 'Repo private for now', fr: 'Dépôt privé pour le moment' },
		otherTitle: { en: 'Also built', fr: 'Aussi réalisé' },
	},
	about: {
		title: { en: 'About', fr: 'À propos' },
		text: {
			en: "I'm a first-year master's student in Distributed Artificial Intelligence (IAD) at Université Paris Cité. I like problems where a program has to choose: which move to play, which path to take, which tool to call. I enjoy taking an idea from algorithm to something people can actually use.",
			fr: "Je suis en première année de master Intelligence Artificielle Distribuée (IAD) à l'Université Paris Cité. J'aime les problèmes où un programme doit choisir : quel coup jouer, quel chemin prendre, quel outil appeler. J'aime emmener une idée de l'algorithme jusqu'à un outil réellement utilisable.",
		},
		education: { en: 'Education', fr: 'Formation' },
		skills: { en: 'Skills', fr: 'Compétences' },
	},
	contact: {
		copy: { en: 'copy', fr: 'copier' },
		copied: { en: 'copied ✓', fr: 'copié ✓' },
		title: { en: "Let's talk", fr: 'Discutons' },
		text: {
			en: "I'm looking for an internship in AI, multi-agent systems or software engineering. The fastest way to reach me:",
			fr: "Je recherche un stage en IA, systèmes multi-agents ou génie logiciel. Le plus simple pour me joindre :",
		},
	},
	footer: { en: 'Built with Astro · hosted on GitHub Pages', fr: 'Fait avec Astro · hébergé sur GitHub Pages' },
};

export const education = [
	{
		years: '2026 – 2028',
		title: { en: "Master's in Distributed AI (IAD)", fr: 'Master Intelligence Artificielle Distribuée (IAD)' },
		place: 'Université Paris Cité',
	},
	{
		years: '2023 – 2026',
		title: { en: "Bachelor's in Computer Science", fr: 'Licence Informatique' },
		place: 'Université Grenoble Alpes',
	},
];

// An item can be plain text (same in both languages) or a T object
export const skills: { group: T; items: (string | T)[] }[] = [
	{ group: { en: 'Languages', fr: 'Langages' }, items: ['Python', 'Java', 'C', 'SQL', 'JavaScript'] },
	{ group: { en: 'AI / ML', fr: 'IA / ML' }, items: ['Minimax α-β', 'A* search', 'NumPy', 'scikit-learn', 'LLM agents', 'Tool calling'] },
	{ group: { en: 'Tools', fr: 'Outils' }, items: ['Git', 'Flask', 'SQLite', 'Swing', 'Jupyter', 'Linux'] },
	{
		group: { en: 'Spoken', fr: 'Langues' },
		items: [
			{ en: 'Turkish · native', fr: 'Turc · langue maternelle' },
			{ en: 'French · C1', fr: 'Français · C1' },
			{ en: 'English · C1', fr: 'Anglais · C1' },
		],
	},
];

// Helper: pick the right language from a T object
export const t = (text: T, lang: Lang) => text[lang];
