// emoji.js에서 필요한 것만 가져오기
import { emojis } from './emoji.js';

document.addEventListener('DOMContentLoaded', function() {
  const today = new Date();
  // date-fns는 아직  CDN을 통해 불러오고 있어서 여기서는 직접 import하지 않음.
  const formattedDate = dateFns.format(today, 'MMMM d, yyyy');
  document.getElementById('dateDisplay').textContent = formattedDate;
  
  showRandomEmoji();
});

function showRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const selectedEmoji = emojis[randomIndex];
  
  document.getElementById('emojiDisplay').textContent = selectedEmoji.icon;
  document.getElementById('emojiName').textContent = selectedEmoji.name;
}