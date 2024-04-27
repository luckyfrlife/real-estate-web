import React, { useState } from "react";
import "./value.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import data from "../../utils/accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";

const value = () => {
  return (
    <section className="v-wrapper body-v">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>

        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value we Give to You</span>
          <span className="secondaryText">
            We always to help by providing the best services for you. <br /> We
            believe a good place to live can make your life better.
          </span>

          <Accordion allowMultipleExpanded={false} preExpanded={[0]}>
            {data.map((item, i) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem
                  className={`accordionItem coco ${className}`}
                  key={i}
                  uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default value;

// import React, { useState } from "react";
// import "./value.css";

// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel,
//   AccordionItemState,
// } from "react-accessible-accordion";
// import data from "../../utils/accordion";
// import { MdOutlineArrowDropDown } from "react-icons/md";

// const Value = () => {
//   const [classNames, setClassNames] = useState(Array(data.length).fill(null));

//   const handleAccordionClick = (index) => {
//     const updatedClassNames = classNames.map((className, i) =>
//       i === index ? (className === "expanded" ? "collapsed" : "expanded") : null
//     );
//     setClassNames(updatedClassNames);
//   };

//   return (
//     <section className="v-wrapper body-v">
//       <div className="paddings innerWidth flexCenter v-container">
//         {/* left side */}
//         <div className="v-left">
//           <div className="image-container">
//             <img src="./value.png" alt="" />
//           </div>
//         </div>

//         <div className="flexColStart v-right">
//           <span className="orangeText">Our Value</span>
//           <span className="primaryText">Value we Give to You</span>
//           <span className="secondaryText">
//             We always to help by providing the best services for you. <br /> We
//             believe a good place to live can make your life better.
//           </span>

//           <Accordion allowMultipleExpanded={false} preExpanded={[0]}>
//             {data.map((item, i) => (
//               <AccordionItem
//                 className={`accordionItem ${classNames[i]}`}
//                 key={i}
//                 uuid={i}>
//                 <AccordionItemHeading>
//                   <AccordionItemButton
//                     className="flexCenter accordionButton"
//                     onClick={() => handleAccordionClick(i)}>
//                     <AccordionItemState>
//                       {({ expanded }) => (
//                         <>
//                           <div className="flexCenter icon">{item.icon}</div>
//                           <span className="primaryText">{item.heading}</span>
//                           <div className="flexCenter icon">
//                             <MdOutlineArrowDropDown size={20} />
//                           </div>
//                         </>
//                       )}
//                     </AccordionItemState>
//                   </AccordionItemButton>
//                 </AccordionItemHeading>
//                 <AccordionItemPanel>
//                   <p className="secondaryText">{item.detail}</p>
//                 </AccordionItemPanel>
//               </AccordionItem>
//             ))}
//           </Accordion>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Value;
