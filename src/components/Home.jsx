import React from 'react'
import '../components/Home.css'
import Product from './Product'
import Header from './Header'
export default function Home() {
  return (
    <>
     <Header/>
    <div className='home'>
        <div className="home__container">
            <img className='home__image' src="https://fortheloveblog.com/wp-content/uploads/2016/07/Amazon-Prime-Banner.jpg" alt="img" />
            <div className='home__row'>
                <Product 
                id={1}
                title={'Orson Scott Card is a prolific American author best known for his science fiction and fantasy works. One of his most famous and enduring novels is "Enders Game," which was first published in 1985.'} 
                price={500} 
                rating={5} 
                image={"https://helpdeskgeek.com/wp-content/pictures/2012/06/01Enchantment_real_Cover.jpg"} />
                <Product
                     id={2}
                 title={'Inalsa Hand Blender| Hand Mixer|Beater - Easy Mix, Powerful 250 Watt Motor | Variable 7 Speed Control | 1 Year Warranty | (White/Red)'} 
                 price={2100} 
                 rating={3} 
                 image={"https://media.istockphoto.com/id/528066480/photo/red-stand-mixer-mixing-cream.jpg?s=612x612&w=0&k=20&c=pvDLhvwtyMi9lvbikDppNZy86O8SxhjTFFW2jrmLsPU="}
                />
            </div>
            <div className='home__row'>
                <Product
                     id={3}
                     title={'All-New Echo Dot (5th Gen, 2023 release) | Smart speaker with Bigger sound, Motion Detection, Temperature Sensor, Alexa and Bluetooth| Black'} 
                     price={3500} 
                     rating={4} 
                     image={"https://m.media-amazon.com/images/I/81bVIjpGEZL._AC_UY218_.jpg"}
                />
                <Product
                     id={4}
                     title={'Apple 2021 10.2-inch (25.91 cm) iPad with A13 Bionic chip (Wi-Fi, 64GB) - Space Grey (9th Generation)'} 
                     price={21099} 
                     rating={3} 
                     image={"https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_UY218_.jpg"}
                />
                <Product
                     id={5}
                     title={'Microsoft Surface Laptop Studio - 14.4" Touchscreen - Intel® Core™ i7-16GB RAM Memory - 512GB SSD - Platinum - (A1Y-00022)'} 
                     price={123199} 
                     rating={4} 
                     image={"https://tinyurl.com/xczjkeup"}
                />
            </div>
            <div className='home__row'>
                <Product
                     id={6}
                     title={'Samsung 49-inch(124.4cm) Odyssey G9 Dual QHD, 240Hz, 1ms Curved Gaming Monitor, QLED, HAS, HDR 1000, G-Sync (LC49G95TSSWXXL, Black)'} 
                     price={222099} 
                     rating={4} 
                     image={"https://tinyurl.com/3kpb6kbs"}
                />
            </div>
        </div>
    </div>
    </>

  )
}
