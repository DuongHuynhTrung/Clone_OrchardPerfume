import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Nav, Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon } from "reactstrap";
import { Link, NavLink } from 'react-router-dom';
import { ModalTitle } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";



class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
        }
    }
    toggleNav = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleLogin = (event) => {
        this.toggleModal();
        alert(`    Username: ${this.username.value}
    Password: ${this.password.value}
    Remember: ${this.remember.checked}`);
        event.preventDefault();
    }
    render() {

        return (
            <div className="header fixed-top sticky-top" >
                <Navbar light expand="md">
                    <div className="container">
                        <NavbarBrand className="mx-auto mb-2" href="/" ><img src="/image/logo.png" height="60px" alt="Logo" /></NavbarBrand>
                        <Nav className="d-flex" navbar >
                            <NavItem>
                                <Button outline onClick={this.toggleModal}>
                                    <i className="fa fa-sign-in fa-lg"></i>
                                </Button>
                            </NavItem>
                            <NavItem>
                                <Link to="/cart">
                                    <Button outline>
                                        <i className="text-secondary fa fa-shopping-cart" ></i> &nbsp;
                                        <i className="bg-danger text-white rounded"> {this.props.numberCart}&nbsp;</i>
                                    </Button>
                                </Link>

                            </NavItem>
                        </Nav>
                        <InputGroup>
                            <Input type="text" id="search" placeholder="Tìm sản phảm, thương hiệu,...." />
                            <Button type="submit"><i className="fa fa-search"></i> Tìm kiếm</Button>
                        </InputGroup>
                    </div>
                </Navbar>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar >
                                <NavItem>
                                    <NavLink className="nav-link text-dark" to='/home'><span className="fa fa-home fa-lg"></span>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-dark" to='/aboutus'><span className="fa fa-info fa-lg"></span>About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-dark" to='/menu'><span className="fa fa-list fa-lg"></span>Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-dark" to='/contactus'><span className="fa fa-address-card fa-lg"></span>Contact</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <div>
                    <div className="container">
                        <div className="row row-header">
                            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                                <ModalHeader toggle={this.toggleModal} closeButton>
                                    <ModalTitle>Login</ModalTitle>
                                </ModalHeader>
                                <ModalBody>
                                    <Form onSubmit={this.handleLogin}>
                                        <FormGroup>
                                            <Label htmlFor="username">Username</Label>
                                            <Input type="text" id="username" name="username" innerRef={(input) => this.username = input} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="password">Password</Label>
                                            <Input type="text" id="password" name="password" innerRef={(input) => this.password = input} />
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input} /> Remember me
                                            </Label>
                                        </FormGroup>
                                        <Button type="submit" value="submit" color="primary">Login</Button>
                                    </Form>
                                </ModalBody>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        numberCart: state.numberCart,
    }
}

export default connect(mapStateToProps)(HeaderComponent);