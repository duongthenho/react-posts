import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { recipes } from "../data/recipes";

const PAGE_SIZE = 8;

function RecipeList() {
  const [keyword, setKeyword] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [page, setPage] = useState(1);

  const cuisines = [...new Set(recipes.map(r => r.cuisine))];

  const filteredRecipes = recipes.filter((r) => {
    const matchTitle = r.title
      .toLowerCase()
      .includes(keyword.toLowerCase());

    const matchIngredient = ingredient
      ? r.ingredients.some(i =>
          i.toLowerCase().includes(ingredient.toLowerCase())
        )
      : true;

    const matchCuisine = cuisine
      ? r.cuisine === cuisine
      : true;

    return matchTitle && matchIngredient && matchCuisine;
  });

  // reset về trang 1 khi filter thay đổi
  useEffect(() => {
    setPage(1);
  }, [keyword, ingredient, cuisine]);

  const totalPages = Math.ceil(filteredRecipes.length / PAGE_SIZE);

  const start = (page - 1) * PAGE_SIZE;
  const pagedRecipes = filteredRecipes.slice(
    start,
    start + PAGE_SIZE
  );
  const getPages = () => {
  const delta = 1; // số trang hai bên page hiện tại
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
  return (
    <div className="container py-4">
      {/* filter */}
      <div className="sticky-top bg-white py-2"
            style={{ zIndex: 1020 }}
            >
        <div className="row g-2 mb-2">
            <div className="col-md-4">
            <input
                className="form-control"
                placeholder="Tìm theo tên món..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            </div>

            <div className="col-md-4">
            <input
                className="form-control"
                placeholder="Lọc theo nguyên liệu..."
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
            />
            </div>

            <div className="col-md-4">
            <select
                className="form-select"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
            >
                <option value="">Tất cả ẩm thực</option>
                {cuisines.map(c => (
                <option key={c} value={c}>{c}</option>
                ))}
            </select>
            </div>
        </div>
      </div>

      {/* list */}
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
                {r.cuisine}</span>
                </p>

                <div
                className="text-muted small"
                style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    marginBottom: "6px"
                }}
                title={r.ingredients.join(", ")}
                >
                Nguyên liệu: {r.ingredients.join(", ")}
                </div>
                <div className="mt-auto">
                    <div className="d-flex align-items-center">

                        {/* bên trái: lượt xem */}
                        <div className="w-50 text-muted small">
                        👁 {r.views ?? 0} lượt xem
                        </div>

                        {/* bên phải: nút xem chi tiết */}
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

        {pagedRecipes.length === 0 && (
          <div>Không có kết quả</div>
        )}
      </div>

      {/* pagination */}
      {totalPages > 1 && (
        <nav className="mt-4">
          <ul className="pagination justify-content-center">

            <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => setPage(p => p - 1)}
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
                  <button
                    className="page-link"
                    onClick={() => setPage(p)}
                  >
                    {p}
                  </button>
                </li>
              )
            )}

            <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => setPage(p => p + 1)}
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