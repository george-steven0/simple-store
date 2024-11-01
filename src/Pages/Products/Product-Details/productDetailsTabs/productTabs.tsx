import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { SyntheticEvent, useState } from 'react';

type productTabs = {
    description : string
}

const ProductTabs = ({description}:productTabs) => {
    const [value, setValue] = useState('1');

    const handleChange = (_: SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return ( 
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example" >
                    <Tab className='text-lg capitalize' label="Description" value="1" />
                    <Tab className='text-lg capitalize' label="Review" value="2" />
                </TabList>
                </Box>
                <TabPanel value="1">{description}</TabPanel>
                <TabPanel value="2">Be First To write a review!</TabPanel>
            </TabContext>
        </Box>
    );
}

export default ProductTabs;