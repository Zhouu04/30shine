import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imagesForSlide = [
    'https://storage.30shine.com/banner/20230811_banner_shinecut_w.png',
    'https://storage.30shine.com/banner/20230808_banner_duc_w.png',
    'https://storage.30shine.com/banner/20230810_banner_dqh_w.png',
    'https://storage.30shine.com/banner/20231027_banner_readyfornewgame_w.jpg'
  ];

  imagesForSevice = [
    'https://storage.30shine.com/web/v4/images/skinner/6.jpg',
    'https://storage.30shine.com/web/v4/images/skinner/5.jpg',
    'https://storage.30shine.com/web/v4/images/skinner/3.jpg',
    'https://storage.30shine.com/web/v4/images/skinner/2.jpg',
    'https://storage.30shine.com/web/v4/images/skinner/1.jpg',
    'https://storage.30shine.com/web/v4/images/skinner/7.jpg',

  ]

  stylist = [
    {
      name: 'Nguyễn Văn Tuấn',
      location: '168 Đ. Nguyễn Văn Cừ, Hà Nội',
      imageUrl: 'https://storage.30shine.com/ResourceWeb/data/images/home/stylist/1.jpg?v=2'
    },
    {
      name: 'Nguyễn Đỗ Bảo Thanh',
      location: '236 D. Bá Trạc, Quận 8, TP. Hồ Chí Minh',
      imageUrl: 'https://storage.30shine.com/ResourceWeb/data/images/home/stylist/2.jpg?v=2'
    },
    {
      name: 'Nguyễn Tiến Dũng',
      location: '346 Khâm Thiên, Hà Nội',
      imageUrl: 'https://storage.30shine.com/ResourceWeb/data/images/home/stylist/3.jpg?v=2'
    },
    {
      name: 'Trần Lâm Cao Nguyên',
      location: '147 Lê Hồng Phong, Buôn Mê Thuột, Đắk Lắk',
      imageUrl: 'https://storage.30shine.com/ResourceWeb/data/images/home/stylist/6.jpg?v=2'
    },
    {
      name: 'Lê Sỹ Sơn',
      location: '99 Tân Sơn Nhì, Tân Phú, TP. Chí Minh',
      imageUrl: 'https://storage.30shine.com/ResourceWeb/data/images/home/stylist/8.jpg?v=2'
    },
    {
      name: 'Nguyễn Xuân Mạnh',
      location: '19 Trần Phú, Thanh Hoá',
      imageUrl: 'https://storage.30shine.com/ResourceWeb/data/images/home/stylist/9.jpg?v=2'
    },
  ]

  angles = [{
    title: '99 Tân Sơn Nhì, Q.Tân Phú, TP. HCM',
    image: 'https://storage.30shine.com/web/v4/images/skinner/6.jpg',
    link: 'https://www.tiktok.com/@ngocphuongg1703'
  },
  {
    title: '408 Nguyễn Thị Thập, Quận 7, TP.HCM',
    image: 'https://storage.30shine.com/web/v4/images/skinner/7.jpg',
    link: 'https://www.tiktok.com/@phanmun97'
  },
  {
    title: '36 Nguyễn Ảnh Thủ, Quận 12, TP HCM',
    image: 'https://storage.30shine.com/web/v4/images/skinner/5.jpg',
    link: 'https://www.tiktok.com/@bichhngann.0604'
  },
  {
    title: '1361 Phạm Văn Thuận, Phường Thống Nhất, TP. Biên Hoà',
    image: 'https://storage.30shine.com/web/v4/images/skinner/4.jpg',
    link: 'https://www.tiktok.com/@tu_quyen1401'
  },
  {
    title: '420 Huỳnh Tấn Phát, Quận 7, TP.HCM',
    image: 'https://storage.30shine.com/web/v4/images/skinner/10.jpg',
    link: 'https://www.tiktok.com/@yetkieu99'
  },
  {
    title: '147 Lê Hồng Phong, Đắk Lắk',
    image: 'https://storage.30shine.com/web/v4/images/skinner/1.jpg',
    link: 'https://www.tiktok.com/@nhatmen0927'
  },
  {
    title: '4255 Nguyễn An Ninh, Phường Dĩ An, Bình Dương',
    image: 'https://storage.30shine.com/web/v4/images/skinner/9.jpg',
    link: 'https://www.tiktok.com/@dieu_shine'
  },
  {
    title: '12 Lê Đức Thọ, Q.Gò Vấp, TP. HCM',
    image: 'https://storage.30shine.com/web/v4/images/skinner/2.jpg',
    link: 'https://www.tiktok.com/@tramkhenh23'
  },
  {
    title: '420 Huỳnh Tấn Phát, Quận 7, TP.HCM',
    image: 'https://storage.30shine.com/web/v4/images/skinner/8.jpg',
    link: 'https://www.tiktok.com/@h30shie_420htp'
  },
  {
    title: '955 Trần Hưng Đạo, Quận 5, TP.HCM',
    image: 'https://storage.30shine.com/web/v4/images/skinner/3.jpg',
    link: 'https://www.tiktok.com/@minanguyen3108'
  },
  ]

  imgShop = [
    {
      title: 'Sữa Rửa Mặt Tràm Trà Skin&Dr Tea tree 100g',
      price: '229.000 ₫',
      imageUrl: 'https://static.30shine.com/shop-admin/2023/11/27/30SMMEIF-vn-11134207-7r98o-lof4ti19hbxzac.jpg',
      link: 'https://shop.30shine.com/chi-tiet-san-pham/sua-rua-mat-tram-tra-skindr-tea-tree-khac-tinh-cua-mun-tri-mun'
    },
    {
      title: 'Serum Dưỡng Da Dabo 7in1 Black Force',
      price: '599.000 ₫',
      imageUrl: 'https://static.30shine.com/shop-admin/2023/11/27/30SA4CIP-c8d56ecd9d23db237eaecf978c733336.jpg',
      link: 'https://shop.30shine.com/chi-tiet-san-pham/serum-duong-da-dabo-7in1-black-force-lam-dep-de-dang-voi-7-buoc-duong-da-trong-1-san-pham'
    },
    {
      title: 'Sữa Dưỡng Da Grinif All In One 4 Gentleman cho nam 120ml',
      price: '359.000 ₫',
      imageUrl: 'https://static.30shine.com/shop-admin/2023/08/17/30SWUJ28-image_2.jpg',
      link: 'https://shop.30shine.com/chi-tiet-san-pham/sua-duong-da-grinif-all-in-one-cho-nam-trang-min-da'
    },
    {
      title: 'Sáp vuốt tóc nam Kevin Murphy Rough Rider không bóng giữ nếp tóc suốt 24h - 30Shine phân phối chính hãng',
      price: '319.000 ₫',
      imageUrl: 'https://static.30shine.com/shop-admin/2023/08/18/30SAFG66-vn-11134207-7qukw-ljcj272stqto77_tn.jpeg',
      link: 'https://shop.30shine.com/chi-tiet-san-pham/sap-kevin-murphy-rough-rider-ong-vua-tao-kieu'
    },
    {
      title: 'Sáp vuốt tóc Glanzen Clay Wax - Vô địch giữ nếp tới 12 giờ',
      price: '299.000 ₫',
      imageUrl: 'https://static.30shine.com/shop-admin/2023/10/04/30S46UYJ-variation_10.jpg',
      link: 'https://shop.30shine.com/chi-tiet-san-pham/sap-glanzen-clay-sap-chinh-hang-ban-chay-so-1-thi-truong'
    },
    {
      title: 'Gôm xịt giữ nếp tóc Glanzen 30Shine phân phối chính hãng giữ nếp tạo kiểu đỉnh cao 380ml',
      price: '189.000 ₫',
      imageUrl: 'https://static.30shine.com/shop-admin/2023/11/27/30S3X12Q-vn-11134207-7r98o-lof4ti1963efc4.jpg',
      link: 'https://shop.30shine.com/chi-tiet-san-pham/gom-xit-toc-giu-nep-glanzen-original-380ml'
    },
    {
      title: 'Xịt tạo phồng Glanzen Booster Pre-Styling - Tạo phồng, Giảm bết tóc & Bảo vệ tóc khỏi nhiệt độ cao',
      price: '199.000 ₫',
      imageUrl: 'https://static.30shine.com/shop-admin/2023/11/27/30S458BO-vn-11134207-7r98o-lof779dh9dyr6f.jpg',
      link: 'https://shop.30shine.com/chi-tiet-san-pham/xit-tao-phong-glanzen-booster'
    },
    {
      title: 'Xịt dưỡng tóc Glanzen Magic Spray - Dưỡng tóc mềm mại bóng mượt',
      price: '179.000 ₫',
      imageUrl: 'https://static.30shine.com/shop-admin/2023/11/27/30SNLZCI-vn-11134207-7r98o-lof779dhasj71d.jpg',
      link: 'https://shop.30shine.com/chi-tiet-san-pham/xit-duong-toc-glanzen-magic-spray'
    },
  ]

  imgOffer = [
    {
      title: 'Combo Giữ nếp X2',
      price: '499.000 ₫',
      oldPrice: '618.000 ₫',
      image: 'https://storage.30shine.com/web/v4/images/uu-dai-trang-chu/combo-web-1.jpg',
      link: 'https://shop.30shine.com/chi-tiet-san-pham/combo-toc-dep-thom-lau'
    },
    {
      title: 'Combo Giữ nếp X2',
      price: '399.000 ₫',
      oldPrice: '488.000 ₫',
      image: 'https://storage.30shine.com/web/v4/images/uu-dai-trang-chu/combo-web-2.jpg',
      link: 'https://shop.30shine.com/chi-tiet-san-pham/combo-toc-dep-tuc-thi'
    },
    {
      title: 'Combo Tóc bồng bềnh Giữ nếp nhẹ tênh',
      price: '459.000 ₫',
      oldPrice: '498.000 ₫',
      image: 'https://storage.30shine.com/web/v4/images/uu-dai-trang-chu/combo-web-3.jpg',
      link: 'https://shop.30shine.com/chi-tiet-san-pham/combo-tam-biet-toc-bet-dau-sap-glanzen-claywax-xit-tao-phong-glanzen-booster'
    },
    {
      title: 'Combo Tóc bồng bềnh Giữ nếp nhẹ tênh',
      price: '499.000 ₫',
      oldPrice: '558.000 ₫',
      image: 'https://storage.30shine.com/web/v4/images/uu-dai-trang-chu/combo-web-4.jpg',
      link: 'https://shop.30shine.com/chi-tiet-san-pham/combo-tam-biet-toc-bet-dau-sap-glanzen-floral-xit-tao-phong-glanzen-booster'
    },
    {
      title: 'Combo Giữ nếp siêu dưỡng',
      price: '579.000 ₫ - 1.018.000 ₫',
      image: 'https://storage.30shine.com/web/v4/images/uu-dai-trang-chu/combo-web-5.jpg',
      link: 'https://shop.30shine.com/chi-tiet-san-pham/combo-sap-kevin-murphy-30g-gom-glanzen-floral'
    },
    {
      title: 'Combo Bay mụn Sạch dầu nhờn',
      price: '479.000 ₫',
      oldPrice: '508.000 ₫',
      image: 'https://storage.30shine.com/web/v4/images/uu-dai-trang-chu/combo-web-6.jpg',
      link: 'https://shop.30shine.com/chi-tiet-san-pham/new-2023-combo-diet-mun'
    },
    {
      title: 'Combo Dưỡng da mùa hanh khô',
      price: '799.000 ₫',
      oldPrice: '858.000 ₫',
      image: 'https://storage.30shine.com/web/v4/images/uu-dai-trang-chu/combo-web-7.jpg',
      link: 'https://shop.30shine.com/chi-tiet-san-pham/combo-7-ngay-trang-min'
    },
    {
      title: 'Combo Phục hồi da cháy nắng',
      price: '799.000 ₫',
      oldPrice: '859.000 ₫',
      image: 'https://storage.30shine.com/web/v4/images/uu-dai-trang-chu/combo-web-8.jpg',
      link: 'https://shop.30shine.com/chi-tiet-san-pham/new-2023-combo-da-sach-mun-trang-sang-bat-tone'
    },
  ]
}
