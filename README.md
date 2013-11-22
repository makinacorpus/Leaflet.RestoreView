Leaflet.RestoreView
===================

Stores and restores map view using localStorage.

First call on ``restoreView()`` will setup event listening and view save.

Check out [demo](http://makinacorpus.github.io/Leaflet.RestoreView/).

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
