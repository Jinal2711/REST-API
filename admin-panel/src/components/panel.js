import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AddCategory from "./AddCategory";
import LeftPanel from "./LeftPanel";
import RightCategoryPanel from "./RightCategoryPanel";
import RightProductPanel from './RightProductPanel';

const Panel = () => {
  return (
    <Router>
      {/* <Container>
            <Row>
                <Col lg={3} xs={3} className="left_panel">
                    <LeftPanel/>
                </Col>
                <Switch>
                <Col className="right_panel">
                    <Route exact path="/category" component={RightPanel}/>
                    <Route exact path="/category" component={RightPanel}/>
                    <Route path="/add-category" component={AddCategory}/>
                    <AddCategory/>
                </Col>
                </Switch>
            </Row>
        </Container> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2 left_panel">
            <LeftPanel/>
          </div>
          <div className="col-sm-10 right_panel">
            <Switch>
                <Route exact path="/category" component={RightCategoryPanel}/>
                <Route exact path="/product" component={RightProductPanel}/>

                <Route path="/add-category" component={AddCategory}/>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};
export default Panel;
