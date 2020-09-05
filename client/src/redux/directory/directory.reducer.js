const INITIAL_STATE = {
  sections: [
    {
      title: "Mercedes AMG Petronas",
      imageUrl: "https://i.ibb.co/Y3Wpg5v/mercedes.jpg",
      id: 1,
      linkUrl: "shop/mercedes",
    },
    {
      title: "Scuderia Ferrari",
      imageUrl: "https://i.ibb.co/mbnV5Kt/ferrari.jpg",
      id: 2,
      linkUrl: "shop/ferrari",
    },
    {
      title: "Redbull",
      imageUrl: "https://i.ibb.co/47bzvj4/redbull.jpg",
      id: 3,
      linkUrl: "shop/redbull",
    },
    {
      title: "Mclaren",
      imageUrl: "https://i.ibb.co/MB3gcJq/mclaren.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/mclaren",
    },
    {
      title: "Renault",
      imageUrl: "https://i.ibb.co/QjW4fqy/renault.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/renault",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
