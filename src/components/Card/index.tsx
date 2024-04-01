interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => (
  <div className={`rounded-lg shadow-lg min-w-80 p-6 ${className}`}>
    {children}
  </div>
);

export default Card;
