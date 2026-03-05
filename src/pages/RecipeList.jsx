import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CUISINES, PAGE_SIZE, API_BASE_URL } from "../constants/constants";

function RecipeList() {
  // input state
  const [keyword, setKeyword] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [cuisine, setCuisine] = useState("");

  // state dùng để search
  const [searchParams, setSearchParams] = useState({
    title: "",
    ingredient: "",
    cuisine: "",
  });

  const [recipes, setRecipes] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // 🔥 Chỉ call API khi bấm nút tìm kiếm
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);

        const params = new URLSearchParams();

        if (searchParams.title) params.append("title", searchParams.title);

        if (searchParams.ingredient)
          params.append("ingredient", searchParams.ingredient);

        if (searchParams.cuisine)
          params.append("cuisine", searchParams.cuisine);

        const res = await fetch(`${API_BASE_URL}/recipes?${params.toString()}`);

        const data = await res.json();

        // bảo vệ nếu API trả null
        setRecipes(Array.isArray(data) ? data : []);
        setPage(1);
      } catch (err) {
        console.error("Fetch error:", err);
        setRecipes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [searchParams]);

  // 🔥 Phân trang frontend
  const totalPages = Math.ceil(recipes.length / PAGE_SIZE);

  const start = (page - 1) * PAGE_SIZE;
  const pagedRecipes = recipes.slice(start, start + PAGE_SIZE);

  const getPages = () => {
    const delta = 1;
    const pages = [];

    const left = Math.max(2, page - delta);
    const right = Math.min(totalPages - 1, page + delta);

    pages.push(1);

    if (left > 2) {
      pages.push("...");
    }

    for (let i = left; i <= right; i++) {
      pages.push(i);
    }

    if (right < totalPages - 1) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  // Khi bấm nút tìm kiếm
  const handleSearch = () => {
    setSearchParams({
      title: keyword.trim(),
      ingredient: ingredient.trim(),
      cuisine: cuisine,
    });
  };
  // Khi bấm nút bỏ lọc
  const handleReset = () => {
  setKeyword("");
  setIngredient("");
  setCuisine("");

  setSearchParams({
    title: "",
    ingredient: "",
    cuisine: "",
  });

  setPage(1);
};
  return (
    <div className="container py-4">
      {/* FILTER */}
      <div className="py-2" style={{ zIndex: 1020 }}>
        <div className="row g-2 mb-2">
          <div className="col-md-3">
            <input
              className="form-control"
              placeholder="Tìm theo tên món..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <input
              className="form-control"
              placeholder="Lọc theo nguyên liệu..."
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <select
              className="form-select"
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
            >
              <option value="">Tất cả ẩm thực</option>
              {CUISINES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-3">
            <div className="d-flex gap-2">
              <button
                className="btn btn-primary flex-fill"
                onClick={handleSearch}
              >
                Tìm kiếm
              </button>

              <button
                className="btn btn-outline-secondary flex-fill"
                onClick={handleReset}
              >
                Bỏ lọc
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* LOADING */}
      {loading && <div className="text-center">Đang tải...</div>}

      {/* LIST */}
      <div className="row g-4">
        {pagedRecipes.map((r) => (
          <div key={r.id} className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm">
              <img
                src={r.image}
                className="card-img-top"
                alt={r.title}
                style={{ height: 190, objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{r.title}</h5>

                <p className="card-text text-muted mb-1">
                  <span className="badge bg-warning text-dark">
                    {r.cuisine}
                  </span>
                </p>

                <div
                  className="text-muted small"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    marginBottom: "6px",
                  }}
                  title={r.ingredients?.join(", ")}
                >
                  Nguyên liệu: {r.ingredients?.join(", ")}
                </div>

                <div className="mt-auto">
                  <div className="d-flex align-items-center">
                    <div className="w-50 text-muted small">
                      👁 {r.views ?? 0} lượt xem
                    </div>

                    <div className="w-50 text-end">
                      <Link
                        to={`/recipes/${r.id}`}
                        className="btn btn-primary w-100"
                      >
                        Xem chi tiết
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {!loading && pagedRecipes.length === 0 && (
          <div className="text-center">Không có kết quả</div>
        )}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <nav className="mt-4">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => setPage((p) => p - 1)}
              >
                Trước
              </button>
            </li>

            {getPages().map((p, i) =>
              p === "..." ? (
                <li key={`dot-${i}`} className="page-item disabled">
                  <span className="page-link">…</span>
                </li>
              ) : (
                <li
                  key={p}
                  className={`page-item ${page === p ? "active" : ""}`}
                >
                  <button className="page-link" onClick={() => setPage(p)}>
                    {p}
                  </button>
                </li>
              ),
            )}

            <li
              className={`page-item ${page === totalPages ? "disabled" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => setPage((p) => p + 1)}
              >
                Sau
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default RecipeList;
