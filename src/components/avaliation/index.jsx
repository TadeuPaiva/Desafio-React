import React, { useState } from 'react';
import { IoMdStarOutline } from "react-icons/io";

export const StarRating = () => {
  const [rating, setRating] = useState(0);

  return (
    <div style={{ position: 'relative' }}>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i;

        return (
          <label key={i} style={{ position: 'relative' }}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              style={{ opacity: 0, width: 0, height: 0, margin: 0, padding: 0, border: 0, position: 'absolute' }}
            />
            <IoMdStarOutline
              className="star"
              color={ratingValue <= rating ? "#FF859B" : "#e4e5e9"}
              style={{ position: 'absolute', top: 0, left: `${i * 20}px` }}
              cursor={'pointer'}
            />
          </label>
        );
      })}
    </div>
  );
};






// import React, { useState } from 'react';
// import { IoMdStarOutline } from "react-icons/io";

// export const StarRating = () => {
//   const [rating, setRating] = useState(0);

//   return (
//     <div>
//       {[...Array(5)].map((star, i) => {
//         const ratingValue = i;

//         return (
//           <label key={i}>
//             <input
//               type="radio"
//               name="rating"
//               value={ratingValue}
//               onClick={() => setRating(ratingValue)}
//             />
//             <IoMdStarOutline
//               className="star"
//               color={ratingValue <= (rating) ? "#FF859B" : "#e4e5e9"}
//               // size={25}
//               cursor={'pointer'}
//             />
//           </label>
//         );
//       })}
//     </div>
//   );
// };

