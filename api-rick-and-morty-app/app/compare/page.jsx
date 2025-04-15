'use client';

import { useEffect, useState } from 'react';
import { getAllCharactersAllPages, getCharactersByIds, getEpisode } from '@/lib/Api';
import Button from '@/components/Button'; 

export default function ComparePage() {
  const [characters, setCharacters] = useState([]);
  const [char1, setChar1] = useState('');
  const [char2, setChar2] = useState('');
  const [commonEpisodes, setCommonEpisodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    getAllCharactersAllPages().then((results) => setCharacters(results));
  }, []);

  useEffect(() => {
    const compare = async () => {
      setError('');
      setCommonEpisodes([]);

      if (!char1 || !char2) return;

      if (char1 === char2) {
        setError('Has seleccionado el mismo personaje. Por favor, elige personajes distintos.');
        return;
      }

      setLoading(true);
      const [c1, c2] = await getCharactersByIds([char1, char2]);

      const ep1 = new Set(c1.episode);
      const ep2 = new Set(c2.episode);
      const common = [...ep1].filter((ep) => ep2.has(ep));

      const episodes = await Promise.all(common.map(getEpisode));
      setCommonEpisodes(episodes);
      setLoading(false);
    };

    compare();
  }, [char1, char2]);

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Comparar Personajes</h1>

      <div className="bg-white rounded-lg shadow p-4 md:p-6 flex flex-col sm:flex-row gap-4 mb-8 justify-center">
        <select
          className="border border-gray-300 p-2 rounded w-full sm:w-1/2"
          value={char1}
          onChange={(e) => setChar1(e.target.value)}
        >
          <option value="">Selecciona Personaje 1</option>
          {characters.map((char) => (
            <option key={char.id} value={char.id}>
              {char.name}
            </option>
          ))}
        </select>

        <select
          className="border border-gray-300 p-2 rounded w-full sm:w-1/2"
          value={char2}
          onChange={(e) => setChar2(e.target.value)}
        >
          <option value="">Selecciona Personaje 2</option>
          {characters.map((char) => (
            <option key={char.id} value={char.id}>
              {char.name}
            </option>
          ))}
        </select>
      </div>

      {/* Mensaje de error si son iguales */}
      {error && (
        <p className="text-center text-red-600 font-semibold mb-4">{error}</p>
      )}

      {/* Resultado */}
      {loading ? (
        <p className="text-center text-gray-500">Buscando episodios en común...</p>
      ) : commonEpisodes.length > 0 ? (
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2 text-green-700">Episodios en común:</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-800">
            {commonEpisodes.map((ep) => (
              <li key={ep.id}>
                <span className="font-medium">{ep.episode}</span> - {ep.name}
              </li>
            ))}
          </ul>
        </div>
      ) : char1 && char2 && !error ? (
        <p className="text-center text-red-600 font-semibold">
          No hay episodios en común.
        </p>
      ) : null}
      <div className="mt-8 flex justify-center">
        <Button href="/" className="px-6 py-2 text-sm">
          ← Volver al inicio
        </Button>
      </div>
    </main>
  );
}
