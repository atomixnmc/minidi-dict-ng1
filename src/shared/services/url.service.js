export default class URLService {

    constructor($window, $http, $location, $sce) {
        this.urls = $window.ApplicationConfiguration.urls;
        this.$window = $window;
        this.$sce = $sce;
        this.$window.GlobalURLService = this;
    }

    urlJoin(path, url, customProtocol) {
        var protocol = this.urls.protocol;

        if (customProtocol) {
            protocol = customProtocol;
        }

        if (url) {
            if (url[0] == "/") {
                return protocol + path + url;
            } else {
                return protocol + path + "/" + url;
            }
        } else {
            return protocol + path;
        }
    }

    getMetaAssetUrl(url) {
        return this.urlJoin(this.urls.serviceMetaUrl, url);
    }

    getMediaUrl(url) {
        return this.urlJoin(this.urls.serviceMediaUrl, url);
    }

    getAssetUrl(url) {
        return this.urlJoin(this.urls.assetUrl, url);
    }
    getLocalUrl(url) {
        return this.urls.localUrl + url;
    }

    getInternalUrl(url) {
        return this.urls.rootUrl + url;
    }
    getServiceUrl(url) {
        return this.urlJoin(this.urls.serviceUrl, url);
    }
    getServiceMediaUrl(url) {

        return this.urlJoin(this.urls.serviceMediaUrl, url);
    }
    getApiServiceUrl(url) {
        return this.urlJoin(this.urls.serviceApiUrl, url);
    }

    getToolServiceUrl(toolName, isTrusted) {
        var newUrl = this.urlJoin(this.urls.serviceUrl, "/tools/" + toolName);
        if (isTrusted) {
            return this.$sce.trustAsResourceUrl(newUrl);
        }
        return newUrl;
    }


    getCDNUrl(baseUrl, options) {
        //console.log(baseUrl);
        if (baseUrl.indexOf("cloudinary.com") != -1) {
            return this.$window.$icms.plugins["Cloudinary"].getCDNUrl(baseUrl, options);
        }
        return baseUrl;
    }

    isAssetUrl(url) {
        return url.indexOf("/uploads") >= 0;
    }
}