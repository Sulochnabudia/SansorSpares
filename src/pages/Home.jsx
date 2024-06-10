import React, { memo } from 'react'
import Carousel from '../componenets/Carousel'
import CardDataJson from '../CardData.json'
import ProductCard from '../componenets/ProductCard'

function Home() {
    return (
        < >
            <div style={{ backgroundColor: 'whitesmoke' }}>
                <div className='mb-5'>
                    <Carousel />
                </div>

                <div className='py-5'>
                    <h1 className='text-center fw-bold  mb-4 text-text-decoration-underline'> Products</h1>
                    <div className='d-flex m-auto px-4 flex-wrap '>
                        {
                            CardDataJson.map((data, index) => {
                                return (
                                    <ProductCard key={index} data={data} />
                                )
                            })
                        }

                    </div>
                </div>
            </div>

        </ >
    )
}

export default memo(Home)