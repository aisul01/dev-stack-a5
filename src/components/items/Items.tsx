import { useState } from "react";
import type { IItem } from "../../types/itemType";
import ItemCard from "./ItemCard";
import YourStack from "./MyStack";


interface ItemsProps {
    items: IItem[];
}

const Items = ({ items }: ItemsProps) => {
    const [stack, setStack] = useState<IItem[]>([]);


    // adding my items start..
    const handleAdd = (item: IItem) => {
        const alreadyAdded = stack.some(
            (stackItem) => stackItem.id === item.id
        );

        if (alreadyAdded) {
            alert(`${item.name} is already in your stack.`);
            return;
        }
        setStack([...stack, item]);
    };
    // adding my items End..


    // Remove one item system start.
    const handleRemove = (id: string) => {
        setStack(
            stack.filter((item) => item.id !== id)
        );
    };
    // Remove one item system end.

    // Remove all items..,
    const handleRemoveAll = () => {

        setStack([]);
    };

    return (
        <section className="bg-white py-10">
            <div className="mx-auto max-w-[1000px] px-6">

                {/* Section Heading  setting,,,*/}
                <div className="mb-6">

                    <h2 className="text-2xl font-bold text-slate-900">
                        Explore the{" "}

                        <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Technologies</span>
                    </h2>

                    <p className="mt-1 text-xs text-slate-400">Pick one technology per category to build your ideal stack.</p>

                </div>


                {/* Cards setings and  Sidebar setting..,, */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_220px]">

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {items.map((item) => {
                            const isAdded = stack.some(
                                (stackItem) => stackItem.id === item.id
                            );
                            return (
                                <ItemCard
                                    key={item.id}
                                    item={item}
                                    isAdded={isAdded}
                                    onAdd={handleAdd}
                                />
                            );
                        })}

                    </div>
                    <YourStack
                        stack={stack}
                        onRemove={handleRemove}
                        onRemoveAll={handleRemoveAll}
                    />
                </div>
            </div>
        </section>
    );
};

export default Items;