import React from 'react';



const Td = ({item}) => {

   console.log(item.checked)
    return (
        <>
        <tr className='"bg-white border-2 border-gray-200'>
            <td><input type="checkbox"   checked={item.checked} /></td>
            <td className='px-4 py-3'  >{item.id}</td>
            <td className='px-4 py-3' >{item.name}</td>
            <td className='px-4 py-3'  >{item.email}</td>
            <td className='px-4 py-3' >{item.phone}</td>
            <td className='px-4 py-3' >{item.website}</td>     
        
        </tr>
        </>
    )
};

export default Td;