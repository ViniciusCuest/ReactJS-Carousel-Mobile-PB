import './styles.css';

type Props = {
   counter: any;
   activeIndex: number
}

export function Stepper ({ counter, activeIndex } : Props) {
   return (
      <div className='stepper'>
         {
            counter.map((_ : any, key: number) => {
               return (
                  <div key={key} className={`circle ${key === activeIndex ? 'active' : ''}`}/>
               );
            })
         }
      </div>
   );
}