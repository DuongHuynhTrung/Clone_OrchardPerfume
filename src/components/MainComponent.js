import React, { Component, Suspense, lazy } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux/es/exports";
// import About from "./AboutUsComponent";
// import Home from "./HomeComponent";
// import Contact from "./ContactComponent";
// import Detail from "./DetailPerfumeComponent";
// import MenuComponent from "./MenuComponent";
// import MenuDetailComponent from "./MenuDetailComponent";
// import DetailPerfumeComponent from "./DetailPerfumeComponent";
import Cart from "./CartComponent";

const About = React.lazy(() => import('./AboutUsComponent'))
const Home = React.lazy(() => import('./HomeComponent'))
const Contact = React.lazy(() => import('./ContactComponent'))
const Detail = React.lazy(() => import('./DetailPerfumeComponent'))
const MenuComponent = React.lazy(() => import('./MenuComponent'))
const MenuDetailComponent = React.lazy(() => import('./MenuDetailComponent'))
const DetailPerfumeComponent = React.lazy(() => import('./DetailPerfumeComponent'))


const mapStateToProps = state => {
    return {
        perfumes: state.perfumes,
        comments: state.comments,
        numberCart: state.numberCart,
    }
}

class Main extends Component {

    render() {
        const HomePage = () => {
            return (
                <Home
                    newMenPerfume={this.props.perfumes.filter((perfume) => perfume.label === 'New' && perfume.sex === 'Men')}
                    newWomenPerfume={this.props.perfumes.filter((perfume) => perfume.label === 'New' && perfume.sex === 'Women')}
                    hotPerfume={this.props.perfumes.filter((perfume) => perfume.label === 'Hot')}
                />
            )
        }

        const DetailWithId = ({ match }) => {
            return (
                <Detail item={this.props.perfumes.find((perfume) => perfume.id === parseInt((match.params.detailId)))}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt((match.params.detailId)))}
                />
            )
        }

        const DetailWithCategory = ({ match }) => {
            return (
                <MenuDetailComponent category={
                    (match.params.category === 'Men' || match.params.category === 'Women') ? this.props.perfumes.filter((perfume) => perfume.sex === (match.params.category))
                        : this.props.perfumes.filter((perfume) => perfume.category === (match.params.category))} />
            )
        }

        return (
            <div className="main">
                <Header cart={this.props.numberCart} />
                <Suspense fallback={<h1>Loading....</h1>}>
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route exact path='/aboutus' component={About} />
                        <Route exact path='/contactus' component={Contact} />
                        <Route exact path='/menu' component={MenuComponent} />
                        <Route exact path='/menu/:category' component={MenuDetailComponent} />
                        <Route exact path='/menu/:category/:detailId' component={DetailPerfumeComponent} />
                        <Route exact path='/cart' component={Cart} />
                        <Redirect to='/home' />
                    </Switch>
                </Suspense>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(Main));
