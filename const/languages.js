//配列languagesを宣言。
export const languages = [
    'JavaScript',
    'PHP',
    'C++',
    'C#',
    'Java',
    'Ruby',
    'Go'
];


export const getLanguages = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(languages);
        }, 1000);
    })
}