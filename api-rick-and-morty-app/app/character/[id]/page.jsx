import { getCharacterById, getEpisode } from '@/lib/Api';
import Button from '@/components/Button'; 

export default async function CharacterDetailPage({ params }) {
  const { id } = params;
  const character = await getCharacterById(id);
  const firstEpisodeUrl = character.episode[0];
  const firstEpisode = await getEpisode(firstEpisodeUrl);

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        {character.name}
      </h1>

      <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src={character.image}
          alt={character.name}
          className="w-48 h-auto rounded-md border shadow-md"
        />

        <div className="text-gray-800 space-y-3 w-full">
          <p>
            <span className="font-semibold text-gray-600">Planeta de origen:</span>{' '}
            {character.origin.name}
          </p>
          <p>
            <span className="font-semibold text-gray-600">Género:</span>{' '}
            {character.gender}
          </p>
          <p>
            <span className="font-semibold text-gray-600">Especie:</span>{' '}
            {character.species}
          </p>
          <p>
            <span className="font-semibold text-gray-600">Estado:</span>{' '}
            {character.status}
          </p>
          <p>
            <span className="font-semibold text-gray-600">Episodio de debut:</span>{' '}
            {firstEpisode.name}
          </p>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <Button href="/" className="px-6 py-2 text-sm">
          ← Volver al inicio
        </Button>
      </div>
    </main>
  );
}
