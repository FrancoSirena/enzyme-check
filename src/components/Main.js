import React, { useState } from "react";

export default props => {
  const [visible, setVisible] = useState();

  const handleChange = e => setVisible(e.target.checked);

  return (
    <div>
      <div>
        <label htmlFor="wannaSee">I want to see it</label>
        <input
          name="wannaSee"
          type="checkbox"
          checked={visible}
          onChange={handleChange}
        />
      </div>
      {visible && (
        <img
          src="http://cdn.akc.org/content/hero/puppy-boundaries_header.jpg"
          width={200}
          height={150}
        />
      )}
    </div>
  );
};
