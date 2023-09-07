import ItemList from '../ItemList/ItemList.jsx'
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    return (<>
        <div className='div_item'>
            <ItemList greeting={greeting}>
                {greeting}
            </ItemList>
           
        </div>
    </>)
}

export default ItemListContainer