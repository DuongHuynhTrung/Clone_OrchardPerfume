import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Col, Form, FormFeedback, FormGroup, Input, Table } from 'reactstrap'
import { removeItem, addQuantity, subtractQuantity, clearCart } from '../redux/addToCart';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            telnum: '',
            email: '',
            address: '',
            touched: {
                name: true,
                telnum: true,
                email: true,
                address: true,
            }
        }
    }
    handleRemove = (id) => {
        this.props.removeItem(id);
    }
    handleClear = (id) => {
        this.props.clearCart(id);
    }
    //to add the quantity
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }

    RenderEmptyCart = () => {
        return (
            <div className="text-center">
                <img width="30%" src="/image/empty_cart-512.webp" alt="Empty Cart" />
                <h3>Không có sản phẩm nào trong giỏ hàng</h3>
                <Button className="mb-4"><Link className="text-light" to="/home">Return to shop</Link></Button>
            </div>
        )
    }
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        })
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(name, telnum, email, address) {
        const errors = {
            name: '',
            telnum: '',
            email: '',
            address: '',
        };
        if (this.state.touched.name && name === '') {
            errors.name = ' ';
        } else if (this.state.touched.name && name.length < 3) {
            errors.name = 'Name should be >= 3 characters';
        } else if (this.state.touched.name && name.length > 50) {
            errors.name = 'Name should be <= 50 characters';
        }
        if (this.state.touched.address && address === '') {
            errors.address = ' ';
        } else if (this.state.touched.address && address.length < 3) {
            errors.address = 'Address should be >= 3 characters';
        } else if (this.state.touched.name && name.length > 50) {
            errors.address = 'Address should be <= 200 characters';
        }
        const reg = /^\d+$/;
        if (this.state.touched.telnum && telnum === '') {
            errors.telnum = ' ';
        } else if (this.state.touched.telnum && !reg.test(telnum)) {
            errors.telnum = 'Tel. Number should contain only numbers';
        }
        if (this.state.touched.email && email === '') {
            errors.email = ' ';
        } else if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1) {
            errors.email = 'Email should contain a @';
        }
        return errors;
    }
    handleSubmit = (event) => {
        alert(`
Đặt hàng thành công!    
Thông tin liên lạc:
                Tên: ${JSON.stringify(this.state.name)}
                SĐT: ${JSON.stringify(this.state.telnum)}
                Email: ${JSON.stringify(this.state.email)}
                Address: ${JSON.stringify(this.state.address)}
Tổng đơn giá: ${this.props.total}đ
        `);
        event.preventDefault();
    }
    RenderContact = () => {
        const errors = this.validate(this.state.name, this.state.telnum, this.state.email, this.state.address);
        return (
            <div className="row">
                <div className="ml-4">
                    <p>Thông tin nhận hàng:</p>
                </div>
                <div className="col-12 col-md-9">
                    <Form onSubmit={(this.handleSubmit)} >
                        <FormGroup row>
                            <Col md={10}>
                                <Input type="text" id="name" name="name"
                                    placeholder="Họ và Tên"
                                    value={this.state.name}
                                    valid={errors.name === ''}
                                    invalid={errors.name !== ''}
                                    onBlur={this.handleBlur('name')}
                                    onChange={this.handleInputChange} />
                                <FormFeedback>{errors.name}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={10}>
                                <Input type="tel" id="telnum" name="telnum"
                                    placeholder="Tel. number"
                                    value={this.state.telnum}
                                    valid={errors.telnum === ''}
                                    invalid={errors.telnum !== ''}
                                    onBlur={this.handleBlur('telnum')}
                                    onChange={this.handleInputChange} />
                                <FormFeedback>{errors.telnum}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={10}>
                                <Input type="email" id="email" name="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    valid={errors.email === ''}
                                    invalid={errors.email !== ''}
                                    onBlur={this.handleBlur('email')}
                                    onChange={this.handleInputChange} />
                                <FormFeedback>{errors.email}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={10}>
                                <Input type="address" id="address" name="address"
                                    placeholder="Address"
                                    value={this.state.address}
                                    valid={errors.address === ''}
                                    invalid={errors.address !== ''}
                                    onBlur={this.handleBlur('email')}
                                    onChange={this.handleInputChange} />
                                <FormFeedback>{errors.address}</FormFeedback>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }

    RenderTotal = () => {
        return (
            <div className="row ml-2">
                <Table>
                    <thead>
                        <tr>
                            <th width="60%">Product</th>
                            <th width="20%">Quantity</th>
                            <th width="20%">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map(item => {
                            return (
                                <tr>
                                    <td className="align-middle"><Link className="text-dark" to={`/menu/${item.sex}/${item.id}`} >{item.name}</Link></td>
                                    <td className="align-middle text-danger"><strong>{item.quantity}</strong></td>
                                    <td className="align-middle text-danger"><strong>{item.quantity * item.price}</strong></td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td>Subtotal</td>
                            <td></td>
                            <td className="align-middle text-danger"><strong>{this.props.total}</strong></td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td></td>
                            <td>Miễn phí giao hàng cho đơn hàng từ 1500k</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td></td>
                            <td className="align-middle text-danger"><strong>{this.props.total}</strong></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
    RenderCart = () => {
        return (
            <div className="row ml-2">
                <Table>
                    <thead>
                        <tr className="text-center">
                            <th width="5%">Action</th>
                            <th width="30%">Image</th>
                            <th width="25%">Name</th>
                            <th width="10%">Price</th>
                            <th width="10%">Quantity</th>
                            <th width="20%">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map(item => {
                            return (
                                <tr className="text-center">
                                    <td className="align-middle">
                                        <Link to="/cart" onClick={() => { this.handleRemove(item.id) }}><i className="fa fa-trash fa-lg text-dark"></i></Link>
                                    </td>
                                    <td><Link to={`/menu/${item.sex}/${item.id}`} ><img width="50%" src={item.image} alt={item.name} /></Link></td>
                                    <td className="align-middle"><Link to={`/menu/${item.sex}/${item.id}`} >{item.name}</Link></td>
                                    <td className="align-middle text-danger"><strong>{item.price}</strong></td>
                                    <td className="align-middle">
                                        <div className="add-remove d-flex ml-2">
                                            <Link to="/cart"><i className="fa fa-minus" onClick={() => { this.handleSubtractQuantity(item.id) }}></i></Link>
                                            <span className="ml-2 mr-2">{item.quantity}</span>
                                            <Link to="/cart"><i className="fa fa-plus" onClick={() => { this.handleAddQuantity(item.id) }}></i></Link>
                                        </div>
                                    </td>
                                    <td className="align-middle text-danger"><strong>{item.quantity * item.price}</strong></td>
                                </tr>
                            )
                        })}

                    </tbody>

                </Table>
            </div>
        )
    }

    render() {
        return (
            <div className="container shadow-lg bg-white rounded mt-4 col-7">
                {this.props.cart.length ?
                    (
                        <div>
                            <h5>1. Giỏ hàng</h5>
                            <this.RenderCart />
                            <h5>2. Your order</h5>
                            <this.RenderTotal />
                            <h5>3. Billing & Shipping</h5>
                            <this.RenderContact />
                            <div className="text-center bg-success pt-2 pb-2" width="100%" onClick={this.handleSubmit}>
                                <Link to="/" onClick={(() => this.handleClear(-1))} className="text-light" ><strong >PLACE ORDER</strong></Link>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div>
                            <this.RenderEmptyCart />
                        </div>
                    )}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        cart: state.cart,
        total: state.total,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) },
        clearCart: (id) => { dispatch(clearCart(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)


