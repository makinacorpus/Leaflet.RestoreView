Leaflet.RestoreView
===================

Stores and restores map view using localStorage.

First call on ``restoreView()`` will setup event listening and view save.

<p  align="center">
<a href="https://www.npmjs.com/package/leaflet.restoreview"><img alt="npm" src="https://img.shields.io/npm/dt/leaflet.restoreview"></a>
<a href="https://www.npmjs.com/package/leaflet.restoreview"><img alt="npm" src="https://img.shields.io/npm/v/leaflet.restoreview?color=red">
</a>
</p>

<div class="demo">
<p align="center"> Check out the <a href="https://makinacorpus.github.io/Leaflet.RestoreView/">demo</a> ! </p>
</div>

*Note: This plugin uses localStorage to store data, if your browser denies storing local data, this will not work.*

Install
-----
install it via your favorite package manager:
* `npm i leaflet.restoreview`


Usage
-----

```
    if (!map.restoreView()) {
        map.setView([50.5, 30.51], 15);
    }
```

To keep the view for the current browser tab only, store it in sessionStorage:

```
    map.restoreView('session');
```

Changelog
---------

### 1.1.0

* Add `restoreView('session')` to keep the view in sessionStorage (#7)
* Declare Leaflet as a peer dependency (`leaflet >=0.7 <2`)

### 1.0.0

* Initial version

Authors
-------

[![Makina Corpus](http://depot.makina-corpus.org/public/logo.gif)](http://makinacorpus.com)
