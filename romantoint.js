function romanToInt(s) {
    const romanToIntMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const current = romanToIntMap.get(s[i]);
        const next = romanToIntMap.get(s[i + 1]);
        if (next && current < next) {
            result -= current;
        } else {
            result += current;
        }
    }
    return result;
}

const romanNumeral = 'XXIV';
const integer = romanToInt(romanNumeral);
console.log(integer);