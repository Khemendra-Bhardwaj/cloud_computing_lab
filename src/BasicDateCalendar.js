import { useState } from 'react';
import Calendar from 'react-calendar';

let  ValuePiece = Date | null;

let Value = ValuePiece | [ValuePiece, ValuePiece];

export default function MyApp() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}