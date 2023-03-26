import React from 'react';

interface Props {
  height?: number;
  width?: number;
}

const Spacer = ({ height, width }: Props) => {
  return <div style={{ width, height }} />;
};

export default Spacer;
