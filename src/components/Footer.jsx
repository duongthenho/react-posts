function Footer() {
  return (
    <footer
      className="text-light mt-5"
      style={{
        background:
          "linear-gradient(180deg, #0b132b, #1c2541)"
      }}
    >
      <div className="container py-5">

        <div className="row gy-4">

          <div className="col-md-5">
            <h5 className="fw-bold mb-3">🍳 Công thức nấu ăn đơn giản</h5>
            <p className="text-secondary small">
              Ứng dụng khám phá và tìm kiếm công thức nấu ăn.
              Giao diện đơn giản, dễ sử dụng, phù hợp cho mọi người.
            </p>
          </div>

          <div className="col-md-3">
            <h6 className="fw-semibold mb-3">Khám phá</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <a href="/" className="text-decoration-none text-secondary">
                  Trang chủ
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-decoration-none text-secondary">
                  Công thức
                </a>
              </li>
              <li>
                <a href="/about" className="text-decoration-none text-secondary">
                  Giới thiệu
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6 className="fw-semibold mb-3">Liên hệ</h6>
            <p className="small text-secondary mb-1">
              📧 nguyenvantest@gmail.com
            </p>
            <p className="small text-secondary mb-0">
              📍 Việt Nam
            </p>
          </div>

        </div>

        <hr className="border-secondary my-4" />

        <div className="text-center small text-secondary">
          © {new Date().getFullYear()} Công thức nấu ăn đơn giản. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;