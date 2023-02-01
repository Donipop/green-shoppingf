import SearchViewData from "./SearchViewData";
import Header from "../Header/Header";
import styled from "styled-components";


const SearchView  = ({user}) => {
    
    return(
        <div>
            <Div>
                <Header user={user} />
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