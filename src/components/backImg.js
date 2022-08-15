const images = [
  "https://www.whatsappimages.in/wp-content/uploads/2021/06/HD-New-Beautiful-Unique-Profile-Images-Pictures.gif",
  "https://bestigcaptions.com/wp-content/uploads/2022/02/HD-Whatsapp-DP-Images-scaled.jpg",
  "https://cdn.clien.net/web/api/file/F01/9484939/7a63586a213c1.jpg?w=780&h=30000",
  "https://i.pinimg.com/236x/7e/77/9d/7e779dafc389ab1d5f06098ce504df68.jpg",
  "https://mblogthumb-phinf.pstatic.net/MjAxODAxMjlfOTgg/MDAxNTE3MjM1ODgzNzg4.VKqWCvWRMDV1pO300FDYZAsljKWYU5PR4RsbrLPeFysg.37gpNd_J0P6k5YhVC-egEvSb5dmjMuTrGZN0O3CZ52gg.JPEG.13cafe/09.jpg?type=w800",
];
const colorBtn = document.querySelector(".colorBtn");
const body = document.querySelector("body");

function backgroundImg() {
  const backImg = images[Math.floor(Math.random() * images.length)];
  body.style.backgroundImage = `url(${backImg})`;
  body.style.backgroundSize = "50% 100%";
}

backgroundImg();
