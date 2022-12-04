import Style from './SearchBar.module.css'

const SearchBar = (props) => {
    
    const handleQuery = (e)=>{
        props.setQuery(e.target.value);
    }

    return <div className={Style.container}>
        <input type="search"   onChange={handleQuery}/>
        <button>Add</button>
    </div>
}
 
export default SearchBar;