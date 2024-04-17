import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// let  ValuePiece = Date | null;
// // 
// let Value = ValuePiece | [ValuePiece, ValuePiece];

function MyApp() {
    // const [value, onChange] = useState<Date  | null>(new Date());
  return (
    <div>
      <Calendar />
    </div>
  );
}

export default MyApp 