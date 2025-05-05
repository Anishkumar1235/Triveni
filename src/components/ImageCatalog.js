import React from "react";
import img1 from "../assets/101.jpg";
import img2 from "../assets/102.jpg";
import img11 from "../assets/111.jpg";
import img10 from "../assets/110.jpg";
import img7 from "../assets/107.jpg";
import img18 from "../assets/118.jpg";
import img23 from "../assets/123.jpg";
import img25 from "../assets/125.jpg";
import img26 from "../assets/126.jpg";
import img32 from "../assets/132.jpg";
import img33 from "../assets/133.jpg";
import img6 from "../assets/106.jpg";
import img16 from "../assets/116.jpg";
import img24 from "../assets/124.jpg";
import img22 from "../assets/122.jpg";
import img21 from "../assets/121.jpg";
import img20 from "../assets/120.jpg";
import img19 from "../assets/119.jpg";
import img12 from "../assets/112.jpg";
import img17 from "../assets/117.jpg";
import img8 from "../assets/108.jpg";
import img9 from "../assets/109.jpg";
import logo from "../assets/logo.png";
import img36 from "../assets/136.jpg";
import img35 from "../assets/135.jpg";
import img37 from "../assets/137.jpg";
import img38 from "../assets/138.jpg";
import img39 from "../assets/139.jpg";
import img40 from "../assets/140.jpg";
import img42 from "../assets/142.jpg";
import img43 from "../assets/143.jpg";
import img44 from "../assets/144.jpg";
import img45 from "../assets/145.jpg";
import img46 from "../assets/146.jpg";
import img47 from "../assets/147.jpg";
import img48 from "../assets/148.jpg";
import img49 from "../assets/149.jpg";
import img50 from "../assets/150.jpg";
import img51 from "../assets/151.jpg";
import img52 from "../assets/152.jpg";
import img53 from "../assets/153.jpg";
import img54 from "../assets/154.jpg";

