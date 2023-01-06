import './styles.css';

type Props = {
   title: string;
   styles: boolean;
   onClick?: () => void;
};

export function Button({ title, styles, onClick }: Props) {
   return (
      <button onClick={onClick} className={`button ${styles ? '' : 'skip'}`}>
         <h1 className={`button-title ${styles ? '' : 'skip'}`}>
            {
               title
            }
         </h1>
      </button>
   );
}