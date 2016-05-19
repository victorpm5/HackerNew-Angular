goog.provide('API.Client.ReplyCreate');

/**
 * @record
 */
API.Client.ReplyCreate = function() {}

/**
 * contingut de la resposta a crear.
 * @type {!string}
 * @export
 */
API.Client.ReplyCreate.prototype.content;

/**
 * identificador del comentari al que es correspondr\u00E0 la resposta.
 * @type {!number}
 * @export
 */
API.Client.ReplyCreate.prototype.commentId;

