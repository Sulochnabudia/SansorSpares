import React, { memo } from 'react'

function ProductCard(props) {
    return (
        < >
            <div className="card p-3" style={{ width: "20rem", height: "" }}>
                <img src={props.data?.Img} className='card-img-top' alt="..." style={{ height: "15rem" }} />
                <div className='card-body'>
                    {/* title */}
                    <h5 className='card-title mb-4 '>{props.data?.Title}</h5>
                    {/* description */}
                    <p className='card-text'>{props.data?.Text}</p>
                    {/* price */}
                    <h5 className='mb-4 fst-italic '>
                        {props.data?.price}
                        <span className='fw-light text-decoration-line-through '>{props.data?.xprice}</span>
                        <span className='text-success'> {props.data?.off}</span></h5>
                    <a href='' className='btn btn-primary '>Explore More</a>
                </div>
            </div >
        </ >
    )
}
export default memo(ProductCard)