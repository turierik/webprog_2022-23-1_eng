// ERIK TURI - Web programming
// Solutions 1

// EX 1.
function gcd(a, b){
    if (a < b) [a, b] = [b, a];
    let rem = a % b;
    while (rem > 0) {
        [a, b] = [b, rem];
		rem = a % b;
    }
    return b;
}

// EX 2.
let numbers = [3, -4, 6, 8, 9, 13];
function cube(a){
    return a.map(e => e**3);
}
console.log(cube(numbers));

// EX 3.
function inc_by_index(a){
    return a.map((e, i) => e + i);
}
console.log(inc_by_index(numbers));

// EX 4.
function count_vowels(s){
    return s.split('').filter(e => ['a', 'i', 'o', 'e', 'u'].includes(e)).length
}
console.log(count_vowels("apple"));

// EX 5.
function array_sum(a){
    return a.reduce((acc, e) => acc + e, 0);
}
console.log(array_sum(numbers));
console.log(array_sum([]));

// EX 6.
console.log(Math.max()); // -Infinity is expected
function array_max(a){
    return a.reduce((acc, e) => e > acc ? e : acc, -Infinity);
}
console.log(array_max(numbers));
console.log(array_max([])); // is correct for empty array

// EX 7. - V1
function neg_v1(a){
    return a.some(e => e < 0);
}
console.log(neg_v1(numbers));

// EX 7. - V2
function neg_v2(a){
    return a.filter(e => e < 0).length > 0;
}
console.log(neg_v2(numbers));

// EX 7. - V3
function neg_v3(a){
    return a.reduce((acc, e) => e < 0 ? true : acc, false);
}
console.log(neg_v3(numbers));

// EX 8. - "the normal way"
let mat = [[2, 4, 6], [6, 8, 10], [10, 12, 14]];
function matrix_all_even_v1(m){
    return m.every(r => r.every(e => e % 2 === 0));
}
console.log(matrix_all_even_v1(mat));

// EX 8. - "flattened array"
function matrix_all_even_v2(m){
    return m.flat().every(e => e % 2 === 0);
}
console.log(matrix_all_even_v2(mat));

// EX 9.
let students = [
    {
        name: "Jan Kowalski",
        neptun: "F3S5K2",
        gpa: 2.04
    },
    {
        nev: "Petar Petrovic",
        neptun: "K91FFG",
        gpa: 4.37
    },
    {
        nev: "Yamada Hanako",
        neptun: "UWU431",
        gpa: 5.00
    }
]
console.log(students);

// EX 10.
function worst_average(d){
    return Math.min(...d.map(x => x.gpa));
}
console.log(worst_average(students));

// EX 11.
function find_worst_student(d){
    return d.find(x => x.gpa === worst_average(d));
}
console.log(find_worst_student(students));

// EX 12.
function average_average(d){
    return array_sum(d.map(x => x.gpa)) / d.length;
}
console.log(average_average(students));
