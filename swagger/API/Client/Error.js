goog.provide('API.Client.Error');

/**
 * @record
 */
API.Client.Error = function() {}

/**
 * codi de l'error.
 * @type {!number}
 * @export
 */
API.Client.Error.prototype.code;

/**
 * missatge de l'error.
 * @type {!string}
 * @export
 */
API.Client.Error.prototype.message;

/**
 * camps de l'error.
 * @type {!string}
 * @export
 */
API.Client.Error.prototype.fields;

