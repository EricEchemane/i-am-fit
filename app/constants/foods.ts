export type Food = {
    name: string;
    image: string;
    calorie: number;
    category: "vegetable" | "fruit" | "meat" | "fish" | "dairy" | "grain" | "sweets";
};

const foods: Food[] = [
    {
        name: 'Apple',
        image: 'https://cfn-catalog-prod.tradeling.com/up/609121a3e5323e001dbb8220/3134554c4357bfdfee9a84d042ac60fe.png',
        calorie: 81,
        category: 'fruit',
    },
    {
        name: "Banana",
        calorie: 105,
        image: "https://mandigate.com/wp-content/uploads/2021/10/istockphoto-173242750-612x612-1.jpg",
        category: 'fruit',
    },
    {
        name: "Orange",
        calorie: 65,
        image: "https://www.santosfood.com/wp-content/uploads/2020/01/img-7.jpg",
        category: 'fruit',
    },
    {
        name: "Pear",
        calorie: 98,
        image: "https://thumbs.dreamstime.com/b/pear-7682120.jpg",
        category: 'fruit',
    },
    {
        name: "Watermelon",
        calorie: 50,
        image: "https://thumbs.dreamstime.com/b/watermelon-slice-white-background-34013686.jpg",
        category: 'fruit',
    },
    {
        name: "Strawberries",
        calorie: 45,
        image: "https://thumbs.dreamstime.com/b/fresh-strawberry-white-background-40742985.jpg",
        category: 'fruit',
    },
    {
        name: "Raspberries",
        calorie: 61,
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Raspberries-in-a-bowl-636f6f8.jpg",
        category: 'fruit',
    },
    {
        name: "Lemon",
        calorie: 29,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Lemon.jpg/1024px-Lemon.jpg",
        category: 'fruit',
    },
    {
        name: "Kiwi",
        calorie: 61,
        image: "https://static.libertyprim.com/files/familles/kiwi-large.jpg?1569271790",
        category: 'fruit',
    },
    {
        name: "Corn (1/2 cup)",
        calorie: 89,
        image: "https://www.healthworks.my/wp-content/uploads/2014/07/corn-cup.png",
        category: 'fruit',
    },
    {
        name: "Potato (1 large, baked, plain)",
        calorie: 220,
        image: "https://www.alimentarium.org/sites/default/files/media/image/2017-02/AL027-01_pomme_de_terre_0_0.jpg",
        category: 'fruit',
    },
    {
        name: "Biscuit",
        calorie: 103,
        image: "https://images.eatthismuch.com/img/477928_gettingsexy_0e45d7cb-8ce8-4cd8-ba0e-af2069c669e5.jpg",
        category: 'grain',
    },
    {
        name: "Breadsticks (2 sticks)",
        calorie: 77,
        image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/4/5/3/RX-FNM_050111-TV-Sweeps-001_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371597413962.jpeg",
        category: 'grain',
    },
    {
        name: "Cereal, ready to eat (1 cup)",
        calorie: 110,
        image: "https://www.bakeryandsnacks.com/var/wrbm_gb_food_pharma/storage/images/5/7/5/7/1597575-1-eng-GB/Healthy-ready-to-eat-cereal-consumption-trends.jpg",
        category: 'grain',
    },
    {
        name: "Hamburger bun (1)",
        calorie: 119,
        image: "https://www.cobsbread.com/drive/uploads/2019/04/cobs-product-traditional-hamburger-bun-650x458.png",
        category: 'grain',
    },
    {
        name: "Hamburger bun (1)",
        calorie: 119,
        image: "https://www.cobsbread.com/drive/uploads/2019/04/cobs-product-traditional-hamburger-bun-650x458.png",
        category: 'grain',
    },
    {
        name: "Hot dog bun (1)",
        calorie: 119,
        image: "https://de.rc-cdn.community.thermomix.com/recipeimage/2brinjag-baab1-841923-cfcd2-zie181ca/1b8d0d29-a531-4ec1-94fa-3586714156a2/main/hot-dog-broetchen.jpg",
        category: 'grain',
    },
    {
        name: "Noodles (spaghetti)(1 cup)",
        calorie: 159,
        image: "https://thewoksoflife.com/wp-content/uploads/2020/04/homemade-chinese-egg-noodles-19-e1609271249794.jpg",
        category: 'grain',
    },
    {
        name: "Oatmeal (1/2 cup)",
        calorie: 66,
        image: "https://thumbs.dreamstime.com/z/oat-cup-whole-grain-rolled-oats-35437768.jpg",
        category: 'grain',
    },
    {
        name: "Pancake (4 inch diameter)",
        calorie: 41,
        image: "https://images-gmi-pmc.edge-generalmills.com/df109202-f5dd-45a1-99b4-f10939afd509.jpg",
        category: 'grain',
    },
    {
        name: "Pizza (cheese)(1 slice)",
        calorie: 290,
        image: "https://www.seekpng.com/png/detail/169-1694874_cheese-pizza-1-slice-extra-cheese-pizza-slice.png",
        category: 'grain',
    },
    {
        name: "Popcorn, plain (1 cup, popped)",
        calorie: 26,
        image: "https://www.superhealthykids.com/wp-content/uploads/2018/07/air-popped-popcorn-11-640-square.jpg",
        category: 'grain',
    },
    {
        name: "Rice, white (1 cup)",
        calorie: 223,
        image: "https://www.pngfind.com/pngs/m/29-294761_rice-1-cup-white-rice-calories-hd-png.png",
        category: 'grain',
    },
    {
        name: "Rice, brown (1 cup)",
        calorie: 232,
        image: "https://steamykitchen.com/wp-content/uploads/2013/12/How-to-Microwave-Brown-Rice-featured-0312-480x270.jpgg",
        category: 'grain',
    },
    {
        name: "Siopao",
        calorie: 240,
        image: "https://www.juliesbakeshop.com.ph/wp-content/uploads/Siopao.png",
        category: 'meat',
    },
    {
        name: "Ensaymada",
        calorie: 410,
        image: "https://pinoyfoodguide.com/wp-content/uploads/2020/08/Ensaymada.jpeg",
        category: 'meat',
    },
    {
        name: "Hotdog beef and pork (100 g)",
        calorie: 305,
        image: "https://cdn.shopify.com/s/files/1/0487/5167/3505/products/SARAP-HOTDOG-250G-2.jpg?v=1633240807",
        category: 'meat',
    },
    {
        name: "Longganisa 1 piece",
        calorie: 220,
        image: "http://2.bp.blogspot.com/-TI6H7oeL6H4/UzFNXSulsbI/AAAAAAAAC7Q/GTNN7wxLVaI/s1600/009.JPG",
        category: 'meat',
    },
    {
        name: "Tilapia (100 g)",
        calorie: 129,
        image: "https://www.alimentarium.org/sites/default/files/media/image/2016-06/WEB---%20tilapia%20---_0.png",
        category: 'fish',
    },
    {
        name: "Salmon (100 g)",
        calorie: 206,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Salmo_salar.jpg/1200px-Salmo_salar.jpg",
        category: 'fish',
    },
    {
        name: "Milkfish (100g)",
        calorie: 148,
        image: "https://guidesly.com/static/77ac7f53d317d4db2bbd8419d9e3c4f3/47930/Guidesly_Milkfish_6c99acebdc.jpg",
        category: 'fish',
    },
    {
        name: "Tuyo (56 g)",
        calorie: 150,
        image: "https://mygroceryph.com/pub/media/catalog/product/cache/942fb7ebd8f124d7d8ad39312cbc983a/n/e/new_project_11_.jpg",
        category: 'fish',
    },
    {
        name: "Pinakbet 1 cup",
        calorie: 110,
        image: "https://curiousflavors.com/wp-content/uploads/2022/04/Untitled-design-37-2.jpg",
        category: 'vegetable',
    },
    {
        name: "Laing 1 cup cooked",
        calorie: 202,
        image: "https://www.kawalingpinoy.com/wp-content/uploads/2013/11/laing-2-1-500x500.jpg",
        category: 'vegetable',
    },
    {
        name: "Dinuguan 1 cup",
        calorie: 252,
        image: "https://1.bp.blogspot.com/-_lnJ9Il1FrM/XSJ43Bqm1sI/AAAAAAAATYo/egMHLhIiHoAxdnpLj_aAHOf30ESk396-wCLcBGAs/s1600/dinuguan.jpg",
        category: 'meat',
    },
    {
        name: "Kare-Kare 1 tbsp (13g)",
        calorie: 15,
        image: "https://cdn.phonebooky.com/blog/wp-content/uploads/2019/03/02160400/manam-cover.jpg",
        category: 'meat',
    },
    {
        name: "Bicol Express (246g)",
        calorie: 0,
        image: "https://www.kawalingpinoy.com/wp-content/uploads/2019/05/spicy-bicol-express-3-500x500.jpg",
        category: 'meat',
    },
    {
        name: "Adobong Pusit 1 cup",
        calorie: 121,
        image: "https://panlasangpinoy.com/wp-content/uploads/2019/01/adobong-pusit-500x500.jpg",
        category: 'meat',
    },
    {
        name: "Chicken Tinola",
        calorie: 267,
        image: "http://images.summitmedia-digital.com/yummyph/images/2020/06/29/KNR_0035.jpg",
        category: 'meat',
    },
    {
        name: "Pork Sinigang 1 cup",
        calorie: 290,
        image: "https://panlasangpinoy.com/wp-content/uploads/2021/08/Killer-Pork-Sinigang-500x375.jpg",
        category: 'meat',
    },
    {
        name: "BALUT 1 egg",
        calorie: 188,
        image: "https://i.pinimg.com/originals/61/f8/41/61f8410b97cbecb42eaf2cc5f0e07b58.jpg",
        category: 'meat',
    },
    {
        name: "Pandesal 1 Piece",
        calorie: 148,
        image: "https://www.womanscribbles.net/wp-content/uploads/2017/05/pandesal-1-720x540.jpg",
        category: 'grain',
    },
    {
        name: "Leche Flan (153 g)",
        calorie: 0,
        image: "https://i.ytimg.com/vi/SeQUB1zUVj4/maxresdefault.jpg",
        category: 'sweets',
    },
    {
        name: "Lumpang Sariwa (3 servings)",
        calorie: 169,
        image: "https://sweetsimplevegan.com/wp-content/uploads/2020/09/Vegan-Lumpiang-Shanghai-Filipino-Spring-Rolls-Sweet-Simple-Vegan-4.jpg",
        category: 'meat',
    },
    {
        name: "Fried Egg",
        calorie: 120,
        image: "https://www.sophisticatedgourmet.com/wp-content/uploads/2020/04/how-to-fry-an-egg-recipe-735x979.jpg",
        category: 'meat',
    },
    {
        name: "Tocino Per serving",
        calorie: 230,
        image: "https://yummyfood.ph/wp-content/uploads/2021/09/pork-tocino.jpg",
        category: 'meat',
    },
    {
        name: "",
        calorie: 0,
        image: "",
        category: 'meat',
    },
    {
        name: "",
        calorie: 0,
        image: "",
        category: 'meat',
    },
];

export default foods;