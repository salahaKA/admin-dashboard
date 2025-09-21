import React from 'react';
import { Tabs } from 'antd';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

const onChange = key => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Tab 1',
    children: <Tab1/>,
  },
  {
    key: '2',
    label: 'Tab 2',
    children: <Tab2/>
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];
const TabsComponent = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default TabsComponent;










// // unmount  Tab switching
// import React, { useEffect, useState } from "react";
// import Tab1 from "./Tab1";
// import Tab2 from "./Tab2";
// import { Tabs } from "antd";


// const TabsComponent = () => {
//   const [showTab2, setShowTab2] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       console.log("Unmounting Tab2");
//       setShowTab2(false);
//     }, 5000);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, []);

//   const onChange = (key) => {
//     console.log("Tab Canged", key);
//   };

//   const items = [
//     {
//       key: "1",
//       label: "Tab 1",
//       children: <Tab1 />,
//     },
//     {
//       key: "2",
//       label: "Tab 2",
//       children: showTab2 ? <Tab2 /> : <p>Tab2 Unmounted</p>,
//     },
//     {
//       key: "3",
//       label: "Tab 3",
//       children: 'Content of Tab Pane 3'
//     },
//   ];

//   return (
//     <div>
//       <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
//     </div>
//   );
// };

// export default TabsComponent;

