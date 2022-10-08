interface HealthTip {
    title: string;
    description: string;
    image: string;
}

const healthTips: HealthTip[] = [
    {
        title: "Added sugar wreaks havoc on the body",
        description: `
It’s no secret that added sugars are one of the worst types of ingredients to put in your body. However, there are many extreme dangers associated with the sugars that many people are not aware of. Not only are added sugars completely void of nutrition, hence the nickname “empty calories,” they are thought to be a leading cause of many serious health conditions, such as cardiovascular disease, type 2 diabetes and obesity.

In fact, a study in the February 2001 issue of The Lancet examined the link between sugar-sweetened drinks and their potential effect on childhood obesity rates. The study followed nearly 550 children over a 19-month span, measuring how the change in the consumption of added sugar affected their respective body-mass indexes. Researchers found that the children’s risk for obesity increased with each artificially sugar-sweetened drink added to their diets, and concluded that the evidence supported the idea that consumption of such drinks is associated with childhood obesity.`,
        image: "https://user-images.githubusercontent.com/108642522/194206820-68851995-8763-4eb0-a2a7-fa0c1e826a51.png"
    },
    {
        title: "Drinking plenty of water is essential to overall body health",
        description: `
Not only should you be mindful of what you eat, you should also pay close attention to how much water you drink each day. Not only does drinking water in itself offer several health benefits to the body, it helps keep the body running at optimum capacity. Plus, research shows that, by strategically drinking water, you can increase your weight loss by up to 44 percent. And researchers have shown that drinking half a liter of water can boost your metabolism by 24 percent to 30 percent within one to one-and-a-half hours so, by doing so 30 minutes before your meal, you can potentially boost your weight loss significantly.`,
        image: "https://user-images.githubusercontent.com/108642522/194206782-832fbc96-39dc-4b01-a476-28299b3a776b.png"
    },
    {
        title: "Artificial trans fats should be avoided at all costs",
        description: `
Also known as partially hydrogenated oils, artificial trans fats have no place in a healthy diet. In fact, the process in which trans fats are made is fairly alarming. They are made by combining unsaturated fats with hydrogen gas and heating them to an incredibly high temperature, changing the molecular structure to resemble saturated fats more closely.

Studies have shown that trans fats can simultaneously raise LDL (bad) cholesterol and lower HDL (good) cholesterol, leading to a whole host of problems. A study conducted by Wake Forest University School of Medicine in Winston-Salem, North Carolina, and published in the July 2007 issue of Obesity: A Research Journal, found that trans fats induced abdominal obesity and affected insulin sensitivity. Other studies have found they may play a role in various other diseases, including heart disease, depression and Alzheimer’s.`,
        image: "https://user-images.githubusercontent.com/108642522/194206686-aab054a8-55e3-43e5-b91f-88ddb8f37c98.png"
    },
    {
        title: "Eating every two to three hours is not necessary for losing weight",
        description: `
This commonly believed diet myth has been debunked time and again. Several studies, including one by the Behavioral and Metabolic Research Unit at the University of Ottawa in Canada and published in the April, 2010 issue of the British Journal of Nutrition, examined the correlation between frequent small meals and body weight, and the way the body burns fat. It found that eating every two to three hours has no effect on those factors.

Simply eat when you are hungry and make mindful, healthy food choices.`,
        image: "https://user-images.githubusercontent.com/108642522/194206568-0471348a-475f-4629-b8ab-444523ac15cd.png"
    },
    {
        title: "Eating Vegetables Will Improve Your Health Vegetables are good for you.",
        description: `
They are rich in vitamins, minerals, fiber, antioxidants and an endless variety of trace nutrients that science has just begun to uncover.

In observational studies, eating vegetables is associated with improved health and a lower risk of disease.

We recommend that you eat a variety of vegetables each day. They are healthy, fulfilling and add variety to your diet.

Vegetables are rich in all sorts of nutrients. Eating vegetables each day is associated with improved health and a lower risk of disease.`,
        image: "https://user-images.githubusercontent.com/108642522/194206441-fd812f9d-dc38-4262-a970-77882d0b1278.png"
    },
    {
        title: "Supplements Can Never Fully Replace Real Foods “Nutritionism” is the idea that foods are nothing more than the sum of their individual nutrients.",
        description: `
But it’s also a trap that many nutrition enthusiasts tend to fall into.

Nuts, for example, aren’t just shells loaded with polyunsaturated fat. In the same way, fruits aren’t just watery bags of sugar.

These are real foods with a massive variety of trace nutrients.

The vitamins and minerals, the ones you can also get from a cheap multivitamin, are just a small part of the total amount of nutrients in foods.

Therefore, supplements cannot match the variety of nutrients you get from real foods.

However, many supplements can be beneficial, especially those that contain nutrients that are generally lacking in the diet, like vitamin D.

But no amount of supplements will ever make up for a bad diet. Not a chance.

It is much more important to eat real, nutritious foods than to count on supplements to provide the nutrients you need.`,
        image: "https://user-images.githubusercontent.com/108642522/194206383-03814870-85d1-4f44-b02b-0ae4d53ca8f3.png"
    },
    {
        title: "Simply eating whole or unprocessed foods as often as possible is one the of best diets.",
        description: `
Experts seem to agree on one thing: eating a diet full of whole or unprocessed foods is one of the best things you can do for your body. Simply avoid prepackaged and pre-prepared foods and opt for whole fruits, veggies, nuts and seeds as often as possible. When selecting produce, remember to buy organic or pesticide/herbicide-free products whenever available.

Not only are fruits and vegetables incredibly healthy, many have been proven to contain natural disease-fighting and health-boosting properties.

Here are 10 of these superfoods: Sweet potatoes, Bananas, Avocados, Broccoli, Dandelion greens, Cilantro, Onions, Kale, Asparagus, Tomatoes`,
        image: "https://user-images.githubusercontent.com/108642522/194206232-c078730d-5593-4fc1-a6c1-1a3d77b38af8.png"
    },
    {
        title: "Vitamin D is one of the most important vitamins for maintaining optimum health.",
        description: `
Because vitamin D is unique in that it cannot be synthesized in the body, deficiencies often occur. Typically, the body receives vitamin D when it’s exposed to UV rays from the sun. In many places around the world, the sun is not always available, and weather conditions can make spending time outside difficult. This is why so many people are deficient in vitamin D and may not even know it.

Vitamin D is also unique in that it does not function like many other vitamins and minerals. It actually acts as a major steroid hormone in the body, and a deficiency in it could lead to various diseases, such as osteoporosis, diabetes and cancer. In fact, the Osteoporosis Research Center at Creighton University in Omaha, Nebraska conducted a study that

determined that vitamin D supplementation along with calcium can reduce the risk of cancer.`,
        image: "https://user-images.githubusercontent.com/108642522/194206105-f1c7096d-5863-448c-b511-afddd19275ed.png"
    },
    {
        title: "Diets are largely ineffective. Lifestyle changes create real results.",
        description: `
Unfortunately, most diets do not result in long-term weight loss. This is because people often experience results only while on the diet. As soon as they resume to their normal habits, they gain back the weight.

Ultimately, the best way to support long-term weight loss and overall wellness is to make a series of lifestyle changes that better serve your body and mind. Utilize healthy living strategies to change your relationship with food and use it as a tool for maintaining your optimum level of health.

Adopting a healthy lifestyle is the only way to ensure long-term weight loss and a lifetime of improved health.`,
        image: "https://user-images.githubusercontent.com/108642522/194205940-86e43618-55e5-420c-a1e8-224b5dfb5f07.png"
    },
    {
        title: "Coffee can be healthy in moderation.",
        description: `
Moderate consumption (typically defined as one to two eight-ounce cups per day) of coffee has been shown to provide the body with numerous health benefits and help protect the body against a variety of diseases. Current research suggests coffee can protect the body against numerous health conditions, including heart failure, type 2 diabetes, liver cancer and liver disease. Also, a study conducted by researchers at the University of Scranton in Pennsylvania concluded coffee is the primary source of antioxidants for most Americans.

The study’s lead author, Dr. Joe Vinson, stated, “Americans get more of their antioxidants from coffee than any other dietary source. Nothing else comes close.”

Keep in mind that in excessive amounts, coffee consumption has been shown to cause symptoms such as anxiety and/or depression and headaches. Suddenly quitting coffee after consistent excessive consumption can also lead to withdrawal symptoms.`,
        image: "https://user-images.githubusercontent.com/108642522/194205749-d98a6f4a-8ff0-490b-9450-e2239d6b1ecf.png"
    },
];

export default Object.freeze(healthTips);