const imageData = [
  {
    id: 1,
    title: "Premium Arch File",
    description: "Product Code : EO001",
    price: "M.R.P : 180/-",
    imageUrl: img1,
  },
  {
    id: 2,
    title: "Premium double rexine Arch file with rado",
    description: "Product Code : EO002",
    price: "M.R.P : 225/-",
    imageUrl: img2,
  },
  {
    id: 3,
    title: "Premium Leather Arch file(single side Rexine)",
    description: "Product Code : EO021(L)",
    price: "M.R.P : 225/-",
    imageUrl:
      "https://5.imimg.com/data5/SELLER/Default/2022/4/QG/OE/EL/11460528/4.jpeg",
  },
  {
    id: 4,
    title: "Laminated Arch File",
    description: "Product Code : EO004",
    price: "M.R.P : 225/-",
    imageUrl:
      "https://dgduupz79pcvd.cloudfront.net/productimages/hamelin/l/400107439_1100.jpg",
  },
  {
    id: 5,
    title: "Premium Small Voucher File",
    description: "Product Code : EO003",
    price: "M.R.P : 170/-",
    imageUrl:
      "https://m.media-amazon.com/images/I/418S9g4T57L._BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg",
  },
  {
    id: 6,
    title: "Jagannath Arch File",
    description: "Product Code : ****",
    price: "M.R.P : 150/-",
    imageUrl: img6,
  },
  {
    id: 7,
    title: "Jagannath Voucher File",
    description: "Product Code : ****",
    price: "M.R.P : 170/-",
    imageUrl: img7,
  },
  {
    id: 8,
    title: "A3 Arch File",
    description: "Product Code : ****",
    price: "M.R.P : 249/-",
    imageUrl: img8,
  },
  {
    id: 9,
    title: "2D Ring Binder File",
    description: "Product Code : EO011",
    price: "M.R.P : 170/-",
    imageUrl: img9,
  },
  {
    id: 10,
    title: "Colour Board Cobra File",
    description: "Product Code : EO006(CB)",
    price: "M.R.P : 45/-",
    imageUrl: img10,
  },
  {
    id: 11,
    title: "Grey Board Cobra File",
    description: "Product Code : EO006(GB)",
    price: "M.R.P : 45/-",
    imageUrl: img11,
  },
  {
    id: 12,
    title: "Thick Cobra File",
    description: "Product Code : EO007(GB)",
    price: "M.R.P : 55/-",
    imageUrl: img12,
  },
  {
    id: 13,
    title: "Thick Cobra File",
    description: "Product Code : EO007(ECO)",
    price: "M.R.P : 55/-",
    imageUrl: img12,
  },
  {
    id: 14,
    title: "Laminated Cobra File with Rainbow Board",
    description: "Product Code : EO008(GB+RB)",
    price: "M.R.P : 60/-",
    imageUrl:
      "https://m.media-amazon.com/images/I/61tBLJJg3qL._AC_UF350,350_QL50_.jpg",
  },
  {
    id: 15,
    title: "1' Premium Cobra File With (double board pasting)",
    description: "Product Code : EO009(CB)",
    price: "M.R.P : 60/-",
    imageUrl: "https://m.media-amazon.com/images/I/41RVHuEq6FL.jpg",
  },
  {
    id: 16,
    title: "1' Premium Cobra File",
    description: "Product Code : EO009(MB)",
    price: "M.R.P : 70/-",
    imageUrl: img16,
  },
  {
    id: 17,
    title: "Jagannath Cobra File",
    description: "Product Code : ****",
    price: "M.R.P : 70/-",
    imageUrl: img17,
  },
  {
    id: 18,
    title: "2 Flap Board file (red)",
    description: "Product Code : EO012 (red)",
    price: "M.R.P : 45/-",
    imageUrl: img18,
  },
  {
    id: 19,
    title: "2 Flap Board File Thick (blue)",
    description: "Product Code : EO012(Blue)",
    price: "M.R.P : 50/-",
    imageUrl: img19,
  },
  {
    id: 20,
    title: "2 Flap Board File with Laminated Board",
    description: "Product Code : EO012(L)",
    price: "M.R.P : 60/-",
    imageUrl: img20,
  },
  {
    id: 21,
    title: "Tag File",
    description: "Product Code : EO013",
    price: "M.R.P : 30/-",
    imageUrl: img21,
  },
  {
    id: 22,
    title: "Premium Tag File",
    description: "Product Code : EO014",
    price: "M.R.P : 45/-",
    imageUrl: img22,
  },
  {
    id: 23,
    title: "Eco Laminated Tag File",
    description: "Product Code : EO014 (Eco)",
    price: "M.R.P : 35/-",
    imageUrl: img23,
  },
  {
    id: 24,
    title: "Thread File",
    description: "Product Code : EO015",
    price: "M.R.P : 45/-",
    imageUrl: img24,
  },
  {
    id: 25,
    title: "FourFlap Cover File Colour Board",
    description: "Product Code : EO016 (CB)",
    price: "M.R.P : 75/-",
    imageUrl: img25,
  },
  {
    id: 26,
    title: "FourFlap Cover File Grey Board",
    description: "Product Code : EO016 (GB)",
    price: "M.R.P : 75/-",
    imageUrl: img26,
  },
  {
    id: 27,
    title: "FourFlap Cover File ",
    description: "Product Code : EO016 (ECO)",
    price: "M.R.P : 70/-",
    imageUrl: "https://m.media-amazon.com/images/I/71vEFlDuQ5L.jpg",
  },
  {
    id: 28,
    title: "**********",
    description: "Product Code : EO018 (CB + HC)",
    price: "M.R.P : **/-",
    imageUrl: "",
  },
  {
    id: 29,
    title: "********",
    description: "Product Code : EO018 (GB + HC)",
    price: "M.R.P : **/-",
    imageUrl: "",
  },
  {
    id: 30,
    title: "Premium Cover File With half Cloth",
    description: "Product Code : EO017",
    price: "M.R.P : 80/-",
    imageUrl: "https://m.media-amazon.com/images/I/61iXogf2saL.jpg",
  },
  {
    id: 31,
    title: "Premium Cover File Laminated With Half Cloth",
    description: "Product Code : EO017 (L)",
    price: "M.R.P : 90/-",
    imageUrl:
      "https://rukminim3.flixcart.com/image/850/1000/kfikya80/file-folder/n/n/z/cover-file-for-documents-and-certificates-half-cloth-type-multi-original-imafvxsvt5fdhhhj.jpeg?q=20&crop=false",
  },
  {
    id: 32,
    title: "Advocate File With Half Cloth",
    description: "Product Code : EO019",
    price: "M.R.P : 140/-",
    imageUrl: img32,
  },
  {
    id: 33,
    title: "Premium Advocate File With Full Cloth",
    description: "Product Code : EO017 (L)",
    price: "M.R.P : 180/-",
    imageUrl: img33,
  },
  {
    id: 34,
    title: "Full Cloth in any of Above Verity (On demand Order)",
    description: "Product Code : EO017 (L)",
    price: "M.R.P : 20 Extra/-",
    imageUrl: "https://source.unsplash.com/300x200/?autumn",
  },
  {
    id: 35,
    title: "EO CANVAS BOARD WHITE 4 * 6",
    description: "Product Code : EOCAN-WH4*6",
    price: "M.R.P : 45/-",
    imageUrl: img35,
  },
  {
    id: 36,
    title: "EO CANVAS BOARD WHITE 5 * 7",
    description: "Product Code : EOCAN-WH5*7",
    price: "M.R.P : 60/-",
    imageUrl: img36,
  },
  {
    id: 37,
    title: "EO CANVAS BOARD WHITE 6 * 8",
    description: "Product Code : EOCAN-WH6*8",
    price: "M.R.P : 75/-",
    imageUrl: img37,
  },
  {
    id: 38,
    title: "Apple",
    description: "Product Code : FOW01 (TUMBLER)",
    price: "M.R.P : 199/-",
    imageUrl: img38,
  },
  {
    id: 39,
    title: "Book ",
    description: "Product Code : FOW01 (TUMBLER)",
    price: "M.R.P : 199/-",
    imageUrl: img39,
  },
  {
    id: 40,
    title: "India Gate",
    description: "Product Code : FOW01 (TUMBLER)",
    price: "M.R.P : 199/-",
    imageUrl: img40,
  },
  {
    id: 41,
    title: "India Shape",
    description: "Product Code : FOW01 (TUMBLER)",
    price: "M.R.P : 199/-",
    imageUrl: "https://source.unsplash.com/300x200/?autumn",
  },
  {
    id: 42,
    title: "Trophy",
    description: "Product Code : FOW01 (TUMBLER)",
    price: "M.R.P : 199/-",
    imageUrl: img42,
  },
  {
    id: 43,
    title: "Train",
    description: "Product Code : FOW01 (TUMBLER)",
    price: "M.R.P : 199/-",
    imageUrl: img43,
  },
  {
    id: 44,
    title: "Watch",
    description: "Product Code : FOW01 (TUMBLER)",
    price: "M.R.P : 150/-",
    imageUrl: img44,
  },
  {
    id: 45,
    title: "Fish",
    description: "Product Code : FOW01 (TUMBLER)",
    price: "M.R.P : 199/-",
    imageUrl: img45,
  },
  {
    id: 46,
    title: "Red Car",
    description: "Product Code : FOW01 (TUMBLER)",
    price: "M.R.P : 199/-",
    imageUrl: img46,
  },
  {
    id: 47,
    title: "Globe",
    description: "Product Code : FOW01 (TUMBLER)",
    price: "M.R.P : 199/-",
    imageUrl: img47,
  },
  {
    id: 48,
    title: "Incredible India",
    description: "Product Code : FOW01 (TUMBLER)",
    price: "M.R.P : 199/-",
    imageUrl: img48,
  },
  {
    id: 49,
    title: "Blue Don't Limit",
    description: "Product Code : FOW01 (TUMBLER)",
    price: "M.R.P : 199/-",
    imageUrl: img50,
  },
  {
    id: 50,
    title: "ECO Green",
    description: "Product Code : FOW01 (TUMBLER)",
    price: "M.R.P : 199/-",
    imageUrl: img50,
  },
  {
    id: 51,
    title: "Ashoka Emblem Orginer",
    description: "Product Code : FOW0116",
    price: "M.R.P : 790/-",
    imageUrl: img51,
  },
  {
    id: 52,
    title: "India Shape Orginer",
    description: "Product Code : FOW017",
    price: "M.R.P : 790/-",
    imageUrl: img52,
  },
  {
    id: 53,
    title: "House Shape Pen Stand",
    description: "Product Code : FO018",
    price: "M.R.P : 650/-",
    imageUrl: img53,
  },
  {
    id: 54,
    title: "Hexagon Calender",
    description: "Product Code : FOW019",
    price: "M.R.P : 650/-",
    imageUrl: img54,
  },
];

