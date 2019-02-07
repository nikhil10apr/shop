import React from 'react';
import { Route, Switch } from 'react-router-dom'

import ShopRoot from './shopComponents/index';

export default function App() {
	return <Switch>
      <Route path="/" component={ShopRoot} />
    </Switch>
}