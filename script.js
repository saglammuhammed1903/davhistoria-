// Dav Historia Oyun Başlangıcı
let oyuncu = {
    isim: "Kahraman",
    altin: 100,
    guc: 10,
};

function oyunDurumu() {
    alert(`Oyuncu: ${oyuncu.isim}\nAltın: ${oyuncu.altin}\nGüç: ${oyuncu.guc}`);
}

function basla() {
    alert("Oyun başladı! Maceraya hazır ol...");
    oyunDurumu();
    // Daha sonra buraya savaşlar, ticaret ve hamleler ekleyeceğiz
}
