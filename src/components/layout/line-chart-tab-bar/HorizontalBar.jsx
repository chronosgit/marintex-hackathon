import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import LineChart from 'src/components/ui/LineChart';

// Example views for the tabs
const TabPanel = ({ children, value, index }) => (
  <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`}>
    {value === index && <Box p={3}>{children}</Box>}
  </div>
);

const HorizontalBar = ({ships}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
        <Tab label="Fuel" />
        <Tab label="Electricity" />
        <Tab label="Solar battery" />
      </Tabs>

      <TabPanel value={value} index={0}>
        <LineChart ships={ships} filter={'fuel'} />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <LineChart ships={ships} filter={'electricity'} />
      </TabPanel>

      <TabPanel value={value} index={2}>
        {/* Content for Tab 3 */}
        <LineChart ships={ships} filter={'solarBattery'} />
      </TabPanel>
    </div>
  );
};

export default HorizontalBar;
