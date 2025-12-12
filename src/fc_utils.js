export const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const generateId = () => Math.floor(Math.random() * 9999).toString().padStart(4, '0');

export const generateSentence = (nouns, verbs, ends) => {
    return `${getRandom(nouns)} ${getRandom(verbs)} ${getRandom(ends)}`;
};
