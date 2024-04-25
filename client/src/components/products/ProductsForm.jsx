import React, { useEffect, useState } from 'react'
import Fields from '../custom/Fields'
import { getCategories } from '../../api/categories';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories } from '../../slice/categories';

const ProductsForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category.categories)

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handlePriceChange = (e) => {
        setPrice(e.target.value)
    }

    const handleCategoryChange = (e) => {
        setCategory(e.target.value)
    }


    useEffect(() => {
        getCategories().then(({data}) => {
            dispatch(setCategories(data))
        }).catch(err => {
           console.log(err);
        })
       },[])
  
    return (
        <div>
            <form className='flex flex-col gap-2'>
                <Fields>
                    <label className='text-sm'>Name</label>
                    <input className='border rounded-md p-2' type="text" value={name} onChange={handleNameChange} placeholder='Eg: Mobile' />
                </Fields>
                <Fields>
                    <label className='text-sm'>Price</label>
                    <input className='border rounded-md p-2' type="number" value={price} onChange={handlePriceChange} placeholder='Eg: 10000' />
                </Fields>
                <Fields>
                    <label className='text-sm'>Category</label>
                    <select className='border rounded-md p-2' value={category} onChange={handleCategoryChange}>
                        {
                            categories.map((category) => {
                                return(
                                    <option key={category.id} value={category.name}>{category.name}</option>
                                )
                            })
                        }
                    </select>
                </Fields>
                <button className='px-4 py-3 bg-[purple] rounded-md text-gray-100 text-medium mt-8'>Submit</button>
            </form>
        </div>
    )
}

export default ProductsForm