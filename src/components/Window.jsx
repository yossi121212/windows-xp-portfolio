import React from 'react';
import Draggable from 'react-draggable';

const Window = ({ title, children, iconType, onClose, initialPosition = { x: 100, y: 100 } }) => {
  // Get the appropriate icon based on type
  const getIconUrl = (type) => {
    switch (type) {
      case 'ie':
        return 'https://win98icons.alexmeub.com/icons/png/msie1-2.png';
      case 'computer':
        return 'https://win98icons.alexmeub.com/icons/png/computer_explorer-4.png';
      case 'folder':
        return 'https://win98icons.alexmeub.com/icons/png/directory_closed-0.png';
      case 'recycle':
        return 'https://win98icons.alexmeub.com/icons/png/recycle_bin_empty-0.png';
      case 'network':
        return 'https://win98icons.alexmeub.com/icons/png/network_normal_two_pcs-0.png';
      default:
        return 'https://win98icons.alexmeub.com/icons/png/file_icon-0.png';
    }
  };

  return (
    <Draggable
      defaultPosition={initialPosition}
      handle=".window-title-bar"
      bounds="parent"
    >
      <div style={{ 
        position: 'absolute',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        borderRadius: '4px 4px 0 0',
        overflow: 'hidden',
        backgroundColor: 'white',
        width: '600px',
        borderTop: '1px solid #fff',
        borderLeft: '1px solid #fff',
        borderRight: '1px solid #0554E5',
        borderBottom: '1px solid #0554E5',
       }}>
        {/* Window Title Bar - XP Blue Gradient */}
        <div 
          className="window-title-bar"
          style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 8px',
            color: 'white',
            cursor: 'move',
            background: 'linear-gradient(to right, #0A246A, #3A6EA5)',
            height: '30px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img 
              src={getIconUrl(iconType)}
              alt="Window icon" 
              style={{ width: '16px', height: '16px' }} 
            />
            <span style={{ fontWeight: 'bold', fontSize: '14px' }}>{title}</span>
          </div>

          <div style={{ display: 'flex' }}>
            <button 
              style={{
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'url(https://win98icons.alexmeub.com/images/xp-window-buttons.png)',
                backgroundPosition: '0 0',
                margin: '0 1px'
              }}
            >
              <span style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', borderWidth: '0' }}>Minimize</span>
            </button>
            <button 
              style={{
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'url(https://win98icons.alexmeub.com/images/xp-window-buttons.png)',
                backgroundPosition: '-20px 0',
                margin: '0 1px'
              }}
            >
              <span style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', borderWidth: '0' }}>Maximize</span>
            </button>
            <button 
              style={{
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'url(https://win98icons.alexmeub.com/images/xp-window-buttons.png)',
                backgroundPosition: '-40px 0',
                margin: '0 1px'
              }}
              onClick={onClose}
            >
              <span style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', borderWidth: '0' }}>Close</span>
            </button>
          </div>
        </div>

        {/* Window Menu */}
        <div style={{ display: 'flex', borderBottom: '1px solid #D1D5DB', backgroundColor: '#F3F4F6' }}>
          <div style={{ padding: '4px 8px', fontSize: '12px', color: '#4B5563' }}>File</div>
          <div style={{ padding: '4px 8px', fontSize: '12px', color: '#4B5563' }}>Edit</div>
          <div style={{ padding: '4px 8px', fontSize: '12px', color: '#4B5563' }}>View</div>
          <div style={{ padding: '4px 8px', fontSize: '12px', color: '#4B5563' }}>Favorites</div>
          <div style={{ padding: '4px 8px', fontSize: '12px', color: '#4B5563' }}>Tools</div>
          <div style={{ padding: '4px 8px', fontSize: '12px', color: '#4B5563' }}>Help</div>
        </div>

        {/* Window Toolbar */}
        <div style={{ display: 'flex', borderBottom: '1px solid #D1D5DB', backgroundColor: '#F3F4F6', padding: '4px' }}>
          <button style={{ padding: '0 4px', marginRight: '4px' }}>
            <img 
              src="https://win98icons.alexmeub.com/icons/png/back-1.png" 
              alt="Back"
              style={{ width: '16px', height: '16px' }}
            />
          </button>
          <button style={{ padding: '0 4px', marginRight: '4px' }}>
            <img 
              src="https://win98icons.alexmeub.com/icons/png/forward-1.png" 
              alt="Forward"
              style={{ width: '16px', height: '16px' }}
            />
          </button>
          <div style={{ borderRight: '1px solid #D1D5DB', height: '16px', margin: '0 4px' }}></div>
          <button style={{ padding: '0 4px', marginRight: '4px' }}>
            <img 
              src="https://win98icons.alexmeub.com/icons/png/search_web-2.png" 
              alt="Search"
              style={{ width: '16px', height: '16px' }}
            />
          </button>
          <button style={{ padding: '0 4px' }}>
            <img 
              src="https://win98icons.alexmeub.com/icons/png/favorites-0.png" 
              alt="Favorites"
              style={{ width: '16px', height: '16px' }}
            />
          </button>
        </div>

        {/* Window Content */}
        <div style={{ backgroundColor: 'white', minHeight: '200px' }}>
          {children}
        </div>

        {/* Status Bar */}
        <div style={{ backgroundColor: '#F3F4F6', borderTop: '1px solid #D1D5DB', padding: '2px 8px', fontSize: '12px', color: '#4B5563', display: 'flex', justifyContent: 'space-between' }}>
          <div>Status: Ready</div>
          <div>{new Date().toLocaleDateString()}</div>
        </div>
      </div>
    </Draggable>
  );
};

export default Window; 