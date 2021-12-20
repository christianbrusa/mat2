/*
 *
 * Yo te elijo!
 * 
 * Pokémon quiere sacar un nuevo juego y nos contrato para programar el sistema de batalla.
 * Por ahora vamos a hacer un prototipo para tratar de convencer a los inversores, así que por el momento solo contaremos con tres tipos:
 *      'Agua', 'Fuego' y 'Planta'
 * 
 * Además, para simplificar aún más, modelaremos a los Pokémon de la siguiente manera:
 *      {
 *          tipo: String,
 *          vida: Number,
 *          ataque: Number,
 *          velocidad: Number  
 *      }
 * 
 * Queremos que la batalla dure como máximo 5 turnos, o hasta que uno de los pokemon se debilite (su vida llegue a 0).
 * 
 * En el caso de que se llegue a los 5 turnos con ambos Pokémon en pie, el ganador será el que tenga más vida.
 * 
 * Algunas cosas a tener en cuenta:
 *      - El pokemon más rápido ataca primero
 *      - La vida de un pokémon nunca puede ser menor a 0
 *      - Hay tipos que son muy eficaces contra otro, en cuyo caso los ataques harán el doble de daño según esta tabla:
 * 
 *                  Agua    Fuego   Planta
 *        Agua      x1      x2      x1
 *        Fuego     x1      x1      x2
 *        Planta    x2      x1      x1
 * 
 * La funcion que ejecute la batalla debe devolver al Pokemon ganador.
 * 
 */

const _ = require("lodash");

//cambiar nombre a esta funcion y que devuelve boolean
function QuienComienzaAtancando(unPokemon,otroPokemon)
{
	return unPokemon.velocidad > otroPokemon.velocidad;
}

/*funcion auxiliar que le pases 2 tipos / pokemons 
y te dice si el primero es eficaz contra el segundo*/

/*vida nunca puede ser < 0
si queda en -10 debe quedar en 0*/
function atacar(unPokemon,otroPokemon)
{
	let daño = unPokemon.ataque;

	if  (	
		(unPokemon.tipo=="Agua" && otroPokemon.tipo=="Fuego") 
		||
		(unPokemon.tipo=="Fuego" && otroPokemon.tipo=="Planta") 
		||
		(unPokemon.tipo=="Planta" && otroPokemon.tipo=="Agua")
		)
		{
			daño = unPokemon.ataque * 2;
		}
		
	otroPokemon.vida = otroPokemon.vida - daño;

}

// Recibe dos pokemones y devuelve el ganador de la pelea :)
function peleaPokemon(unPokemon,otroPokemon)
{
	//let turnos = 5;
	let turnosenArray = [1,2,3,4,5];
	let pokemonRapido;
	let pokemonLento;

	if(QuienComienzaAtancando(unPokemon,otroPokemon))
		{
			pokemonRapido = unPokemon
			pokemonLento = otroPokemon
		}
	else
		{
			pokemonRapido = otroPokemon
			pokemonLento = unPokemon
		}

	//usar un FOR x este While
	/*while(turnos > 0)
	{
		atacar(pokemonRapido,pokemonLento)

		if(pokemonLento.vida <= 0)
		{
			return pokemonRapido;
		}
		atacar(pokemonLento,pokemonRapido)
		if(pokemonRapido.vida <= 0)
		{
			return pokemonLento;
		}

		turnos = turnos - 1;
	}*/

	/*for (i=0; i<turnos; i++){
		atacar(pokemonRapido,pokemonLento)

		if(pokemonLento.vida <= 0)
		{
			return pokemonRapido;
		}
		atacar(pokemonLento,pokemonRapido)
		if(pokemonRapido.vida <= 0)
		{
			return pokemonLento;
		}
	}*/

	//pasar de FOR a orden superior
	_.forEach(turnosenArray, function(e){
		if(pokemonRapido.vida > 0){
			atacar(pokemonRapido,pokemonLento);
		}

		if(pokemonLento.vida > 0){
			atacar(pokemonLento,pokemonRapido);
		}

		if(pokemonRapido.vida <= 0){
			pokemonRapido.vida = 0;
		}
			
		if(pokemonLento.vida <= 0){
			pokemonLento.vida = 0;
		}
	})

		if(pokemonRapido.vida > pokemonLento.vida)
		{
			return pokemonRapido;
		}
		else
		{
			return pokemonLento;
		}
}

module.exports = peleaPokemon;
