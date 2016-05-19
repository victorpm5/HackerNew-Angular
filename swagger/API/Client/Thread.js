goog.provide('API.Client.Thread');

/**
 * @record
 */
API.Client.Thread = function() {}

/**
 * llistat de comentaris de l'usuari.
 * @type {!Array<!API.Client.Comment>}
 * @export
 */
API.Client.Thread.prototype.comments;

/**
 * llistat de respostes de l'usuari.
 * @type {!Array<!API.Client.Reply>}
 * @export
 */
API.Client.Thread.prototype.replies;

