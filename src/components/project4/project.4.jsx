import React from 'react'
// import Back from '../images/Magarpattaclients/'
import Back from '../common/Back'
import img1 from '../images/cybercity.jpg'
import YourComponent from '../projectdesc/Projectdsc'
import Imagegrid from '../Imagegrid/Imagegrid'
import Clientslider from '../clientslider/Clientslider'

const Project4 = () => {
    const sections = [
        {title:"Prime Location and Extensive Landscape", paragraph:"Strategically located in the heart of Pune City, the Mixed-Use Magarpatta Township spans an impressive 430 acres, creating a city within a city. Positioned along Magarpatta Road, it is easily accessible from the airport and railway station, making it a bustling center of commercial activity."},
        {title:"Ultra-Modern Work Environment", paragraph:"IndiaLand’s 1,35,000 square feet of innovative design offers a state-of-the-art work environment. Packed with facilities and amenities, it ensures occupants experience efficiency and comfort within this mixed-use facility, ideal for various business operations."},
        {title:"Success Story in Maharashtra", paragraph:"Magarpatta City has earned its place among the top ten success stories in Maharashtra. Located strategically, just 5 kilometers from Pune's central business district, it provides quick access to transportation hubs, making it an attractive destination for high-profile multinational clients."},
        {title:"Amenities Catering to Niche IT Operations", paragraph:"Boasting world-class and meticulously planned facilities, Magarpatta City is well-suited for companies seeking a niche IT ambiance. With flexible space utilization options, build-to-suit facilities, and comprehensive waste management systems, it caters to the diverse needs of businesses."},
        {title:"Sustainability and Quality of Life", paragraph:"Beyond its commercial appeal, Magarpatta Township prioritizes sustainability and a high quality of life. The comprehensive waste management systems contribute to the cleanliness of the area, creating a serene environment amidst proximity to commercial hubs, residential neighborhoods, schools, and recreational spaces."}
    ]
    const clientimgs = [
        {index:1, img:'../images/Home Page clients/acer.png'},
        {index:2, img:'../images/Home Page clients/Hamleys.jpg'},
        {index:3, img:'../images/Home Page clients/atlas_copco.jpg'},
    
      ]


  return (
    <div> 
        <section className="about">
            <Back name="Magarpatta, Pune" title="Cyber City" cover={img1}/>
            <YourComponent sections={sections}/>
            <div className="cyberimage" style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"5%"}}>
                <img src={img1} alt="" style={{width:"60%"}}/>
            </div>
            <Clientslider clientimgs={clientimgs} slides={3}/>




            
        </section>

    </div>
  )
}

export default Project4