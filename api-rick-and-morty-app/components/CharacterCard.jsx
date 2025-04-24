import Button from '@/components/Button';
import { motion } from 'framer-motion';
export default function CharacterCard({ character }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="bg-white border-2 border-orange-500 rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden text-center flex flex-col text-gray-800"
    >
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-auto aspect-square object-cover"
      />
      <div className="p-2 flex flex-col flex-1">
        <h2 className="font-semibold text-ls mb-2">{character.name}</h2>
        <Button
          href={`/character/${character.id}`}
          className="w-full text-ls py-1 mt-auto bg-orange-600 text-white hover:bg-orange-700"
        >
          Ver detalles
        </Button>
      </div>
    </motion.div>
  );
}