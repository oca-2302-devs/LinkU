import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

export function SearchBar({ value, onChange }: { value: string, onChange: (v: string) => void }) {
  return (
    <div className="relative group">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 group-focus-within:text-lime-500 transition-colors" />
      </div>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="名前、コース、趣味等で検索..."
        className="block w-full pl-11 pr-4 py-4 bg-white border border-gray-200 rounded-2xl text-sm placeholder-gray-400 
                   focus:outline-none focus:ring-2 focus:ring-lime-500/30 focus:border-lime-500 
                   transition-all shadow-sm"
      />
    </div>
  )
}