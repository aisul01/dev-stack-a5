import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Items from "./components/items/Items"
import { Suspense } from "react"
import type { Iitem } from "./types/itemType"

const itemsFetch = async():Promise<Iitem []> => {
  const res = await fetch('/data.json')
  const data = await res.json();
  return data;
}
function App() {
  const itemsPromise = itemsFetch();
  return (
    <>
    <Nav/>
    <Banner/>
    <Suspense fallback={<h2>Loading......</h2>} >
    <Items itemsPromise={itemsPromise}/>
    </Suspense>
    </>
  )
}

export default App