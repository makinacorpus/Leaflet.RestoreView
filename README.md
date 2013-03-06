Leaflet.RestoreView
===================

Stores and restores map view using localStorage.

First call on ``restoreView()`` will setup event listening and view save.

Usage
-----

```
    if (!map.restoreView()) {
        map.fitWorld();
    }
```
