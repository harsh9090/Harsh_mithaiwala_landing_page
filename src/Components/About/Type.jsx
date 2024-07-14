import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Full Stack Developer" , "MERN Stack Developer","Web Developer", "AI Integration Engineer","Network Engineer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
      
    </>
  );
};