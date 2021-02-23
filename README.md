# Travian Animals Finder

<img src="public/nature.png" alt="nature"/><br/>

The tool for analysis oases (free or occupied) and searching animals (Elephant and etc).

Tested in **Shadow Empires**, **Fire and Sand** and **Legends (4)**.

<p align="center">
<img src="public/fire_and_sand.png" alt="fire_and_sand"/><br/>
<img src="public/legends_logo_black.png" alt="legends_logo_black"/>
<img src="public/shadow_empires_logo.png" alt="legends_logo_black"/>
</p>

## How to use

## Setup

- clone the repo
- install the dependencies, `yarn install`
- run `npm run preinstal` or `npm run preinstal-windows`
- you should probably register new fake account for these manipulations.

## Config

Set correct configuration in:

- `src/config/config.env` file
- `src/config/cookie.text` file

### cookie

1. Open map, https://your-game-world.travian.com/karte.php

    <img src="public/map.png" alt="map"/>

2. Open DevTools(F12 Chrome), Network tab’s, filter by XHR:

    <img src="public/dev_tools.png" alt="dev_tools"/>

3. Select random request from list (F5 if it’s empty) and copy **cookie** from request:

   <img src="public/cookies.png" alt="cookies"/>

4. Insert selected cookie value into `src/config/cookie.text` file

### MIN_X, MIN_Y

The Top Left Corner Co-Ordinate of the Map Area to be searched.

### MAX_X, MAX_Y

The Bottom Right Corner Co-Ordinate of the Map Area to be searched.

### START_X, START_Y

Position of search (your village or cap, probably), calculate distance (for sorting oases closest to you)

<img src="public/map_min_max.png" alt="map_min_max"/>

## Start

Run command `npm run clean` clean data directory and create files. After that run `npm run collect` (collecting oases
position) and wait… It will take a lot of time (depends on your config (MIN_X, MIN_Y, MAX_X, MAX_Y, DELAY_MIN,
DELAY_MAX) etc).

<img src="public/npm_collect.png" alt="npm_collect"/>

After execution `npm run collect` run  `npm run find`.

<img src="public/npm_find.png" alt="npm_find"/>

Result in excel file: `data/elephant_*.xlsx`

|  x  |  y  | Elephant | Another animal | hasCrocodile | hasTiger | totalAnimal |
| :---: | :---: | :--------: | :--------------: | :------------: | :--------: | :-----------: |
| -18 |  5  | 7 | 6 | 1 | 1 | 141 |
| -14 |  3  | 4 | 5 | 0 | 0 | 34 |
| -42 |  14 | 3 | 4 | 0 | 0 | 77 |
| -48 |  -7 | 3 | 4 | 0 | 0 | 84 |

<img src="public/result_oasis.png" alt="result_oasis"/>

## Technologies:

- **JavaScript**;
- **NodeJS**;
- **Axios**.
- **Cheerio**.

## Author

* [**Mykhavko Ivan**](https://github.com/Tegos)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Disclaimer

_Please note that this is a research project, I am by no means responsible for any usage of this tool._  
_Use on your own behalf, I am also not responsible if your accounts get banned due to extensive use of this tool._

