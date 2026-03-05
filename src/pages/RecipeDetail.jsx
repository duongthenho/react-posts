import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { API_BASE_URL } from "../constants/constants";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `${API_BASE_URL}/recipes/${id}`
        );

        const data = await res.json();

        setRecipe(data || null);
      } catch (err) {
        console.error("Fetch detail error:", err);
        setRecipe(null);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return (
      <div className="container py-4">
        Đang tải...
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="container py-4">
        Không tìm thấy công thức
      </div>
    );
  }

  return (
    <div className="container py-4">
      {/* header ảnh */}
      <div className="position-relative mb-4">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-100 rounded-4 shadow-sm"
          style={{
            height: 380,
            objectFit: "cover",
          }}
        />

        <Link
          to="/"
          className="btn btn-light position-absolute top-0 start-0 m-3 shadow-sm"
        >
          ← Quay lại
        </Link>

        <div
          className="position-absolute bottom-0 start-0 w-100 p-3"
          style={{
            background: "linear-gradient(transparent, rgba(0,0,0,0.6))",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
          }}
        >
          <h2 className="text-white mb-1">{recipe.title}</h2>
          <span className="badge bg-warning text-dark">
            {recipe.cuisine}
          </span>
        </div>
      </div>

      <div className="row g-4">
        {/* nguyên liệu */}
        <div className="col-lg-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="mb-3">🧾 Nguyên liệu</h5>

              <div className="d-flex flex-wrap gap-2">
                {recipe.ingredients?.map((i, index) => (
                  <span
                    key={index}
                    className="badge rounded-pill text-bg-light border"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* hướng dẫn */}
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="mb-3">👨‍🍳 Hướng dẫn từng bước</h5>

              <ol className="list-group">
                {recipe.steps?.map((step, index) => {
                  const text =
                    typeof step === "string" ? step : step?.text;

                  const image =
                    typeof step === "string"
                      ? "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
                      : step?.image;

                  return (
                    <li key={index} className="list-group-item">
                      <div className="row g-3 align-items-start">
                        <div className="col-md-4">
                          <img
                            src={image}
                            alt={`Step ${index + 1}`}
                            className="img-fluid rounded-3"
                            style={{
                              objectFit: "cover",
                              width: "100%",
                              height: 120,
                            }}
                          />
                        </div>

                        <div className="col-md-8">
                          <strong>Bước {index + 1}:</strong>
                          <div className="mt-1">{text}</div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;