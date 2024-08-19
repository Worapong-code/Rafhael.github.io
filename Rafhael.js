
let products = [
   
    {
        id: 1,
        name: "Parlor Dragonmaid",
        des: "Type: Effect Monster",
        url: "https://images.ygoprodeck.com/images/cards/88453933.jpg",
        price: 100,
        discount: 30,
        best: true
    },
    {
        id: 2,
        name: "Dragonmaid Hospitality",
        des: "Type: Spell Card",
        url: "https://images.ygoprodeck.com/images/cards/78231355.jpg",
        price: 150,
        discount: 30,
        best: true
    },
    {
        id: 3,
        name: "Dragonmaid Downtime",
        des: "Type: Trap Card",
        url: "https://images.ygoprodeck.com/images/cards/77515704.jpg",
        price: 100,
        discount: 30,
        best: true
    },
    {
        id: 4,
        name: "Dragonmaid Ernus",
        des: "Type: Effect Monster",
        url: "https://images.ygoprodeck.com/images/cards/76782778.jpg",
        price: 100,
        discount: 30,
        best: true
    },
    {
        id: 5,
        name: "Dragonmaid Tidying",
        des: "Type: Trap Card",
        url: "https://images.ygoprodeck.com/images/cards/57416183.jpg",
        price: 100,
        discount: 30,
        best: true
    },
    {
        id: 6,
        name: "Chamber Dragonmaid",
        des: "Type: Effect Monster",
        url: "https://images.ygoprodeck.com/images/cards/32600024.jpg",
        price: 100,
        discount: 30,
        best: true
    },
    {
        id: 7,
        name: "Dragonmaid Nudyarl",
        des: "Type: Effect Monster",
        url: "https://images.ygoprodeck.com/images/cards/49575521.jpg",
        price: 100,
        discount: 30,
        best: false
    },
    {
        id: 8,
        name: "Dragonmaid Tinkhec",
        des: "Type: Effect Monster",
        url: "https://images.ygoprodeck.com/images/cards/42055234.jpg",
        price: 100,
        discount: 30,
        best: false
    },
    {
        id: 9,
        name: "House Dragonmaid",
        des: "Type: Fusion Monster",
        url: "https://images.ygoprodeck.com/images/cards/41232647.jpg",
        price: 100,
        discount: 30,
        best: false
    },
    {
        id: 10,
        name: "Nurse Dragonmaid",
        des: "Type: Effect Monster",
        url: "https://images.ygoprodeck.com/images/cards/40398073.jpg",
        price: 100,
        discount: 30,
        best: false
    },
    {
        id: 11,
        name: "Dragonmaid Changeover",
        des: "Type: Spell Card",
        url: "https://images.ygoprodeck.com/images/cards/40110009.jpg",
        price: 100,
        discount: 30,
        best: false
    },
    {
        id: 12,
        name: "Dragonmaid Sheou",
        des: "Type: Fusion Monster",
        url: "https://images.ygoprodeck.com/images/cards/24799107.jpg",
        price: 100,
        discount: 30,
        best: false
    },
    {
        id: 13,
        name: "Kitchen Dragonmaid",
        des: "Type: Effect Monster",
        url: "https://images.ygoprodeck.com/images/cards/16960120.jpg",
        price: 100,
        discount: 30,
        best: false
    },
    {
        id: 14,
        name: "Dragonmaid Lorpar",
        des: "Type: Effect Monster",
        url: "https://images.ygoprodeck.com/images/cards/15848542.jpg",
        price: 100,
        discount: 30,
        best: false
    },
    {
        id: 15,
        name: "Dragonmaid Send-Off",
        des: "Type: Spell Card",
        url: "https://images.ygoprodeck.com/images/cards/15754711.jpg",
        price: 100,
        discount: 30,
        best: false
    },
    {
        id: 16,
        name: "Dragonmaid Welcome",
        des: "Type: Spell Card",
        url: "https://images.ygoprodeck.com/images/cards/14625090.jpg",
        price: 100,
        discount: 30,
        best: false
    },
    {
        id: 17,
        name: "Laundry Dragonmaid",
        des: "Type: Effect Monster",
        url: "https://images.ygoprodeck.com/images/cards/13171876.jpg",
        price: 100,
        discount: 30,
        best: false
    }
    
];

// return products;

function addToCart(e){

    if(localStorage.getItem('id')!==null){
        let inlocal = localStorage.getItem('id')
        localStorage.setItem('id',e+","+inlocal)

    }else{
        localStorage.setItem('id',e+",")
    }
    location.reload();
   

}
function clearLocal(){
    localStorage.clear();
    location.reload();
   }