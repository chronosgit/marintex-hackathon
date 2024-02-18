// Import necessary libraries and components
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import Logout from '../logout/Logout';

// Main UserProfile component
const MiniProfile = ({username}) => {
  
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '16px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff',
          borderRadius: '8px',
          marginBottom: '16px',
        }}
      >
        {/* Profile Icon */}
        <Avatar sx={{ width: 80, height: 80, marginBottom: '8px' }}>
          <PersonIcon fontSize="large" /> {/* Use the Person icon */}
        </Avatar>
  
        {/* Name and Surname */}
        <Typography variant="h6" sx={{ marginBottom: '8px' }}>
          {`${username}`}
        </Typography>
  
        <Logout />
      </Box>
    );
};

export default MiniProfile;
