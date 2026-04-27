깨비아씨 PWA 수정팩

해야 할 일:
1. GitHub 메인 폴더에 아래 4개 파일 업로드/덮어쓰기
   - manifest.json
   - sw.js
   - icon-192.png
   - icon-512.png

2. index.html의 <head> 안에 pwa-head-code.txt 내용을 넣기
   절대 </body> 아래에 넣지 마세요.

3. Commit changes 저장 후 Vercel 배포 1~2분 기다리기

4. 휴대폰 Chrome에서 확인
   https://kabbi-fortune.vercel.app/manifest.json
   https://kabbi-fortune.vercel.app/icon-192.png

5. 기존 홈화면 아이콘 삭제 후 다시 추가
   '앱 설치'가 뜨면 성공 가능성이 높습니다.
