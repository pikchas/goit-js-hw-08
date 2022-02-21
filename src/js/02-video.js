const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const KEY = 'videoplayer-current-time';
const onPlay = function (data) { };

player.on('play', onPlay);

player.on('timeupdate', data => {
    console.log(data.seconds);
    JSON.stringify(KEY, data.seconds.toString());
    localStorage.setItem(KEY, data.seconds.toString());
});

const key = localStorage.getItem(KEY);
if (key) {
  player.setCurrentTime(parseFloat(key));
};

