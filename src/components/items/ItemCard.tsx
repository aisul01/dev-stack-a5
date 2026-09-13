import type { IItem } from "../../types/itemType";

interface ItemCardProps {
    item: IItem;
    isAdded: boolean;
    onAdd: (item: IItem) => void;
}

const ItemCard = ({
    item,
    isAdded,
    onAdd
}: ItemCardProps) => {

    return (
        <div className="flex min-h-[200px] flex-col rounded-xl border border-gray-100 bg-white p-3 shadow-sm">

            <div className="flex items-start justify-between">

                <img src={item.icon} alt={item.name} className="h-7 w-7 object-contain" />

                <span className="rounded-full bg-pink-50 px-2 py-1 text-[9px] text-pink-500">{item.badge}</span>
            </div>


            {/* Name of items... */}
            <h3 className="mt-3 text-sm font-semibold text-slate-900"> {item.name}</h3>
 

            {/* Description  of items..,*/}
            <p className="mt-2 min-h-[48px] text-[10px] leading-4 text-slate-500"> {item.description}</p>


            {/* Category, difficulty, rating.... */}
            <div className="mt-auto flex items-center justify-between gap-1 text-[9px]">

                <span className="rounded bg-slate-50 px-2 py-1 text-slate-500">{item.category}</span>

                <span className="text-slate-400">{item.difficulty}</span>

                <span className="text-slate-600">⭐{item.rating}</span>
            </div>


            {/* button... */}
            <button
                onClick={() => onAdd(item)}
                disabled={isAdded}
                className={`mt-3 w-full rounded-md py-2 text-[10px] font-medium transition ${
                    isAdded
                        ? "cursor-not-allowed bg-white text-pink-500"
                        : "bg-slate-950 text-white hover:bg-slate-800"
                }`}
            >
                {isAdded ? "✓ Added to Stack" : "Add to Stack"}
            </button>
        </div>
    );
};

export default ItemCard;