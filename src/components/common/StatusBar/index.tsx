import { StatusBar as NativeStatusBar } from 'react-native';
import React from 'react';

type StatusBarProps = {
  backgroundColor?: string;
  barStyle?: 'dark-content' | 'default' | 'light-content';
};

const StatusBar: React.FC<StatusBarProps> = props => (
  <NativeStatusBar {...props} />
);

export default StatusBar;
