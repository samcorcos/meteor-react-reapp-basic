const {Route, Router} = ReactRouter;
const {history} = ReactRouter.lib.BrowserHistory;


Meteor.startup(function() {
  AppRoutes = (
    <Router history={history}>
      <Route component={App}>
        <Route path="/" component={Home} />
      </Route>
    </Router>
  )
  React.render(AppRoutes, document.body)
})
