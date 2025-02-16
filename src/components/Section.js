import React from 'react'
import Card from './Card'

export default function Section() {
  return (
    <div>
<div style={{ margin: '1rem' }}>
            <div className="container-name">Clothes</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem 0' }}>
                <Card name="H&M" price="3400" imageUrl="https://assets.ajio.com/medias/sys_master/root/20230508/VSQA/6459142e42f9e729d76f00c8/-473Wx593H-441924223-indigo-MODEL.jpg" width="200" height="100px"/>
                <Card name="Levis" price="2000" imageUrl="https://cdnb.lystit.com/photos/a1b2-2015/02/12/hm-blue-shaping-skinny-regular-jeans-product-1-27797503-3-199054599-normal.jpeg" height="100px"/>
                <Card name="Leo" price="6000" imageUrl="https://www.waxjean.com/image/cache/catalog/2020/06/DSC_1183-680x680.jpg" width="200" height="100px"/>
            </div>
            <div className="container-name">Vegetables</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem 0' }}>
                <Card name="H&M" price="3400" imageUrl="https://m.media-amazon.com/images/I/81p4sgrCfzL._SX679_.jpg" width="200" height="100px"/>
                <Card name="Levis" price="2000" imageUrl="https://gabbarfarms.com/cdn/shop/products/Spinach_1000x.jpg?v=1620713074" height="100px"/>
                <Card name="Leo" price="6000" imageUrl="https://m.media-amazon.com/images/I/313dtY-LOEL._AC_UF1000,1000_QL80_.jpg" width="200" height="100px"/>
            </div>
            <div className="container-name">Furnitures</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem 0' }}>
                <Card name="H&M" price="3400" imageUrl="https://5.imimg.com/data5/RK/MU/MY-22845518/wooden-dining-table.jpg" width="200" height="100px"/>
                <Card name="Levis" price="2000" imageUrl="https://www.at-home.co.in/cdn/shop/files/ElectramaxwalnutLS.jpg?v=1683702925" height="100px"/>
                <Card name="Leo" price="6000" imageUrl="https://www.ikea.com/in/en/images/products/nodeland-coffee-table-medium-brown__0974637_pe812499_s5.jpg" width="200" height="100px"/>
            </div>
            <div className="container-name">Rainware</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem 0' }}>
                <Card name="H&M" price="3400" imageUrl="https://contents.mediadecathlon.com/p1976099/f0e777769d2a4b88e9f8ffb7432ce45e/p1976099.jpg?format=auto&quality=70&f=650x0" width="200" height="100px"/>
                <Card name="Levis" price="2000" imageUrl="https://www.ikea.com/in/en/images/products/knalla-umbrella-black__0934105_pe792338_s5.jpg" height="100px"/>
                <Card name="Leo" price="6000" imageUrl="https://littlesurprisebox.com/cdn/shop/products/mr-cobotic-waterproof-flexible-rubber-rain-gumboots-for-kids-bright-yellowlittle-surprise-box-286614.webp?v=1689252467" width="200" height="100px"/>
            </div>
            <div className="container-name">Flower</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem 0' }}>
                <Card name="H&M" price="3400" imageUrl="https://www.almanac.com/sites/default/files/styles/or/public/image_nodes/sunflower-1627193_1920.jpg?itok=td7mL8qA" width="200" height="100px"/>
                <Card name="Levis" price="2000" imageUrl="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2015/11/10/0/CI_Costa-Farms-Ballad-aster.jpg.rend.hgtvcom.1280.1280.suffix/1447169929799.jpeg" height="100px"/>
                <Card name="Leo" price="6000" imageUrl="https://rukminim2.flixcart.com/image/850/1000/kzegk280/plant-sapling/w/k/n/no-biennial-no-climbing-red-rose-live-plant-1-shiv-shakti-group-original-imagbfygvgaczbax.jpeg?q=20&crop=false" width="200" height="100px"/>
            </div>
        </div>
    </div>
  )
}
