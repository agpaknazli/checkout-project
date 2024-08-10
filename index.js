//? selector

// ekle formu

const ekleBtn=document.querySelector("#ekle-btn");
const gelirInput=document.querySelector("#gelir-input");
const ekleFormu=document.querySelector("#ekle-formu");

//*sonuc tablosu
const gelirinizTable=document.getElementById("geliriniz");
const giderinizTable=document.getElementById("gideriniz");
const kalanTable=document.getElementById("kalan");



//? variables

let gelirler=0
let harcamaListesi=[]


//* Harcama Formu

const harcamaFormu = document.getElementById("harcama-formu");
const tarihInput = document.getElementById("tarih");
const miktarInput = document.getElementById("miktar");
const harcamaAlaniInput = document.getElementById("harcama-alani");

//* harcama tablosu
const harcamaBody = document.getElementById("harcama-body");
const temizleBtn = document.getElementById("temizle-btn");
//! iilk formu doldurma

harcamaFormu.addEventListener("submit",(e)=>{
    e.preventDefault();

    const yeniHarcama={
        tarih:tarihInput.value,
        miktar:miktarInput.value,
        aciklama:harcamaAlaniInput.value,
        id:new Date().getTime()


    };
harcamaListesi.push(yeniHarcama);
// console.log(harcamaListesi);

//ekrana bastır

harcamayiShowScreen(yeniHarcama);

harcamaFormu.reset() // formun inputlarını yazıldıkta sonra içini boşaltma




hesaplaAndGüncelle()


})


//! harcamaları doma bastır

const harcamayiShowScreen=({id,miktar,tarih,aciklama})=>{

    // console.log(harcamaListesi);
    
harcamaBody.innerHTML+= `
<tr>
<td class="bg-warning">${tarih}</td>

<td class="bg-warning">${aciklama}</td>
<td class="bg-warning">${miktar}</td>
<td class="bg-warning"><i id=${id} class="fa-solid fa-trash-can text-danger"  type="button"></i></td>

</tr>






`;
//*silme

document.querySelectorAll(".fa-trash-can ").forEach((sil)=>{
    sil.onclick=()=>{
        sil.parentElement.parentElement.remove()
    }
})

};


//! ekle formu


ekleFormu.addEventListener("submit",(e)=>{

    e.preventDefault();

gelirler=gelirler+Number(gelirInput.value)

gelirInput.textContent=""
// gelirinizTable.textContent=gelirler

hesaplaAndGüncelle()

})




//hesapla ve güncelle

const hesaplaAndGüncelle=()=>{
gelirinizTable.textContent=gelirler;

const giderler=harcamaListesi.reduce((toplam,harcama)=>toplam+Number(harcama.miktar),0)


giderinizTable.textContent=giderler
kalanTable.textContent=gelirler-giderler

}


//! Bilgileri temizlemek

temizleBtn.onclick=()=>{
    if(confirm("Tüm verileri silmek istediğine Emin misin?"))
        
        {harcamaListesi=[];
            gelirler=0;

hesaplaAndGüncelle();
harcamaBody.innerHTML=""

        }}




