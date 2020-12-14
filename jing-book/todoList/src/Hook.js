import React, {useState } from 'react';

// class Hook extends Component {
//   render() { 
//     return ( 
//       <div>hook</div>
//      );
//   }
// }
 function Hook() {
   //声明一个叫“count” 的变量
   const [count,setCount] = useState(0);
   return (
     <div>
       <p>you clicked {count} times</p>
       <button onClick={() => setCount(count + 1)}>
         Click me
       </button>
     </div>
   );
 }
export default Hook;