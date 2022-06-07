import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

refreshCurrentPlayerTime();

player.on('timeupdate', throttle(loadTimeUpdate, 1000));

function loadTimeUpdate({ seconds }) {
  addToStorageUpdatedTime(seconds);
}

function addToStorageUpdatedTime(time) {
  localStorage.setItem(STORAGE_KEY, time);
}

function hasStorageCurrentTime() {
  return localStorage.getItem(STORAGE_KEY) ?? false;
}

function refreshCurrentPlayerTime() {
  if (!hasStorageCurrentTime()) {
    return;
  }

  player.setCurrentTime(hasStorageCurrentTime());
}
