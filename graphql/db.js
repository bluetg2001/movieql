export const people = [
    {
    id : "0",
    name : "taegyun1",
    age : 26,
    gender : "female"
    },
    {
    id : "1",
    name : "taegyun2",
    age : 27,
    gender : "female"
    },
    {
    id : "2",
    name : "taegyun3",
    age : 28,
    gender : "female"
    },
    {
    id : "3",
    name : "taegyun4",
    age : 29,
    gender : "female"
    },
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id=== String(id));
    return filteredPeople[0];
}