const ImageCatalog = () => {
  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-pink-200 via-yellow-100 to-blue-200">
      <div className="flex items-center justify-center gap-4 mb-6">
        <img
          src={require("../assets/logo.png")}
          alt="Equal Opportunity Logo"
          className="h-16 w-16 object-contain"
        />
        <div className="text-center">
          <h5 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 text-transparent bg-clip-text drop-shadow-lg">
            Triveni Sales
          </h5>
        </div>
      </div>
      {/* Animated Address */}
      <p className="mt-10 text-lg font-semibold bg-gradient-to-r from-purple-500 via-yellow-400 to-green-400 text-transparent bg-clip-text animate-marquee whitespace-nowrap overflow-hidden">
        <b>Order Now</b> | Phone no.- 8271093372
      </p>

      <h2 className="text-2xl font-extrabold mb-4 text-left bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 text-transparent bg-clip-text drop-shadow-md  mt-20 underline decoration-2">
        Arch File / Box File
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {imageData.map((item, index) => (
          <React.Fragment key={item.id}>
            {/* Section Title: Cobra File */}
            {index === 9 && (
              <div className="col-span-full my-6">
                <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg underline decoration-2">
                  Cobra File
                </h2>
              </div>
            )}

            {/* Section Title: 2 Flap File */}
            {index === 17 && (
              <div className="col-span-full my-6">
                <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 text-transparent bg-clip-text drop-shadow-md underline decoration-2">
                  2 Flap File
                </h2>
              </div>
            )}

            {/* Third Title: 2 Flap File */}
            {index === 20 && (
              <div className="col-span-full my-6">
                <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-500 text-transparent bg-clip-text drop-shadow-md underline decoration-2">
                  Tag File
                </h2>
              </div>
            )}
            {/* Fourth Title: 2 Flap File */}
            {index === 24 && (
              <div className="col-span-full my-6">
                <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 text-transparent bg-clip-text drop-shadow-md underline decoration-2">
                  4 Flap Cover File
                </h2>
              </div>
            )}

            {/* Fifth Title: 2 Flap File */}
            {index === 34 && (
              <div className="col-span-full my-6">
                <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-green-500 via-yellow-400 to-pink-500 text-transparent bg-clip-text drop-shadow-lg underline decoration-2">
                  Canvas Board
                </h2>
              </div>
            )}

            {/* Fifth Title: 2 Flap File */}
            {index === 37 && (
              <div className="col-span-full my-6">
                <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-green-500 via-yellow-400 to-pink-500 text-transparent bg-clip-text drop-shadow-lg underline decoration-2">
                  Pen Stand
                </h2>
              </div>
            )}

            <div>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={item.imageUrl}
                  alt={item.title || "Product Image"}
                  className="w-full h-[28rem] object-cover"
                />
              </div>

              <div className="mt-2 px-2">
                {item.title && (
                  <div className="inline-block p-1 rounded">
                    <h2 className="text-lg font-bold text-black">
                      {item.title}
                    </h2>
                  </div>
                )}
                <p className="text-gray-900 text-md font-bold mt-2">
                  {item.description}
                </p>
                <div className="inline-block bg-green-400 p-1 rounded mt-1">
                  <p className="text-gray-900 font-bold">{item.price}</p>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      <footer className="rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white mt-20 py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-wide text-shadow-md">
              TRIVENI SALES
            </h2>
            <p className="text-sm mt-1 italic text-gray-200">(ISO 9001:2015)</p>

            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="bg-yellow-400 p-2 rounded-full text-black shadow-lg transform hover:scale-110 transition-all">
                  📍
                </span>
                <span>50, Forest Park, Bhubaneswar - 751009</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-yellow-400 p-2 rounded-full text-black shadow-lg transform hover:scale-110 transition-all">
                  ✉️
                </span>
                <span>trivenisales02@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-yellow-400 p-2 rounded-full text-black shadow-lg transform hover:scale-110 transition-all">
                  📞
                </span>
                <span>0674 - 2595717, +91 8260093443</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end items-center h-full">
            <a
              href="https://www.trivenisales.com"
              className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              🌐 www.trivenisales.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ImageCatalog;
