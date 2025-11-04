// src/components/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  className,
  ...props
}) => {
  const variantClasses = {
    primary: 'btn-primary bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'btn-secondary bg-gray-500 hover:bg-gray-600 text-white',
    danger: 'btn-danger bg-red-500 hover:bg-red-600 text-white', // ✅ added
  };

  const sizeClasses = {
    sm: 'btn-sm px-2 py-1 text-sm',
    md: 'btn-md px-4 py-2 text-base',
    lg: 'btn-lg px-6 py-3 text-lg', // ✅ added
  };

  const disabledClasses = disabled
    ? 'btn-disabled opacity-50 cursor-not-allowed'
    : 'cursor-pointer';

  const buttonClasses = clsx(
    'rounded focus:outline-none transition-colors duration-200',
    variantClasses[variant],
    sizeClasses[size],
    disabledClasses,
    className
  );

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
