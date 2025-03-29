import React, { useState } from 'react';
import DesktopIcon from './DesktopIcon.jsx';
import Window from './Window.jsx';
import Taskbar from './Taskbar.jsx';
import blissBg from '../assets/bliss.jpg';

const Desktop = () => {
  const [openWindows, setOpenWindows] = useState({
    projects: false,
    aboutMe: false,
    recycleBin: false,
    myComputer: false,
    textFile: false
  });

  const toggleWindow = (windowName) => {
    setOpenWindows(prev => ({
      ...prev,
      [windowName]: !prev[windowName]
    }));
  };

  const desktopIcons = [
    { name: "Yossi Molcho Portfolio", iconType: "computer", key: "myComputer" },
    { name: "Projects", iconType: "folder", key: "projects" },
    { name: "About Me", iconType: "folder", key: "aboutMe" },
    { name: "Recycle Bin", iconType: "recycle", key: "recycleBin" },
    { name: "My UX/UI CV", iconType: "text", key: "textFile" }
  ];

  return (
    <div 
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        fontFamily: 'Tahoma, sans-serif',
        backgroundImage: `url(${blissBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Desktop Icons - Left Side */}
      <div style={{ 
        position: 'absolute', 
        top: '16px', 
        left: '16px', 
        display: 'grid', 
        gap: '24px'
      }}>
        {desktopIcons.map((icon) => (
          <DesktopIcon 
            key={icon.key}
            name={icon.name} 
            iconType={icon.iconType} 
            onClick={() => toggleWindow(icon.key)} 
          />
        ))}
      </div>

      {/* Windows */}
      {openWindows.projects && (
        <Window 
          title="Projects" 
          iconType="folder"
          onClose={() => toggleWindow('projects')}
          initialPosition={{ x: 150, y: 100 }}
        >
          <div style={{ padding: '16px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>My Projects</h2>
            <p>Here you can find all my portfolio projects.</p>
          </div>
        </Window>
      )}

      {openWindows.aboutMe && (
        <Window 
          title="About Me" 
          iconType="folder"
          onClose={() => toggleWindow('aboutMe')}
          initialPosition={{ x: 200, y: 120 }}
        >
          <div style={{ padding: '16px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>About Me</h2>
            <p>Information about myself and my skills.</p>
          </div>
        </Window>
      )}

      {openWindows.recycleBin && (
        <Window 
          title="Recycle Bin" 
          iconType="recycle"
          onClose={() => toggleWindow('recycleBin')}
          initialPosition={{ x: 250, y: 140 }}
        >
          <div style={{ padding: '16px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>Recycle Bin</h2>
            <p>Items you have deleted are stored here.</p>
          </div>
        </Window>
      )}

      {openWindows.myComputer && (
        <Window 
          title="Yossi Molcho Portfolio" 
          iconType="computer"
          onClose={() => toggleWindow('myComputer')}
          initialPosition={{ x: 300, y: 100 }}
        >
          <div style={{ padding: '16px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>My Portfolio</h2>
            <p>Welcome to my portfolio! Here you can find information about my projects and skills.</p>
          </div>
        </Window>
      )}

      {openWindows.textFile && (
        <Window 
          title="My UX/UI CV" 
          iconType="text"
          onClose={() => toggleWindow('textFile')}
          initialPosition={{ x: 350, y: 150 }}
        >
          <div style={{ padding: '16px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>Curriculum Vitae</h2>
            <p>UX/UI Designer with expertise in creating intuitive and engaging user experiences.</p>
          </div>
        </Window>
      )}

      {/* Taskbar */}
      <Taskbar openWindows={openWindows} />
    </div>
  );
};

export default Desktop; 