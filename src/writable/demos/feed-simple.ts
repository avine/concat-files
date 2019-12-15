import WritableLogger from '../logger';

const loggerSpeed = 120;
const feedSpeed = 40;

const writable = new WritableLogger(50);
writable.speed = loggerSpeed;

writable.on('finish', () => console.log('* finish *')); // FIXME: NOT visible...

const dataLimit = 100;
let data = 0;

function feedStream(): void {
  const interval = setInterval(() => {
    data += 1;

    if (data < dataLimit) {
      const isWritable = writable.write(data.toString());

      if (!isWritable) {
        clearInterval(interval);
        writable.once('drain', feedStream);
      }
    } else {
      clearInterval(interval);
      writable.end(data.toString());
    }
  }, feedSpeed);
}

feedStream();
