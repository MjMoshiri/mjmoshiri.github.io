import {IDataItem} from "../types";

export const data: {
        [category: string]: { tags: string[], data: { [subcategory: string]: { tags: string[], data: IDataItem[] } } }
    } = {
        'Skills': {
            tags: ['skill', 'skills'],
            data: {
                'Programming Languages': {
                    tags: ['programming language', 'language', 'languages', 'algorithm', 'algorithms', 'data structure', 'data structures'],
                    data: [
                        {
                            name: 'Java',
                            tags: ['java', 'object oriented', 'oop', 'Spring', 'Spring Boot',
                                'Hibernate', 'JVM', 'Maven', 'Gradle', 'IntelliJ IDEA', 'Cloud', 'Concurrency',
                                'Web development', 'Multithreading', 'Microservices', 'Cloud computing', 'API', 'REST'],
                            description: "I have been using Java for a long time. I am familiar with the language and its ecosystem and feel comfortable using it. "
                        },
                        {
                            name: 'Kotlin',
                            tags: ['kotlin', 'android', 'JVM', 'Android Studio', 'Cross platform', 'Gradle', 'Coroutine', 'object oriented', 'oop',
                                'Mobile development', 'Native applications', 'Android SDK', 'Google', 'Compose', 'Concurrency',
                                'Room', 'Hilt', 'Jetpack', 'MVVM'],
                            description: "I have used Kotlin for Android development. I am familiar with Android SDK, Android Studio, and Gradle. I have used Jetpack Compose, Room, and Hilt."
                                + "Furthermore, Kotlin is very similar to Java and runs on JVM and Java is one of my main languages" +
                                " so I feel comfortable with the language and the ecosystem."
                        },
                        {
                            name: 'Scala',
                            tags: ['scala', 'functional programming', 'JVM', 'Spark', 'Concurrency', 'Big Data', 'Apache Kafka',
                                'Machine learning', 'Scalability', 'Data analysis', 'Type safe'],
                            description: "I have used Scala for Spark and Apache Kafka in the context of Big Data and Stream processing. Prior to using Scala, I was familiar with " +
                                "Java functional Libraries such so getting used to Scala was easy."
                        },
                        {
                            name: 'Python',
                            tags: ['python', 'ai', 'machine learning', 'data science',
                                'web development', 'Flask', 'NumPy', 'Pandas', 'Jupyter', 'Anaconda',
                                'PyCharm', 'TensorFlow', 'Keras', 'Scikit-learn', 'Data analysis',
                                'Automation', 'Scripting', 'Seaborn', 'Deep learning',
                                'Natural Language Processing', 'neural network',
                                'Computer vision', 'Web scraping', 'API', 'REST'],
                            description: "I have used Python for almost everything. I am quite familiar with the language, libraries, data structures, and common toolkits around it and feel comfortable using it."
                        },
                        {
                            name: 'C',
                            tags: ['c', 'system programming', 'embedded system', 'low-level',
                                'Memory management', 'Compiler', 'Kernel development', 'Linux', 'Unix',
                                'Performance optimization', 'Arduino', 'Microcontrollers'],
                            description: "I have used C for embedded systems and low-level programming mostly in the University." +
                                "I know the syntax and challenges of the language such as memory management and pointers and believe I can use it effectively."
                        },
                        {
                            name: 'C++',
                            tags: ['c++', 'object oriented', 'System programming',
                                'STL', 'Qt', 'OpenGL', 'Memory management', 'Compiler',
                                'Concurrency', 'Multithreading', 'Visual Studio', 'Embedded system',
                                'Algorithm design', 'Data structures', 'Graphics programming', 'Optimization'],
                            description: "I have used C++ for Algorithm design and Graphics programming mostly in the University." +
                                " I know the standard library, data structures, and algorithms, and the tools around it such as Qt and OpenGL and believe I can use it effectively."
                        },
                        {
                            name: 'Go',
                            tags: ['go', 'golang', 'backend', 'Google', 'Concurrency', 'Cloud native',
                                'Docker', 'Kubernetes', 'Microservices', 'API',
                                'Goroutines', 'Cross platform', 'Web development',
                                'Performance', 'Scalability', 'CLI tools', 'gRPC', 'Protobuf', 'gin',
                                'Distributed system', 'REST'],
                            description: "I have used Go for backend development, Microservices along with Docker and Kubernetes, and CLI tools. I love the language and its simplicity and believe I can use it effectively."
                        },
                        {
                            name: 'JavaScript',
                            tags: ['javascript', 'frontend', 'nodejs', 'Web development', 'web', 'backend',
                                'fullstack', 'React', 'TypeScript',
                                'JSON', 'NPM', 'Express', 'SPA', 'Node'],
                            description: "I have used JavaScript for frontend and backend development." +
                                " I know the syntax, and famous libraries such as React, Node, and Express and have experience Developing Single Page Applications (SPA) and REST APIs."
                        },
                        {
                            name: 'TypeScript',
                            tags: ['typescript', 'frontend', 'backend', 'fullstack', 'Static typing',
                                'Object oriented', 'oop', 'React', 'Node', 'Type inference', 'SPA',
                                'Generics', 'Strong typing', 'API', 'REST', 'Web', 'Web development'],
                            description: "I have used TypeScript for frontend and backend development. I like it more over JavaScript because of its static typing and object oriented features."
                                + "I have used it with React and Node and have experience Developing Single Page Applications (SPA) and REST APIs."
                        }
                    ]
                },
                'Web Development': {
                    tags: ['web development', 'web', 'api', 'rest'],
                    data: [
                        {
                            name: 'React',
                            tags: ['react', 'frontend', 'javascript', 'spa', 'typescript'],
                            description: "I have used React for frontend development. while I know the syntax and I have used it for a while, I am not an expert as I have mostly been involved" +
                                " in backend development but I know the syntax can get on board with it quickly."
                        },
                        {
                            name: 'Node.js',
                            tags: ['nodejs', 'node', 'backend', 'javascript', 'express', 'typescript'],
                            description: "I have used Node.js for backend development for REST APIs and I feel very comfortable using it."
                        },
                        {
                            name: 'Express',
                            tags: ['express', 'backend', 'javascript', 'nodejs', 'typescript'],
                            description: "I have used Express along with Node.js for backend development for REST APIs and I feel very comfortable using it."
                        },
                        {
                            name: 'Spring Boot',
                            tags: ['spring boot', 'backend', 'java', 'rest', 'api', 'microservices', 'cloud', 'jvm'],
                            description: "I have used Spring Boot in different projects for REST APIs and Microservices and I feel very comfortable using it."
                        },
                        {
                            name: 'CSS',
                            tags: ['css', 'frontend'],
                        },
                        {
                            name: 'SCSS',
                            tags: ['scss', 'frontend'],
                        },
                        {
                            name: 'HTML',
                            tags: ['html', 'html5', 'frontend'],
                        }
                    ]
                },
                'Database Management': {
                    tags: ['database management', 'database', 'dbms', 'db'],
                    data: [
                        {
                            name: 'PostgreSQL',
                            tags: ['postgresql', 'sql'],
                            description: "Most comfortable SQL database for me."
                        },
                        {
                            name: 'MySQL',
                            tags: ['mysql', 'sql'],
                            description: "Simple and easy to use SQL database for small projects."
                        },
                        {
                            name: 'MongoDB',
                            tags: ['mongodb', 'nosql', 'distributed'],
                            description: "NoSQL database for unstructured data. I am novice in this area."
                        },
                        {
                            name: 'Cassandra',
                            tags: ['cassandra', 'nosql', 'distributed'],
                            description: "NoSQL database for unstructured data. I have extensive knowledge on the underlying structure of Cassandra and how it works."
                        },
                        {
                            name: 'Oracle',
                            tags: ['oracle', 'sql'],
                            description: "SQL database. I am novice in this area."
                        },
                        {
                            name: 'Room',
                            tags: ['room', 'sql', 'android', 'kotlin'],
                            description: "ORM for Android development. I have used it in my Android project."
                        },
                        {
                            name: 'SQLite',
                            tags: ['sqlite', 'sql'],
                            description: "SQL database. suitable for small projects."
                        },
                        {
                            name: 'Microsoft SQL Server',
                            tags: ['microsoft sql server', 'sql', 'ms sql', 'mssql'],
                            description: "SQL database. I have used in some Cloud R%D projects."
                        }
                    ]
                },
                'Development & Design': {
                    tags: ['development', 'design'],
                    data: [
                        {
                            name: 'REST',
                            tags: ['rest', 'web development', 'api'],
                        },
                        {
                            name: 'OOP',
                            tags: ['oop', 'programming', 'java', 'kotlin', 'c++', 'typescript'],
                        },
                        {
                            name: 'SOLID',
                            tags: ['solid', 'programming', 'design pattern', 'java', 'kotlin', 'c++', 'typescript', 'go'],
                        },
                        {
                            name: 'Algorithms',
                            tags: ['algorithms', 'programming', 'java', 'python', 'c++', 'typescript', 'go', 'scala']
                        }
                    ]
                },
                'DevOps & Infrastructure': {
                    tags: ['devops', 'infrastructure', 'dev'],
                    data: [
                        {
                            name: 'Linux',
                            tags: ['linux', 'shell', 'bash', 'os', 'unix', 'kernel'],
                        },
                        {
                            name: 'Bash',
                            tags: ['bash', 'shell', 'linux', 'os'],
                        },
                        {
                            name: 'Git',
                            tags: ['git', 'version control'],
                        },
                        {
                            name: 'GitLab',
                            tags: ['gitlab', 'version control', 'devops'],
                        },
                        {
                            name: 'AWS',
                            tags: ['aws', 'cloud'],
                        },
                        {
                            name: 'Kubernetes',
                            tags: ['kubernetes', 'container orchestration', 'container', 'docker'],
                        },
                        {
                            name: 'Docker',
                            tags: ['docker', 'container', 'kubernetes'],
                        },
                        {
                            name: 'OpenShift',
                            tags: ['openshift', 'container orchestration', 'container', 'kubernetes'],
                        },
                        {
                            name: 'CI/CD',
                            tags: ['ci cd', 'ci', 'cd'],
                        },
                        {
                            name: 'Coverity',
                            tags: ['coverity', 'code analysis', 'api design'],
                        }
                    ]
                },
                'API Design & Management': {
                    tags: ['api design', 'api management', 'api', 'web', 'rest'],
                    data: [
                        {
                            name: 'Postman',
                            tags: ['postman', 'api testing', 'api design'],
                        },
                        {
                            name: 'OpenAPI (Swagger)',
                            tags: ['swagger', 'api documentation', 'api design', 'openapi'],
                        },
                        {
                            name: 'AWS API Gateway',
                            tags: ['aws api gateway', 'api management', 'api design'],
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
                        },
                    ]
                }
            }
        },
        'Projects': {
            tags: ['project', 'projects', 'git', 'github'],
            data: {
                'Web Development': {
                    tags: ['web development', 'web'],
                    data: [
                        {
                            name: 'Code Sharing Platform',
                            tags: ['java', 'spring boot', 'gradle', 'freemarker', 'postgresql', 'backend', 'rest', 'api', 'fullstack',
                                'sql', 'db', 'oop', 'object oriented'],
                            description: "A web application for sharing code snippets, developed using Java, Spring Boot, Gradle, FreeMarker, and PostgreSQL.",
                            url: 'https://github.com/MjMoshiri/CodeShare'
                        },
                        {
                            name: 'My Personal Website',
                            tags: ['frontend', 'fullstack', 'react', 'typescript', 'javascript', 'npm'],
                        },
                        {
                            name: 'Log Lyfe',
                            tags: ['go', 'cassandra', 'docker', 'microservice', 'logger', 'backend', 'rest', 'api', 'nosql', 'distributed',
                                'cloud native', 'cloud', 'devops', 'make', 'db'],
                            description: "Initially a self-study project demonstrating my skills, " +
                                "Log Lyfe is a high-performance log auditing microservice. " +
                                "Developed with Go for server-side operations and Cassandra for data storage, " +
                                "it focuses on minimal external dependency, high availability, scalability, and low latency.",
                            url: 'https://github.com/MjMoshiri/log-lyfe'
                        },
                        {
                            name: 'Random Quote Machine',
                            tags: ['typescript', 'javascript', 'reactjs', 'test-driven', 'spa', 'api', 'social media integration', 'robot framework', 'sass', 'npm', 'oop', 'object oriented'],
                            description: "A responsive Single Page Application (SPA) that fetches data from an API to generate and display quotes," +
                                "The application is crafted using test-driven development, " +
                                "with Robot Framework for testing. It's developed in TypeScript, utilizing ReactJs for DOM manipulation, Sass for styling," +
                                " and npm as the package manager.",
                            url: '',
                        }
                    ]
                },
                'Other': {
                    tags: ['other'],
                    data: [{
                        name: 'SecondSight',
                        tags: ['android', 'kotlin', 'mvvm', 'android studio', 'jetpack compose', 'hilt', 'room', 'oop', 'object oriented'],
                        description: "A time tracker app, built with Kotlin, Jetpack Compose, Room, and Gradle, designed to help categorize and manage daily activities.",
                        url: 'https://github.com/MjMoshiri/SecondSight'
                    },
                        {
                            name: 'Blockchain Ecosystem',
                            tags: ['java', 'blockchain', 'concurrency', 'sha-256', 'gradle', 'multithreading', 'serialization', 'oop', 'object oriented'],
                            description: "A practical blockchain implementation." +
                                " Features SHA-256 hashing, secure serialization for saving and loading blockchain data," +
                                " synchronized validation for accurate data usage, and a proof-of-work system with adjustable difficulty." +
                                " The blockchain operates as a Singleton and includes an example of 8 miners working in a thread pool," +
                                " utilizing Java's concurrency libraries.",
                            url: 'https://github.com/MjMoshiri/BlockChain'
                        }, {
                            name: 'HyperLink Fetcher',
                            tags: ['java', 'gradle', 'producer consumer', 'concurrency', 'multithreading', 'queue', 'web', 'web scraping', 'kafka', 'oop', 'object oriented'],
                            description: "A Java application addressing the producer-consumer problem. " +
                                "It concurrently processes URLs, extracts markup pages, and then retrieves and stores hyperlinks in files." +
                                " It's designed to handle multiple producers and consumers simultaneously.",
                            url: 'https://github.com/MjMoshiri/HyperLink-Fetcher',
                        },
                        {
                            name: 'LiveChat',
                            tags: ['haskell', 'ihp', 'online chat', 'functional programming', 'fullstack',
                                'postgresql', 'backend', 'frontend', 'rest', 'api', 'sql', 'db', 'socket'],
                            description:
                                "LiveChat is an online live chat application offering basic chat functionalities." +
                                " Developed using Haskell and the IHP Framework, it provides a user-friendly platform for real-time online communication.",
                            url:
                                'https://github.com/MjMoshiri/LiveChat'
                        }
                    ]
                }
            }
        },
        'Experience': {
            tags: ['experience'],
            data: {
                'Software': {
                    tags: ['engineering','software','developer'],
                    data: [
                        {
                            name: 'Software Engineer Intern at Nokia Networks',
                            description: 'Part of the Data Collection and Analysis Platform Team, focusing on Backend development using TypeScript/Go, and Cloud & DevOps R&D. Key accomplishments include API efficiency enhancement, application architecture modernization, product transition to enterprise runners, and proficiency in OpenShift and Kubernetes.',
                            tags: ['cloud', 'r&d', 'typescript', 'node', 'javascript', 'react', 'openshift', 'kubernetes',
                                'go', 'golang', 'backend', 'devops', 'docker', 'microservices', 'api', 'rest', 'oop', 'object oriented', 'gin', 'gitlab', 'git'],
                            date: 'Dec 2022 – May 2023',
                        },
                        {
                            name: 'Researcher at LUT University',
                            description: 'Developed study materials, coding exercises, and problem-solving activities for AI and Linux-focused courses at Bachelor\'s and Master\'s levels, using technologies like Python, OpenAI, TensorFlow, and MS Office.',
                            tags: ['researcher', 'AI', 'Linux', 'machine learning', 'python', 'openai', 'tensorflow', 'ms office'],
                            date: 'May 2022 – Sep 2022',
                        },
                        {
                            name: 'Teaching Assistant at LUT University',
                            description: 'Provided mentorship in Python, Java, and C, covering concepts from memory management to object-oriented programming (OOP).',
                            tags: ['researcher', 'java', 'python', 'c', 'oop', 'object oriented', 'low level'],
                            date: 'Dec 2021 – Apr 2022',
                        }
                    ]
                }
            }
        }

        ,
        'Education':
            {
                tags: ['education', 'university', 'school', 'course', 'courses', 'book', 'books'],
                data:
                    {
                        'Courses':
                            {
                                tags: [],
                                data:
                                    [
                                        {
                                            name: 'Advanced SQL, Kaggle',
                                            tags: ['sql', 'database', 'db', 'dbms', 'sql server', 'mysql', 'sqlite', 'oracle'],
                                            url: 'https://www.kaggle.com/learn/certification/mjmthegreat/advanced-sql'
                                        },
                                        {
                                            name: 'Data-Intensive Programming, Tampere University',
                                            tags: ['data-intensive programming', 'spark', 'kafka', 'scala', 'big data', 'stream processing', 'ml', 'machine learning', 'data'],
                                            url: 'https://www.tuni.fi/en/study-with-us/data-intensive-programming-lectures'
                                        },
                                        {
                                            name: 'Large-Scale System Design, Educative.io',
                                            tags: ['large scale', 'design', 'system design', 'system', 'scalability', 'distributed system'],
                                            url: 'https://www.educative.io/courses/grokking-modern-system-design-interview-for-engineers-managers'
                                        },
                                        {
                                            name: 'Concurrency, Tampere University',
                                            tags: ['concurrency', 'c++', 'multithreading', 'multithread', 'thread', 'programming'],
                                            url: 'https://www.tuni.fi/en/study-with-us/concurrency-lectures'
                                        },
                                        {
                                            name: 'Machine Learning, Aalto University',
                                            tags: ['machine learning', 'course', 'python', 'data', 'kaggle', 'ml', 'sklearn', 'pandas', 'numpy', 'matplotlib', 'seaborn'],
                                            url: 'https://mycourses.aalto.fi/course/info.php?id=28173'
                                        },
                                        {
                                            name: 'CS50: Introduction to Computer Science, Harvard University',
                                            tags: ['cs50', 'computer science', 'c', 'python', 'algorithm', 'data structure', 'web development', 'html', 'css', 'javascript', 'sql'],
                                            url: 'https://pll.harvard.edu/course/cs50-introduction-computer-science'
                                        },
                                        {
                                            name: 'Kubernetes Hands-On',
                                            tags: ['kubernetes', 'docker', 'container', 'cloud', 'devops', 'microservices', 'api', 'rest'],
                                            url: 'https://learning.oreilly.com/videos/kubernetes-for-the/9781838555962/',
                                        }, {
                                        name: 'Introduction to Audio Processing',
                                        tags: ['audio processing', 'audio', 'dsp', 'signal', 'python', 'numpy', 'scipy', 'matplotlib', 'jupyter', 'matlab'],
                                        url: 'https://www.tuni.fi/archive/studyguide_tut/www.tut.fi/opinto-opas/wwwoppaat/opas2018-2019/kv/aineryhmat/Signaalinkasittely/SGN-14007.html'
                                    },
                                        {
                                            name: 'Introduction to Image and Video Processing',
                                            tags: ['image processing', 'video processing', 'image', 'video', 'dsp', 'signal', 'python', 'numpy', 'scipy', 'matplotlib', 'jupyter', 'matlab'],
                                            url: 'https://www.tuni.fi/en/study-with-us/introduction-image-and-video-processing-lectures'
                                        },
                                        {
                                            name: 'Cyber Security',
                                            tags: ['cyber security', 'security', 'cyber', 'network', 'network security', 'crypto'],
                                            url: 'https://www.tuni.fi/en/study-with-us/cyber-security-i-fundamentals-fitech'
                                        }
                                    ]
                            },
                        'Books': {
                            tags: [],
                            data: [{
                                name: 'Modern Linux, O\'Reilly',
                                tags: ['linux', 'shell', 'bash', 'os', 'unix', 'kernel', 'devops', 'infrastructure', 'devops', 'cluster', 'cloud'],
                                url: 'https://learning.oreilly.com/library/view/learning-modern-linux/9781098108939/'
                            },
                                {
                                    name: 'Go Cookbook, O\'Reilly',
                                    tags: ['go', 'golang', 'programming', 'language', 'languages'],
                                    url: 'https://learning.oreilly.com/library/view/go-cookbook/9781098122102/',
                                }, {
                                    name: 'Designing Data-Intensive Applications, O\'Reilly ',
                                    tags: ['data intensive', 'big data', 'data', 'design', 'large scale', 'scale', 'scalability', 'distributed system', 'system design', 'system'],
                                    url: 'https://learning.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/'
                                }, {
                                    name: 'Efficient Go, O\'Reilly',
                                    tags: ['go', 'golang', 'programming', 'language', 'languages'],
                                    url: 'https://learning.oreilly.com/library/view/efficient-go/9781098105709/'
                                },
                                {
                                    name: 'Cassandra: The Definitive Guide, 3rd Edition, O\'Reilly',
                                    tags: ['cassandra', 'nosql', 'distributed', 'database', 'db'],
                                    url: 'https://learning.oreilly.com/library/view/-/9781098115159/'
                                }
                            ]
                        }
                    }
            }
    }
;
