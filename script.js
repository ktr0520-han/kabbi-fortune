const fortunes=[
'기다리던 소식이 들려오는 날입니다.',
'작은 친절이 큰 복으로 돌아옵니다.',
'급한 마음을 내려놓으면 길이 보입니다.',
'뜻밖의 인연이 미소를 가져다줍니다.',
'금전운이 있으니 지출도 함께 살피세요.',
'오늘의 선택이 내일의 기회가 됩니다.',
'망설이던 일에 한 걸음 내디뎌 보세요.',
'조용한 시간 속에 답이 숨어 있습니다.',
'주변의 조언 속에 행운이 담겨 있습니다.',
'마음을 다스리면 일이 순조롭게 풀립니다.',
'멈춰 있던 일이 다시 움직이기 시작합니다.',
'작은 용기가 큰 변화를 만듭니다.',
'웃는 얼굴이 귀인을 불러옵니다.',
'늦었다고 생각한 순간이 가장 빠른 때입니다.',
'새로운 제안이 들어올 수 있는 날입니다.',
'지나친 걱정보다 행동이 필요한 날입니다.',
'오늘은 말보다 실천이 빛을 발합니다.',
'반가운 만남이 기다리고 있습니다.',
'잊고 있던 기회가 다시 찾아옵니다.',
'차분함 속에서 큰 복이 자랍니다.'
];

const money=[
'작은 재물이 들어오는 날입니다. 큰 지출은 천천히 결정하세요.',
'아껴둔 것이 복이 됩니다. 무리한 소비는 피하세요.',
'뜻밖의 금전 소식이 있을 수 있습니다.',
'오늘은 계약과 계산을 꼼꼼히 살피면 좋습니다.',
'재물운은 열려 있으나 욕심은 줄이는 것이 좋습니다.'
];

const love=[
'따뜻한 말 한마디가 마음의 문을 엽니다.',
'기다리던 연락이 올 수 있는 날입니다.',
'오해는 대화로 풀리고 마음은 가까워집니다.',
'새로운 인연보다 지금 곁의 사람을 살피세요.',
'부드러운 미소가 애정운을 밝힙니다.'
];

const reunion=[
'서로의 인연선이 아직 끊어지지 않았습니다. 다시 마주할 가능성이 있습니다.',
'타이밍만 맞는다면 다시 이어질 수 있는 인연입니다.',
'재회는 서두름보다 진심이 열쇠가 됩니다.',
'지금은 기다림이 필요한 관계입니다.',
'마음의 문이 다시 열릴 시기가 가까워지고 있습니다.'
];

const zodiac={
'쥐띠':'새로운 기회가 다가옵니다. 작은 결정을 믿으세요.',
'소띠':'꾸준함이 빛을 발하는 날입니다. 서두르지 마세요.',
'호랑이띠':'추진력이 강해집니다. 말은 부드럽게 하세요.',
'토끼띠':'인간관계에 따뜻한 기운이 흐릅니다.',
'용띠':'큰 흐름이 열립니다. 자신감을 가지세요.',
'뱀띠':'지혜로운 선택이 복을 부릅니다.',
'말띠':'움직일수록 기회가 커집니다.',
'양띠':'마음의 평온이 중요한 날입니다.',
'원숭이띠':'재치가 빛나고 도움을 받습니다.',
'닭띠':'성실함이 인정받는 날입니다.',
'개띠':'믿음이 좋은 결과로 이어집니다.',
'돼지띠':'재물운이 따르니 작은 행운을 잡으세요.'
};

const advHigh=[
'과거보다 현재의 안부로 시작하면 좋은 흐름이 열립니다.',
'가볍고 따뜻한 말이 관계를 다시 움직입니다.',
'지금은 진심을 전하면 좋은 반응이 따를 수 있습니다.'
];
const advMid=[
'서두르지 말고 자연스러운 계기를 기다리면 좋습니다.',
'조급함보다 편안한 대화가 먼저입니다.',
'시간을 두고 천천히 다가가면 좋습니다.'
];
const advLow=[
'지금은 상대보다 나의 마음을 먼저 돌보는 시간이 필요합니다.',
'잠시 멈추고 스스로를 회복하는 시간이 중요합니다.',
'놓아줌 속에서 새로운 길이 열릴 수 있습니다.'
];

function show(text){document.getElementById('result').textContent=text}
function pick(arr){return arr[Math.floor(Math.random()*arr.length)]}
function drawFortune(){show(pick(fortunes))}
function drawMoney(){show(pick(money))}
function drawLove(){show(pick(love))}
function drawReunionLuck(){show(pick(reunion))}

function calcReunion(){
  const my=document.getElementById('myBirth').value;
  const their=document.getElementById('theirBirth').value;
  const a=(my.match(/\d/g)||[]).reduce((s,n)=>s+Number(n),0);
  const b=(their.match(/\d/g)||[]).reduce((s,n)=>s+Number(n),0);
  if(!a||!b){show('생년월일을 먼저 입력해주세요.');return;}
  const score=45+((a*7+b*11)%51);
  const chance=score>=80?'높음':score>=60?'보통':'시간 필요';
  const timing=score>=80?'2주 안에 가벼운 안부가 좋습니다.':score>=60?'조금 기다린 뒤 자연스럽게 연락하세요.':'지금은 연락보다 마음 정리가 먼저입니다.';
  const advice=score>=80?pick(advHigh):score>=60?pick(advMid):pick(advLow);
  show(`💞 감정 연결도 ${score}%\n🔮 재회 가능성 ${chance}\n📩 연락 타이밍: ${timing}\n🌙 깨비 조언: ${advice}`);
}

function coupleMatch(){
  const score=70+Math.floor(Math.random()*26);
  show(`💘 커플 궁합 ${score}%\n서로 다른 매력이 어우러지는 인연입니다.\n대화가 깊어질수록 더 좋은 관계가 됩니다.`);
}

function premiumReunion(){
  show('🔐 프리미엄 재회운\n상세 분석은 결제 후 이용 가능합니다.\n감정 흐름, 연락 타이밍, 상대 심리, 관계 주의점을 제공합니다.');
}
function premiumMatch(){
  show('💎 프리미엄 궁합\n심층 궁합은 결제 후 이용 가능합니다.\n결혼궁합, 갈등패턴, 오래가는 비결을 제공합니다.');
}
function openYoutube(){
  alert('유튜브 채널 링크를 넣으면 바로 연결됩니다.');
}

const grid=document.getElementById('zodiacGrid');
Object.keys(zodiac).forEach(name=>{
  const btn=document.createElement('button');
  btn.textContent=name;
  btn.onclick=()=>show(zodiac[name]);
  grid.appendChild(btn);
});
