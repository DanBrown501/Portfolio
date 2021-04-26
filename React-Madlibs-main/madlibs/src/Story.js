import React from "react";

const Story = ({ adj1, noun1, noun2, restart, topic }) => {
  const StoryOptions = {
    Larry: `Ok so boom. The night started off ${adj1} and we had already bought the ${noun1} and the ${noun2}. 
            But I guess none of that mattered since Larry hadn't answered any of our calls...`,
    Tag: `"Tag, you're it!" I loathed those words. Especially when they come from Addy's ${adj1} ${noun1}. 
            I miss my hometown. I miss my friends. I miss playing pin the ${noun2} 
            on the sweaty silver-haired knucklemoose.`,
    Pickle: `I love ${adj1} pickles. Especially with ${noun1} and ${noun2} sauce. Yum!`,
  };
  return (
    <div className="Story-container">
      <h3 className="Story-h3">Your story</h3>
      <div className="Story-story">{StoryOptions[topic]}</div>
      <button className="btn" onClick={restart}>
        Restart
      </button>
    </div>
  );
};

export default Story;