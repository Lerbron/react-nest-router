import React, { Component, Fragment } from "react";
import { Switch } from "react-router-dom";
import { connect } from "react-redux";
import RouteWithSubRoutes from 'routes/withSubRoute'
import SideBar from './SideBar'


class CoreLayout extends Component {
  constructor(props) {
    super(props);
    this.state= {
      loading:  true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false})
    }, 3000)
  }
  componentWillMount() {}

  render() {
    let { routes }= this.props
    let { loading }= this.state

    if(loading) return <div>loading...</div>
    return (
      <Fragment>
        <SideBar />
        <div className='core-layout'>
          <Switch>
            { routes.map( route => <RouteWithSubRoutes key={ route.path } { ...route } /> ) }
          </Switch>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout);
