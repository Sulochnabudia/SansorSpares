import React from 'react'
import Accordion from '../componenets/Accordion'

function Faq() {
    const faqData = [
        {
            title: "Exporting Content and Publishing",
            desc: "You can easily export content and publish it using our platform. Our system allows you to export sensor data and reports in various formats such as CSV, Excel, and PDF for easy integration and sharing. Additionally, our user-friendly interface enables you to publish and share sensor data and reports directly to your desired platforms or systems."
        },
        {
            title: "Getting started with Sensor",
            desc: "Welcome to SensorSphere! To begin, choose and order the sensors that best suit your needs. Once you receive them, follow the provided installation instructions to set them up. After installation, connect your sensors to our platform for real-time data monitoring. For any assistance or detailed guidance, please refer to our user manual or contact our customer support. We're here to help make your experience with SensorSphere seamless and enjoyable!"
        },
        {
            title: "How can I Get More Content Credit",
            desc: "To gain more content credit, focus on producing high-quality, original content consistently, engage with your audience and community, promote your content through social media and SEO, network with influencers and industry experts, and continuously improve your skills and knowledge. Additionally, consider guest posting on reputable websites, participating in content platforms that offer credit to contributors, and building a professional portfolio to showcase your expertise."
        },
        {
            title: "I wish to Cancel My Subscription",
            desc: "We're sorry to hear that you wish to cancel your subscription. To cancel your subscription, please log in to your account on our platform and navigate to the 'Subscription' or 'Account Settings' section to find the option to cancel. Alternatively, you can contact our customer support team, and they will assist you with the cancellation process. Please note that depending on your subscription terms, there might be a cancellation fee or specific cancellation period. For any further questions or concerns, feel free to reach out to our customer support."
        },
        {
            title: "Requesting Revisions",
            desc: "If you need to request revisions or have any concerns regarding your sensors or the data they provide, please reach out to our customer support team. We are committed to ensuring your satisfaction and will work with you to address any issues and make the necessary revisions to meet your requirements. You can contact our support team through the platform, email, or phone, and we will assist you promptly."
        },

    ]
    return (
        < >
            <div style={{ backgroundColor: "whitesmoke" }} >
                <div className='w-75 m-auto' >
                    <h2 className='text-center pb-5 pt-4'>Frequently Asked Questions</h2>
                    <div className='mb-5'>
                        <h4>Where can I get a sensor module?</h4>
                        <p>Sensors online shopping is now easy at Robocraze with best sensor prices with special offers and free shipping above Rs.500. Buy sensors online in bulk or smaller quantities at the best price on our website.</p>
                    </div>
                    <div className='mb-5'>
                        <h4>What is the most accurate Sensors and chips value Website?</h4>
                        <p>Our Sensor and chip values are sourced from reputable manufacturers and suppliers known for their accuracy and reliability in the industry. We pride ourselves on providing accurate and up-to-date information on our website. However, the accuracy of sensor and chip values can vary depending on various factors, including the type of sensor and its application.</p>
                        <p>We recommend consulting our website and reaching out to our customer support team for any specific accuracy requirements or questions you may have regarding our sensors and chips. We are committed to providing the most accurate and reliable information to our customers.</p>
                    </div>
                    <div className='mb-5'>
                        <h4>What is the difference between a sensor and a module?</h4>
                        <p>Sensors and modules (having extra electronic circuitry along with sensor) are electronic devices that detect and respond to some type of input from the physical environment. The sensor modules often contain extra components to make the sensor easy to use. Like voltage regulator and level shifter to use a 3,3V sensor with 5V, decoupling caps, current limit or pull up resistors, connection headers, etc.</p>
                    </div>
                    <div className='mb-5'>
                        <h4> Can I Trust a Sensors Site?</h4>
                        <p>Absolutely, you can trust our Sensor sites. We are committed to providing high-quality, reliable sensors that meet industry standards and regulations. Our sensors undergo rigorous testing to ensure their accuracy and durability. Additionally, we prioritize the security and privacy of our customers' data, implementing robust encryption and security measures to protect your information. Customer satisfaction is our top priority, and we strive to provide excellent customer service and support.</p>
                    </div>
                    <div className='pb-5'>
                        {
                            faqData.map((data, index) => {
                                return (
                                    <Accordion key={index} index={index} data={data} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </ >
    )
}

export default Faq