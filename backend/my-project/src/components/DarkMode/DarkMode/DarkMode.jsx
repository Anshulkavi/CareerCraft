import React, { useEffect, useState } from "react";
import "./DarkMode.css";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className='dark_mode'>
      <input
        className='dark_mode_input'
        type='checkbox'
        id='darkmode-toggle'
        checked={isDark}
        onChange={() => setIsDark(!isDark)}
      />
      <label className='dark_mode_label' htmlFor='darkmode-toggle'>
        {/* Images removed */}
      </label>
    </div>
  );
};

export default DarkMode;
