var application = application || {};

application.data = (function () {
	function Data(rootUrl) {
		this.rootUrl = rootUrl;
		this.books = new Base(rootUrl + 'Books');
	}

	var Base = (function () {
		function Base(serviceUrl) {
			this.serviceUrl = serviceUrl;
		}

		Base.prototype.getBook = function (id, success, error) {
			return ajaxRequester.get(this.serviceUrl + '/' + id, success, error);
		}

		Base.prototype.getAll = function (success, error) {
			return ajaxRequester.get(this.serviceUrl, success, error);
		}

		Base.prototype.add = function (data, success, error) {
			return ajaxRequester.post(this.serviceUrl, data, success, error);
		}

		Base.prototype.remove = function (id, success, error) {
			return ajaxRequester.delete(this.serviceUrl + '/' + id, success, error);
		}

		Base.prototype.update = function (id, data, success, error) {
			return ajaxRequester.put(this.serviceUrl + '/' + id, data, success, error);
		}

		return Base;
	}());

	return {
		get: function (rootUrl) {
			return new Data(rootUrl);
		} 
	}
}());