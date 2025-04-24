import Button from '@/components/Button';

const PAGE_BLOCK_SIZE = 5; 

export default function Pagination({ currentPage, totalPages, onPageChange }) {
 
  const currentBlock = Math.floor((currentPage - 1) / PAGE_BLOCK_SIZE);


  const blockStart = currentBlock * PAGE_BLOCK_SIZE + 1;
  const blockEnd = Math.min(blockStart + PAGE_BLOCK_SIZE - 1, totalPages);
  const pageNumbers = [];
  for (let i = blockStart; i <= blockEnd; i++) {
    pageNumbers.push(i);
  }


  const hasPrevBlock = blockStart > 1;
  const hasNextBlock = blockEnd < totalPages;

  return (
    <div className="flex justify-center items-center gap-2 mt-10 text-sm flex-wrap">
      {hasPrevBlock && (
        <Button
          onClick={() => onPageChange(blockStart - PAGE_BLOCK_SIZE)}
          className="bg-blue-800 text-white hover:bg-blue-900 px-3 py-2 rounded-lg shadow"
        >
          ←
        </Button>
      )}
      {pageNumbers.map((page) => (
        <Button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-2 rounded-lg shadow ${
            page === currentPage
              ? 'bg-orange-500 text-white'
              : 'bg-gray-200 hover:bg-blue-100 text-blue-900'
          }`}
        >
          {page}
        </Button>
      ))}
      {hasNextBlock && (
        <Button
          onClick={() => onPageChange(blockEnd + 1)}
          className="bg-blue-800 text-white hover:bg-blue-900 px-3 py-2 rounded-lg shadow"
        >
          →
        </Button>
      )}
    </div>
  );
}
