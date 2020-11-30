if('serviceWorker' in navigator){
	//O registro é assincrono
	navigator.serviceWorker.register('sw.js')
	.then(function().{console.log('serviceWorker está registrado')})
	.catch(function().{console.log('Erro ao registrar serviceWorker')})
}