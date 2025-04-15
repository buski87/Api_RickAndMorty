'use client';

import { useEffect, useState } from 'react';
import { getAllCharacters } from '@/lib/Api';
import CharacterCard from '@/components/CharacterCard';
import Pagination from '@/components/Pagination';
import CharacterFilters from '@/components/CharacterFilters';

export default function HomePage() {
  const [filters, setFilters] = useState({ name: '', species: '', gender: '' });
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async (page = 1) => {
    setLoading(true);
    try {
      const data = await getAllCharacters(page, filters.name, filters.species, filters.gender);
      setCharacters(data.results);
      setTotalPages(data.info.pages);
    } catch (error) {
      setCharacters([]);
      setTotalPages(1);
    }
    setLoading(false);
  };

  // Busqueda en tiempo real
  useEffect(() => {
    const delay = setTimeout(() => {
      fetchData(1);
      setCurrentPage(1);
    }, 300);
    return () => clearTimeout(delay);
  }, [filters]);

  useEffect(() => {
    fetchData();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchData(page);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Personajes de Rick and Morty</h1>

      <CharacterFilters filters={filters} onChange={handleFilterChange} />

      {loading ? (
        <p className="text-center">Cargando personajes...</p>
      ) : characters.length === 0 ? (
        <p className="text-center text-red-500">No se encontraron personajes.</p>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {characters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>
      )}

      {characters.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </main>
  );
}
