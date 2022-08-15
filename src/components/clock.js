const clock = document.querySelector(".component-time__title");
const date = document.querySelector(".component-time__date");
const weeks = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];

function whatTime() {
  const time = new Date();
  const month = String(time.getMonth() + 1);
  const day = String(time.getDate());
  const week = String(weeks[time.getDay()]);
  const hour = String(time.getHours());
  const minute = String(time.getMinutes()).padStart(2, "0");
  clock.innerHTML = `${hour}:${minute}`;
  date.innerText = `${month}월 ${day}일 ${week}`;
}

whatTime();
setInterval(whatTime, 1000);
