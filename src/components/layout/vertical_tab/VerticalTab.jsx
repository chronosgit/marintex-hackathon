import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Monitor from 'src/components/layout/monitor/Monitor';
import MiniProfile from './MiniProfile';
import { useState } from 'react';
import CreateMonitoring from '../create-monitoring/CreateMonitoring';
import CreatePost from '../create-post/CreatePost';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTab() {
  const username = localStorage.getItem("username") || "Username";
  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 'auto', width: '100vw' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', width: '10vw'}}
      >
        <MiniProfile username={username} />
        <Tab label="Monitor" {...a11yProps(1)} />
        <Tab label="Admin Settings" {...a11yProps(2)} />
        <Tab label="Share" {...a11yProps(3)} />
        <Tab label="My KPIs" {...a11yProps(4)} />
        <Tab label="Forum Feed" {...a11yProps(5)} />
      </Tabs>
      <TabPanel value={value} index={1}>
        <Monitor />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CreateMonitoring />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <CreatePost />
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={5}>
        Feed
      </TabPanel>
      
    </Box>
  );
}