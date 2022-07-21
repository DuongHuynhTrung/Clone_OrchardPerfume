import React from "react";
import { Link } from "react-router-dom";
import { Table, Progress, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import StarRating from "./StarRatingComponent";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addToCart } from "../redux/addToCart";
import { connect } from "react-redux";

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            perfumes: [],
            comments: [],
            categories: [],
            //there are used to create a new comment
            id: -1,
            dishId: -1,
            rating: 1,
            comment: "",
            author: "",
            date: new Date()
        }
        this.fetchComments();
        this.fetchPerfumes();
        this.fetchCategories();
    }
    handleClick = (id) => {
        this.props.addToCart(id);
    }
    fetchPerfumes = () => {
        return fetch(baseUrl + 'perfumes')
            .then(response => response.json())
            .then(data => {
                this.setState({ perfumes: data })
            })
    }
    fetchCategories = () => {
        return fetch(baseUrl + 'categories')
            .then(response => response.json())
            .then(data => {
                this.setState({ categories: data })
            })
    }
    fetchComments = () => {
        return fetch(baseUrl + 'comments')
            .then(response => response.json())
            .then(data => {
                this.setState({ comments: data })
            })
    }
    handleInputChange = (event) => {
        const nameControl = event.target.name;
        const value = event.target.value;
        this.setState({ [nameControl]: value });
    }
    handleSubmit = (dish) => {
        const newComment = {
            id: this.state.comments.length,
            dishId: dish.id,
            rating: parseInt(this.state.rating),
            comment: this.state.comment,
            author: this.state.author,
            date: this.state.date.toString(),
        }
        this.addComment(newComment);
    }
    addComment = (newComment) => {
        return fetch(baseUrl + 'comments', {
            method: "POST",
            body: JSON.stringify(newComment),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
        })
            .then(response => {
                if (response.ok) {
                    this.setState({ comments: this.state.comments.concat(newComment) });
                }
            });
    }
    RenderItem = ({ item }) => {
        return (
            <div className="detailPerfume row mt-4  ">
                <div className="detailImage row col-12 col-md-8">
                    <div className="col-12 col-md-6">
                        <img width='100%' src={item.image} alt={item.name} />
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <h5 className="col-12 ml-0 pl-0">Thương hiệu: {item.brand}</h5>
                            <h5 className="text-danger">Giá: <strong>{item.price}đ</strong></h5>
                            <div className="promotion border border-dark rounded">
                                <div className="header-promotion border-bottom border-dark pt-1">
                                    <h6><strong>{`Khuyến mãi & Chương trình mới`}</strong></h6>
                                </div>
                                <div>
                                    <h6 >Nhập mã: <strong className="text-danger">FREE20KSHIP</strong> giảm 20k phí ship (HĐ từ 500k)</h6>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="buyingAction col-12 text-center rounded mb-2 mt-2">
                                <Link className="text-light" to="/">
                                    <h5 className="m-0 mt-2"><strong>ĐẶT HÀNG TRƯỚC</strong></h5>
                                    <p>Giao hàng trong vòng 3-5 ngày đặt sản phẩm</p>
                                </Link>
                            </div>
                            <div className="bg-info col-5 text-center rounded ml-3">
                                <Link className="text-light" to="#">
                                    <h6 className="m-0 mt-2 pb-1" onClick={() => { this.handleClick(item.id) }}><strong><i className="fa fa-cart-plus fa-lg"></i> THÊM VÀO GIỎ</strong></h6>
                                </Link>
                            </div>
                            <div className="bg-info col-5 text-center rounded ml-4">
                                <Link className="text-light" to="/">
                                    <h6 className="m-0 mt-2"><strong>MUA TRẢ SAU 0%</strong></h6>
                                </Link>
                            </div>
                            <div className="col-12 text-center">
                                <br /><p>Gọi đặt hàng: <a href="tel: 0937 482 485">0937 482 485</a> (miễn phí - 8:00-22:00)</p>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <h5>Description</h5>
                        <p>{item.description}</p>
                    </div>
                </div>
                <div className="detailInfo col-12 col-md-4 ml-4">
                    <h5>Thông tin sản phẩm</h5>
                    <Table>
                        <tbody>
                            <tr>
                                <th>Thương hiệu</th>
                                <td>{item.brand}</td>
                            </tr>
                            <tr>
                                <th>Năm phát hành</th>
                                <td>{item.year}</td>
                            </tr>
                            <tr>
                                <th>Nồng độ</th>
                                <td>{item.concentration}</td>
                            </tr>
                            <tr>
                                <th>Phong cách</th>
                                <td>{item.style}</td>
                            </tr>
                            <tr>
                                <th>Loại nước hoa</th>
                                <td>{item.category}</td>
                            </tr>
                            <tr>
                                <th>Giới tính</th>
                                <td>{item.category.includes('Men') ? 'Men' : 'Women'}</td>
                            </tr>
                            <tr>
                                <th>Nhóm hương</th>
                                <td>{item.fragrant}</td>
                            </tr>
                            <tr>
                                <th>Xuất xứ</th>
                                <td>{item.origin}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div >
        )
    }
    RenderComment = ({ item, comments }) => {
        const length = comments.length;
        return (
            <div className="commentPerfume row">
                <div className="row col-12 col-md-8 border border-secondary rounded">
                    <div className="row col-12 totalComments ml-1">
                        <div className="d-flex">
                            <h2 className="text-warning mr-2">{item.rating}</h2>
                            <p className="mt-2"><StarRating rating={item.rating} /></p>
                        </div>
                        <div className="rating col-12">
                            <p className="5star row">
                                <p className="col-1 p-0">5 <i className="fa fa-star"></i></p>
                                <p className="col-8 p-0 mt-1 "><Progress value={comments.filter((comment) => comment.rating === 5).length / length * 100} /></p>
                                <p className="col-1">{Math.round(comments.filter((comment) => comment.rating === 5).length / length * 100)}%</p>
                                <p className="col-2">{comments.filter((comment) => comment.rating === 5).length} review</p>
                            </p>
                            <p className="4star row">
                                <p className="col-1 p-0">4 <i className="fa fa-star"></i></p>
                                <p className="col-8 p-0 mt-1 "><Progress value={comments.filter((comment) => comment.rating === 4).length / length * 100} /></p>
                                <p className="col-1">{Math.round(comments.filter((comment) => comment.rating === 4).length / length * 100)}%</p>
                                <p className="col-2">{comments.filter((comment) => comment.rating === 4).length} review</p>
                            </p>
                            <p className="3star row">
                                <p className="col-1 p-0">3 <i className="fa fa-star"></i></p>
                                <p className="col-8 p-0 mt-1 "><Progress value={comments.filter((comment) => comment.rating === 3).length / length * 100} /></p>
                                <p className="col-1">{Math.round(comments.filter((comment) => comment.rating === 3).length / length * 100)}%</p>
                                <p className="col-2">{comments.filter((comment) => comment.rating === 3).length} review</p>
                            </p>
                            <p className="2star row">
                                <p className="col-1 p-0">2 <i className="fa fa-star"></i></p>
                                <p className="col-8 p-0 mt-1 "><Progress value={comments.filter((comment) => comment.rating === 2).length / length * 100} /></p>
                                <p className="col-1">{Math.round(comments.filter((comment) => comment.rating === 2).length / length * 100)}%</p>
                                <p className="col-2">{comments.filter((comment) => comment.rating === 2).length} review</p>
                            </p>
                            <p className="1star row">
                                <p className="col-1 p-0">1 <i className="fa fa-star"></i></p>
                                <p className="col-8 p-0 mt-1 "><Progress value={comments.filter((comment) => comment.rating === 1).length / length * 100} /></p>
                                <p className="col-1">{Math.round(comments.filter((comment) => comment.rating === 1).length / length * 100)}%</p>
                                <p className="col-2">{comments.filter((comment) => comment.rating === 1).length} review</p>
                            </p>

                        </div>
                    </div>
                </div>
                <div className="row col-12 col-md-8">
                    {comments.map((comment) => {
                        return (
                            <p className="mt-2 mb-0 col-12">
                                Author: <strong className="mr-2">{comment.author}</strong> | {comment.date}
                                <p className="mb-0"> <StarRating rating={comment.rating} /> {comment.comment}</p>
                                <p className="text-success"><i class="fa fa-check"></i> Đã mua hàng tại Orchard.vn</p>
                            </p>
                        )
                    })}
                </div>
                <div className="addComment col-12 col-md-8">
                    <h4>Your Comment</h4>
                    <Form>
                        <FormGroup>
                            <Label for="author">Author: </Label>
                            <Input type="text" id="author" name="author" placeholder="Author"
                                value={this.state.author} onChange={this.handleInputChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="comment">Comment: </Label>
                            <Input type="text" id="comment" name="comment" placeholder="Comment"
                                value={this.state.comment} onChange={this.handleInputChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="rating">Rating: </Label>
                            <Input type="number" id="rating" name="rating" placeholder="Rating" min="1" max="5"
                                value={this.state.rating} onChange={this.handleInputChange} />
                        </FormGroup>
                        <FormGroup>
                            <Button onClick={this.handleSubmit.bind(this, item)}>Submit</Button>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }

    render() {
        const detailId = parseInt(this.props.match.params.detailId);
        const category = this.props.match.params.category;
        const content = this.state.perfumes.filter((perfume) => perfume.id === detailId).map((item) => {
            return (
                <div className="container">
                    <Breadcrumb className="mt-4 pt-0">
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link to={`/menu/${this.state.categories.find((cate) => cate === category)}`}>
                                Nước Hoa {this.state.categories.find((cate) => cate === category)}
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{item.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <this.RenderItem item={item} />
                    <this.RenderComment item={item} comments={this.state.comments.filter((comment) => comment.dishId === parseInt(item.id, 10))} />
                </div>
            )
        })
        return (
            <div>
                {content}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(null, mapDispatchToProps)(Detail)