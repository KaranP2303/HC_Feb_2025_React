// import '../Styles/DashboardStyle/LeaderBoardPageStyle.css';
// import React from "react";
// import ProfileImg from '../Assets/ProfileImg.jpg';
// import { FaCaretDown,FaCaretUp } from "react-icons/fa";



// export const LeaderboardPage = () => {
//   const leaderboardData = [
//     { rank: 1, name: "Alice miller", course: "Math", hour: 10, point: 95, change: "up",profile:ProfileImg },
//     { rank: 2, name: "Bob stuart", course: "Science", hour: 9, point: 90, change: "down",profile:ProfileImg  },
//     { rank: 3, name: "Charlie putin", course: "History", hour: 8, point: 85, change: "up",profile:ProfileImg  },
//     { rank: 4, name: "David buttler", course: "Physics", hour: 7, point: 80, change: "down",profile:ProfileImg  },
//     { rank: 5, name: "Emma stone", course: "Chemistry", hour: 6, point: 75, change: "up",profile:ProfileImg  },
//     { rank: 6, name: "Frank castle", course: "Biology", hour: 5, point: 70, change: "down",profile:ProfileImg  },
//     { rank: 7, name: "Grace washington", course: "English", hour: 4, point: 65, change: "up" ,profile:ProfileImg },
//     { rank: 8, name: "Hannah montanna", course: "Geography", hour: 3, point: 60, change: "down",profile:ProfileImg  },
//     { rank: 9, name: "Isaac newton", course: "Economics", hour: 2, point: 55, change: "up",profile:ProfileImg  },
//     { rank: 10, name: "Jack sparrow", course: "Computer Science", hour: 1, point: 50, change: "down",profile:ProfileImg  },
//   ];

//   return (
//     <div className="leaderboard-container">
//       <span className="leaderboard-title">Leaderboard</span>
//       <div className="table-wrapper">
//         <table className="leaderboard-table">
//           <thead className='leaderboard-table-headers'>
//             <tr>
//               <th>Rank</th>
//               <th>Name</th>
//               <th>Course</th>
//               <th>Hour</th>
//               <th>Point</th>
//             </tr>
//           </thead>
//           <tbody className='leaderboard-table-records'>
//             {leaderboardData.map((item, index) => (
//               <tr key={index}>
//                 <td className="rank-cell">
//                   <span className="rank-box">{item.rank}</span>
//                   {item.change === "up" ? (
//                     <FaCaretUp className="triangle-up" />
//                   ) : (
//                     <FaCaretDown className="triangle-down" />
//                   )}
//                 </td>
//                 <td >
//                     <div className='leaderboard-table-name'>
//                         <img src={item.profile} className='search-container-profile' alt="" />{item.name}
//                     </div>
//                 </td>
//                 <td>{item.course}</td>
//                 <td>{item.hour}</td>
//                 <td className='leaderboard-table-points'>{item.point}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };


// import '../Styles/DashboardStyle/LeaderBoardPageStyle.css';
// import React from "react";
// import ProfileImg from '../Assets/ProfileImg.jpg';
// import { FaCaretDown, FaCaretUp } from "react-icons/fa";

// export const LeaderboardPage = () => {
//   let leaderboardData = [
//     { name: "Alice Miller", course: "Math", hour: 10, point: 95, change: "up", profile: ProfileImg },
//     { name: "Bob Stuart", course: "Science", hour: 9, point: 85, change: "down", profile: ProfileImg },
//     { name: "Charlie Putin", course: "History", hour: 8, point: 85, change: "up", profile: ProfileImg },
//     { name: "David Buttler", course: "Physics", hour: 7, point: 80, change: "down", profile: ProfileImg },
//     { name: "Emma Stone", course: "Chemistry", hour: 6, point: 75, change: "up", profile: ProfileImg },
//     { name: "Frank Castle", course: "Biology", hour: 5, point: 70, change: "down", profile: ProfileImg },
//     { name: "Grace Washington", course: "English", hour: 4, point: 65, change: "up", profile: ProfileImg },
//     { name: "Hannah Montana", course: "Geography", hour: 3, point: 60, change: "down", profile: ProfileImg },
//     { name: "Isaac Newton", course: "Economics", hour: 2, point: 55, change: "up", profile: ProfileImg },
//     { name: "Jack Sparrow", course: "Computer Science", hour: 1, point: 50, change: "down", profile: ProfileImg },
//   ];

