import ReadableCounter from '../../readable/counter';
import WritableLogger from '../logger';

const readable = new ReadableCounter(100, 1, 25);
readable.speed = 40;
readable.logEnabled = false;

const writable = new WritableLogger(50);
writable.speed = 120;
writable.logEnabled = true;

readable.pipe(writable);
