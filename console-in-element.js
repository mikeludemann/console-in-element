function consoleInElement(element){

	var log = document.querySelector(element);

	['log','warn','error','clear', 'time', 'timeEnd', 'table', 'count', 'group', 'groupEnd'].forEach(function (verb) {

		console[verb] = (function (method, verb, log) {

			return function (text) {

				method(text);

				var msg = document.createElement('code');

				msg.classList.add(verb);
				msg.innerHTML = verb + ': ' + text + "<br /><hr>";
				log.appendChild(msg);

			};

		})(console[verb].bind(console), verb, log);

	});

}
