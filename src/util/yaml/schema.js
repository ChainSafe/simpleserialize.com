var { Schema } = require("js-yaml");

module.exports = new Schema({
	include: [require("js-yaml/lib/js-yaml/schema/failsafe")],
	implicit: [
		require("js-yaml/lib/js-yaml/type/null"),
		require("js-yaml/lib/js-yaml/type/bool"),
		require("./int"),
		require("js-yaml/lib/js-yaml/type/float"),
	],
	explicit: [],
});
