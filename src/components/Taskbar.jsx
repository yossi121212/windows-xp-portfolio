import React, { useState, useEffect } from 'react';
import startButton from '../assets/start.png';

const Taskbar = ({ openWindows }) => {
  const [currentTime, setCurrentTime] = useState('');

  // Update the time every minute
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  // Windows that are open
  const getOpenWindowsList = () => {
    return Object.entries(openWindows)
      .filter(([_, isOpen]) => isOpen)
      .map(([key, _]) => {
        const nameMap = {
          projects: "Projects",
          aboutMe: "About Me",
          recycleBin: "Recycle Bin",
          myComputer: "Yossi Molcho Portfolio",
          textFile: "My UX/UI CV"
        };
        return { name: nameMap[key] || key, key };
      });
  };

  const openWindowsList = getOpenWindowsList();

  return (
    <div 
      style={{ 
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '35px',
        zIndex: 50,
        borderTop: '1px solid #0547c0',
        background: 'linear-gradient(180deg, #245EDC 0%, #3987FF 3%, #2C86FE 5%, #1F6AF6 95%, #134BDC 100%)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
        {/* Start Button */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button 
            style={{ 
              height: '100%', 
              padding: '0',
              margin: '0',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <img 
              src={startButton} 
              alt="Start" 
              style={{ 
                height: '100%'
              }}
            />
          </button>

          {/* Open Window Buttons */}
          <div style={{ display: 'flex', gap: '4px', marginLeft: '4px' }}>
            {openWindowsList.map((window) => (
              <div
                key={window.key}
                style={{ 
                  padding: '0 4px', 
                  height: '24px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  color: 'white', 
                  fontSize: '12px',
                  minWidth: '120px',
                  background: '#3C91FE',
                  borderRadius: '2px',
                  boxShadow: '1px 1px 1px rgba(0,0,0,0.2)'
                }}
              >
                <img 
                  src={getIconUrlForTaskbar(window.key)} 
                  alt={window.name}
                  style={{ height: '16px', width: '16px', marginRight: '4px' }}
                />
                {window.name}
              </div>
            ))}
          </div>
        </div>

        {/* System Tray */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginRight: '4px', 
          backgroundColor: 'rgba(0,0,100,0.1)', 
          height: '100%', 
          padding: '0 4px' 
        }}>
          <div style={{ color: 'white', fontSize: '12px', padding: '2px 4px', marginLeft: '4px' }}>
            {currentTime}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to get icons for the taskbar
function getIconUrlForTaskbar(key) {
  switch (key) {
    case 'projects':
      return 'https://win98icons.alexmeub.com/icons/png/directory_closed-0.png';
    case 'aboutMe':
      return 'https://win98icons.alexmeub.com/icons/png/user-0.png';
    case 'recycleBin':
      return 'https://win98icons.alexmeub.com/icons/png/recycle_bin_empty-0.png';
    case 'myComputer':
      return 'https://win98icons.alexmeub.com/icons/png/computer_explorer-0.png';
    case 'textFile':
      return 'https://win98icons.alexmeub.com/icons/png/notepad-0.png';
    default:
      return 'https://win98icons.alexmeub.com/icons/png/file_icon-0.png';
  }
}

export default Taskbar; 