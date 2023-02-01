import SearchViewData from "./SearchViewData";
import Header from "../Header/Header";
import styled from "styled-components";


const SearchView  = () => {
    
    return(
        <div>
            <Div>
                <Header/>
            </Div>
            <div className="container">
            <SearchViewData/>
            </div>
       
       </div>


    )

}

export default SearchView;

const Div = styled.div`
width:1477px;
height:148px;
text-align:center;
`