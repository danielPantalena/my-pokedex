import React from 'react';

interface TypeButtonProps {
  type: string;
}

const TypeButton = (props: TypeButtonProps) => {
  const { type } = props;
  return (
    <React.Fragment>
      <button name={type}>{type}</button>
    </React.Fragment>
  );
};

export default TypeButton;
