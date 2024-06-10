import React from 'react'

function Accordion(props) {
    const targetId = String(props.index)
    return (
        <>
            <div className="px-3 py-4" id="accordionExample" style={{ border: "none", borderBottom: "1px solid" }}>
                <div className="accordion-item" style={{ backgroundColor: "whitesmoke" }}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#abcd" + targetId}>
                            <span className='fs-4 '>{props.data?.title}</span>
                        </button>
                    </h2>
                    <div id={"abcd" + targetId} className="py-4 accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body fs-5">
                            {props.data?.desc}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accordion