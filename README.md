# Personal Website Project

## Introduction

Welcome to my personal website, a static site showcasing my work and experiences. It's developed using TypeScript and
React, and deployed using the `gh-pages` npm package. Check it out
here: [mjmoshiri.github.io](https://mjmoshiri.github.io)

## Search Function

The unique aspect of this website is the data structures implemented for the search functionality. Information is
categorized into four main areas: Skills, Education, Experience, and Projects, each with their subcategories. Each data
point is associated with a set of tags. For example, `Java` is tagged with:

```json
{
  "name": "Java",
  "tags": [
    "java",
    "object oriented",
    "oop",
    "Spring",
    "Spring Boot",
    "Hibernate",
    "JVM",
    "Maven",
    "Gradle",
    "IntelliJ IDEA",
    "Cloud",
    "Concurrency",
    "Web development",
    "Multithreading",
    "Microservices",
    "Cloud computing",
    "API",
    "REST"
  ]
}
```

Upon initial loading, the data is stored in a map (keyed by name) and a [Trie](https://en.wikipedia.org/wiki/Trie) data structure based on tags. 
This enables efficient `O(L)` search operations, where `L` is the length of the search
term.

## Next Steps

- Clean up static data.
- Extensive frontend work.
- Implement CI pipelines for direct compilation and deployment.
- Optimize by precompiling the Trie and map to avoid regeneration on every page refresh.
- Potentially enhance the search functionality with a Language Learning Model (LLM) like GPT to answer user queries more
  interactively.

Stay tuned for updates!
