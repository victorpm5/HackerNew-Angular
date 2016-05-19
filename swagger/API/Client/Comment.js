goog.provide('API.Client.Comment');

/**
 * @record
 */
API.Client.Comment = function() {}

/**
 * identificador unic del comentari.
 * @type {!number}
 * @export
 */
API.Client.Comment.prototype.id;

/**
 * contingut associat del comentari.
 * @type {!string}
 * @export
 */
API.Client.Comment.prototype.content;

/**
 * identificador de l'usuari creador del comentari.
 * @type {!number}
 * @export
 */
API.Client.Comment.prototype.userId;

/**
 * identificador de la publicaci\u00F3 relacionada.
 * @type {!number}
 * @export
 */
API.Client.Comment.prototype.submissionId;

/**
 * instant de creaci\u00F3 del comentari.
 * @type {!string}
 * @export
 */
API.Client.Comment.prototype.createdAt;

/**
 * instant de l'\u00FAltima actualitzaci\u00F3 del comentari.
 * @type {!string}
 * @export
 */
API.Client.Comment.prototype.updatedAt;

