import {IDataItem} from '../types';

export const data: { [category: string]: { [subcategory: string]: IDataItem[] } } = {
    'Skills': {
        'Programming Languages': [
            {
                name: 'Java',
                description: '',
                url: '',
                tags: ['java', 'programming language'],
            },
            {
                name: 'Kotlin',
                description: '',
                url: '',
                tags: ['kotlin', 'programming language'],
            },
            {
                name: 'Scala',
                description: '',
                url: '',
                tags: ['scala', 'programming language'],
            },
            {
                name: 'Python',
                description: '',
                url: '',
                tags: ['python', 'programming language'],
            },
            {
                name: 'C',
                description: '',
                url: '',
                tags: ['c', 'programming language'],
            },
            {
                name: 'C++',
                description: '',
                url: '',
                tags: ['c++', 'programming language'],
            },
            {
                name: 'Go',
                description: 'A statically typed language designed at Google',
                url: 'https://golang.org',
                tags: ['go', 'golang', 'programming language'],
            },
            {
                name: 'JavaScript',
                description: '',
                url: '',
                tags: ['javascript', 'programming language'],
            },
            {
                name: 'TypeScript',
                description: 'A typed superset of JavaScript that compiles to plain JavaScript',
                url: 'https://www.typescriptlang.org/',
                tags: ['typescript', 'javascript', 'programming language', 'nodejs', 'frontend', 'backend', 'fullstack'],
            },
        ],
        'Web Development': [
            {
                name: 'React',
                description: '',
                url: '',
                tags: ['react', 'javascript', 'frontend', 'web development'],
            },
            {
                name: 'NodeJS',
                description: '',
                url: '',
                tags: ['nodejs', 'javascript', 'backend', 'web development'],
            },
            {
                name: 'Express',
                description: '',
                url: '',
                tags: ['express', 'javascript', 'backend', 'web development'],
            },
            {
                name: 'Spring Boot',
                description: '',
                url: '',
                tags: ['spring boot', 'java', 'backend', 'web development'],
            },
            {
                name: 'CSS',
                description: '',
                url: '',
                tags: ['css', 'styling', 'web development'],
            },
            {
                name: 'SCSS',
                description: '',
                url: '',
                tags: ['scss', 'styling', 'web development'],
            },
            {
                name: 'HTML',
                description: '',
                url: '',
                tags: ['html', 'markup language', 'web development'],
            },
        ],
        'Database Management': [
            {
                name: 'PostgreSQL',
                description: '',
                url: '',
                tags: ['postgresql', 'database', 'sql'],
            },
            {
                name: 'MySQL',
                description: '',
                url: '',
                tags: ['mysql', 'database', 'sql'],
            },
            {
                name: 'MongoDB',
                description: '',
                url: '',
                tags: ['mongodb', 'database', 'nosql'],
            },
            {
                name: 'Cassandra',
                description: '',
                url: '',
                tags: ['cassandra', 'database', 'nosql'],
            },
            {
                name: 'Oracle',
                description: '',
                url: '',
                tags: ['oracle', 'database', 'sql'],
            },
            {
                name: 'Room',
                description: '',
                url: '',
                tags: ['room', 'database', 'android'],
            },
            {
                name: 'SQLite',
                description: '',
                url: '',
                tags: ['sqlite', 'database', 'sql'],
            },
            {
                name: 'Microsoft SQL Server',
                description: '',
                url: '',
                tags: ['microsoft sql server', 'database', 'sql'],
            },
        ],
        'Development & Design': [
            {
                name: 'REST',
                description: '',
                url: '',
                tags: ['rest', 'api design', 'software architecture'],
            },
            {
                name: 'OOP',
                description: '',
                url: '',
                tags: ['oop', 'object-oriented programming', 'programming paradigm'],
            },
            {
                name: 'SOLID',
                description: '',
                url: '',
                tags: ['solid', 'software design', 'programming principles'],
            },
            {
                name: 'Algorithms',
                description: '',
                url: '',
                tags: ['algorithms', 'computer science', 'problem solving'],
            },
        ],
        'DevOps & Infrastructure': [
            {
                name: 'Linux',
                description: '',
                url: '',
                tags: ['linux', 'operating system', 'server management'],
            },
            {
                name: 'Bash',
                description: '',
                url: '',
                tags: ['bash', 'scripting', 'shell'],
            },
            {
                name: 'Git',
                description: '',
                url: '',
                tags: ['git', 'version control', 'software development'],
            },
            {
                name: 'GitLab',
                description: '',
                url: '',
                tags: ['gitlab', 'version control', 'devops'],
            },
            {
                name: 'AWS',
                description: '',
                url: '',
                tags: ['aws', 'cloud computing', 'cloud services'],
            },
            {
                name: 'Kubernetes',
                description: '',
                url: '',
                tags: ['kubernetes', 'container orchestration', 'cloud computing'],
            },
            {
                name: 'Docker',
                description: '',
                url: '',
                tags: ['docker', 'containerization', 'devops'],
            },
            {
                name: 'OpenShift',
                description: '',
                url: '',
                tags: ['openshift', 'container orchestration', 'cloud computing'],
            },
            {
                name: 'CI/CD',
                description: '',
                url: '',
                tags: ['ci/cd', 'continuous integration', 'continuous deployment', 'devops'],
            },
        ],
        'API Design & Management': [
            {
                name: 'Postman',
                description: '',
                url: '',
                tags: ['postman', 'api testing', 'api development'],
            },
            {
                name: 'Swagger',
                description: '',
                url: '',
                tags: ['swagger', 'api documentation', 'api design'],
            },
            {
                name: 'AWS API Gateway',
                description: '',
                url: '',
                tags: ['aws api gateway', 'api management', 'cloud computing'],
            },
            {
                name: 'Coverity',
                description: '',
                url: '',
                tags: ['coverity', 'software quality', 'static analysis'],
            },
        ],
        'Testing & Quality Assurance': [
            {
                name: 'Selenium',
                description: '',
                url: '',
                tags: ['selenium', 'testing', 'web automation'],
            },
            {
                name: 'Robot Framework',
                description: '',
                url: '',
                tags: ['robot framework', 'testing', 'automation'],
            },
            {
                name: 'JUnit',
                description: '',
                url: '',
                tags: ['junit', 'testing', 'java'],
            },
            {
                name: 'Mocha',
                description: '',
                url: '',
                tags: ['mocha', 'testing', 'javascript'],
            },
        ],
    },
    'Projects': {
        'Web Development': [
            {
                name: 'CodeShare',
                description: 'A platform for sharing code snippets',
                url: 'https://codeshare.example.com',
                tags: ['codeshare', 'code', 'snippet', 'sharing', 'backend', 'frontend', 'fullstack', 'java', 'spring boot', 'postgresql', 'javascript', 'html', 'css'],
            },
            {
                name: 'My personal website',
                description: 'My personal website',
                url: 'https://example.com',
                tags: ['website', 'personal', 'frontend', 'fullstack', 'react', 'typescript', 'javascript'],
            },
            {
                name: 'Random Quote Machine',
                description: '',
                url: '',
                tags: ['typescript', 'javascript', 'reactjs', 'robot framework', 'scss', 'html', 'single-page application', 'api'],
            },
            {
                name: 'Code Sharing Platform',
                description: '',
                url: '',
                tags: ['java', 'spring boot', 'postgresql', 'javascript', 'html', 'css', 'restful', 'web application', 'code snippets'],
            },
            {
                name: 'HyperLink Fetcher',
                description: '',
                url: '',
                tags: ['gradle', 'java', 'logger', 'concurrency', 'web tool', 'hyperlinks', 'markup processing'],
            },
        ],
        'Mobile Development': [
            {
                name: 'Second Sight',
                description: '',
                url: '',
                tags: ['kotlin', 'android studio', 'jetpack compose', 'hilt', 'room', 'android app', 'mvvm', 'time-tracking'],
            },
        ],
        'Microservices': [
            {
                name: 'Log Lyfe',
                description: '',
                url: '',
                tags: ['go', 'cassandra', 'docker', 'make', 'microservice', 'logging', 'high performance', 'scalability'],
            },
        ],
        'Blockchain': [
            {
                name: 'Blockchain',
                description: '',
                url: '',
                tags: ['go', 'blockchain', 'consensus', 'p2p', 'distributed system'],
            },
        ],
    },
};