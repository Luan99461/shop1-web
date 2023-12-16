import './information.css';
function Information() {
    return (<div className="box-all">
        <div className="box-text">
            <p>Về chúng tôi</p>
            <h1 className="text-dola">Dola Furniture</h1>
            <p>Với mong muốn phát triển thương hiệu Việt bằng nội lực, Dola Furniture, đã chú trọng vào thiết kế và sản xuất nội thất trong nước.Danh mục sản phẩm của Dola Furniture thường xuyên được đổi mới và cập nhật,liên tục cung cấp cho khách hàng các dòng sản phẩm theo xu hướng mới nhất.</p>
            <div className="icon-all">
                <div className="icon-car">
                    <img src="https://bizweb.dktcdn.net/100/480/479/themes/900388/assets/chinhsach_1.png?1700208175302" alt="" />
                    <p className='name'>Miễn phí vận chuyển</p>
                    <p>Cho tất cả đơn hàng trong nội thành phố Đà Nẵng</p>
                </div>  
                <div className="icon-round">
                    <img src="https://bizweb.dktcdn.net/100/480/479/themes/900388/assets/chinhsach_2.png?1700208175302" alt="" />
                    <p className='name'>Miễn phí đổi-trả</p>
                    <p>Đối với sản phẩm lỗi sản xuất hoặc vận chuyển</p>
                </div>
                <div className="icon-call">
                    <img src="https://bizweb.dktcdn.net/100/480/479/themes/900388/assets/chinhsach_3.png?1700208175302" alt="" />
                    <p className='name'>Hỗ trợ nhanh chóng</p>
                    <p>Gọi Hotline:1900IT22B để hỗ trợ ngay</p>
                </div>
            </div>
        </div>
        <div className="box-photo">
            <img src="https://bizweb.dktcdn.net/100/480/479/themes/900388/assets/about_image.png?1700208175302" alt=""></img>
        </div>

    </div>
    );

}
export default Information;