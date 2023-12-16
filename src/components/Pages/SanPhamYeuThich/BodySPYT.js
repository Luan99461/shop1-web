import './style.css';
function BodySPYT() {
    return (
        <section className="page">
            <div className="container container--wishlist">
                <div className="content-page rte ">
                    <h1 className="title-page d-none">
                        <span>Sản phẩm yêu thích</span>
                    </h1>
                    <div id="list-favorite">
                        <div className="list-favorite-right" data-type="wishlist">
                            <div className="list-favorite-main">
                                <div className="list-favorite-list row row-fix">
                                    <div className="list-favorite-main-top-error col-lg-12 col-md-12 col-sm-12 col-12 no-padding">
                                        <span
                                            style={{ display: "block" }}
                                            className="alert alert-warning"
                                            role="alert"
                                        >
                                            Bạn chưa có sản phẩm yêu thích nào!
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="open-filters" className="open-filters d-lg-none d-xl-none">
                <i className="fa fa-filter" />
                <span>Lọc</span>
            </div>
        </section>
    );
}
export default BodySPYT;