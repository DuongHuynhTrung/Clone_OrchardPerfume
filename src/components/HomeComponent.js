import React from "react";
import CarouselPath from "./CarouselPath";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import { Link } from "react-router-dom";
import StarRating from "./StarRatingComponent";
import { connect } from "react-redux";
import { addToCart } from "../redux/addToCart";

class HomePage extends React.Component {
    handleClick = (id) => {
        this.props.addToCart(id);
    }
    NewProduct = ({ items }) => {

        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 5
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 5
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 3
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 2
            }
        };
        const newPerfume = items.map((item) => {

            return (
                <div>
                    <Card>
                        <Link to={`/menu/${item.sex}/${item.id}`}>
                            <CardImg src={item.image} alt={item.name} />
                        </Link>
                        <CardBody>
                            <CardTitle>{item.name}</CardTitle>
                            <CardText className="text-danger">
                                <div className="col-12 mb-2">
                                    {/* <strong>Giá: {Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }.format(item.price))}đ</strong> */}
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
            <Carousel responsive={responsive}>
                {newPerfume}
            </Carousel>
        )
    }
    render() {
        return (
            <div className="container mt-4">
                <CarouselPath />
                <div className="bestSeller text-center rounded border border-warning mt-4">
                    <div id="New">
                        <h1 className="text-danger">NƯỚC HOA BÁN CHẠY</h1>
                    </div> <br />
                    <this.NewProduct items={this.props.hotPerfume} />
                </div>
                <div className="menNew text-center rounded border border-warning mt-4">
                    <div id="New">
                        <h1 className="text-danger">NƯỚC HOA NAM MỚI VỀ</h1>
                    </div> <br />
                    <this.NewProduct items={this.props.newMenPerfume} />
                </div>
                <div className="womenNew text-center rounded border border-warning mt-4">
                    <div id="New">
                        <h1 className="text-danger">NƯỚC HOA NỮ MỚI VỀ</h1>
                    </div> <br />
                    <this.NewProduct items={this.props.newWomenPerfume} />
                </div>
                <div className="showroom text-center rounded border border-warning mt-4">
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
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(null, mapDispatchToProps)(HomePage)