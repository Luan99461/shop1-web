import './HTCH.css';
function BodyHTCH() {
    return (
        <section className="page page-he-thong">
            <div className="container">
                <div className="hethong-info">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="item">
                                <div className="thump">
                                    <img
                                        src="//bizweb.dktcdn.net/100/480/479/themes/900388/assets/icon_hethong1.png?1700208175302"
                                        alt="Hệ thống 8 cửa hàng
<br>Trên toàn quốc"
                                        title="Hệ thống 8 cửa hàng
<br>Trên toàn quốc"
                                    />
                                </div>
                                <span>
                                    Hệ thống 8 cửa hàng
                                    <br />
                                    Trên toàn quốc
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="item">
                                <div className="thump">
                                    <img
                                        src="//bizweb.dktcdn.net/100/480/479/themes/900388/assets/icon_hethong2.png?1700208175302"
                                        alt="Hơn 100 nhân viên<br>
Để phục vụ quý khách"
                                        title="Hơn 100 nhân viên<br>
Để phục vụ quý khách"
                                    />
                                </div>
                                <span>
                                    Hơn 100 nhân viên
                                    <br />
                                    Để phục vụ quý khách
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="item">
                                <div className="thump">
                                    <img
                                        src="//bizweb.dktcdn.net/100/480/479/themes/900388/assets/icon_hethong3.png?1700208175302"
                                        alt="Mở cửa 8-22h<br>
cả CN & Lễ tết"
                                        title="Mở cửa 8-22h<br>
cả CN & Lễ tết"
                                    />
                                </div>
                                <span>
                                    Mở cửa 8-22h
                                    <br />
                                    cả CN &amp; Lễ tết
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 d-none">
                        <div className="page-title category-title">
                            <h1 className="title-head d-none">
                                <a href="#" />
                            </h1>
                        </div>
                        <div className="content-page rte"></div>
                    </div>
                    <div className="col-md-5 col-lg-4 col-md-12 col-12 col-left">
                        <div className="option-chos">
                            <div className="group-option">
                                <div className="group-city group">
                                    <select id="city" className="select">
                                        <option value="ALL" selected="">
                                            Chọn tỉnh thành
                                        </option>
                                        Hà Nội
                                        <option value="Hà Nội">Hà Nội</option>
                                        Hồ Chí Minh
                                        <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                                        Đà Nẵng
                                        <option value="Đà Nẵng">Đà Nẵng</option>
                                        Bình Dương
                                        <option value="Bình Dương">Bình Dương</option>
                                        Cần Thơ
                                        <option value="Cần Thơ">Cần Thơ</option>
                                    </select>
                                </div>
                                <div className="group-district group">
                                    <select id="district" className="select" disabled="">
                                        <option value="ALL">Chọn quận/huyện</option>
                                    </select>
                                </div>
                            </div>
                            <div className="info-store info-block">
                                <div
                                    data-local="Hồ Chí Minh"
                                    data-district="Quận 11"
                                    className="store-list"
                                >
                                    <span className="name-cuahang">Dola Sài Gòn</span>
                                    <span
                                        className="store-name"
                                        data-url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.518261716127!2d106.65095971411642!3d10.771561562230547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4964c382dd%3A0xb61978d7651a271f!2zUGjhuqduIG3hu4FtIHF14bqjbiBsw70gYsOhbiBow6BuZyBTYXBvIC0gSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1649778540165!5m2!1svi!2s"
                                    >
                                        <b>Địa chỉ:</b> Tầng 3, 70 Lữ Gia, Phường 15, Quận 11, Thành phố
                                        Hồ Chí Minh
                                    </span>
                                    <span className="store-phone">
                                        <b>Hotline:</b>{" "}
                                        <a className="phone-url" href="tel:1900 6750">
                                            1900 6750
                                        </a>
                                    </span>
                                </div>{" "}
                                <div
                                    data-local="Bình Dương"
                                    data-district="TP.Thủ Dầu Một"
                                    className="store-list"
                                >
                                    <span className="name-cuahang">Dola Bình Dương</span>
                                    <span
                                        className="store-name"
                                        data-url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.9413500336022!2d106.66983361411785!3d10.967799658632787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d1f5ea2844d1%3A0x68ff2239eeb3a9a9!2zMTY5IE5ndXnhu4VuIEjhu691IEPhuqNuaCwgUGjDuiBUaOG7jSwgVGjhu6cgROG6p3UgTeG7mXQsIELDrG5oIETGsMahbmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1649778686066!5m2!1svi!2s"
                                    >
                                        <b>Địa chỉ:</b> 169 / 34 Nguyễn Hữu Cảnh, Phường Phú Thọ, TP.Thủ
                                        Dầu Một, Tỉnh Bình Dương
                                    </span>
                                    <span className="store-phone">
                                        <b>Hotline:</b>{" "}
                                        <a className="phone-url" href="tel:1900 6750">
                                            1900 6750
                                        </a>
                                    </span>
                                </div>{" "}
                                <div
                                    data-local="Cần Thơ"
                                    data-district="Quận Ninh Kiều"
                                    className="store-list"
                                >
                                    <span className="name-cuahang">Dola Cần Thơ</span>
                                    <span
                                        className="store-name"
                                        data-url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.7286179369694!2d105.7567164141113!3d10.039238575113611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0895e8b677aa1%3A0xd73b3c9a031d237f!2zS0RDIFRo4bubaSBOaOG7sXQ!5e0!3m2!1svi!2s!4v1649778804218!5m2!1svi!2s"
                                    >
                                        <b>Địa chỉ:</b> 81 đường Phan Huy Chú, KDC Thới Nhựt I, Phường
                                        An Khánh, Quận Ninh Kiều, Tp Cần Thơ
                                    </span>
                                    <span className="store-phone">
                                        <b>Hotline:</b>{" "}
                                        <a className="phone-url" href="tel:1900 6750">
                                            1900 6750
                                        </a>
                                    </span>
                                </div>{" "}
                                <div
                                    data-local="Hà Nội"
                                    data-district="Quận Ba Đình"
                                    className="store-list"
                                >
                                    <span className="name-cuahang">Dola Hà Nội</span>
                                    <span
                                        className="store-name"
                                        data-url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0889927657763!2d105.8402373144074!3d21.029124893142946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab5be62341c1%3A0x6eaeebe47b93fe04!2zVMOyYSBuaMOgIHPhu5EgNSDEkGnhu4duIEJpw6puIFBo4bun!5e0!3m2!1svi!2s!4v1648984122910!5m2!1svi!2s"
                                    >
                                        <b>Địa chỉ:</b> Tầng 6 - 266 Đội Cấn, Phường Liễu Giai, Quận Ba
                                        Đình, Hà Nội
                                    </span>
                                    <span className="store-phone">
                                        <b>Hotline:</b>{" "}
                                        <a className="phone-url" href="tel:1900 6750">
                                            1900 6750
                                        </a>
                                    </span>
                                </div>{" "}
                                <div
                                    data-local="Đà Nẵng"
                                    data-district="Quận Hải Châu"
                                    className="store-list"
                                >
                                    <span className="name-cuahang">Dola Đà Nẵng</span>
                                    <span
                                        className="store-name"
                                        data-url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.610608676567!2d108.21247971416946!3d16.03377334464764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219ecd6d00127%3A0x5e1f8719efd14c01!2zMTgxIEh14buzbmggVOG6pW4gUGjDoXQsIEhvw6AgQ8aw4budbmcgTmFtLCBI4bqjaSBDaMOidSwgxJDDoCBO4bq1bmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1649778942084!5m2!1svi!2s"
                                    >
                                        <b>Địa chỉ:</b> 181 đường Huỳnh Tấn Phát, Phường Hoà Cường Nam,
                                        Quận Hải Châu, TP Đà Nẵng
                                    </span>
                                    <span className="store-phone">
                                        <b>Hotline:</b>{" "}
                                        <a className="phone-url" href="tel:1900 6750">
                                            1900 6750
                                        </a>
                                    </span>
                                </div>{" "}
                                <div
                                    data-local="Hà Nội"
                                    data-district="Quận Cầu Giấy"
                                    className="store-list"
                                >
                                    <span className="name-cuahang">Dola Hoàng Quốc Việt</span>
                                    <span
                                        className="store-name"
                                        data-url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.665705597794!2d105.78940821424565!3d21.046057892565063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab3048cf1bc9%3A0xf383d5c388f26254!2zMzggSG_DoG5nIFF14buRYyBWaeG7h3QsIE5naMSpYSBUw6JuLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1650036591243!5m2!1svi!2s"
                                    >
                                        <b>Địa chỉ:</b> 38 Hoàng Quốc Việt, Phường Nghĩa Tân, Quận Cầu
                                        Giấy, Hà Nội
                                    </span>
                                    <span className="store-phone">
                                        <b>Hotline:</b>{" "}
                                        <a className="phone-url" href="tel:1900 6750">
                                            1900 6750
                                        </a>
                                    </span>
                                </div>{" "}
                                <div
                                    data-local="Hà Nội"
                                    data-district="Quận Cầu Giấy"
                                    className="store-list"
                                >
                                    <span className="name-cuahang">Dola Hoàng Đạo Thúy</span>
                                    <span
                                        className="store-name"
                                        data-url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6317401375168!2d105.80027631424484!3d21.007393993884758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aca10d52e8d7%3A0x27fe5187e5401dac!2zMTUwIEhvw6BuZyDEkOG6oW8gVGjDunksIFRydW5nIEhvw6AsIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1650036686730!5m2!1svi!2s"
                                    >
                                        <b>Địa chỉ:</b> 150 Hoàng Đạo Thúy, Phường Trung Hòa, Quận Cầu
                                        Giấy, Hà Nội
                                    </span>
                                    <span className="store-phone">
                                        <b>Hotline:</b>{" "}
                                        <a className="phone-url" href="tel:1900 6750">
                                            1900 6750
                                        </a>
                                    </span>
                                </div>{" "}
                                <div
                                    data-local="Hà Nội"
                                    data-district="Quận Hà Đông"
                                    className="store-list"
                                >
                                    <span className="name-cuahang">Dola Trần Phú</span>
                                    <span
                                        className="store-name"
                                        data-url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6566429892996!2d106.67554851411637!3d10.760923462423836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1d9884721d%3A0x8dc3d6a4115c6305!2zOTUgVHLhuqduIFBow7osIFBoxrDhu51uZyA0LCBRdeG6rW4gNSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1650036943196!5m2!1svi!2s"
                                    >
                                        <b>Địa chỉ:</b> 95 Trần Phú, Phường Văn Quán, Quận Hà Đông, Hà
                                        Nội
                                    </span>
                                    <span className="store-phone">
                                        <b>Hotline:</b>{" "}
                                        <a className="phone-url" href="tel:1900 6750">
                                            1900 6750
                                        </a>
                                    </span>
                                </div>{" "}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-8 col-md-12 col-12 col-right">
                        <div className="wrapcontact">
                            <div className="iFrameMap">
                                <div id="map_contact" className="map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3919.5692504136196!2d106.696811!3d10.767643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1573f5d56f%3A0x300ecbf0d5ab5050!2zMTAgVHLhu4tuaCBWxINuIEPhuqVuLCBQaMaw4budbmcgQ-G6p3Ugw5RuZyBMw6NuaCwgUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2sus!4v1647421770627!5m2!1svi!2sus"
                                        width={600}
                                        height={450}
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                    />{" "}
                                </div>
                            </div>
                        </div>
                        <div className="pagebody d-none">
                            <iframe src="" width="100%" height={500} />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default BodyHTCH