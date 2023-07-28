import React from "react";
import './DestinationStyle.css'
import DestinationData from "./DestinationData";
import img1 from '../images/pexels-roberto-shumski-1903702.jpg'
import img2 from '../images/pexels-quang-nguyen-vinh-2132126.jpg'
import img3 from '../images/pexels-oliver-sjöström-1433052.jpg'
import img4 from '../images/pexels-matthew-montrone-1324803.jpg'

const Destination = ()=>{
    return (
        <>
        <div className="destination">
            <h1>Populer Destinations</h1>
            <p>Tours give you the opurtinety</p>

            <DestinationData 
            cName="first-des"
            heading="This is heading1 of destination"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas omnis magni cupiditate voluptatibus. Ipsam inventore possimus iure nostrum commodi optio maiores vero doloribus cumque aperiam quis, doloremque quo quasi voluptatum expedita. Exercitationem voluptates aperiam molestiae enim repellendus, ex excepturi nostrum quod quaerat id atque ut iusto iste voluptatem deleniti dolorem porro praesentium natus eaque dignissimos facilis error? Modi rerum, esss possimus itaque illum deserunt nostrum quod quasi obcaecati et explicabo hic veritatis. Voluptates distinctio repellendus aspernatur omnis ipsa molestiae fugit recusandae nemo, commodi eligendi iste doloribus reprehenderit sit libero. Accusamus."
            img1={img1}
            img2={img2} />

            <DestinationData 
            cName="first-des-reverse"
            heading="This is heading2 of destination"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas omnis magni cupiditate voluptatibus. Ipsam inventore possimus iure nostrum commodi optio maiores vero doloribus cumque aperiam quis, doloremque quo quasi voluptatum expedita. Exercitationem voluptates aperiam molestiae enim repellendus, ex excepturi nostrum quod quam natus eaque dignissimos facilis error? Modi rerum, esse consequatur labore praesentium dignissimos ut fuga ex laboriosam animi corporis possimus itaque illum deserunt nostrum quod quasi obcaecati et explicabo hic veritatis. Voluptates distinctio repellendus aspernatur omnis ipsa molestiae fugit recusandae nemo, commodi eligendi iste doloribus reprehenderit sit libero. Accusamus."
            img1={img3}
            img2={img4} />
            
        </div>
        </>
    )
}
export default Destination;
