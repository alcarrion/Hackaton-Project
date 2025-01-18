// api.js

const BASE_URL = 'https://hp-api.onrender.com/api'; // URL base de la API de Harry Potter

// Obtener personajes
export async function fetchCharacters() {
  try {
    const response = await fetch(`${BASE_URL}/characters`);
    if (!response.ok) {
      throw new Error('Error al obtener los personajes');
    }
    const data = await response.json();
    return data.slice(0, 20); // Limitar a los primeros 20 personajes
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

// Obtener casas
export async function fetchHouses() {
  try {
    const response = await fetch(`${BASE_URL}/houses`);
    if (!response.ok) {
      throw new Error('Error al obtener las casas');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

// Obtener hechizos
export async function fetchSpells() {
  try {
    const response = await fetch(`${BASE_URL}/spells`);
    if (!response.ok) {
      throw new Error('Error al obtener los hechizos');
    }
    const data = await response.json();
    return data.slice(0, 20); // Limitar a los primeros 20 hechizos
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}
