#!/usr/bin/env node
import { welcome, meetUser, question, getAnswer, finish } from '../index';

welcome();
meetUser();

for (let i = 0; i < 3; i++) {
  question();
  getAnswer();
}

finish();
