// Project content shown on the homepage.
// Numbers come from running the projects' own test/benchmark programs (October 2026).

import type { T } from '../i18n';

export type Metric = { value: string; label: T };

export type Project = {
	id: string;
	title: string;
	year: string;
	tagline: T;
	role: T;
	built: T[];
	metrics: Metric[];
	stack: string[];
	repo?: string; // leave undefined while the repo is private
	visual?: 'winrate' | 'sokoban' | 'chat' | 'boundary';
};

export const projects: Project[] = [
	{
		id: 'mr-jack',
		title: 'Mr. Jack Pocket',
		year: '2026',
		tagline: {
			en: 'The Mr. Jack Pocket board game, playable on computer, with an AI opponent at four difficulty levels.',
			fr: 'Le jeu de société Mr. Jack Pocket, jouable sur ordinateur, avec une IA adverse à quatre niveaux de difficulté.',
		},
		role: {
			en: 'Team lead of a 6-person project. I wrote the entire AI and contributed to the game model and interface.',
			fr: "Chef d'une équipe de 6. J'ai écrit toute l'IA et contribué au modèle du jeu et à l'interface.",
		},
		built: [
			{
				en: 'Minimax search with alpha-beta pruning, playing both sides (Jack and the investigator)',
				fr: "Recherche minimax avec élagage alpha-bêta, pour les deux camps (Jack et l'enquêteur)",
			},
			{
				en: 'Evaluation function based on remaining suspects and estimated hourglasses',
				fr: 'Fonction d’évaluation basée sur les suspects restants et les sabliers estimés',
			},
			{
				en: 'Benchmark harness: AI-vs-AI tournaments, pruning statistics, depth stability tests',
				fr: 'Banc de test : tournois IA contre IA, statistiques d’élagage, tests de stabilité en profondeur',
			},
		],
		metrics: [
			{ value: '4', label: { en: 'difficulty levels', fr: 'niveaux de difficulté' } },
			{ value: '19 ms', label: { en: 'median time per move, depth 4', fr: 'temps médian par coup, profondeur 4' } },
			{ value: '~3,700', label: { en: 'branches cut by α-β per move', fr: 'branches coupées par α-β par coup' } },
		],
		stack: ['Java', 'Swing', 'Sockets', 'Git flow'],
		repo: 'https://github.com/BeratMertCibikci/mr-jack-pocket',
		visual: 'winrate',
	},
	{
		id: 'jarvis',
		title: 'Jarvis',
		year: '2026',
		tagline: {
			en: 'A personal assistant that manages my Google Calendar through a chat, powered by an LLM agent with tools.',
			fr: 'Un assistant personnel qui gère mon Google Agenda par chat, grâce à un agent LLM équipé d’outils.',
		},
		role: { en: 'Solo project, ongoing.', fr: 'Projet personnel, en cours.' },
		built: [
			{
				en: 'Agent loop with tool calling: read, create, move and delete events, web search, long-term memory',
				fr: 'Boucle d’agent avec appels d’outils : lire, créer, déplacer et supprimer des événements, recherche web, mémoire',
			},
			{
				en: 'Safety by design: risky actions need a confirmation card, enforced in code, not in the prompt',
				fr: 'Sécurité par conception : les actions risquées exigent une carte de confirmation, imposée par le code et non par le prompt',
			},
			{
				en: 'Imports a whole semester timetable (.ics) and creates events from a photo of a ticket or poster',
				fr: 'Importe un emploi du temps complet (.ics) et crée des événements à partir de la photo d’un billet ou d’une affiche',
			},
		],
		metrics: [
			{ value: '2', label: { en: 'LLM engines (Gemini / local Ollama)', fr: 'moteurs LLM (Gemini / Ollama local)' } },
			{ value: '0', label: { en: 'destructive actions without approval', fr: 'action destructive sans validation' } },
		],
		stack: ['Python', 'Flask', 'Gemini API', 'Ollama', 'Google Calendar API', 'SQLite'],
		visual: 'chat',
	},
	{
		id: 'sokoban',
		title: 'Sokoban solver',
		year: '2025',
		tagline: {
			en: 'A Sokoban game with animations and an automatic solver that finds the full solution by itself.',
			fr: 'Un jeu de Sokoban animé avec un solveur automatique qui trouve seul la solution complète.',
		},
		role: {
			en: 'Course project built on a teaching skeleton (G. Huard, GPL). The solver and AIs are mine.',
			fr: 'Projet de cours construit sur un squelette pédagogique (G. Huard, GPL). Le solveur et les IA sont de moi.',
		},
		built: [
			{
				en: 'A* search over game states, with simple deadlock detection to cut hopeless branches',
				fr: 'Recherche A* sur les états du jeu, avec détection de blocages pour couper les branches sans issue',
			},
			{
				en: 'My own data structures: priority queues (array and linked list), sequences, iterators',
				fr: 'Mes propres structures de données : files à priorité (tableau et liste), séquences, itérateurs',
			},
			{ en: 'MVC architecture with the Observer pattern and animated moves', fr: 'Architecture MVC avec le patron Observateur et coups animés' },
		],
		metrics: [{ value: '0.05 s', label: { en: 'to solve a Minicosmos level', fr: 'pour résoudre un niveau Minicosmos' } }],
		stack: ['Java', 'A*', 'MVC'],
		visual: 'sokoban',
	},
	{
		id: 'ml',
		title: 'Machine learning from scratch',
		year: '2026',
		tagline: {
			en: 'Classic models re-implemented with NumPy only: no ML library for the learning part.',
			fr: 'Des modèles classiques réimplémentés avec NumPy uniquement, sans bibliothèque de ML pour l’apprentissage.',
		},
		role: { en: 'Coursework, extended on my own.', fr: 'Travaux de cours, prolongés en autonomie.' },
		built: [
			{
				en: 'SMS spam filter: logistic regression and Adaline trained with my own SGD',
				fr: 'Filtre anti-spam SMS : régression logistique et Adaline entraînées avec ma propre SGD',
			},
			{
				en: 'A neural network (MLP) with hand-written backpropagation',
				fr: 'Un réseau de neurones (MLP) avec rétropropagation écrite à la main',
			},
		],
		metrics: [
			{ value: '97.8%', label: { en: 'spam validation accuracy', fr: 'précision en validation (spam)' } },
			{ value: '95%', label: { en: 'MLP on two moons', fr: 'MLP sur deux lunes' } },
			{ value: '92.9%', label: { en: 'MLP on handwritten digits', fr: 'MLP sur chiffres manuscrits' } },
		],
		stack: ['Python', 'NumPy', 'pandas', 'Jupyter'],
		repo: 'https://github.com/BeratMertCibikci/Spam-Classification',
		visual: 'boundary',
	},
];

// Smaller projects, listed in one line each
export const otherProjects: { title: string; text: T; stack: string }[] = [
	{
		title: 'ELF linker',
		text: {
			en: 'A readelf clone and a linker that merges two ELF object files, written in C.',
			fr: 'Un clone de readelf et un éditeur de liens qui fusionne deux fichiers objets ELF, en C.',
		},
		stack: 'C · Linux',
	},
	{
		title: 'Olympic Games database',
		text: {
			en: 'Relational schema, triggers and queries for Winter Olympics data, loaded from Excel.',
			fr: 'Schéma relationnel, triggers et requêtes sur des données des JO d’hiver, importées depuis Excel.',
		},
		stack: 'Python · SQLite',
	},
];

// AI-vs-AI results (40 games per level), shown as bars on the Mr. Jack card
export const winRates = [
	{ level: 'Easy', investigator: 80 },
	{ level: 'Medium', investigator: 57.5 },
	{ level: 'Hard', investigator: 55 },
	{ level: 'Expert', investigator: 65 },
];
