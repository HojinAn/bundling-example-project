// emoji.js에서 필요한 것만 가져오기
import { emojis } from './emoji'; // webpack.config.js의 resolve 설정 덕에 확장자 없이 import 가능
import { format } from 'date-fns';

document.addEventListener('DOMContentLoaded', function () {
  const today = new Date();
  // date-fns 모듈에서 가져온 format 함수를 호출
  const formattedDate = format(today, 'MMMM d, yyyy');
  document.getElementById('dateDisplay')!.textContent = formattedDate; // type 문제를 임시로 해결

  showRandomEmoji();
});

function showRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const selectedEmoji = emojis[randomIndex];

  document.getElementById('emojiDisplay')!.textContent = selectedEmoji.icon; // type 문제를 임시로 해결
  document.getElementById('emojiName')!.textContent = selectedEmoji.name; // type 문제를 임시로 해결
}
