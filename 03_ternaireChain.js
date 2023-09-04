
/**
 * Utiliser les ternaires en les chainants, pour éviter les if elseif else
 * 
 * Renvoyer ">" si a supérieur à b
 * Renvoyer "<" si a inférieur à b
 * Renvoyer "=" si a égal à b
 * 
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */

function ternaryChain(a, b) {
    return (a > b) ? ">" : 
            (b > a) ? "<" :
            "=";
}

console.log(ternaryChain(12, 14));
console.log(ternaryChain(14, 14));
console.log(ternaryChain(14, 12));

module.exports = ternaryChain;