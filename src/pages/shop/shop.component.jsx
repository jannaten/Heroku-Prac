import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collections-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route
      exact
      path={`${match.path}/:categoryId`}
      component={CollectionPage}
    />
  </div>
);

export default ShopPage;
