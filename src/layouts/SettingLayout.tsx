import { Tabs } from 'antd';
import React from 'react';
import { RouterLayoutType } from './RouterLayout';
import styles from './SettingLayout.module.scss';

const { TabPane } = Tabs;

const SettingLayout: React.FC<RouterLayoutType> = props => {
  return (
    <div className={styles.wrap}>
      <Tabs
        tabPosition="left"
        activeKey={props.location.pathname}
        onChange={key => props.history.push(key)}
      >
        {props.router.map(({ path, name, component }) => (
          <TabPane key={path} tab={name}>
            {component && React.createElement(component)}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default SettingLayout;
