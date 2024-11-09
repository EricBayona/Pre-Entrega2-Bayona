import Item from "../Item/Item"

function ItemList({gifs}) {
  
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {gifs.map((item)=>(
            <Item key={item.id} gif={item}/>

        ))}
    </div>
  )
}

export default ItemList