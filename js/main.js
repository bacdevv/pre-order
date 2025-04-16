window.addEventListener("scroll", function () {
	const header = document.querySelector(".preorder-header");
	const lightning = document.querySelector(".preorder-hero__lightning");
	if (!header || !lightning) return;

	const scrollY = window.scrollY;
	const maxScroll = 200;
	const startTop = -70;
	const endTop = -150;

	if (scrollY <= 0) {
		lightning.style.top = startTop + "px";
	} else if (scrollY >= maxScroll) {
		lightning.style.top = endTop + "px";
	} else {
		let newTop = startTop + (endTop - startTop) * (scrollY / maxScroll);
		lightning.style.top = newTop + "px";
	}

	let newOpacity = 1 - (scrollY / maxScroll) * 0.7;
	if (newOpacity < 0.3) newOpacity = 0.3;
	if (newOpacity > 1) newOpacity = 1;
	lightning.style.opacity = newOpacity;

	if (scrollY > maxScroll) {
		header.classList.add("hide");
	} else {
		header.classList.remove("hide");
	}
});

// === Countdown logic ===
document.addEventListener("DOMContentLoaded", function () {
	const countdownEl = document.getElementById("preorder-countdown");
	if (!countdownEl) return;
	const endTime = Date.now() + 3 * 24 * 60 * 60 * 1000;

	function pad(n) {
		return n < 10 ? "0" + n : n;
	}

	function updateCountdown() {
		const now = Date.now();
		let diff = Math.max(0, endTime - now);

		const days = Math.floor(diff / (24 * 60 * 60 * 1000));
		diff -= days * 24 * 60 * 60 * 1000;
		const hours = Math.floor(diff / (60 * 60 * 1000));
		diff -= hours * 60 * 60 * 1000;
		const mins = Math.floor(diff / (60 * 1000));
		diff -= mins * 60 * 1000;
		const secs = Math.floor(diff / 1000);

		countdownEl.textContent = `${pad(days)}:${pad(hours)}:${pad(mins)}:${pad(secs)}`;
	}

	updateCountdown();
	setInterval(updateCountdown, 1000);
});
