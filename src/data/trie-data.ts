class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string, item: string): void {
        word = word.toLowerCase();
        let current = this.root;
        for (const char of word) {
            if (!current.children.has(char)) {
                current.children.set(char, new TrieNode());
            }
            current = current.children.get(char)!;
        }
        current.isEndOfWord = true;
        current.items.push(item);
    }

    search(query: string): Set<String> {
        query = query.toLowerCase();
        const queryParts = query.split(',').map((part) => part.trim()).filter((part) => part.length > 0);
        const result = new Set<String>();
        let current = this.root;
        for (const queryPart of queryParts) {
            this.processWord(queryPart, current, result);
        }
        return result;
    }

    private processWord(word: string, current: TrieNode, result: Set<String>): void {
        for (const char of word) {
            if (!current.children.has(char)) {
                return;
            }
            current = current.children.get(char)!;
        }
        if (current.isEndOfWord) {
            for (const item of current.items) {
                result.add(item);
            }
        }
    }
}

class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;
    items: String[];

    constructor() {
        this.children = new Map<string, TrieNode>();
        this.isEndOfWord = false;
        this.items = [];
    }
}

export default Trie;