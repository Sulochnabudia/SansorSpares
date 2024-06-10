import React, { memo, useEffect, useState } from 'react'
import ProductCard from '../componenets/ProductCard'
import CardDatajson from '../CardData.json';

function Products() {

    const [searchInput, setSearchInput] = useState("")
    const [ProductArr, setProductArr] = useState([])

    const handleSearch = (e) => setSearchInput(e.target.value)

    useEffect(() => {
        setProductArr(CardDatajson)
    }, [])

    useEffect(() => {
        let filterArr = CardDatajson.filter((data) => data.Title.toLowerCase().includes(searchInput))
        setProductArr(filterArr)
    }, [searchInput])

    return (
        <>
            <div style={{ backgroundColor: 'whitesmoke' }} className='py-4' >
                <div className='d-flex mb-4 justify-content-around '>
                    <h1 className='fs-1 text-decoration-underline'> Products</h1>
                    <input type='text' className='rounded-pill text-center px-5 fw-bold' placeholder='Search-item' style={{ width: "400px", outline: 'none', border: '1px soild' }} onChange={handleSearch} />
                </div>

                <div className='d-flex m-auto gap-5 px-4 flex-wrap '>
                    {
                        ProductArr.map((data, index) => {
                            return (
                                <ProductCard key={index} data={data} />
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default memo(Products)