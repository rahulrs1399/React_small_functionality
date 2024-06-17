import MenuItem from './Menu-item'

export default function MenuList({list = []}){
    return (
    <ul className='menu-list-container'>
        {
            list && list.length 
            ? list.map(listItem => <MenuItem listItem={listItem}/>)
            : <p>Data Not Found!</p>
        }
    </ul>
    )
}