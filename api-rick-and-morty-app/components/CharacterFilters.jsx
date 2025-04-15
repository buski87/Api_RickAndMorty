export default function CharacterFilters({ filters, onChange }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6 flex flex-col md:flex-row items-center gap-4 justify-center">
      <input
        type="text"
        name="name"
        value={filters.name}
        onChange={onChange}
        placeholder="Nombre"
        className="border border-gray-300 px-4 py-2 rounded w-full md:w-auto"
      />

      <select
        name="species"
        value={filters.species}
        onChange={onChange}
        className="border border-gray-300 px-4 py-2 rounded w-full md:w-auto"
      >
        <option value="">Todas las especies</option>
        <option value="Human">Humano</option>
        <option value="Alien">Alien</option>
        <option value="Robot">Robot</option>
        <option value="Animal">Animal</option>
 
      </select>

      <select
        name="gender"
        value={filters.gender}
        onChange={onChange}
        className="border border-gray-300 px-4 py-2 rounded w-full md:w-auto"
      >
        <option value="">Todos los géneros</option>
        <option value="Male">Masculino</option>
        <option value="Female">Femenino</option>
        <option value="Genderless">Sin género</option>
        <option value="unknown">Desconocido</option>
      </select>
    </div>
  );
}
