import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
    font-size: 15px;
    width: 100%;
    margin-top: 35px;
`;

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 5px;
    display: flex;
    margin: 0;
`;

WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
    border-radius: 15px;
    border: 1px solid #d3d3d3;
    padding: 15px;
    user-select: none;
    cursor: pointer;
    box-shadow:  0 0 1em #d3d3d3;
    z-index: 9999;
    background-color: #FFFF;
    margin: 10px;

    &:focus {
        outline: none;
    }

    &.is-selected {
        box-shadow: 5px 8px 5px rgba(0, 0, 0, 0.3);
    }

    &:hover {
        background-color: rgba(244, 244, 244, 1);
        box-shadow: 5px 8px 5px rgba(0, 0, 0, 0.5);
    }
    
`;

WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
    padding: 15px;
    border: 0 solid #d3d3d3;
    margin-top: -5px;
    display: none;

    &.is-selected {
       display: block;
    }

`;

WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;