import React from "react";
import { Link } from 'react-router-dom';

function FooterComponent(props) {
    return (
        <div className="footer mt-4 ">
            <div className="container">
                <div className="footer-inner text-light row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <h5>
                            <p><i class="glyphicon glyphicon-user"></i><strong>Về chúng tôi</strong></p>
                        </h5>
                        <p>
                            Ra đời vào ngày <strong>14/8/2004</strong> và hiện tại là nơi cung cấp hơn 200 nhãn hiệu nước hoa cao cấp trên thế giới.
                            Là website nước hoa đầu tiên tại Việt Nam. Định hướng của chúng tôi là trở thành nhà cung cấp nước hoa số 1 tại VN,
                            mang lại sự lựa chọn đa dạng, sự thuận tiện, tiết kiệm tiền & thời gian, đồng thời mang đến sự yên tâm & hài lòng đến với khách hàng.
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <h5>
                            <p><i class="glyphicon glyphicon-user"></i><strong>Hướng dẫn</strong></p>
                        </h5>
                        <ul className="list-unstyled">
                            <li>Cam Kết Từ Orchard</li>
                            <li>Đặt Hàng & Thanh Toán</li>
                            <li>Điều Khoản Mua Hàng</li>
                            <li>Bảo Hành Đổi Trả</li>
                            <li>Bảo Mật Thông Tin</li>
                            <li>Dịch Vụ Khách Hàng</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <h5>
                            <p><i class="glyphicon glyphicon-user"></i><strong>Liên hệ</strong></p>
                        </h5>
                        <p><a className="text-light" href="https://www.google.com/maps?ll=10.778774,106.681827&amp;z=15&amp;t=m&amp;hl=en-US&amp;gl=US&amp;mapclient=embed&amp;cid=2364577483860799272" rel="nofollow noopener"><strong>SHOWROOM 228 – <i class="glyphicon glyphicon-map-marker"></i> Bản Đồ (click xem)</strong><br />
                            228 Lý Chính Thắng, P.9, Q.3, Tp. Hồ Chí Minh</a></p>
                        <p><a className="text-light" href="https://goo.gl/maps/8mo2pc6FcCm" target="_blank" rel="nofollow noopener"><strong>SHOWROOM 349 – <i class="glyphicon glyphicon-map-marker"></i> Bản Đồ&nbsp;(click xem)</strong><br />
                            349 Hoàng Văn Thụ, P.2, Q.Tân Bình, Tp. Hồ Chí Minh ( Lăng Cha Cả )</a></p>
                        <p><a className="text-light" href="https://goo.gl/maps/zY9rQwBuVz7VokQZA" target="_blank" rel="nofollow noopener"><strong>SHOWROOM 27 – <i class="glyphicon glyphicon-map-marker"></i> Bản Đồ&nbsp;(click xem)</strong><br />
                            27 Nguyễn Văn Trỗi, Phường 15, Phú Nhuận, Hồ Chí Minh</a><br />
                            <a className="text-light" href="https://goo.gl/maps/zY9rQwBuVz7VokQZA" target="_blank" rel="nofollow noopener"><strong>SHOWROOM 219 – <i class="glyphicon glyphicon-map-marker"></i> Bản Đồ&nbsp;(click xem)</strong><br />
                                219 Nguyễn Thị Thập, Tân Phú, Quận 7, Hồ Chí Minh</a>
                        </p>
                        <p className="font-weight-bold"><i class="fa fa-phone"></i> TỔNG ĐÀI MIỄN PHÍ – <a className="text-danger" class="text-color-orchard" href="tel:18006122"><i class="glyphicon glyphicon-earphone"></i> 1800.6122</a><br />
                            <i class="fa fa-phone"></i> SỐ CỐ ĐỊNH – <a className="text-danger" class="text-color-orchard" href="tel:087 7511582"><i class="glyphicon glyphicon-earphone"></i> 0877.511.582</a>
                        </p>
                        <p><strong>Hợp Tác &amp; Góp Ý – <a className="text-danger" class="text-color-orchard" href="tel:0902589869">0902589869</a></strong></p>
                        <p><a className="text-danger" href="https://orchard.vn/category/tuyen-dung/"><strong>Tuyển Dụng</strong></a></p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <h5>
                            <p><i class="glyphicon glyphicon-user"></i><strong>Chúng tôi trên MXH</strong></p>
                        </h5>
                        <div class="textwidget">
                            <p>
                                <a href="https://m.me/orchardvn" target="_blank">
                                    <img src="https://orchard.vn/wp-content/uploads/2017/07/fb.png" alt="" height="50" />
                                </a>&nbsp;
                                <a href="https://zalo.me/3580274298351782783" target="_blank">
                                    <img src="https://orchard.vn/wp-content/uploads/2017/07/zalo.png" alt="" height="50" />;
                                </a>
                                <a href="https://www.youtube.com/channel/UC0svZYJlXxBdXu7uTFILzJQ" target="_blank">
                                    <img src="https://orchard.vn/images/companies/1/social/youtube-square-logo-3F9D037665-seeklogo.com.gif" alt="" height="50" />;
                                </a>
                                <a href="https://www.instagram.com/orchardvietnam/" target="_blank">
                                    <img src="https://orchard.vn/wp-content/uploads/2017/07/instagram.png" alt="" height="50" />
                                </a>
                                <a href="https://shopee.vn/orchard.vn_officialstore" target="_blank">
                                    <img src="https://orchard.vn/wp-content/uploads/2020/09/shopee.png" alt="" height="50" />
                                </a><br />
                                <a class="dmca-badge" title="DMCA.com Protection Status" href="https://www.dmca.com/Protection/Status.aspx?ID=3eb6d4ed-73c5-4fd6-aaa6-364e07b536df&amp;refurl=https://orchard.vn/gioi-thieu-trung-tam-nuoc-hoa/" target="_blank">
                                    <img src="https://images.dmca.com/Badges/DMCA_logo-grn-btn100w.png?ID=3eb6d4ed-73c5-4fd6-aaa6-364e07b536df" alt="DMCA.com Protection Status" />
                                </a><br />
                                <a href="https://url.orchard.vn/bo-cong-thuong" target="_blank">
                                    <img width="125" src="https://orchard.vn/images/companies/1/logodathongbao.png" alt="" height="47" />
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="footer-info border-top border-secondary">
                    <div className="text-center text-light col-auto mt-4">
                        <p>OFFICE 247 TSP CO.,LTD; 228 Lý Chính Thắng, P9, Q.3, TP HCM
                            <br />Mã số thuế: 0312942912  do Sở Kế hoạch đầu tư TP HCM cấp ngày 24/09/2014
                            <br />ĐT: 18006122 – 028.73051122 - Email: ceo@orchard.vn
                        </p>
                        <p>Liên kết: <a className="text-danger" href="https://mamamy.vn/san-pham/khan-uot-mamamy">Khăn Uớt</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterComponent;