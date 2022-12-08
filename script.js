function oyunuBaslat(secim){
    let kullaniciSecimi=secim.id;
    console.log(kullaniciSecimi);
    let rastgeleSayi=Math.floor(Math.random()*3)
    let bilgisayarSecimi=["tas","kagıt","makas"][rastgeleSayi]
    console.log(bilgisayarSecimi);

    let oyunPuanlama={
        "tas":{"makas":1,"tas":0.5, "kagit":0},
        "kagit":{"tas":1,"kagit":0.5, "makas":0},
        "makas":{"kagit":1,"makas":0.5, "tas":0}
    };

    let kullaniciPuan=oyunPuanlama[kullaniciSecimi][bilgisayarSecimi];
    console.log(kullaniciPuan)

    let kayitliResimler={
        "tas":document.getElementById("tas").src,
        "kagit":document.getElementById("kagit").src,
        "makas":document.getElementById("makas").src,
    };
    document.getElementById("tas").remove();
    document.getElementById("kagit").remove();
    document.getElementById("makas").remove();
    let kullaniciResmi=document.createElement("img");
    let bilgisayarResmi=document.createElement("img");
    let sonucMesaji=document.createElement("div");

    kullaniciResmi.src=kayitliResimler[kullaniciSecimi];
    bilgisayarResmi.src=kayitliResimler[bilgisayarSecimi];

    document.getElementById("container").appendChild(kullaniciResmi);
    document.getElementById("container").appendChild(sonucMesaji);
    document.getElementById("container").appendChild(bilgisayarResmi);
 
    if(kullaniciPuan===0){
        sonucMesaji.innerHTML="Maalesef kaybettiniz :("
        sonucMesaji.style.color="red";
        sonucMesaji.style.fontSize="30px";
    }
    else  if(kullaniciPuan===0.5){
        sonucMesaji.innerHTML="Berabere kaldınız"
        sonucMesaji.style.color="blue";
        sonucMesaji.style.fontSize="30px";
    }
    else{
        sonucMesaji.innerHTML="Tebrikler Kazandınız :)"
        sonucMesaji.style.color="green"
        sonucMesaji.style.fontSize="30px";
    }

}