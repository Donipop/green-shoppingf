import SearchViewData from "./SearchViewData";
import Header2 from "../Header2";
import styled from "styled-components";


const SearchView  = () => {
    
    return(
        <div>
            <Div>
                <Header2/>
            </Div>
       <SearchViewData/>
       </div>


    )

}

export default SearchView;

const Div = styled.div`
width:1477px;
height:148px;
text-align:center;
`