type Props = {
   children: string;
   size: number,
   bold: boolean
}

export function Text({ children, size, bold, ...rest }: Props) {
   return (
      <h1 style={{ fontSize: size, fontWeight: bold ? '600' : '400', textAlign: 'center', marginTop: 26, marginBottom: 26 }}>
         {
            children
         }
      </h1>
   );
}