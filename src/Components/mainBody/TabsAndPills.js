import React from "react";
import { tabs } from "../../Constants/constants";
import { Tabs } from "antd";
import Filters from "../Filters/Filters";
import Images from "../Images/Images";
import Params from "../Params/Params";

const TabsPills = () => {
  const { TabPane } = Tabs;
  return (
    <>
      <Tabs defaultActiveKey={0} size={"small"} onTabClick={(rest) => {}}>
        {tabs &&
          Object.keys(tabs).map((tab, key) => (
            <TabPane tab={tabs[tab].name} key={key}>
              {tab === "FILTERS" && <Filters />}
              {tab === "IMAGES" && <Images />}
              {tab === "PARAMS" && <Params />}
            </TabPane>
          ))}
      </Tabs>
    </>
  );
};

export default TabsPills;
