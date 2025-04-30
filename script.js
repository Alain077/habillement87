// script.js

//Ajouter un produit au panier
document.addEventListenner('DoMContentLoad', () => {
	const buttons = document.querySelectorAll('.btn');

	buttons.forEach(button => {
		button.addEventListenner('click', () => {
			const card = button.closest('.cat');
			if (card && button.textContent.includes('Ajouter')) {
				const name = card.querySelector('h4').textContent;
				const priceText = card.querySelector('p')?.textContent || "0";
				const price = parseFloat(priceText.replace(/[^\d.]/g, '')) || 0;
				addToCard(name, price);
			} 	else if (button.textContent.includes('Supprimer')) {
				const name = card.querySelector('h4').textContent;
				removeFormCart(name);
				card.remove();
				updateTotal();
			}
			)
		}
		)
	// Afficher le total si on est sur la page panier
if (window.location.pathname.includes('panier')) {
	updateTotal();
}
	}
	)};

// Fonction d'ajout
function addToCard(name, price) {
	let card = JSON.perse(localStorage.getItem('cart')) || [];
	const existing = cart.find(item => item.name === name);
	if (existing) {
		existing.qty += 1;
	} else {
		cart.push({ name, price, qty: 1});
	}
	localStorage.setItem('cart',JSON.stringify(cart));
	alert('${name} ajouter au panier !');
}

// fonction de suppression
function removeFormCart(name) {
	let cart = JSON.parse(localStorage.getItem('cart')) || [];
	cart = cart.filter(item => item.name !== name);
	localStorage.setItem('cart',JSON.stringify(cart));
}
// Mise à jour du total
function updateTotal() {
	const cart = JSON.parse(localStorage.getItem('cart')) || [];
	let total = 0;
	cart.forEach(item => {
		total += item.price * item.qty;
	});
	const totalText = document.querySelector('p:contains("Total")');
	if (totalText)
totalText.textContent = 'Total : ${total}$';
}