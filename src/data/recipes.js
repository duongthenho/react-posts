const baseRecipes = [
  {
    id: 1,
    title: "Phở bò",
    image:
      "https://hongphatfood.com/wp-content/uploads/2020/05/vifon-beef-pho-6.jpg",
    cuisine: "Việt Nam",
    ingredients: ["bánh phở", "thịt bò", "hành", "gừng", "quế"],
    views: 1234,
    steps: [
      {
        text: "Ninh xương bò lấy nước dùng",
        image: "https://file.hstatic.net/200000700229/article/cach-ham-xuong-bo-nhanh-mem_21eda1c3431544188a9cf0defc6113a8.jpg",
      },
      {
        text: "Nướng gừng và hành",
        image: "https://diwa.com.vn/wp-content/uploads/2024/08/cach-nau-pho-bo-bang-noi-ap-suat-2.jpg",
      },
      {
        text: "Cho gia vị vào nước dùng",
        image: "https://cafefcdn.com/203337114487263232/2025/2/3/image003-1738555036825838409020-1738565145106-17385651452681279816328.jpg",
      },
      {
        text: "Trụng bánh phở và xếp thịt bò",
        image: "https://nvnorthwest.com/wp-content/uploads/2021/11/qd1wgvr9-680x470.jpg",
      },
      {
        text: "Chan nước dùng và thưởng thức",
        image: "https://cdn2.tuoitre.vn/thumb_w/480/2019/10/26/qdi2985-15720670573741140523976.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Bún chả",
    image:
      "https://khaihoanphuquoc.com.vn/wp-content/uploads/2023/08/cach-lam-nuoc-mam-bun-cha-02.jpg",
    cuisine: "Việt Nam",
    ingredients: ["bún", "thịt lợn", "nước mắm", "đu đủ", "tỏi"],
    views: 5231,
    steps: [
      {
        text: "Ướp thịt",
        image: "https://haiphu.vn/web/image/3525-268f086b/1-gia-vi-uop-thit-nuong.jpg?access_token=22098ab2-0a2f-471e-a51a-5e726417c60d",
      },
      {
        text: "Nướng thịt",
        image: "https://kungfu.com.vn/public/images/cach-uop-thit-nuong.jpg",
      },
      {
        text: "Pha nước chấm",
        image: "https://haiphu.vn/web/image/3350-40ff51e2/1-nuoc-cham-bun-thit-nuong.jpg?access_token=0160742c-d4a4-4a7b-96e9-9dd33db76dc9",
      },
      {
        text: "Ăn kèm bún và rau",
        image: "https://cdn.xanhsm.com/2025/01/40f46d34-bun-cha-ha-noi-o-tphcm-2-min.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Spaghetti Carbonara",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
    cuisine: "Ý",
    ingredients: ["mì spaghetti", "trứng", "phô mai", "thịt xông khói"],
    views: 151,
    steps: [
      {
        text: "Luộc mì",
        image: "https://vietgiao.edu.vn/wp-content/uploads/2021/04/hoc-nau-an-co-ban-1.jpg",
      },
      {
        text: "Chiên thịt xông khói",
        image: "https://vietgiao.edu.vn/wp-content/uploads/2021/04/hoc-nau-an-co-ban-1.jpg",
      },
      {
        text: "Trộn trứng và phô mai",
        image: "https://vietgiao.edu.vn/wp-content/uploads/2021/04/hoc-nau-an-co-ban-1.jpg",
      },
      {
        text: "Trộn với mì",
        image: "https://vietgiao.edu.vn/wp-content/uploads/2021/04/hoc-nau-an-co-ban-1.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Sushi cuộn",
    image:
      "https://ibuki.vn/wp-content/uploads/2021/10/Com-cuon-dac-biet-sushi-scaled.jpeg",
    cuisine: "Nhật Bản",
    ingredients: ["cơm sushi", "rong biển", "cá hồi", "dưa leo"],
    views: 255,
    steps: [
      {
        text: "Trải rong biển",
        image: "https://vietgiao.edu.vn/wp-content/uploads/2021/04/hoc-nau-an-co-ban-1.jpg",
      },
      {
        text: "Cho cơm lên",
        image: "https://vietgiao.edu.vn/wp-content/uploads/2021/04/hoc-nau-an-co-ban-1.jpg",
      },
      {
        text: "Xếp nhân",
        image: "https://vietgiao.edu.vn/wp-content/uploads/2021/04/hoc-nau-an-co-ban-1.jpg",
      },
      {
        text: "Cuộn và cắt",
        image: "https://vietgiao.edu.vn/wp-content/uploads/2021/04/hoc-nau-an-co-ban-1.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Cơm chiên trứng",
    image:
      "https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/kien-thuc/cach-lam-com-chien-trung/cach-lam-com-chien-trung-1.jpg",
    cuisine: "Châu Á",
    ingredients: ["cơm", "trứng", "hành lá", "nước mắm"],
    views: 23,
    steps: [
      {
        text: "Phi hành",
        image: "https://vietgiao.edu.vn/wp-content/uploads/2021/04/hoc-nau-an-co-ban-1.jpg",
      },
      {
        text: "Cho trứng",
        image: "https://vietgiao.edu.vn/wp-content/uploads/2021/04/hoc-nau-an-co-ban-1.jpg",
      },
      {
        text: "Cho cơm",
        image: "https://vietgiao.edu.vn/wp-content/uploads/2021/04/hoc-nau-an-co-ban-1.jpg",
      },
      {
        text: "Nêm gia vị",
        image: "https://vietgiao.edu.vn/wp-content/uploads/2021/04/hoc-nau-an-co-ban-1.jpg",
      },
    ],
  },
];

// nhân dữ liệu lên nhiều bản
export const recipes = Array.from({ length: 30 }).flatMap((_, i) =>
  baseRecipes.map((r, index) => ({
    ...r,
    id: i * baseRecipes.length + index + 1,
    title: `${r.title} (${i + 1})`,
    views: r.views * 3 + 123 + i * 13,
  })),
);
