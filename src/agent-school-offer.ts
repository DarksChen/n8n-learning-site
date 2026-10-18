// AI Agent 自學網公告：依台灣時間切換優惠階段與倒數。
// 沒有 JavaScript 時，index.html 的靜態文字照常顯示。

interface OfferPhase {
  until: number;      // 這個階段結束（漲價）的時間
  badge: string;
  text: string;       // {countdown} 會被換成倒數
  countdown: boolean;
}

const tw = (iso: string) => Date.parse(`${iso}T00:00:00+08:00`);

const PHASES: OfferPhase[] = [
  { until: tw('2026-10-19'), badge: '超早鳥優惠中', text: '⏰ 超早鳥價倒數 {countdown}，<strong>10/19 00:00 漲價</strong>', countdown: true },
  { until: tw('2026-10-30'), badge: '早鳥優惠中', text: '現在購買享<strong>早鳥優惠價</strong>，預計於 <strong>10/30 恢復原價</strong>', countdown: false },
  { until: tw('2026-11-02'), badge: '早鳥優惠中', text: '⏰ 早鳥價倒數 {countdown}，<strong>11/2 00:00 恢復原價</strong>', countdown: true },
];

const pad = (n: number) => String(n).padStart(2, '0');

function formatCountdown(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(total / 86400);
  const hms = `${pad(Math.floor(total / 3600) % 24)}:${pad(Math.floor(total / 60) % 60)}:${pad(total % 60)}`;
  return `<span class="agent-school-countdown">${days > 0 ? `${days} 天 ` : ''}${hms}</span>`;
}

export function setupAgentSchoolOffer(): void {
  const badge = document.getElementById('agent-school-offer-badge');
  const line = document.getElementById('agent-school-offer');
  if (!badge || !line) return;

  let timer = 0;
  const render = () => {
    const now = Date.now();
    const phase = PHASES.find(p => now < p.until);
    if (!phase) {
      // 優惠全部結束：收起優惠標籤與優惠文字
      badge.style.display = 'none';
      line.style.display = 'none';
      window.clearInterval(timer);
      return;
    }
    badge.textContent = phase.badge;
    line.innerHTML = phase.text.replace('{countdown}', formatCountdown(phase.until - now));
  };

  render();
  timer = window.setInterval(render, 1000);
}
