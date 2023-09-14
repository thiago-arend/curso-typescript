function identity<T> (value: T) : T {
    return value;
}

console.log(identity<number>(1)) // 1
console.log(identity<string>("ola mundo")) // 1
console.log(identity<number[]>([1, 2, 3, 4, 5, 6])) // 1


/*

type Collection<T> = T[];
const collectionNumeros: Collection<number> = [1, 2];
console.log(collectionNumeros);
collectionNumeros.push(3)
console.log(collectionNumeros);

*/