const fortunes=[
{total:'기다리던 기회가 열리는 하루입니다.',love:'따뜻한 말 한마디가 관계를 살립니다.',money:'작은 지출은 신중히 살피세요.',health:'무리하지 말고 피로를 풀어주세요.',num:7,color:'보라색',advice:'서두르지 말고 흐름을 보세요.'},
{total:'막혀 있던 일이 조금씩 풀리기 시작합니다.',love:'오해가 풀리고 마음이 가까워질 수 있습니다.',money:'뜻밖의 작은 이익이 따를 수 있습니다.',health:'몸을 따뜻하게 하고 수분을 챙기세요.',num:3,color:'금색',advice:'오늘은 웃는 얼굴이 복을 부릅니다.'},
{total:'새로운 제안이나 연락이 들어올 수 있습니다.',love:'기다리던 연락운이 밝아집니다.',money:'계산은 꼼꼼히, 결정은 천천히 하세요.',health:'소화와 컨디션 관리가 필요합니다.',num:9,color:'분홍색',advice:'작은 기회를 가볍게 넘기지 마세요.'},
{total:'차분함 속에서 좋은 결과가 만들어집니다.',love:'상대의 마음을 먼저 들어주면 좋습니다.',money:'아껴둔 것이 든든한 힘이 됩니다.',health:'가벼운 산책이 기운을 회복시킵니다.',num:5,color:'초록색',advice:'오늘은 말보다 행동이 운을 엽니다.'}
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

function formatFortune(f){
  return `🔮 총운: ${f.total}
❤️ 사랑운: ${f.love}
💰 금전운: ${f.money}
🌿 건강운: ${f.health}
🍀 행운 숫자: ${f.num}
🎨 행운 색상: ${f.color}
✨ 한줄 조언: ${f.advice}`;
}

function drawFortune(){show(formatFortune(pick(fortunes)))}
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
  const timing=score>=80?'이번 달 후반, 가벼운 안부가 좋습니다.':score>=60?'2~4주 정도 시간을 두고 자연스럽게 다가가세요.':'지금은 연락보다 마음 정리가 먼저입니다.';
  const mind=score>=80?'상대도 아직 마음이 남아 있으나 먼저 움직이기 망설이고 있습니다.':score>=60?'상대는 감정과 현실 사이에서 고민하는 흐름입니다.':'상대는 아직 관계를 다시 생각할 여유가 부족한 상태입니다.';
  const caution=score>=80?'과거 다툼 이야기는 피하고 현재 안부부터 시작하세요.':score>=60?'조급한 확인이나 재촉은 관계를 더 멀어지게 할 수 있습니다.':'억지로 붙잡기보다 스스로의 마음을 먼저 회복하는 것이 중요합니다.';
  const goodDays=[7,14,22].map(d=>d+'일').join(', ');
  const advice=score>=80?pick(advHigh):score>=60?pick(advMid):pick(advLow);

  show(`💞 감정 연결도 ${score}%
🔮 재회 가능성 ${chance}
📩 연락 타이밍: ${timing}
🧠 상대 심리: ${mind}
⚠️ 주의할 점: ${caution}
📅 좋은 날짜: ${goodDays}
🌙 깨비 조언: ${advice}`);
}

function coupleMatch(){
  const score=70+Math.floor(Math.random()*26);
  const style=score>=90?'운명처럼 잘 맞는 인연입니다.':score>=80?'서로를 성장시키는 좋은 궁합입니다.':'다름을 이해하면 깊어지는 관계입니다.';
  const lovePoint=score>=90?'감정 표현이 잘 통하고 애정 흐름이 강합니다.':score>=80?'대화가 잘 통하며 안정감이 있습니다.':'서로 다른 표현 방식 이해가 중요합니다.';
  const caution=score>=90?'익숙함 속 표현 부족만 주의하세요.':score>=80?'사소한 오해는 바로 대화로 푸세요.':'기대치를 강요하지 않는 것이 중요합니다.';
  const future=score>=90?'장기적인 미래까지 함께 보기 좋은 흐름입니다.':score>=80?'천천히 쌓아가면 오래가는 인연입니다.':'시간을 들여 맞춰가면 충분히 좋아집니다.';

  show(`💘 커플 궁합 ${score}%
💞 관계 해석: ${style}
❤️ 애정 흐름: ${lovePoint}
⚠️ 주의할 점: ${caution}
🌈 미래 흐름: ${future}`);
}

function premiumReunion(){
  show(`🔐 프리미엄 재회운
프리미엄 서비스 준비 중입니다.
정식 오픈 시 카카오페이 / 토스페이 / 계좌이체로 이용 가능합니다.

제공 예정:
- 상대 심리 상세 분석
- 연락 타이밍
- 재회 가능 흐름
- 관계 주의점`);
}

function premiumMatch(){
  show(`💎 프리미엄 궁합
프리미엄 서비스 준비 중입니다.
정식 오픈 시 카카오페이 / 토스페이 / 계좌이체로 이용 가능합니다.

제공 예정:
- 결혼궁합
- 갈등 패턴
- 오래가는 비결
- 심층 관계 리포트`);
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

drawFortune();
