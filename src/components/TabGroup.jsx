import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function TabGroup() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Overview">
        Tab content for Overview
      </Tab>
      <Tab eventKey="profile" title="Spec">
        Tab content for Spec
      </Tab>
      <Tab eventKey="contact" title="Rating">
        Tab content for Rating
      </Tab>
      <Tab eventKey="disabled" title="Disabled" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default TabGroup;