//   // Sort data based on points in descending order and assign ranks
//   leaderboardData = leaderboardData.sort((a, b) => b.point - a.point);
//   leaderboardData = leaderboardData.map((item, index) => ({ ...item, rank: index + 1 }));

//   return (
//     <div className="leaderboard-container">
//       <span className="leaderboard-title">Leaderboard</span>
//       <div className="table-wrapper">
//         <table className="leaderboard-table">
//           <thead className='leaderboard-table-headers'>
//             <tr>
//               <th>Rank</th>
//               <th>Name</th>
//               <th>Course</th>
//               <th>Hour</th>
//               <th>Point</th>
//             </tr>
//           </thead>
//           <tbody className='leaderboard-table-records'>
//             {leaderboardData.map((item, index) => (
//               <tr key={index}>
//                 <td className="rank-cell">
//                   <span className="rank-box">{item.rank}</span>
//                   {item.change === "up" ? (
//                     <FaCaretUp className="triangle-up" />
//                   ) : (
//                     <FaCaretDown className="triangle-down" />
//                   )}
//                 </td>
//                 <td>
//                   <div className='leaderboard-table-name'>
//                     <img src={item.profile} className='search-container-profile' alt="Profile" />{item.name}
//                   </div>
//                 </td>
//                 <td>{item.course}</td>
//                 <td>{item.hour}</td>
//                 <td className='leaderboard-table-points'>{item.point}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };


import '../Styles/DashboardStyle/LeaderBoardPageStyle.css';
import React from "react";
import ProfileImg from '../Assets/ProfileImg.jpg';
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

export const LeaderboardPage = () => {
  let leaderboardData = [
    { name: "Alice Miller", course: "Math", hour: 10, point: 95, change: "up", profile: ProfileImg },
    { name: "Bob Stuart", course: "Science", hour: 9, point: 85, change: "down", profile: ProfileImg },
    { name: "Charlie Putin", course: "History", hour: 8, point: 85, change: "up", profile: ProfileImg },
    { name: "David Buttler", course: "Physics", hour: 7, point: 80, change: "down", profile: ProfileImg },
    { name: "Emma Stone", course: "Chemistry", hour: 6, point: 75, change: "up", profile: ProfileImg },
    { name: "Frank Castle", course: "Biology", hour: 5, point: 70, change: "down", profile: ProfileImg },
    { name: "Grace Washington", course: "English", hour: 4, point: 65, change: "up", profile: ProfileImg },
    { name: "Hannah Montana", course: "Geography", hour: 3, point: 60, change: "down", profile: ProfileImg },
    { name: "Isaac Newton", course: "Economics", hour: 2, point: 55, change: "up", profile: ProfileImg },
    { name: "Jack Sparrow", course: "Computer Science", hour: 1, point: 50, change: "down", profile: ProfileImg },
  ];

  // Sort data based on points in descending order
  leaderboardData.sort((a, b) => b.point - a.point);

  // Assign ranks, ensuring the same rank for equal points
  let rank = 1;
  leaderboardData = leaderboardData.map((item, index, arr) => {
    if (index > 0 && item.point < arr[index - 1].point) {
      rank = index + 1;
    }
    return { ...item, rank };
  });

  return (
    <div className="leaderboard-container">
      <span className="leaderboard-title">Leaderboard</span>
      <div className="table-wrapper">
        <table className="leaderboard-table">
          <thead className='leaderboard-table-headers'>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Course</th>
              <th>Hour</th>
              <th>Point</th>
            </tr>
          </thead>
          <tbody className='leaderboard-table-records'>
            {leaderboardData.map((item, index) => (
              <tr key={index}>
                <td className="rank-cell">
                  <span className="rank-box">{item.rank}</span>
                  {item.change === "up" ? (
                    <FaCaretUp className="triangle-up" />
                  ) : (
                    <FaCaretDown className="triangle-down" />
                  )}
                </td>
                <td>
                  <div className='leaderboard-table-name'>
                    <img src={item.profile} className='search-container-profile' alt="Profile" />{item.name}
                  </div>
                </td>
                <td>{item.course}</td>
                <td>{item.hour}</td>
                <td className='leaderboard-table-points'>{item.point}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
