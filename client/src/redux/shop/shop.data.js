const SHOP_DATA = {
  mercedes: {
    id: 1,
    title: "Mercedes",
    routeName: "mercedes",
    items: [
      {
        id: 1,
        name: "Mercedes AMG Petronas Racer Cap",
        imageUrl:
          "https://i.ibb.co/CKJmfXx/casquette-racer-mercedes-amg-petronas-ss4-p-12002530-u-3n02chwyx5cokv3zi8tb-v-867fdff69d4c49a6b9a7a9.jpg",
        price: 30,
      },
      {
        id: 2,
        name: "Lewis Hamilton 2020 Special Edition Cap",
        imageUrl:
          "https://i.ibb.co/8jZcMqz/casquette-dition-sp-ciale-mercedes-amg-petronas-lewis-hamilton-2020-silverstone-ss4-p-12009263-u-b4q.jpg",
        price: 50,
      },
      {
        id: 3,
        name: "Team Lightweight Padded Jacket",
        imageUrl:
          "https://i.ibb.co/jbYJ4WL/veste-l-g-re-matelass-e-quipe-mercedes-amg-petronas-2020-ss4-p-12006030-u-axoimqovh0bupqzr9dwk-v-673.jpg",
        price: 140,
      },
      {
        id: 4,
        name: "Mercedes Logo T-Shirt",
        imageUrl:
          "https://i.ibb.co/48zDgJX/t-shirt-cusson-mercedes-amg-petronas-gris-marl-ss4-p-12005005-u-l57x72hjra95p3ru4sxj-v-388b12fc100e4.jpg",
        price: 30,
      },
      {
        id: 5,
        name: "Mercedes Team Rain Jacket",
        imageUrl:
          "https://i.ibb.co/nC2VRTW/veste-de-pluie-quipe-mercedes-amg-petronas-2020-ss4-p-12004293-u-qyy5nyw1cvdtvjjrd410-v-302dcb3c868e.jpg",
        price: 160,
      },
      {
        id: 6,
        name: "Mercedes Lanyard",
        imageUrl:
          "https://i.ibb.co/BGqHQzq/mercedes-amg-petronas-lanyard-ss4-p-11905456-u-yt0qa958rwjtnvgwdmv5-v-31413c0378de427da6cddd60533b58.jpg",
        price: 23,
      },
      {
        id: 7,
        name: "Mercedes Team Shirt",
        imageUrl:
          "https://i.ibb.co/FsQVJpZ/maillot-quipe-mercedes-amg-petronas-2020-ss4-p-12004566-u-13ult52tyk2n6z8d5s5t-v-15331a766c4a4681afd.jpg",
        price: 90,
      },
      {
        id: 8,
        name: "Mercedes Sports Bottle",
        imageUrl:
          "https://i.ibb.co/HP04f1G/bouteille-sports-mercedes-amg-petronas-ss4-p-12006973-u-oqtbtozfxjs96e7rd269-v-1715ae3898c24f2d83293.jpg",
        price: 25,
      },
      {
        id: 9,
        name: "Mercedes Logo T-Shirt - Kids",
        imageUrl: "https://i.ibb.co/VBsTskn/ezgif-7-b997eeda0943.jpg",
        price: 16,
      },
    ],
  },

  ferrari: {
    id: 2,
    title: "Ferrari",
    routeName: "ferrari",
    items: [
      {
        id: 10,
        name: "Ferrari Waterbottle",
        imageUrl:
          "https://i.ibb.co/s58bdvH/bouteille-deau-acier-inoxydable-scuderia-ferrari-rouge-ss4-p-12003602-u-13w0t3pxgmq3vyldzho1-v-a4202.jpg",
        price: 30,
      },
      {
        id: 11,
        name: "Sebastian Vettel Cap",
        imageUrl:
          "https://i.ibb.co/XS72WWd/casquette-scuderia-ferrari-2020-sebastian-vettel-ss4-p-12006529-u-r652m13sjghmyz52ehsz-v-7759c9cc925.jpg",
        price: 40,
      },
      {
        id: 12,
        name: "Scuderia Ferrari Lanyard",
        imageUrl:
          "https://i.ibb.co/3sY4SYS/cordon-tour-du-cou-scuderia-ferrari-ss4-p-11906811-u-13925fm6cdxh021bxy7i-v-bacc0a8df3d24b62a9aa6fe4.jpg",
        price: 110,
      },
      {
        id: 13,
        name: "SF90 Model",
        imageUrl:
          "https://i.ibb.co/Ld7w50h/scuderia-ferrari-sf90-scuderia-ferrari-charles-leclerc-australian-gp-2019-model-1-18-scale-ss4-p-120.jpg",
        price: 250,
      },
      {
        id: 14,
        name: "Team Tech Fleece",
        imageUrl:
          "https://i.ibb.co/BBV1g8c/toison-tech-quipe-scuderia-ferrari-2020-ss4-p-12003195-u-1idv62dkqu73z3oloavy-v-cda97dac037943718090.jpg",
        price: 120,
      },
      {
        id: 15,
        name: "Team T-Shirt",
        imageUrl:
          "https://i.ibb.co/1J3TPKY/t-shirt-quipe-scuderia-ferrari-2020-enfants-ss4-p-12005667-u-1exnj7vbho1ti8y6gfkh-v-419b50e06b324339.jpg",
        price: 45,
      },
      {
        id: 16,
        name: "Classic T-Shirt",
        imageUrl:
          "https://i.ibb.co/hK2Tc9K/t-shirt-scuderia-ferrari-essentials-classique-noir-enfants-ss4-p-12006523-u-so4cck9718025ojpxd0a-v-2.jpg",
        price: 190,
      },
      {
        id: 17,
        name: "Padded Jacket",
        imageUrl:
          "https://i.ibb.co/581gbkS/veste-matelass-e-hybrid-scuderia-ferrari-noir-ss4-p-12005040-u-8xar51p7y38hz7hbsbhf-v-d773806ac8614a.jpg",
        price: 120,
      },
    ],
  },

  redbull: {
    id: 3,
    title: "RedBull",
    routeName: "redbull",
    items: [
      {
        id: 18,
        name: "Red Bull Sweat Jacket",
        imageUrl:
          "https://i.ibb.co/x58nsHj/veste-capuche-sweat-quipe-aston-martin-red-bull-racing-2020-ss4-p-12006752-u-1a3sz037pyfdsls4htz8-v.jpg",
        price: 60,
      },
      {
        id: 19,
        name: "Red Bull Racing Mug",
        imageUrl:
          "https://i.ibb.co/1zPF3JW/aston-martin-red-bull-racing-mug-navy-ss4-p-11908312-u-i3i8l3tg6xrsbqsb6l42-v-513a41ba1399491fa23bf9.jpg",
        price: 17,
      },
      {
        id: 20,
        name: "Red Bull Water Bottle",
        imageUrl:
          "https://i.ibb.co/4gyfP2q/bouteille-deau-aston-martin-red-bull-racing-ss4-p-12003590-u-dkthqbz7uj8vzjmd8mdx-v-20bdcab7094c423d.jpg",
        price: 25,
      },
      {
        id: 21,
        name: "Max Verstappen Cap",
        imageUrl:
          "https://i.ibb.co/YQ8M4K0/casquette-aston-martin-red-bull-racing-2020-max-verstappen-enfants-ss4-p-12001606-u-199ii6ejf3hr1dye.jpg",
        price: 35,
      },
      {
        id: 22,
        name: "Red Bull Racing Hoodie",
        imageUrl:
          "https://i.ibb.co/ww4fbhC/sweat-capuche-aston-martin-red-bull-racing-marine-ss4-p-12006674-u-15nbddqp7l5c2vrjivfh-v-7d98dad2ce.jpg",
        price: 185,
      },
      {
        id: 23,
        name: "Red Bull T-Shirt",
        imageUrl:
          "https://i.ibb.co/71vwbVD/t-shirt-quipe-aston-martin-red-bull-racing-2020-ss4-p-12004042-u-164n6unaoou0mdidzs9f-v-42ab0706a5ca.jpg",
        price: 60,
      },
    ],
  },
  mclaren: {
    id: 4,
    title: "Mclaren",
    routeName: "mclaren",
    items: [
      {
        id: 24,
        name: "McLaren Bottle",
        imageUrl:
          "https://i.ibb.co/K0v78Lj/bouteille-sports-mclaren-ss4-p-12008691u-1heu2oz23luq2eu388r6v-72213432226d49a088008ec88a58c3c9.jpg",
        price: 30,
      },
      {
        id: 25,
        name: "McLaren 2020 Cap",
        imageUrl:
          "https://i.ibb.co/0cjX85D/casquette-mclaren-2020-new-era-extensible-9fifty-carlos-sainz-ss4-p-12010241u-ui7bwk249kija98aa9aiv.jpg",
        price: 39,
      },
      {
        id: 26,
        name: "McLaren Lanyard",
        imageUrl:
          "https://i.ibb.co/Bt6w3bj/cordon-tour-du-cou-mclaren-ss4-p-12009060u-196u772ytcic8q8x0w0dv-735237f4091147dfaca8da37163dbe46.jpg",
        price: 20,
      },
      {
        id: 27,
        name: "Lando Norris Bobble Beanie",
        imageUrl:
          "https://i.ibb.co/mS0rKqr/mclaren-new-era-lando-norris-bobble-beanie-ss4-p-12039886u-syql2yt87c3qhhdgoxs5v-2a230d45820a4394ae0.jpg",
        price: 38,
      },
      {
        id: 28,
        name: "McLaren T-Shirt",
        imageUrl:
          "https://i.ibb.co/ByRJS2z/t-shirt-quipe-mclaren-2020-set-up-enfants-ss4-p-12010305u-13odlrhbt7mhckmuqljiv-c335e92bf3944a4691aa.jpg",
        price: 55,
      },
      {
        id: 29,
        name: "McLaren Team Jacket",
        imageUrl:
          "https://i.ibb.co/dfWjYJV/veste-softshell-quipe-mclaren-2020-ss4-p-12010695-u-3wio3xjdkokuh45uhctf-v-582b7d3698c648d19ef481b2b.jpg",
        price: 140,
      },
    ],
  },
  renault: {
    id: 5,
    title: "Renault",
    routeName: "renault",
    items: [
      {
        id: 30,
        name: "Renault Backpack",
        imageUrl:
          "https://i.ibb.co/BwsXtQx/sac-dos-quipe-renault-f1-ss4-p-12008756u-vde7f77dn4ml6j6t8s6ov-f66498e1d88946c39f0f8ea54a162bbe.jpg",
        price: 63,
      },
      {
        id: 31,
        name: "Crew Neck Sweat",
        imageUrl:
          "https://i.ibb.co/8bVHC8s/sweat-shirt-ras-du-cou-quipe-renault-f1-fanwear-ss4-p-12007531u-p3oquv4pybijkyzve0iov-2db1890c985e49.jpg",
        price: 75,
      },
      {
        id: 32,
        name: "Team Ricciardo T-Shirt",
        imageUrl:
          "https://i.ibb.co/1dmwpxJ/t-shirt-quipe-renault-f1-ricciardo-2020-ss4-p-12009414u-13iu3lhirbv31upjktndv-ac5ed949bad84e82b64bd6.jpg",
        price: 50,
      },
      {
        id: 33,
        name: "Renault Softshell Jacket",
        imageUrl:
          "https://i.ibb.co/fNftwRq/veste-softshell-quipe-renault-f1-2020-ss4-p-12012332u-11xowfcbul34phkrkeliv-32a2a8fce5944503b7023564.jpg",
        price: 170,
      },
      {
        id: 34,
        name: "Daniel Ricciardo Cap",
        imageUrl:
          "https://i.ibb.co/s64tqm0/casquette-quipe-renault-dp-world-f1-2020-new-era-9fifty-stretch-snap-daniel-ricciardo-ss4-p-12009912.jpg",
        price: 40,
      },
    ],
  },
};

export default SHOP_DATA;
