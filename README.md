Leaflet.RestoreView
===================

Stores and restores map view using localStorage.

First call on ``restoreView()`` will setup event listening and view save.

<p  align="center">
<a href="https://www.npmjs.com/package/@bagage/leaflet.restoreview"><img alt="npm" src="https://img.shields.io/npm/dt/%40bagage%2Fleaflet.restoreview"></a>
<a href="https://www.npmjs.com/package/@bagage/leaflet.restoreview"><img alt="npm" src="https://img.shields.io/npm/v/%40bagage%2Fleaflet.restoreview?color=red">
</a>
</p>

<div class="demo">
<p align="center"> Check out the <a href="https://makinacorpus.github.io/Leaflet.RestoreView/">demo</a> ! </p>
</div>

*Note: This plugin uses localStorage to store data, if your browser denies storing local data, this will not work.*

Install
-----
install it via your favorite package manager:
* `npm i leaflet-textpath`


Usage
-----

```
    if (!map.restoreView()) {
        map.setView([50.5, 30.51], 15);
    }
```

Authors
-------

[![Makina Corpus](http://depot.makina-corpus.org/public/logo.gif)](http://makinacorpus.com)
