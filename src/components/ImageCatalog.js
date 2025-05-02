import React from "react";

const imageData = [
  {
    id: 1,
    title: "Premium Arch File",
    description: "Product Code : EO001",
    price: "M.R.P : 180/-",
    imageUrl:
      "https://5.imimg.com/data5/DT/TE/RH/SELLER-20513237/xerox-a4-paper.jpg",
  },
  {
    id: 2,
    title: "Premium double rexine Arch file with rado",
    description: "Product Code : EO002",
    price: "M.R.P : 225/-",
    imageUrl:
      "https://5.imimg.com/data5/SELLER/Default/2024/3/397084616/KR/BS/HK/11534293/lever-arch-files-500x500.jpg",
  },
  {
    id: 3,
    title: "Premium Leather Arch file(single side Rexine)",
    description: "Product Code : EO021(L)",
    price: "M.R.P : 225/-",
    imageUrl:
      "https://www.restaurantstore.co.uk/images/big/RSS/FE/V-FS340336.jpg",
  },
  {
    id: 4,
    title: "Laminated Arch File",
    description: "Product Code : EO004",
    price: "M.R.P : 225/-",
    imageUrl:
      "https://5.imimg.com/data5/SELLER/Default/2023/9/348758620/NH/CV/AX/58462861/rex-pvc-lever-arch-file-500x500.jpg",
  },
  {
    id: 5,
    title: "Premium Small Voucher File",
    description: "Product Code : EO003",
    price: "M.R.P : 170/-",
    imageUrl: "https://m.media-amazon.com/images/I/51+ZOBDZTtL.jpg",
  },
  {
    id: 6,
    title: "Jagannath Arch File",
    description: "Product Code : ****",
    price: "M.R.P : 150/-",
    imageUrl: "https://source.unsplash.com/300x200/?lake",
  },
  {
    id: 7,
    title: "Jagannath Voucher File",
    description: "Product Code : ****",
    price: "M.R.P : 170/-",
    imageUrl: "https://source.unsplash.com/300x200/?canyon",
  },
  {
    id: 8,
    title: "A3 Arch File",
    description: "Product Code : ****",
    price: "M.R.P : 249/-",
    imageUrl:
      "https://5.imimg.com/data5/SELLER/Default/2024/7/435746321/QY/VV/UD/106679542/barsons-lever-arch-file-500x500.jpg",
  },
  {
    id: 9,
    title: "2D Ring Binder File",
    description: "Product Code : EO011",
    price: "M.R.P : 170/-",
    imageUrl:
      "https://www.jiomart.com/images/product/original/rvidv4mkxo/tulman-2-pack-ring-binder-file-2d-a4-size-tough-durable-a4-size-ring-binder-box-board-file-for-certificates-document-holder-blue-product-images-orvidv4mkxo-p608908199-0-202405041252.jpg",
  },
  {
    id: 10,
    title: "Colour Board Cobra File",
    description: "Product Code : EO006(CB)",
    price: "M.R.P : 45/-",
    imageUrl:
      "https://5.imimg.com/data5/SELLER/Default/2021/4/WL/CS/HG/3211917/office-files-500x500.jpg",
  },
  {
    id: 11,
    title: "Grey Board Cobra File",
    description: "Product Code : EO006(GB)",
    price: "M.R.P : 45/-",
    imageUrl:
      "https://5.imimg.com/data5/SELLER/Default/2022/5/RS/OV/IC/86194737/4-500x500.png",
  },
  {
    id: 12,
    title: "Thick Cobra File",
    description: "Product Code : EO007(GB)",
    price: "M.R.P : 55/-",
    imageUrl:
      "https://5.imimg.com/data5/SELLER/Default/2020/12/LE/UH/LG/16129777/cobra-file-500x500.jpg",
  },
  {
    id: 13,
    title: "Thick Cobra File",
    description: "Product Code : EO007(ECO)",
    price: "M.R.P : 55/-",
    imageUrl:
      "https://m.media-amazon.com/images/I/71+VNa9LsiL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 14,
    title: "Laminated Cobra File with Rainbow Board",
    description: "Product Code : EO008(GB+RB)",
    price: "M.R.P : 60/-",
    imageUrl:
      "https://5.imimg.com/data5/SELLER/Default/2023/10/355148183/ZT/DI/DZ/35113875/lamination-cobra-file-500x500.jpg",
  },
  {
    id: 15,
    title: "1' Premium Cobra File With (double board pasting)",
    description: "Product Code : EO009(CB)",
    price: "M.R.P : 60/-",
    imageUrl: "https://source.unsplash.com/300x200/?island",
  },
  {
    id: 16,
    title: "1' Premium Cobra File",
    description: "Product Code : EO009(MB)",
    price: "M.R.P : 70/-",
    imageUrl: "https://source.unsplash.com/300x200/?autumn",
  },
  {
    id: 17,
    title: "Jagannath Cobra File",
    description: "Product Code : ****",
    price: "M.R.P : 70/-",
    imageUrl: "https://source.unsplash.com/300x200/?autumn",
  },
  {
    id: 18,
    title: "2 Flap Board file (red)",
    description: "Product Code : EO012 (red)",
    price: "M.R.P : 45/-",
    imageUrl: "https://source.unsplash.com/300x200/?autumn",
  },
  {
    id: 19,
    title: "2 Flap Board File Thick (blue)",
    description: "Product Code : EO012(Blue)",
    price: "M.R.P : 50/-",
    imageUrl: "https://source.unsplash.com/300x200/?autumn",
  },
  {
    id: 20,
    title: "2 Flap Board File with Laminated Board",
    description: "Product Code : EO012(L)",
    price: "M.R.P : 60/-",
    imageUrl: "https://source.unsplash.com/300x200/?autumn",
  },
  {
    id: 21,
    title: "Tag File",
    description: "Product Code : EO013",
    price: "M.R.P : 30/-",
    imageUrl: "https://source.unsplash.com/300x200/?autumn",
  },
  {
    id: 22,
    title: "Premium Tag File",
    description: "Product Code : EO014",
    price: "M.R.P : 45/-",
    imageUrl: "https://source.unsplash.com/300x200/?autumn",
  },
  {
    id: 23,
    title: "Eco Laminated Tag File",
    description: "Product Code : EO014 (Eco)",
    price: "M.R.P : 35/-",
    imageUrl: "https://source.unsplash.com/300x200/?autumn",
  },
  {
    id: 24,
    title: "Thread File",
    description: "Product Code : EO015",
    price: "M.R.P : 45/-",
    imageUrl: "https://source.unsplash.com/300x200/?autumn",
  },
  {
    id: 25,
    title: "FourFlap Cover File Colour Board",
    description: "Product Code : EO016 (CB)",
    price: "M.R.P : 75/-",
    imageUrl: "https://source.unsplash.com/300x200/?autumn",
  },
  {
    id: 26,
    title: "FourFlap Cover File Grey Board",
    description: "Product Code : EO016 (GB)",
    price: "M.R.P : 75/-",
    imageUrl: "https://source.unsplash.com/300x200/?autumn",
  },
  {
    id: 27,
    title: "FourFlap Cover File ",
    description: "Product Code : EO016 (ECO)",
    price: "M.R.P : 70/-",
    imageUrl: "https://source.unsplash.com/300x200/?autumn",
  },
  {
    id: 28,
    title: "**********",
    description: "Product Code : EO018 (CB + HC)",
    price: "M.R.P : **/-",
    imageUrl: "https://source.unsplash.com/300x200/?autumn",
  },
  {
    id: 29,
    title: "********",
    description: "Product Code : EO018 (GB + HC)",
    price: "M.R.P : **/-",
    imageUrl: "https://source.unsplash.com/300x200/?autumn",
  },
  {
    id: 30,
    title: "Premium Cover File With half Cloth",
    description: "Product Code : EO017",
    price: "M.R.P : 80/-",
    imageUrl: "https://source.unsplash.com/300x200/?autumn",
  },
  {
    id: 31,
    title: "Premium Cover File Laminated With Half Cloth",
    description: "Product Code : EO017 (L)",
    price: "M.R.P : 90/-",
    imageUrl: "https://source.unsplash.com/300x200/?autumn",
  },
  {
    id: 32,
    title: "Advocate File With Half Cloth",
    description: "Product Code : EO019",
    price: "M.R.P : 140/-",
    imageUrl: "https://source.unsplash.com/300x200/?autumn",
  },
  {
    id: 33,
    title: "Premium Advocate File With Full Cloth",
    description: "Product Code : EO017 (L)",
    price: "M.R.P : 180/-",
    imageUrl: "https://source.unsplash.com/300x200/?autumn",
  },
  {
    id: 34,
    title: "Full Cloth in any of Above Verity (On demand Order)",
    description: "Product Code : EO017 (L)",
    price: "M.R.P : 20 Extra/-",
    imageUrl: "https://source.unsplash.com/300x200/?autumn",
  },
];

