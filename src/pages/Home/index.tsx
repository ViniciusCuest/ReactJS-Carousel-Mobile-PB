import './styles.css'

import img1 from '../../assets/1.svg';
import img2 from '../../assets/2.svg';
import img3 from '../../assets/3.svg';

import { Carrousel } from "../../components/Carrousel";

export default function Home() {

   const data = [
      {
         images: img1,
         title: "Plant lover Community",
         description: 'Find gardening enthusiasts from all over the world'
      },
      {
         images: img2,
         title: "Get fast & safe delivery",
         description: 'Get good quality products for your plants'
      },
      {
         images: img3,
         title: "Buy & Sell Tools",
         description: 'Buy & sell good quality products for your beautiful plants'
      }
   ];

   return (
      <main className='main'>
         <Carrousel data={data} />
      </main>
   );
}