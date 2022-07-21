import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            telnum: '',
            email: '',
            agree: '',
            contactType: 'Tel.',
            message: '',
            touched: {
                name: true,
                telnum: true,
                email: true,
            }
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (event) => {
        alert(`Current State is: ${JSON.stringify(this.state)}`);
        event.preventDefault();
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(name, telnum, email) {
        const errors = {
            name: '',
            telnum: '',
            email: '',
        };
        if (this.state.touched.name && name === '') {
            errors.name = ' ';
        } else if (this.state.touched.name && name.length < 3) {
            errors.name = 'Name should be >= 3 characters';
        } else if (this.state.touched.name && name.length > 50) {
            errors.name = 'Name should be <= 50 characters';
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

    render() {
        const errors = this.validate(this.state.name, this.state.telnum, this.state.email);
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="menNew text-center rounded border border-warning mt-4">
                    <div id="New">
                        <h1 className="text-danger">HỆ THỐNG SHOWROOM</h1>
                    </div> <br />
                    <div className="row">
                        <div className="col-12 col-md-3 col-sm-6 ">
                            <a target="_blank" href="https://www.google.com/maps?ll=10.778774,106.681827&z=15&t=m&hl=en-US&gl=US&mapclient=embed&cid=2364577483860799272">
                                <img src="https://orchard.vn/wp-content/uploads/2019/08/228-1.jpg" alt="Location" width="96%" />
                                <div className="showroom-info">
                                    <p className="text-danger text-center"><strong>Showroom 228 Lý Chính Thắng</strong></p>
                                    <p className="text-secondary">228 Lý Chính Thắng, P.9, Q.3, Tp. Hồ Chí Minh</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-12 col-md-3 col-sm-6 ">
                            <a target="_blank" href="https://www.google.com/maps/place/Orchard.vn+N%C6%B0%E1%BB%9Bc+Hoa+M%E1%BB%B9+Ph%E1%BA%A9m+349+Ho%C3%A0ng+V%C4%83n+Th%E1%BB%A5+(L%C4%83ng+Cha+C%E1%BA%A3)/@10.8001717,106.6610575,21z/data=!4m13!1m7!3m6!1s0x31752930f98b0167:0xce6740adeb2a7ecb!2zMzQ5IEhvw6BuZyBWxINuIFRo4bulLCBQaMaw4budbmcgMiwgVMOibiBCw6xuaCwgSOG7kyBDaMOtIE1pbmg!3b1!8m2!3d10.800053!4d106.661197!3m4!1s0x3175298039c6760b:0xfff628d916b5e98a!8m2!3d10.8001976!4d106.6611522">
                                <img src="https://orchard.vn/wp-content/uploads/2019/08/349-4.jpg" alt="Location" width="96%" />
                                <div className="showroom-info">
                                    <p className="text-danger text-center"><strong>Showroom 349 Hoàng Văn Thụ</strong></p>
                                    <p className="text-secondary">349 Hoàng Văn Thụ, P.2, Q.Tân Bình, Tp. Hồ Chí Minh</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-12 col-md-3 col-sm-6 ">
                            <a target="_blank" href="https://www.google.com/maps/place/Orchard/@10.7960927,106.6769754,16z/data=!4m5!3m4!1s0x317529d42eef6547:0x4c80bf4e8750ab79!8m2!3d10.7927459!4d106.6801209">
                                <img src="https://orchard.vn/wp-content/uploads/2021/10/showroom-27.jpg" alt="Location" width="96%" />
                                <div className="showroom-info">
                                    <p className="text-danger text-center"><strong>Showroom 27 Nguyễn Văn Trỗi</strong></p>
                                    <p className="text-secondary">27 Nguyễn Văn Trỗi, Phường 15, Phú Nhuận, Hồ Chí Minh</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-12 col-md-3 col-sm-6 ">
                            <a target="_blank" href="https://www.google.com/maps/place/Orchard.vn+N%C6%B0%E1%BB%9Bc+Hoa+%26+M%E1%BB%B9+Ph%E1%BA%A9m+219+Nguy%E1%BB%85n+Th%E1%BB%8B+Th%E1%BA%ADp/@10.738201,106.7004676,14z/data=!4m6!3m5!1s0x31752f198007635f:0xc88fefa3107f36c3!8m2!3d10.738201!4d106.7179771!15sCh1vcmNoYXJkIG5ndXnhu4VuIHRo4buLIHRo4bqtcCIDiAEBkgENcGVyZnVtZV9zdG9yZQ?shorturl=1">
                                <img src="https://orchard.vn/wp-content/uploads/2021/10/showroom-219.jpg" alt="Location" width="96%" />
                                <div className="showroom-info">
                                    <p className="text-danger text-center"><strong>Showroom 219 Nguyễn Thị Thập</strong></p>
                                    <p className="text-secondary">219 Nguyễn Thị Thập, Tân Phú, Quận 7, Hồ Chí Minh</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="name" md={2}>Name</Label>
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
                                <Label htmlFor="telnum" md={2}>Tel: </Label>
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
                                <Label htmlFor="email" md={2}>Email: </Label>
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
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange} />
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input type="select" name="contactType"
                                        value={this.state.contactType}
                                        onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message"
                                        rows="12"
                                        value={this.state.message}
                                        onChange={this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>

            </div>
        )
    };
}

export default Contact;