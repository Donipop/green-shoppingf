import { data } from 'autoprefixer';
import React from 'react';
import Td from './Td';

let data2 = {
    cookie: []
}

const Tr = ({info}) => {
    
    return (
        <tbody>
            {
                info.map(item => {
                    return (
                        <Td key={item.id} item={item}  
						 />
                    )
                })
            }
        </tbody>
    );
};
export {data2}
export default Tr;