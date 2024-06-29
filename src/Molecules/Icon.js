import React from 'react';
import IcoMoon from 'react-icomoon';
import iconSet from '../Assets/Icons/selection.json';

const Icon = ({ icon, size, color }) => (
  <IcoMoon iconSet={iconSet} icon={icon} size={size} disableFill={color} color={color} />
);

export default Icon;