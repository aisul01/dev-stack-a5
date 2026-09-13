import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Items from "./components/items/Items";
import type { IItem } from "./types/itemType";


function App() {
    const [items, setItems] = useState<IItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchItems = async () => {

            try {
                const response = await fetch("/data.json");

                const data: IItem[] = await response.json();

                setItems(data);

            } catch (error) {
                console.error("Failed to load data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchItems();
    }, []);


    return (
        <>
            <Nav />
            <Banner />
            {loading ? (
                <div className="py-20 text-center"><h2 className="text-lg font-semibold text-slate-700">Loading...</h2>  </div>
            ) : (
                <Items items={items} />
            )}

        </>
    );
}

export default App;