const books = [
  {
    genre: "fantasy",
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Caroll",
    price: 351,
    rating: 4.3,
    img: "/book templates/fantasy/img/alice.jpg",
    discount: 20,
    sourceLink:
      "https://www.amazon.com/Alices-Adventures-Wonderland-Lewis-Carroll/dp/1503222683",
  },
  {
    genre: "fantasy",
    title: "Circe",
    author: "Madeline Miller",
    price: 4914,
    rating: 4.6,
    img: "/book templates/fantasy/img/circe.jpg",
    discount: 15,
    sourceLink:
      "https://www.amazon.com/Circe-Madeline-Miller-audiobook/dp/B07944YFPW/ref=sr_1_1?crid=15BPSA48KFT1J&dib=eyJ2IjoiMSJ9.yp0Ebkaq8XJ_DHk3LlC5mtE94--AGy_FIK8Vot8elxbBE5K2G9cfYWJ-fUGnjG1DnMQbOAgi-GH6VGmVX-VZILsLAgN7xYGZEvIELXRY8G020prcGJZ9CiWPvSX96pM_p0ZsKr6Ah4jV9vOzz3Vvcq6Syq9IFSzH6i6CWRk4r8JG4_TtgwdIyf818x4WNWOpMtEkOMuteDHPvLQrRRjxeJGNoWPEQNnU2WVbGI-cjmc.RHSUdcbiFzedROMA4vPHKoGe1S1SUMOoRZL0_1o0rwQ&dib_tag=se&keywords=circe&qid=1716985737&s=books&sprefix=circe%2Cstripbooks-intl-ship%2C333&sr=1-1",
  },
  {
    genre: "fantasy",
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K Rowling",
    price: 468,
    rating: 4.8,
    img: "/book templates/fantasy/img/harrypotterchambersofsecret.jpg",
    discount: 10,
    sourceLink:
      "https://www.amazon.com/Harry-Potter-Chamber-Secrets-Rowling/dp/0439064872",
  },
  {
    genre: "fantasy",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K Rowling",
    price: 1521,
    rating: 4.8,
    img: "/book templates/fantasy/img/harrypottersorcererstone.jpg",
    discount: 12,
    sourceLink:
      "https://www.amazon.com/Harry-Potter-Sorcerers-Stone-Book/dp/B017V4IMVQ/ref=sr_1_1?crid=2W6VBJLQO7MIK&dib=eyJ2IjoiMSJ9.XNlU_MOvNApoUsalNqzrCkielD6FZZVf14ykPxtvjekUMEmWxfviboHfkvXcoJXL6pLKtdRkM0CaEl-2tPYKiVox_nCORCmtd4urntX6vVLgc5D644y0kyw_fkfisB0ISYUAfxG9xggFez6O91WAq5eIYE_dbFWgqoW2jkugA0Xuh8sRME7UAVGiKsxAZOXeiWTjS_PabSxyhD9JTHOspELnDh2j-GOWxfXM7BZVCe4.X1PbuQHIVpdU_Cl-_oxg-6gVhHBs9MFn5vm7Tr9vxbc&dib_tag=se&keywords=harry+potters+sorcerer%27s+stone&qid=1716986793&s=books&sprefix=harry+potters+sorcer%2Cstripbooks-intl-ship%2C326&sr=1-1",
  },
  {
    genre: "fantasy",
    title: "Jade City",
    author: "Fonda Lee",
    price: 1521,
    rating: 4.4,
    img: "/book templates/fantasy/img/harrypottersorcererstone.jpg",
    discount: 10,
    sourceLink:
      "https://www.amazon.com/Jade-City-Fonda-Lee-audiobook/dp/B0771WZ7BG/ref=sr_1_1?crid=292LS1IVSUHWO&dib=eyJ2IjoiMSJ9.S6_KDd5zdc0WC6vebvg43tPTnXoH-TzVQSHcZqDuBCvGjHj071QN20LucGBJIEps.dM9YMGkVHPeAaEGzeAyxd77KcCfu1VIVP4vJ-QcKi6U&dib_tag=se&keywords=jade+city&qid=1716988049&s=audible&sprefix=jade+city%2Caudible%2C329&sr=1-1",
  },
  {
    genre: "fantasy",
    title: "matilda",
    author: "Roald Dahl",
    price: 1521,
    rating: 4.4,
    img: "/book templates/fantasy/img/harrypottersorcererstone.jpg",
    discount: 10,
    sourceLink:
      "https://www.amazon.com/Jade-City-Fonda-Lee-audiobook/dp/B0771WZ7BG/ref=sr_1_1?crid=292LS1IVSUHWO&dib=eyJ2IjoiMSJ9.S6_KDd5zdc0WC6vebvg43tPTnXoH-TzVQSHcZqDuBCvGjHj071QN20LucGBJIEps.dM9YMGkVHPeAaEGzeAyxd77KcCfu1VIVP4vJ-QcKi6U&dib_tag=se&keywords=jade+city&qid=1716988049&s=audible&sprefix=jade+city%2Caudible%2C329&sr=1-1",
  },
  {
    genre: "fantasy",
    title: "Name of The Wind",
    author: "Patrick Rothfuss",
    price: 1521,
    rating: 4.4,
    img: "/book templates/fantasy/img/harrypottersorcererstone.jpg",
    discount: 10,
    sourceLink:
      "https://www.amazon.com/Jade-City-Fonda-Lee-audiobook/dp/B0771WZ7BG/ref=sr_1_1?crid=292LS1IVSUHWO&dib=eyJ2IjoiMSJ9.S6_KDd5zdc0WC6vebvg43tPTnXoH-TzVQSHcZqDuBCvGjHj071QN20LucGBJIEps.dM9YMGkVHPeAaEGzeAyxd77KcCfu1VIVP4vJ-QcKi6U&dib_tag=se&keywords=jade+city&qid=1716988049&s=audible&sprefix=jade+city%2Caudible%2C329&sr=1-1",
  },
];

// const arr = books.filter((e) => e.genre === "fantasy")
// console.log(arr);

// const template = document.createElement("template");

// template.innterHTML = `
//     h1>Hello, World</h1>
//     <p>And all who inhabit it</p>
// `;

// document.body.appendChild(template.content);

