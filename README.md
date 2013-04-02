Leaflet.RestoreView
===================

Stores and restores map view using localStorage.

First call on ``restoreView()`` will setup event listening and view save.

Usage
-----

```
    if (!map.restoreView()) {
        map.setView([50.5, 30.51], 15);
    }
```
