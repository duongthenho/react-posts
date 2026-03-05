function Contact() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1>📩 Liên hệ</h1>
        <p className="text-muted">
          Nếu bạn có câu hỏi hoặc muốn đóng góp công thức mới, hãy gửi cho chúng tôi!
        </p>
      </div>

      <div className="row g-4">
        {/* FORM */}
        <div className="col-md-6">
          <h4>Gửi tin nhắn</h4>

          <form>
            <div className="mb-3">
              <label className="form-label">Tên</label>
              <input type="text" className="form-control" placeholder="Nhập tên của bạn" />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="example@email.com" />
            </div>

            <div className="mb-3">
              <label className="form-label">Nội dung</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Nhập nội dung..."
              ></textarea>
            </div>

            <button className="btn btn-primary">Gửi</button>
          </form>
        </div>

        {/* CONTACT INFO */}
        <div className="col-md-6">
          <h4>Thông tin liên hệ</h4>

          <p className="text-muted">
            Bạn có thể liên hệ với chúng tôi qua các thông tin dưới đây.
          </p>

          <ul className="list-unstyled">
            <li className="mb-2">📍 Hà Nội, Việt Nam</li>
            <li className="mb-2">📧 nguyenvantest@gmail.com</li>
            <li className="mb-2">📞 +84 123 456 789</li>
          </ul>

          <div className="mt-4">
            <h6>Theo dõi chúng tôi</h6>
            <p className="text-muted">
              Facebook • Instagram • YouTube
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;