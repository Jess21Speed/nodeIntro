import chalk from 'chalk';
import axios from 'axios';

console.log(chalk.blue('Hello world!'));
import scripts from './scripts.js';
import {configs} from './scripts.js';
scripts();
configs();

import {config} from 'dotenv';
import { Console } from 'console'
config()
console.log(process.env.API_KEY);

let api_url = `
//api url for moviedb with api key replaced by {process.env.API_KEY}
`
axios.get("https://dog.ceo/api/breeds/image/random")
.then (res=>{
    console.log(res.data)
})
