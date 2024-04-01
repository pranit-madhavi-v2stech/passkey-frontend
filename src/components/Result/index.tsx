import React from 'react';

type StatusTypes = 'Success' | 'Info' | 'Warning' | 'Error' | '403' | '404' | '500';
interface StatusConfig {
  bgGradient: string;
  icon: JSX.Element; // Consider using a suitable icon component or library
  title: string;
}

const statusConfig: Record<StatusTypes, StatusConfig> = {
  Success: {
    bgGradient: 'from-green-400 via-teal-500 to-blue-500',
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-16 h-16 animate-pulse"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-11.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414L7.586 11l-1.293 1.293a1 1 0 001.414 1.414L9 12.414l1.293 1.293a1 1 0 001.414-1.414L10.414 11l1.293-1.293z" clipRule="evenodd" /></svg>,
    title: 'Success!',
  },
  Info: {
    bgGradient: 'from-blue-400 via-blue-500 to-blue-600',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16 animate-bounce"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: 'Information',
  },
  Warning: {
    bgGradient: 'from-yellow-400 via-yellow-500 to-yellow-600',
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-16 h-16 animate-pulse"><path fillRule="evenodd" d="M8.257 3.099c.366-.659 1.435-.659 1.801 0l6.458 11.644c.366.659-.09 1.257-.9 1.257H2.7c-.81 0-1.266-.598-.9-1.257L8.257 3.1zM11 14a1 1 0 11-2 0 1 1 0 012 0zm-1-4a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1z" clipRule="evenodd" /></svg>,
    title: 'Warning!',
  },
  Error: {
    bgGradient: 'from-red-400 via-red-500 to-red-600',
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-16 h-16 animate-pulse"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-11.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414L7.586 11l-1.293 1.293a1 1 0 001.414 1.414L9 12.414l1.293 1.293a1 1 0 001.414-1.414L10.414 11l1.293-1.293z" clipRule="evenodd" /></svg>,
    title: 'Error!',
  },
  '403': {
    bgGradient: 'from-red-400 via-pink-500 to-purple-600',
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-16 h-16 animate-pulse"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 12a1 1 0 100-2 1 1 0 000 2zm-2-5.732V9a1 1 0 112 0v.732a2 2 0 11-2 0z" /></svg>,
    title: 'Forbidden!',
  },
  '404': {
    bgGradient: 'from-purple-400 via-purple-500 to-purple-600',
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-16 h-16 animate-pulse"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 11-2 0 1 1 0 012 0zm-1 4a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z" clipRule="evenodd" /></svg>,
    title: 'Not Found!',
  },
  '500': {
    bgGradient: 'from-red-400 via-red-500 to-red-600',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16 animate-bounce"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: 'Server Error!',
  },
};

interface ResultProps {
  status: StatusTypes;
  subtitle?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

const Result: React.FC<ResultProps> = ({ status, subtitle, buttonLabel, onButtonClick }) => {
  const { bgGradient, icon, title } = statusConfig[status];

  return (
    <div className={`status-component bg-gradient-to-r ${bgGradient} p-8 md:p-12 lg:p-16 rounded-lg shadow-lg transform transition duration-500 hover:scale-105`}>
      <div className="flex flex-col items-center justify-center text-white">
        {icon}
        <h2 className="mt-5 text-3xl font-bold">{title}</h2>
        {subtitle && <p className="mt-2 text-lg">{subtitle}</p>}
        {buttonLabel && (
          <button onClick={onButtonClick} className="px-6 py-2 mt-6 font-semibold text-purple-700 transition-shadow duration-300 ease-in-out bg-white rounded-full hover:shadow-xl">{buttonLabel}</button>
        )}
      </div>
    </div>
  );
};

export default Result;
