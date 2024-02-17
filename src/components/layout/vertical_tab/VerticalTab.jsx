import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Monitor from 'src/components/layout/monitor/Monitor';
import { Button, Icon } from '@mui/material';
import MiniProfile from './MiniProfile';

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

const user = {
  firstName: 'John',
  lastName: 'Doe',
}

export default function VerticalTab() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100vh', width: '100vw' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', width: '10vw'}}
      >
        <Button>Text</Button>
        <MiniProfile user={user} />
        <Tab label="Monitor" {...a11yProps(2)} />
        <Tab label="Admin Settings" {...a11yProps(3)} />
        <Tab label="Overview" {...a11yProps(4)} />
        <Tab label="My KPIs" {...a11yProps(5)} />
      </Tabs>
      <TabPanel value={value} index={2}>
        <Monitor />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Four
      </TabPanel>
      
    </Box>
  );
}