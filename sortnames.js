function sortNamesByHeight(names, heights) {
    const people = names.map((name, index) => [name, heights[index]]);
    people.sort((a, b) => b[1] - a[1]);
    const sortedNames = people.map((person) => person[0]);
    return sortedNames;
}

const names = ['Alice', 'Bob', 'Charlie', 'Dave'];
const heights = [170, 180, 165, 190];
const sortedNames = sortNamesByHeight(names, heights);
console.log(sortedNames);