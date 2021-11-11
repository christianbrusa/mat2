/* 
 * Dado un array de nakamas de los sombrero de paja, se desea saber la posición dentro del array del capitán.
 * Los nakamas están estructurados de la siguiente forma:
 *      {
 *          nombre: String,
 *          rol: String
 *      }
 * 
 * Entonces, queremos encontrar el nakama cuyo rol sea 'capitán'.
 * 
 */
  function posicionDelCapitan(nakamas) {
	  for(i=0; i<nakamas.length; i++){
	  		if(nakamas[i].rol === "capitán"){
	  			return i;
	  		}
	  }
}


module.exports = posicionDelCapitan;


