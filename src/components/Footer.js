// import React from "react";
// import { Box, Flex } from "@chakra-ui/react";

// const Footer = () => {
//   return (
//     <Box backgroundColor="#18181b">
//       <footer>
//         <Flex
//           margin="0 auto"
//           px={12}
//           color="white"
//           justifyContent="center"
//           alignItems="center"
//           maxWidth="1024px"
//           height={16}
//         >
//           <p>
//             <a className="seeMore" href="www.twitter.com/hussainhamim_">
//               Hussain
//             </a>{" "}
//             • © 2024
//           </p>
//         </Flex>
//       </footer>
//     </Box>
//   );
// };
// export default Footer;

import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="rgba(26, 26, 26, 0.8)">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Hussain • © 2024</p>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;
