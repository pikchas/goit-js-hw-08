import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle (data => {
    console.log(data.seconds);
    JSON.stringify(KEY, data.seconds.toString());
    localStorage.setItem(KEY, data.seconds.toString());
}, 1000));

const key = localStorage.getItem(KEY);
if (key) {
  player.setCurrentTime(parseFloat(key));
};

