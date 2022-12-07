import "./SearchBox.scss";

// Props added to function to bring across a function to use
//used destructring for the props 

const SearchBox = ({ handleInput }) => {
  return (
    <form className="search-box">
      <input type="text" onChange={handleInput} />
    </form>
  );
};

export default SearchBox;
