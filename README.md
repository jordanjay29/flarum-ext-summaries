# Summaries+

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/ianm/summariesplus.svg)](https://packagist.org/packages/ianm/summariesplus)

A [Flarum](https://github.com/flarum/flarum) extension which adds excerpts to the discussion list. This is essentially the same as [jordanjay29's](https://discuss.flarum.org/d/2151) [Summaries](https://github.com/jordanjay29/flarum-ext-summaries), with extra customisable options. If you don't need the extra options, I recommend using [Summaries](https://github.com/jordanjay29/flarum-ext-summaries) instead.

## Features
As well as displaying an excerpt as a summary (with configurable length):

 - All display strings are translatable
 - Toggle between displaying plain or rich content in the summary (admin)
 - Choose from using either the first or latest post in the summary (admin)
 - User preference to show/hide summaries

## Installation
```
composer require ianm/summariesplus
```

### Updating
```
composer require ianm/summariesplus
php flarum migrate
php flarum cache:clear
```

## Links
- [Github](https://github.com/imorland/flarum-ext-summaries)
- [Discuss](https://discuss.flarum.org/)  
- [Packagist](https://packagist.org/packages/ianm/summariesplus) 
- [Summaries by jordanjay29 (the original extension)](https://github.com/jordanjay29/flarum-ext-summaries) 
