import {IDataItem} from "../types";

export const data: {
    [category: string]: { tags: string[], data: { [subcategory: string]: { tags: string[], data: IDataItem[] } } }
} = {
    'Skills': {
        tags: ['skill'],
        data: {
            'Programming Languages': {
                tags: ['programming language', 'language'],
                data: [
                    {
                        name: 'Java',
                        tags: ['java', 'programming language'],
                    },
                    {
                        name: 'Kotlin',
                        tags: ['kotlin', 'programming language', 'android'],
                    },
                    {
                        name: 'Scala',
                        tags: ['scala', 'programming language'],
                    },
                    {
                        name: 'Python',
                        tags: ['python', 'programming language', 'ai', 'machine learning'],
                    },
                    {
                        name: 'C',
                        tags: ['c', 'programming language'],
                    },
                    {
                        name: 'C++',
                        tags: ['c++', 'programming language'],
                    },
                    {
                        name: 'Go',
                        tags: ['go', 'golang', 'programming language', 'backend', 'typescript'],
                    },
                    {
                        name: 'JavaScript',
                        tags: ['javascript', 'programming language', 'frontend', 'nodejs'],
                    },
                    {
                        name: 'TypeScript',
                        tags: ['typescript', 'programming language', 'frontend', 'backend', 'fullstack'],
                    }
                ]
            },
            'Web Development': {
                tags: ['web development'],
                data: [
                    {
                        name: 'React',
                        tags: ['react', 'frontend', 'javascript'],
                    },
                    {
                        name: 'Node.js',
                        tags: ['nodejs', 'backend', 'javascript'],
                    },
                    {
                        name: 'Express',
                        tags: ['express', 'backend', 'javascript'],
                    },
                    {
                        name: 'Spring Boot',
                        tags: ['spring boot', 'backend', 'java'],
                    },
                    {
                        name: 'CSS',
                        tags: ['css', 'web development'],
                    },
                    {
                        name: 'SCSS',
                        tags: ['scss', 'web development'],
                    },
                    {
                        name: 'HTML',
                        tags: ['html', 'web development'],
                    }
                ]
            },
            'Database Management': {
                tags: ['database management'],
                data: [
                    {
                        name: 'PostgreSQL',
                        tags: ['postgresql', 'database management'],
                    },
                    {
                        name: 'MySQL',
                        tags: ['mysql', 'database management'],
                    },
                    {
                        name: 'MongoDB',
                        tags: ['mongodb', 'database management'],
                    },
                    {
                        name: 'Cassandra',
                        tags: ['cassandra', 'database management'],
                    },
                    {
                        name: 'Oracle',
                        tags: ['oracle', 'database management'],
                    },
                    {
                        name: 'Room',
                        tags: ['room', 'database management'],
                    },
                    {
                        name: 'SQLite',
                        tags: ['sqlite', 'database management'],
                    },
                    {
                        name: 'Microsoft SQL Server',
                        tags: ['microsoft sql server', 'database management'],
                    }
                ]
            },
            'Development & Design': {
                tags: ['development', 'design'],
                data: [
                    {
                        name: 'REST',
                        tags: ['rest', 'web development'],
                    },
                    {
                        name: 'OOP',
                        tags: ['oop', 'programming'],
                    },
                    {
                        name: 'SOLID',
                        tags: ['solid', 'programming'],
                    },
                    {
                        name: 'Algorithms',
                        tags: ['algorithms', 'programming'],
                    }
                ]
            },
            'DevOps & Infrastructure': {
                tags: ['devops', 'infrastructure'],
                data: [
                    {
                        name: 'Linux',
                        tags: ['linux', 'devops'],
                    },
                    {
                        name: 'Bash',
                        tags: ['bash', 'devops'],
                    },
                    {
                        name: 'Git',
                        tags: ['git', 'version control', 'devops'],
                    },
                    {
                        name: 'GitLab',
                        tags: ['gitlab', 'version control', 'devops'],
                    },
                    {
                        name: 'AWS',
                        tags: ['aws', 'cloud', 'devops'],
                    },
                    {
                        name: 'Kubernetes',
                        tags: ['kubernetes', 'container orchestration', 'devops'],
                    },
                    {
                        name: 'Docker',
                        tags: ['docker', 'containerization', 'devops'],
                    },
                    {
                        name: 'OpenShift',
                        tags: ['openshift', 'container orchestration', 'devops'],
                    },
                    {
                        name: 'CI/CD',
                        tags: ['ci/cd', 'devops'],
                    }
                ]
            },
            'API Design & Management': {
                tags: ['api design', 'api management'],
                data: [
                    {
                        name: 'Postman',
                        tags: ['postman', 'api testing', 'api design'],
                    },
                    {
                        name: 'Swagger',
                        tags: ['swagger', 'api documentation', 'api design'],
                    },
                    {
                        name: 'AWS API Gateway',
                        tags: ['aws api gateway', 'api management', 'api design'],
                    },
                    {
                        name: 'Coverity',
                        tags: ['coverity', 'code analysis', 'api design'],
                    }
                ]
            },
            'Testing & Quality Assurance': {
                tags: ['testing', 'quality assurance'],
                data: [
                    {
                        name: 'Selenium',
                        tags: ['selenium', 'testing', 'quality assurance'],
                    },
                    {
                        name: 'Robot Framework',
                        tags: ['robot framework', 'testing', 'quality assurance'],
                    },
                    {
                        name: 'JUnit',
                        tags: ['junit', 'testing', 'quality assurance'],
                    },
                    {
                        name: 'Mocha',
                        tags: ['mocha', 'testing', 'quality assurance'],
                    }
                ]
            }
        }
    },
    'Projects': {
        tags: ['project'],
        data: {
            'Web Development': {
                tags: ['web development'],
                data: [
                    {
                        name: 'CodeShare',
                        tags: ['codeshare', 'code', 'snippet', 'sharing', 'backend', 'frontend', 'fullstack'],
                    },
                    {
                        name: 'My Personal Website',
                        tags: ['website', 'personal', 'frontend', 'fullstack', 'react', 'typescript', 'javascript'],
                    },
                    {
                        name: 'Second Sight',
                        tags: ['android', 'kotlin', 'mvvm', 'android studio', 'jetpack compose', 'hilt', 'room'],
                    },
                    {
                        name: 'Log Lyfe',
                        tags: ['go', 'cassandra', 'docker', 'microservice', 'logger'],
                    },
                    {
                        name: 'Blockchain Ecosystem',
                        tags: ['java', 'blockchain', 'concurrency', 'sha-256'],
                    },
                    {
                        name: 'Code Sharing Platform',
                        tags: ['java', 'spring boot', 'postgresql', 'javascript', 'html', 'css', 'rest api'],
                    },
                    {
                        name: 'Random Quote Machine',
                        tags: ['typescript', 'javascript', 'reactjs', 'test-driven', 'spa'],
                    },
                    {
                        name: 'HyperLink Fetcher',
                        tags: ['java', 'gradle', 'producer-consumer', 'concurrency'],
                    }
                ]
            }
        }
    },
    'Experience': {
        tags: ['experience'],
        data: {
            'Software Engineer': {
                tags: ['software engineer'],
                data: []
            }
        }
    },
    'Education': {
        tags: ['education'],
        data: {
            'Relevant Courses': {
                tags: ['course'],
                data: [
                    {
                        name: 'Modern Linux, O\'Reilly',
                        tags: ['linux', 'course'],
                    },
                    {
                        name: 'Advanced SQL, Kaggle',
                        tags: ['sql', 'course'],
                    },
                    {
                        name: 'Data-Intensive Programming, Tampere University',
                        tags: ['data-intensive programming', 'course'],
                    },
                    {
                        name: 'Large-Scale System Design, Educative.io',
                        tags: ['large-scale system design', 'course'],
                    },
                    {
                        name: 'Concurrency, Tampere University',
                        tags: ['concurrency', 'course'],
                    },
                    {
                        name: 'Machine Learning, Aalto University',
                        tags: ['machine learning', 'course'],
                    },
                    {
                        name: 'CS50: Introduction to Computer Science, Harvard University',
                        tags: ['cs50', 'computer science', 'course'],
                    }
                ]
            }
        }
    }
};
