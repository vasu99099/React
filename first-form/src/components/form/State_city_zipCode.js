const state_city_data=
     {
      "india": [
        {"Gujarat": [
          {
            "CityName": "Ahmedabad",
            "ZipCode": "382481"
          },
          {
            "CityName": "Rajkot",
            "ZipCode": "385281"
          },
          {
            "CityName": "Surat",
            "ZipCode": "395007"
          },
          {
            "CityName": "Vadodara",
            "ZipCode": "390012"
          },
          {
            "CityName": "Gandhinagar",
            "ZipCode": "382010"
          }
        ]
      },
      {"Maharastra": [
        {
          "CityName": "Mumbai",
          "ZipCode": "400001"
        },
        {
          "CityName": "Pune",
          "ZipCode": "411001"
        }
      ]},
      {"Tamil Nadu": [
        {
          "CityName": "Chennai",
          "ZipCode": "600001"
        },
        {
          "CityName": "Coimbatore",
          "ZipCode": "641001"
        },
        {
          "CityName": "Madurai",
          "ZipCode": "625001"
        },
        {
          "CityName": "Tiruchirappalli",
          "ZipCode": "620001"
        },
        {
          "CityName": "Salem",
          "ZipCode": "636001"
        }
      ]}],
      "USA":[ {
        "California": [
          {
            "CityName": "San Francisco",
            "ZipCode": "94102"
          },
          {
            "CityName": "Los Angeles",
            "ZipCode": "90001"
          },
          {
            "CityName": "San Diego",
            "ZipCode": "92101"
          },
          {
            "CityName": "Sacramento",
            "ZipCode": "95814"
          },
          {
            "CityName": "Santa Barbara",
            "ZipCode": "93101"
          }
        ],
        "Texas": [
          {
            "CityName": "Houston",
            "ZipCode": "77001"
          },
          {
            "CityName": "Austin",
            "ZipCode": "78701"
          },
          {
            "CityName": "Dallas",
            "ZipCode": "75201"
          },
          {
            "CityName": "San Antonio",
            "ZipCode": "78201"
          },
          {
            "CityName": "Fort Worth",
            "ZipCode": "76101"
          }
        ],
        "New York": [
          {
            "CityName": "New York City",
            "ZipCode": "10001"
          },
          {
            "CityName": "Buffalo",
            "ZipCode": "14201"
          },
          {
            "CityName": "Albany",
            "ZipCode": "12201"
          },
          {
            "CityName": "Syracuse",
            "ZipCode": "13201"
          },
          {
            "CityName": "Rochester",
            "ZipCode": "14601"
          }
        ]
      }]
    }
  
  
const State_city_zipCode=(props)=>{


const state=[];
const city=[];
const ZipCode=[];
let country=Object.keys(state_city_data);
state_city_data["india"].map((e)=>{
    state.push(Object.keys(e)[0]);
})
// state_city_data["india"][0].map((e)=>{
    console.log(Object.keys(state_city_data["india"]));
// })
return (
<h1>dfs</h1>

);
}
export default State_city_zipCode