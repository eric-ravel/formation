
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("fini");
        }, 2000);
    })
}


sleep().then((commentaire) => {
    console.log(commentaire);
})


module.exports = {sleep};