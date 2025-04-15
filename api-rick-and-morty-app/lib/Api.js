const BASE_URL = 'https://rickandmortyapi.com/api';
// Obtener todos los personajes 
export async function getAllCharacters(page = 1, name = '', species = '', gender = '') {
  const query = new URLSearchParams({
    page,
    name,
    species,
    gender,
  });

  const res = await fetch(`https://rickandmortyapi.com/api/character/?${query}`);
  if (!res.ok) throw new Error('Error al cargar personajes');
  return res.json();
}
// Obtener detalle de un personaje por ID
export async function getCharacterById(id) {
  const res = await fetch(`${BASE_URL}/character/${id}`);
  if (!res.ok) throw new Error(`Error al obtener personaje con ID ${id}`);
  return res.json();
}

// Obtener varios personajes por array de IDs
export async function getCharactersByIds(ids) {
  const res = await fetch(`${BASE_URL}/character/${ids.join(',')}`);
  if (!res.ok) throw new Error(`Error al obtener personajes con IDs: ${ids}`);
  return res.json();
}

// Obtener episodio por URL o ID
export async function getEpisode(urlOrId) {
  const endpoint = urlOrId.startsWith('http')
    ? urlOrId
    : `${BASE_URL}/episode/${urlOrId}`;
  const res = await fetch(endpoint);
  if (!res.ok) throw new Error('Error al obtener episodio');
  return res.json();
}

export async function getAllCharactersAllPages() {
    let allCharacters = [];
    let nextUrl = 'https://rickandmortyapi.com/api/character';
  
    while (nextUrl) {
      const res = await fetch(nextUrl);
      const data = await res.json();
      allCharacters = [...allCharacters, ...data.results];
      nextUrl = data.info.next;
    }
  
    return allCharacters;
  }