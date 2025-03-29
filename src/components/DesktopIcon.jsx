import React from 'react';

const DesktopIcon = ({ name, iconType, onClick }) => {
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
      case 'user':
        return 'https://win98icons.alexmeub.com/icons/png/user-0.png';
      case 'text':
        return 'https://win98icons.alexmeub.com/icons/png/notepad-1.png';
      default:
        return 'https://win98icons.alexmeub.com/icons/png/file_icon-0.png';
    }
  };

  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80px',
        cursor: 'pointer',
        userSelect: 'none'
      }}
      onDoubleClick={onClick}
    >
      <div style={{
        borderRadius: '4px',
        padding: '4px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <img 
          src={getIconUrl(iconType)} 
          alt={name} 
          style={{
            width: '48px',
            height: '48px',
            marginBottom: '4px'
          }}
          draggable="false"
        />
        <span style={{
          textAlign: 'center',
          fontSize: '12px',
          color: 'white',
          fontWeight: 'normal',
          textShadow: '1px 1px 1px rgba(0,0,0,0.8)',
          lineHeight: '1.2',
          padding: '0 4px'
        }}>
          {name}
        </span>
      </div>
    </div>
  );
};

export default DesktopIcon; 