import MenuList from './Menu-list'


export default function TreeView({menu = []}){
    return <div className='tree-view-container'>
        <MenuList list={menu} />
    </div>
}