
import React, { useEffect } from 'react';
import Swiper from 'swiper';

import 'swiper/swiper-bundle.css';
import './RateWeb.css';

function RateWeb() {
  useEffect(() => {
    const swiper = new Swiper('.danhgia-slider', {
      // Cấu hình của Swiper
      // Ví dụ:
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    return () => {
      // Hủy bỏ Swiper khi component bị hủy
      swiper.destroy();
    };
  }, []);
    return (
        <section className="section_danhgia">
            <div className="container">
                <h2 className="title-module">
                    <span>Đánh giá từ khách hàng</span>
                </h2>
                <div className="thump-image">
                    <div
                        className="bacground"
                        style={{
                            backgroundImage:
                                "url(//bizweb.dktcdn.net/100/480/479/themes/900388/assets/background_danhgia.jpg?1700208175302)"
                        }}
                    ></div>
                    <div className="thump-danhgia col-11 col-sm-10 col-lg-9">
                        <div className="danhgia-slider swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                            <div
                                className="swiper-wrapper"
                                style={{
                                    transform: "translate3d(0px, 0px, 0px)",
                                    transitionDuration: "0ms"
                                }}
                            >
                                <div
                                    className="swiper-slide swiper-slide-active"
                                    style={{ width: 793 }}
                                >
                                    <div className="item">
                                        <div className="info">
                                            <div className="icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 448 512"
                                                >
                                                    <path d="M96 96C42.98 96 0 138.1 0 192s42.98 96 96 96c11.28 0 21.95-2.305 32-5.879V288c0 35.3-28.7 64-64 64c-17.67 0-32 14.33-32 32s14.33 32 32 32c70.58 0 128-57.42 128-128V192C192 138.1 149 96 96 96zM448 192c0-53.02-42.98-96-96-96s-96 42.98-96 96s42.98 96 96 96c11.28 0 21.95-2.305 32-5.879V288c0 35.3-28.7 64-64 64c-17.67 0-32 14.33-32 32s14.33 32 32 32c70.58 0 128-57.42 128-128V192z" />
                                                </svg>
                                            </div>
                                            <div className="avatar">
                                                <img
                                                    width={80}
                                                    height={80}
                                                    alt="Hoàng Dung"
                                                    className="lazyload loaded"
                                                    src="https://yt3.ggpht.com/qoNJSK9xsuTjUQzNpZwfiu9WcHf6D8t6TWp8FNTYcxcVFLnvMgbbqI5NWNgiATdwChFjwI3SEbQ=s88-c-k-c0x00ffffff-no-rj"
                                                    data-src="//bizweb.dktcdn.net/100/480/479/themes/900388/assets/danhgia_1.jpg?1700208175302"
                                                    data-was-processed="true"
                                                />
                                                <div className="testimonial">
                                                    <h5>Thạch Hạo</h5>
                                                    <span>Hoang Thiên Đế </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <p>
                                                Những mẫu phòng ngủ của Shop mang đến cảm giác ấm
                                                cúng, gần gũi và thoải mái. Mọi thứ đều ở đây tôi đều rất
                                                ưng ý. Cảm ơn Shop đã mang lại trãi nghiệm thật
                                                tốt khi sử dụng sản phẩm ở đây.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="swiper-slide swiper-slide-next"
                                    style={{ width: 793 }}
                                >
                                    <div className="item">
                                        <div className="info">
                                            <div className="icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 448 512"
                                                >
                                                    <path d="M96 96C42.98 96 0 138.1 0 192s42.98 96 96 96c11.28 0 21.95-2.305 32-5.879V288c0 35.3-28.7 64-64 64c-17.67 0-32 14.33-32 32s14.33 32 32 32c70.58 0 128-57.42 128-128V192C192 138.1 149 96 96 96zM448 192c0-53.02-42.98-96-96-96s-96 42.98-96 96s42.98 96 96 96c11.28 0 21.95-2.305 32-5.879V288c0 35.3-28.7 64-64 64c-17.67 0-32 14.33-32 32s14.33 32 32 32c70.58 0 128-57.42 128-128V192z" />
                                                </svg>
                                            </div>
                                            <div className="avatar">
                                                <img
                                                    width={80}
                                                    height={80}
                                                    alt="Hồng Liêm"
                                                    className="lazyload loaded"
                                                    src="https://i.pinimg.com/564x/6a/29/38/6a29380a72e624fd23d89efc52ec9e27.jpg"
                                                    data-src="//bizweb.dktcdn.net/100/480/479/themes/900388/assets/danhgia_2.jpg?1700208175302"
                                                    data-was-processed="true"
                                                />
                                                <div className="testimonial">
                                                    <h5>Tiêu Viêm</h5>
                                                    <span>Viêm Đế</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <p>
                                                Những mẫu phòng ngủ của Shop mang đến cảm giác ấm
                                                cúng, gần gũi và thoải mái. Mọi thứ đều ở đây tôi đều rất
                                                ưng ý. Cảm ơn Shop đã mang lại trãi nghiệm thật
                                                tốt khi sử dụng sản phẩm ở đây.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide" style={{ width: 793 }}>
                                    <div className="item">
                                        <div className="info">
                                            <div className="icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 448 512"
                                                >
                                                    <path d="M96 96C42.98 96 0 138.1 0 192s42.98 96 96 96c11.28 0 21.95-2.305 32-5.879V288c0 35.3-28.7 64-64 64c-17.67 0-32 14.33-32 32s14.33 32 32 32c70.58 0 128-57.42 128-128V192C192 138.1 149 96 96 96zM448 192c0-53.02-42.98-96-96-96s-96 42.98-96 96s42.98 96 96 96c11.28 0 21.95-2.305 32-5.879V288c0 35.3-28.7 64-64 64c-17.67 0-32 14.33-32 32s14.33 32 32 32c70.58 0 128-57.42 128-128V192z" />
                                                </svg>
                                            </div>
                                            <div className="avatar">
                                                <img
                                                    width={80}
                                                    height={80}
                                                    alt="Ngọc Tuyến"
                                                    className="lazyload loaded"
                                                    src="https://i.pinimg.com/564x/ad/e0/b0/ade0b026009e74d10aa33f24dd93f3d7.jpg"
                                                    data-src="//bizweb.dktcdn.net/100/480/479/themes/900388/assets/danhgia_3.jpg?1700208175302"
                                                    data-was-processed="true"
                                                />
                                                <div className="testimonial">
                                                    <h5>Bình Phàm</h5>
                                                    <span>Diệp Thiên Đế</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <p>
                                                Những mẫu phòng ngủ của Shop mang đến cảm giác ấm
                                                cúng, gần gũi và thoải mái. Mọi thứ đều ở đây tôi đều rất
                                                ưng ý. Cảm ơn Shop đã mang lại trãi nghiệm thật
                                                tốt khi sử dụng sản phẩm ở đây.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                                <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
                                <span className="swiper-pagination-bullet" />
                                <span className="swiper-pagination-bullet" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default RateWeb;