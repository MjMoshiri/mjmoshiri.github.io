import {IDataItem} from '../types';

export const skills: IDataItem[] = [
    {
        name: 'Go',
        description: 'A statically typed language designed at Google',
        url: 'https://golang.org',
        tags: ['go', 'golang', 'programming language'],
        subcategory: 'Programming Languages',
    },
    {
        name: 'TypeScript',
        description: 'A typed superset of JavaScript that compiles to plain JavaScript',
        url: 'https://www.typescriptlang.org/',
        tags: ['typescript', 'javascript', 'programming language', 'nodejs', 'frontend', 'backend', 'fullstack'],
        subcategory: 'Programming Languages',
    }
];

export const projects: IDataItem[] = [
    {
        name: 'CodeShare',
        description: 'A platform for sharing code snippets',
        url: 'https://codeshare.example.com',
        subcategory: 'Web Development',
        tags: ['codeshare', 'code', 'snippet', 'sharing', 'backend', 'frontend', 'fullstack'],
    },
    {
        name: 'My personal website',
        description: 'My personal website',
        url: 'https://example.com',
        tags: ['website', 'personal', 'frontend', 'fullstack', 'react', 'typescript', 'javascript'],
    }
];
