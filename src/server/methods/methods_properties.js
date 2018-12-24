import fs from "fs" 
import lodash from "lodash"

// See: https://github.com/dmr07/realtorca
let opts = {
    ApplicationId: 1
  , LongitudeMin: -123.25360340576174 // Vancouver
  , LongitudeMax: -122.9878715942383
  , LatitudeMin: 49.20992482815422
  , LatitudeMax: 49.355497870106646
  , PriceMin: 1000000 
  , PropertySearchTypeId : 1 // Residential
  , TransactionTypeId: 2 // For sale
  , SortBy: 6 // Date
  , SortOrder: "D" // Newest to Oldest
  , BuildingTypeId: 2 // House
  , ConstructionStyleId: 0 // Any
  , OwnershipTypeGroupId: 1 // Freehold
  , RecordsPerPage: 200
}
// https://www.realtor.ca/Residential/Map.aspx#
// CultureId=1
// &ApplicationId=1
// &RecordsPerPage=9
// &MaximumResults=9
// &PropertySearchTypeId=1
// &PriceMin=1000000
// &TransactionTypeId=2
// &StoreyRange=0-0
// &OwnershipTypeGroupId=1
// &BuildingTypeId=1
// &BedRange=0-0
// &BathRange=0-0
// &LongitudeMin=-123.2570366333008
// &LongitudeMax=-122.99130482177736
// &LatitudeMin=49.210149116784315
// &LatitudeMax=49.35572149759593
// &SortOrder=A
// &SortBy=1
// &viewState=m
// &Longitude=-123.1207375
// &Latitude=49.2827291
// &CurrentPage=1
// &ZoomLevel=12
// &PropertyTypeGroupID=1

const fetchMLS = () => {
  console.log('fetching')
  console.log(realtor.buildUrl(opts))
  realtor.post(opts)
    .then(data => {
      
      if (data.ErrorCode.Id != 200) {
        throw new Error("RetrievalError");
      }

      function stringToNumberReplacer( key, val ) {
        if (key === "Price") {
          val = val.replace(/\$|,/g,"");
        }
        var ret = ( isNaN(Number(val)) )
                  ? val
                  : Number(val);
        return ret;
      }

      const json = JSON.stringify(data, stringToNumberReplacer);

      return fs.writeFile('myjsonfile.json', json, 'utf8');
    })
    .catch(err => {
      console.warn(err);
    })
}


// Format
// {
//    "Id": String,
//    "MlsNumber": String,
//    "PublicRemarks": String,
//    "Building":{  
//       "BathroomTotal": String,
//       "Bedrooms": String,
//       "SizeInterior": String,
//       "Type": String,
//       "Ammenities": String
//    },
//    "Individual":[  
//       {  
//          "IndividualID": Number,
//          "Name": String,
//          "Organization":{  
//             "OrganizationID": Number,
//             "Name": String,
//             "Address":{  
//                "AddressText": String
//             },
//             "Phones":[  
//                {  
//                   "PhoneType": String,
//                   "PhoneNumber": String,
//                   "AreaCode": String,
//                   "PhoneTypeId":String
//                }
//             ],
//             "Emails":[  
//                {  
//                   "ContactId":String
//                }
//             ],
//             "OrganizationType": String,
//             "HasEmail": Boolean,
//             "PermitFreetextEmail": Boolean,
//             "PermitShowListingLink": Boolean,
//             "RelativeDetailsURL": String 
//          },
//          "Phones":[  
//             {  
//                "PhoneType": String,
//                "PhoneNumber": String,
//                "AreaCode": String,
//                "PhoneTypeId": String
//             }
//          ],
//          "Emails":[  
//             {  
//                "ContactId": String
//             }
//          ],
//          "PermitFreetextEmail": Boolean,
//          "FirstName": String,
//          "LastName": String,
//          "CorporationDisplayTypeId": String,
//          "RelativeDetailsURL": String
//       }
//    ],
//    "Property":{  
//       "Price": String,
//       "Type": String,
//       "Address":{  
//          "AddressText": String,
//          "Longitude": String,
//          "Latitude": String
//       },
//       "TypeId": String,
//       "OwnershipType":String,
//       "AmmenitiesNearBy": String
//    },
//    "Land":{  
//       "SizeTotal": String,
//       "SizeFrontage": String
//    },
//    "PostalCode": String,
//    "RelativeDetailsURL": String,
//    "StatusId": String,
//    "Distance": String
// },
// const readFile = (filterBy, params) => {
//   let obj;
//   let propertyList;
//   fs.readFile('file', 'utf8', function (err, data) {
//     if (err) throw err;
//     obj = JSON.parse(data);
//     propertyList = (obj.Results) ? obj.Results : [];

//     let result = _.filter(propertyList, function(o)
//       switch(filterBy) {
//         case "price":
//           return o.Property.Price > params.min && o.Property.Price < params.max;
//         break;
//         case "location":
//           return o.
//       }
      
//     });
//   });
// }


export default fetchMLS;