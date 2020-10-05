import React, { ReactChild, ReactChildren, useState } from 'react';
import styles from './Tabs.module.scss';

interface ITabsProps {
  tabs: any[];
  defaultActiveKey?: number;
  children?: ReactChild;
}

// export const TabPane: any = () => {
//   return (
//     <p></p>
//   );
// }

const Tabs: React.FC<ITabsProps> = ({ tabs, defaultActiveKey, children }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveKey || 1);

  console.log({ children });

  return (
    <div className={styles['tabs-wrapper']}>
      <div className={styles['tabs-trigers']}>
        <div className={styles['tabs-trigers-list']}>
          <div className={styles['tabs-trigers-list-item']}>
            first tab
          </div>
        </div>
      </div>
      <div className={styles['tabs-content-holder']}>
        <div className={styles['tabs-content']}>
          {tabs.map((tab: { title: string, body: string | ReactChild }) => {
            return (
              <>
                <p>{tab.title}</p>
                <div>{tab.body}</div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
