function askKkabbi() {
  const input = document.getElementById("questionInput");
  const result = document.getElementById("resultText");
  const mainImg = document.getElementById("mainKkabbi");

  const q = input.value.trim();

  if (!q) {
    result.innerText = "질문을 입력해주세요 😊";
    return;
  }

  let answer = "깨비가 기운을 읽고 있어요...";
  let img = "kkabbi-basic.png";

  if (q.includes("사랑") || q.includes("연애") || q.includes("재회") || q.includes("연락")) {
    img = "kkabbi-love.png";
    answer = "사랑의 기운이 강합니다. 마음을 열면 좋은 흐름이 와요 💞";
  } 
  else if (q.includes("돈") || q.includes("재물") || q.includes("행운") || q.includes("복")) {
    img = "kkabbi-talisman.png";
    answer = "금전운이 움직입니다. 작은 기회를 놓치지 마세요 🍀";
  } 
  else if (q.includes("고민") || q.includes("어떡") || q.includes("힘들") || q.includes("걱정")) {
    img = "kkabbi-think.png";
    answer = "지금은 서두르지 말고 흐름을 보는 지혜가 필요합니다 🌙";
  } 
  else if (q.includes("좋은") || q.includes("합격") || q.includes("성공") || q.includes("기쁜")) {
    img = "kkabbi-wink.png";
    answer = "좋은 소식의 기운이 보입니다. 기대해도 좋아요 ✨";
  } 
  else if (q.includes("외롭") || q.includes("슬퍼") || q.includes("위로")) {
    img = "kkabbi-cute.png";
    answer = "오늘은 자신을 먼저 안아주세요. 따뜻한 기운이 함께합니다 🤍";
  }

  mainImg.src = img;
  result.innerText = answer;
}
