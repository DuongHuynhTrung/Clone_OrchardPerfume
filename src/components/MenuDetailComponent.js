import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import StarRating from "./StarRatingComponent";
import { addToCart } from "../redux/addToCart";


class MenuDetail extends React.Component {
    handleClick = (id) => {
        this.props.addToCart(id);
    }
    render() {
        const cate = this.props.match.params.category;
        const perfume = this.props.perfumes.filter((perfume) => (cate === 'Men' || cate === 'Women') ? perfume.sex === cate : perfume.category === cate).map((item) => {
            return (
                <div className="col-12 col-md-3 col-sm-6 text-center mt-4">
                    <Card>
                        <Link to={`/menu/${cate}/${item.id}`}>
                            <CardImg src={item.image} alt={item.name} />
                        </Link>
                        <CardBody>
                            <CardTitle>{item.name}</CardTitle>
                            <CardText className="text-danger">
                                <div className="col-12 mb-2">
                                    <strong>Giá: {item.price}đ</strong>
                                </div>
                                <div className="col-12 mb-2">
                                    <Link to="#">
                                        <button className="rounded border border-warning" onClick={() => { this.handleClick(item.id) }}>
                                            <i className="fa fa-cart-plus"></i> Thêm vào giỏ
                                        </button>
                                    </Link>
                                </div>
                                <CardText className="text-danger"><StarRating rating={item.rating} /></CardText>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container mt-4">
                <Breadcrumb className="mt-0 pt-0 ">
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Có {this.props.perfumes.filter((perfume) => (cate === 'Men' || cate === 'Women') ? perfume.sex === cate : perfume.category === cate).length} sản phẩm</BreadcrumbItem>
                </Breadcrumb>
                <div className="category col-12">
                    <ul className="d-flex justify-content-around">
                        {this.props.categories.map((category) => {
                            return (
                                <li className="border rounded p-2 pr-4 pl-4">
                                    <Link className="text-dark" to={`/menu/${category}`}>Nước Hoa {category}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="row content">
                    <h2 className="col-12">Nước Hoa</h2>
                    {perfume}
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        perfumes: state.perfumes,
        categories: state.categories,
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuDetail)