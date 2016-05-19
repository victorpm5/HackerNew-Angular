goog.provide('API.Client.Submission');

/**
 * @record
 */
API.Client.Submission = function() {}

/**
 * identificador unic de la publicaci\u00F3.
 * @type {!number}
 * @export
 */
API.Client.Submission.prototype.id;

/**
 * t\u00EDtol de la publicaci\u00F3.
 * @type {!string}
 * @export
 */
API.Client.Submission.prototype.title;

/**
 * url associada a la publicaci\u00F3.
 * @type {!string}
 * @export
 */
API.Client.Submission.prototype.url;

/**
 * text associat a la publicaci\u00F3.
 * @type {!string}
 * @export
 */
API.Client.Submission.prototype.text;

/**
 * identificador de l'usuari creador de la publicaci\u00F3.
 * @type {!number}
 * @export
 */
API.Client.Submission.prototype.userId;

/**
 * instant de creaci\u00F3 de la publicaci\u00F3.
 * @type {!string}
 * @export
 */
API.Client.Submission.prototype.createdAt;

/**
 * instant de l'\u00FAltima actualitzaci\u00F3 de la publicaci\u00F3.
 * @type {!string}
 * @export
 */
API.Client.Submission.prototype.updatedAt;

