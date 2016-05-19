goog.provide('API.Client.User');

/**
 * @record
 */
API.Client.User = function() {}

/**
 * identificador unic de l'usuari.
 * @type {!number}
 * @export
 */
API.Client.User.prototype.id;

/**
 * nom de l'usuari.
 * @type {!string}
 * @export
 */
API.Client.User.prototype.name;

/**
 * descripci\u00F3 de l'usuari.
 * @type {!string}
 * @export
 */
API.Client.User.prototype.about;

/**
 * instant de creaci\u00F3 de l'usuari.
 * @type {!string}
 * @export
 */
API.Client.User.prototype.createdAt;

/**
 * instant de l'\u00FAltima actualitzaci\u00F3 de l'usuari.
 * @type {!string}
 * @export
 */
API.Client.User.prototype.updatedAt;

