import MediaPlayer from './MediaPlayer';
import Autoplay from './plugins/Autoplay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads';


const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [new Autoplay(), new AutoPause(), new Ads()],
});


const button1: HTMLElement = document.querySelector('#play')!;
button1.onclick = () => player.togglePlay();


const button2: HTMLElement = document.querySelector('#mute')!;
button2.onclick = () => player.mute();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error => {console.log(error.message);})
}