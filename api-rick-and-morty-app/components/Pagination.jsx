import Button from '@/components/Button';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center items-center gap-4 mt-10 text-sm">
      {currentPage > 1 && (
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          className="bg-blue-800 text-white hover:bg-blue-900 px-6 py-2 rounded-lg shadow"
        >
          ← Anterior
        </Button>
      )}

      <span className="text-gray-700 font-medium">
        Página {currentPage} de {totalPages}
      </span>

      {currentPage < totalPages && (
        <Button
          onClick={() => onPageChange(currentPage + 1)}
          className="bg-blue-800 text-white hover:bg-blue-900 px-6 py-2 rounded-lg shadow"
        >
          Siguiente →
        </Button>
      )}
    </div>
  );
}
