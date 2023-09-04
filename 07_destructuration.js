
/**
 * utilisez la décomposition pour extraire la premiere et la 2e case du tableau
 * retournez les dans un nouveau tableau
 * 
 * exemple: [1, 2, 3] => [1, 2]
 * 
 * astuce: vous pouvez utiliser la décomposition directement dans les arguments de la fonction
 * 
 * contrainte: 
 *  - interdiction d'utiliser [0] et [1]
 *  - interdiction d'utiliser slice ou splice
 */
let tab = [1, 2, 3];

const extractFirstTwo = ([t0, t1]) => [t0, t1];

console.log(extractFirstTwo(tab));

/**
 * utilisez la décomposition pour extraire la premiere case du tableau et le reste du tableau
 * retournez uniquement le reste du tableau
 * 
 * exemple: [1, 2, 3] => [2, 3]
 */

const extractRest = ([t0, ...tableau]) => tableau;

console.log(extractRest(tab));

/**
 * utilisez la décomposition pour extraire le champ "name" de l'objet passé en paramètre
 * retournez le champ "name"
 * 
 * exemple: {name: "toto", age: 42} => "toto"
 * 
 * astuce: vous pouvez utiliser la décomposition directement dans les arguments de la fonction
 * 
 * contrainte:
 * - interdiction d'utiliser l'opérateur "." pour accéder au champ "name"
 */

let dude = {
    name: "toto",
    age: 42
};

const extractName = ({name, ...resteDude}) => name;

console.log(extractName(dude));

/**
 * utilisez la décomposition pour retourner l'objet utilisateur sans le champ "password"
 * 
 * exemple: {name: "toto", password: "1234"}
 * 
 * contrainte: 
 *    - interdiction d'utiliser "delete"
 *    - interdiction d'utiliser l'opérateur "." pour accéder au champ "password"
 * 
 */

let user = {
    name: "toto",
    password: "1234"
}

const removePassword = ({password, ...resteDude }) => resteDude;

console.log(removePassword(user));

module.exports = {extractFirstTwo, extractRest, extractName, removePassword}