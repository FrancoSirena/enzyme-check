import React, { useState, useRef } from "react";

export default props => {
  const [visible, setVisible] = useState(false);

  const handleChange = e => setVisible(e.target.checked);

  return (
    <div>
      <div>
        <label htmlFor="wannaSee">I want to see it
        <input
          id="wannaSee"
          name="wannaSee"
          type="checkbox"
          checked={visible}
          onChange={handleChange}
        />
        </label>
      </div>
      {visible && (
        <img
          alt="cute dogo"
          src="http://cdn.akc.org/content/hero/puppy-boundaries_header.jpg"
          width={200}
          height={150}
        />
      )}
    </div>
  );
};
