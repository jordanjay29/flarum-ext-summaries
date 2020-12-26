# Koobid by IanM

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/ianm/koobid.svg)](https://packagist.org/packages/ianm/koobid)

A [Flarum](https://github.com/flarum/flarum) extension which adds summary excerpts to the discussion list. This is essentially the same as [jordanjay29's](https://discuss.flarum.org/d/2151) [Summaries](https://github.com/jordanjay29/flarum-ext-summaries), with extra customisable options. If you don't need the extra options, I recommend using [Summaries](https://github.com/jordanjay29/flarum-ext-summaries) instead.

## Why **koobid**?

Based on the Somali _'soo koobid'_, meaning _'summarize'_

## Features
As well as displaying an excerpt as a summary (with configurable length):

 - All display strings are translatable
 - Toggle between displaying plain or rich content in the summary (admin)
 - Choose from using either the first or latest post in the summary (admin)
 - User preference to show/hide summaries

## Screenshots

#### Admin settings
![Admin settings](https://user-images.githubusercontent.com/16573496/103157041-13122980-47a7-11eb-9165-18c30b3b1815.png)

#### Rich content in summary
![Rich content](https://user-images.githubusercontent.com/16573496/103157062-4c4a9980-47a7-11eb-9103-327f3aff0690.png)

#### User settings
![image](https://user-images.githubusercontent.com/16573496/103157069-697f6800-47a7-11eb-8cc5-c30900da3182.png)
## Installation
```
composer require ianm/koobid
```

### Updating
```
composer require ianm/koobid
php flarum migrate
php flarum cache:clear
```

## Links
- [Github](https://github.com/imorland/koobid)
- [Discuss](https://discuss.flarum.org/)  
- [Packagist](https://packagist.org/packages/ianm/koobid) 
- [Summaries by jordanjay29 (the original extension)](https://github.com/jordanjay29/flarum-ext-summaries) 
