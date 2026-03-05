function About() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1>🍳 Công thức nấu ăn đơn giản</h1>
        <p className="text-muted">
          Nơi khám phá và chia sẻ những công thức nấu ăn ngon từ khắp nơi trên thế giới
        </p>
      </div>

      <div className="row g-4">
        <div className="col-md-4 text-center">
          <h4>🔎 Tìm kiếm dễ dàng</h4>
          <p className="text-muted">
            Tìm món ăn theo tên, nguyên liệu hoặc nền ẩm thực chỉ trong vài giây.
          </p>
        </div>

        <div className="col-md-4 text-center">
          <h4>🍜 Nhiều công thức</h4>
          <p className="text-muted">
            Hàng trăm công thức nấu ăn từ Việt Nam, Nhật Bản, Ý và nhiều quốc gia khác.
          </p>
        </div>

        <div className="col-md-4 text-center">
          <h4>📖 Hướng dẫn chi tiết</h4>
          <p className="text-muted">
            Mỗi công thức đều có từng bước nấu ăn kèm hình ảnh minh họa rõ ràng.
          </p>
        </div>
      </div>

      <div className="mt-5">
        <h3>🎯 Mục tiêu của chúng tôi</h3>
        <p className="text-muted">
          Công thức nấu ăn đơn giản được xây dựng nhằm giúp mọi người dễ dàng tìm kiếm,
          học hỏi và chia sẻ các công thức nấu ăn. Chúng tôi mong muốn
          việc nấu ăn trở nên đơn giản và thú vị hơn mỗi ngày.
        </p>
      </div>
    </div>
  );
}

export default About;