import MenuList from './Menu-list'
import './style.css'


export default function TreeView({menu = []}){
    return <div className='tree-view-container'>
        <MenuList list={menu} />
    </div>
}