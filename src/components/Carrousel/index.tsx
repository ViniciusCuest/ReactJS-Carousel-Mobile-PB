import { UIEvent, useEffect, useRef, useState } from 'react';

import './styles.css';
import { Text } from '../Text';
import { Button } from '../Button';
import { Stepper } from '../Stepper';

type Item = {
   title: string;
   description: string;
   images?: any;
}

type Props = {
   data: Item[];
}

export function Carrousel({ data }: Props) {

   const ScrollRef = useRef<HTMLDivElement>(null);

   //largura de cada item do carrousel
   const [itemWidth, setItemWidth] = useState<number>(0);

   //largura máxima do componente carrousel
   const [maxScrollWidth, setMaxScrollWidth] = useState<number>(0);

   //indicador ativo
   const [activeIndex, setActiveIndex] = useState<number>(0);

   const handleChangeIndex = (nextIndex: number): void => {
      ScrollRef.current?.scrollTo({
         left: nextIndex === 1 ? (maxScrollWidth / data.length) * nextIndex : (maxScrollWidth / data.length) * nextIndex,
         behavior: 'smooth'
      });
   }

   const handleScroll = (evt: UIEvent) => {

      let currentScroll: number = evt.currentTarget.scrollLeft;

      let val: number = (maxScrollWidth / data.length) - 100;

      if (currentScroll >= 0 && currentScroll < val)
         setActiveIndex(0);
      else if (currentScroll >= val && currentScroll < (val * 2))
         setActiveIndex(1);
      else
         setActiveIndex(2);
   }

   return (
      <>
         <section ref={ScrollRef} className='carrousel-container' onScroll={handleScroll} onLoad={(evt) => setMaxScrollWidth(evt.currentTarget.scrollWidth)}>
            {
               data.map((item: Item, id: number) => {
                  return (
                     <div className='carrousel-item' key={id} onLoad={(evt) => setItemWidth(evt.currentTarget.offsetWidth)}>
                        <img src={item.images} className='images' alt={`imagem-${id}`} />
                        <Text bold={true} size={24}>
                           {
                              item.title
                           }
                        </Text>
                        <Text bold={false} size={18}>
                           {
                              item.description
                           }
                        </Text>
                     </div>

                  );
               })
            }
         </section>
         <div className='carrousel-content'>
            <Stepper activeIndex={activeIndex} counter={data} />
            <Button title={activeIndex !== 2 ? 'Continue' : 'Get Started'} styles={true} onClick={() => {
               handleChangeIndex(activeIndex + 1);
            }} />
            {
               activeIndex !== 2 ?
               <Button title='Skip' styles={false} />
               :
               null
            }
         </div>
      </>
   );
}