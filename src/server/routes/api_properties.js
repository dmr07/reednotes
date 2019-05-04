// import {methods_properties} from "../methods/methods_properties"

const api_properties = (app) => {
  app.get("/api/news", (req, res) => {
    console.log('API call');
    res.json([
      {
        id: 1,
        upvotes: 257,
        title: "Something",
        author: "Guy1",
        topics:['software']
      },
      {
        id: 3,
        upvotes: 227,
        title: "Else",
        author: "Guy2",
        topics:['software', 'startups']
      },
      {
        id: 2,
        upvotes: 127,
        title: "Mo",
        author: "Guy3",
        topics:['startups']
      }
      ])
  })
};

export {api_properties}