import React from 'react';
import Typed from 'typed.js';

function TypingText() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
        strings: ['Software Engineer', 'Data Analyst', 'Data Scientist', 'Chemist'],
        typeSpeed: 40,
        backSpeed: 40,
        loop: true,
        smartBackspace: false
      });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <h1>Hi, I am a <span ref={el} style={{color: "#b8c1ec"}}/></h1>
    </div>
  );
}

export default TypingText;