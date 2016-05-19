goog.provide('API.Client.CommentCreate');

/**
 * @record
 */
API.Client.CommentCreate = function() {}

/**
 * identificador de la submission de la que es vol fer el comentari.
 * @type {!number}
 * @export
 */
API.Client.CommentCreate.prototype.submissionId;

/**
 * contingut associat del comentari a crear.
 * @type {!string}
 * @export
 */
API.Client.CommentCreate.prototype.content;

