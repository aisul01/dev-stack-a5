import type { IItem } from "../../types/itemType";

interface MyStackProps {
    stack: IItem[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
}

const MyStack = ({
    stack,
    onRemove,
    onRemoveAll
}: MyStackProps) => {

    return (
        <aside className="rounded-xl border border-gray-100 bg-white p-4">

            {/* your stack heading... */}
            <h2 className="text-lg font-bold text-slate-900">Your Stack</h2>

            <p className="mt-1 text-[10px] text-slate-400">{stack.length} Technology Selected </p>


            {/* Empty State setting er jonno*/}
            {stack.length === 0 && (
                <div className="py-8 text-center">
                    <p className="text-xs text-slate-400"> No technologies selected yet.</p>
                </div>
            )}


            {/* Selected Items */}
            <div className="mt-4 space-y-2">
                {stack.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center justify-between rounded-lg border border-gray-100 p-2"
                    >

                        {/* icon, name */}
                        <div className="flex items-center gap-2">

                            <img src={item.icon} alt={item.name} className="h-5 w-5 object-contain" />

                            <div>
                                <p className="text-xs font-semibold text-slate-800"> {item.name}</p>
                                <p className="text-[9px] text-slate-400">{item.category}</p>
                            </div>

                        </div>


                        {/* Remove with cross */}
                        <button
                            onClick={() => onRemove(item.id)}
                            className="text-sm text-slate-400 hover:text-pink-500"
                        > × </button>

                    </div>
                ))}

            </div>


            {/* Remove All  er jonno */}
            {stack.length > 0 && (
                <button
                    onClick={onRemoveAll}
                    className="mt-4 w-full rounded-md border border-pink-200 py-2 text-[10px] text-pink-500 hover:bg-pink-50"
                > Remove All</button>
            )}

        </aside>
    );
};

export default MyStack;