goog.provide('API.Client.Reply');

/**
 * @record
 */
API.Client.Reply = function() {}

/**
 * identificador unic de la resposta.
 * @type {!number}
 * @export
 */
API.Client.Reply.prototype.id;

/**
 * contingut associat de la resposta.
 * @type {!string}
 * @export
 */
API.Client.Reply.prototype.content;

/**
 * identificador de l'usuari creador de la resposta.
 * @type {!number}
 * @export
 */
API.Client.Reply.prototype.userId;

/**
 * identificador del comentari relacionat.
 * @type {!number}
 * @export
 */
API.Client.Reply.prototype.commentId;

/**
 * instant de creaci\u00F3 de la resposta.
 * @type {!string}
 * @export
 */
API.Client.Reply.prototype.createdAt;

/**
 * instant de l'\u00FAltima actualitzaci\u00F3 de la resposta.
 * @type {!string}
 * @export
 */
API.Client.Reply.prototype.updatedAt;

