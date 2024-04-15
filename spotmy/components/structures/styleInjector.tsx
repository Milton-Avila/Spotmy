import React, { ReactNode, isValidElement, Children, cloneElement } from 'react';

interface StyleInjectorProps {
  children: ReactNode;
  style: string;
}

const StyleInjector: React.FC<StyleInjectorProps> = ({ children, style }) => {
  const applyGenericClass = (child: ReactNode): ReactNode => {
    if (isValidElement(child)) {
      const validChild = child as React.ReactElement<any>;
      const { className: existingClassName = '', ...rest } = validChild.props;
      const newProps = { ...rest, className: `${existingClassName} ${style}`.trim() };
      return cloneElement(validChild, newProps, Children.map(validChild.props.children, applyGenericClass));
    }
    return child;
  };

  return <>{Children.map(children, applyGenericClass)}</>;
};

export default StyleInjector;
