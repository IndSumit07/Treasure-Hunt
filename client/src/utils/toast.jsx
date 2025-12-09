import toast from 'react-hot-toast';
import { Compass, CheckCircle, AlertCircle, Info } from 'lucide-react';

const toastStyle = {
  background: 'rgba(255, 255, 255, 0.9)',
  color: '#333',
  border: '1px solid rgba(212, 163, 115, 0.3)', // Bronze-ish border
  padding: '16px',
  borderRadius: '12px',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  fontSize: '0.95rem',
  fontFamily: 'inherit',
  maxWidth: '400px',
};

const iconStyle = {
  width: '20px',
  height: '20px',
};

export const showToast = {
  success: (message) => {
    toast.success(message, {
      style: {
        ...toastStyle,
        borderLeft: '4px solid #10B981', // Emerald green
      },
      icon: <CheckCircle style={{ ...iconStyle, color: '#10B981' }} />,
      duration: 4000,
    });
  },

  error: (message) => {
    toast.error(message, {
      style: {
        ...toastStyle,
        borderLeft: '4px solid #EF4444', // Red
      },
      icon: <AlertCircle style={{ ...iconStyle, color: '#EF4444' }} />,
      duration: 5000,
    });
  },

  welcome: (username) => {
    toast(username ? `Welcome aboard, ${username}!` : 'Welcome aboard, Captain!', {
      style: {
        ...toastStyle,
        border: '1px solid #D4A373',
        background: 'linear-gradient(to right, #FFF, #FEFCE8)',
      },
      icon: <Compass style={{ ...iconStyle, color: '#D4A373' }} className="animate-spin-slow" />,
      duration: 4000,
    });
  },

  info: (message) => {
    toast(message, {
      style: {
        ...toastStyle,
        borderLeft: '4px solid #3B82F6', // Blue
      },
      icon: <Info style={{ ...iconStyle, color: '#3B82F6' }} />,
      duration: 4000,
    });
  },
  
  loading: (message) => {
    return toast.loading(message, {
      style: {
        ...toastStyle,
        borderLeft: '4px solid #D4A373', // Gold
      },
    });
  },

  dismiss: (toastId) => {
    toast.dismiss(toastId);
  }
};

export default showToast;