const ImageCatalog = () => {
  return (
    <div className="p-6 bg-gray-40 min-h-screen">
      <h5 className="text-4xl font-bold mb-6 text-center">Triveni Sales</h5>

      {/* Section Title: Arch File / Box File */}
      <h2 className="text-2xl font-bold mb-4 text-left text-blue-700 underline">
        Arch File / Box File
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {imageData.map((item, index) => (
          <React.Fragment key={item.id}>
            {/* Section Title: Cobra File */}
            {index === 9 && (
              <div className="col-span-full my-6">
                <h2 className="text-4xl font-bold text-center text-blue-600 underline">
                  Cobra File
                </h2>
              </div>
            )}

            {/* Section Title: 2 Flap File */}
            {index === 17 && (
              <div className="col-span-full my-6">
                <h2 className="text-4xl font-bold text-center text-blue-600 underline">
                  2 Flap File
                </h2>
              </div>
            )}

            {/* Third Title: 2 Flap File */}
            {index === 20 && (
              <div className="col-span-full my-6">
                <h2 className="text-4xl font-bold text-center text-blue-600 underline">
                  Tag File
                </h2>
              </div>
            )}
            {/* Fourth Title: 2 Flap File */}
            {index === 24 && (
              <div className="col-span-full my-6">
                <h2 className="text-4xl font-bold text-center text-blue-600 underline">
                  4 Flap Cover File
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
    </div>
  );
};

export default ImageCatalog;
