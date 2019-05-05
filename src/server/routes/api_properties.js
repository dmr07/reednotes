// import {methods_properties} from "../methods/methods_properties"

const api_properties = (app) => {
  app.get("/api/news", (req, res) => {
    console.log('API call');
    res.json([
      {
        id: 1,
        upvotes: 257,
        title: "Sales is King",
        body: "<p>Sales the guy that carries everything else. High order bid is is the company getting hitting market share trajectory. This is the most unforgiving metric. They get this right, it’s more than half the battle and they can afford to be idiots in lots of other places. <br> If the sales figures are going strong, the company can get smart and restructure… assuming competent management (obvious look up execs, I generally look at how they answer interview questions; vagueness or use of allegory is a sign of incompetence)<br>Basically seek out the noise. Generally the news that’s circulating the internet is what’s inflating or deflating the stock. Most analysts are morons. When it comes down to it, quarterly will shut up the nay-sayers that depress the stock price. <br>Obviously if you’re reading this, leave shorting to the pros. main reasons: limited upside, infinite downside. Lack of timing certainty can bleed you dry if you’re not careful. In a probabilistic market, the math just doesn’t make sense in 99% of cases.</p>",
        author: "Daniel Reed",
        date: "June 20, 2018",
        topics:['software']
      },
      {
        id: 3,
        upvotes: 227,
        title: "The Discomfort of Scaling",
        body: "<p>When I first had to make hires and hand over responsibilities, it was an unsettling feeling of losing too much control. This was especially felt when I needed to double the size of the team. \n \tI remember a friend retelling his experience in the army reserves. In a training exercise, an attack on his position, guys in his regiment were kept up for several nights in a row. He went out near the bushes to relieve himself, and all of a sudden gunshots started going off left right and center. Without putting his thing back into his trousers, he rushed to his post all the with it hanging out and his pants half way down his butt straight to grab his rifle and man his station. \n \t Sometimes you don’t always have time to get my ducks in a row and get comfortable under highly competitive, fast moving environments. you just have to start running.</p>",
        author: "Daniel Reed",
        date: "November 7, 2018",
        topics:['software', 'startups']
      },
      {
        id: 2,
        upvotes: 127,
        title: "Meetings",
        author: "Guy3",
        body: "<p>Always have an agenda. Meandering meetings annoy everyone. Keep an internal clock in your head. If people are stuck on something for too long, and it’s only meant to be an update meeting, put a pin in it and schedule to come back. \n Drawn out meetings will annoy the crap out of really good engineers. Goal is to update everyone’s progress, resolve dependencies - a place where guy X needs guy Y to finish something but never gets around to talking to guy Y, so it just gets shelved.</p>",
        date: "February 14, 2019",
        topics:['startups']
      }
      ])
  })
};

export {api_properties}