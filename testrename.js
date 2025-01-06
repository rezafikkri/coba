import { renameSync } from 'node:fs';

renameSync('./testrename.txt', 'notfound/testrename.txt');
