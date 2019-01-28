(function() {
    var RestoreViewMixin = {
        restoreView: function (type) {
            var storage = getStorage(type);
            if (!storage) {
                return false;
            }
            if (!this.__initRestore) {
                this.on('moveend', function (e) {
                    if (!this._loaded)
                        return;  // Never access map bounds if view is not set.

                    var view = {
                        lat: this.getCenter().lat,
                        lng: this.getCenter().lng,
                        zoom: this.getZoom()
                    };
                    storage['mapView'] = JSON.stringify(view);
                }, this);
                this.__initRestore = true;
            }

            var view = storage['mapView'];
            try {
                view = JSON.parse(view || '');
                this.setView(L.latLng(view.lat, view.lng), view.zoom, true);
                return true;
            }
            catch (err) {
                return false;
            }
        }
    };

    function getStorage(type) {
        var t = 'localStorage';
        var storage = null;

        if (type && type === 'session') {
            t = 'sessionStorage';
        }

        if (webStorageAvailable(t)) {
            storage = window[t];
        }

        return storage;
    }

    function webStorageAvailable(type) {
        try {
            var storage = window[type],
                x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch(e) {
            console.warn("Your browser blocks access to " + type);
            return false;
        }
    }

    L.Map.include(RestoreViewMixin);
})();
