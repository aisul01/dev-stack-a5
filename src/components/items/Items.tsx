import { use } from 'react';
import type { Iitem } from '../../types/itemType';

interface ItemsProps {
    itemsPromise: Promise<Iitem []>
}
const Items = ({ itemsPromise }: ItemsProps) => {
    const items = use(itemsPromise)
    console.log(items, "items")
    return (
        <div>
            
        </div>
    );
};

export default Items;