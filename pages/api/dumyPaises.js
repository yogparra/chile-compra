export default (req, res) => {
    res.statusCode = 200;
    res.json([
        {
            ID: "de02e98c-34f0-44c4-8c6b-c83ed1023d0c",
            Message: "",
            Global: {
                NewConfirmed: 183568,
                TotalConfirmed: 109012716,
                NewDeaths: 4495,
                TotalDeaths: 2405955,
                NewRecovered: 143252,
                TotalRecovered: 61335658,
                Date: "2021-02-16T14:55:54.762Z"
            }
        },
        {
            Countries: [
                {
                    ID: "55baeb4c-decb-4742-bf38-7eff0ba15ff9",
                    Country: "Afghanistan",
                    CountryCode: "AF",
                    Slug: "afghanistan",
                    NewConfirmed: 0,
                    TotalConfirmed: 55514,
                    NewDeaths: 0,
                    TotalDeaths: 2427,
                    NewRecovered: 0,
                    TotalRecovered: 48433,
                    Date: "2021-02-16T14:55:54.762Z",
                    Premium: {}
                },
                {
                    ID: "651157f3-282d-4d2c-a439-785132254a36",
                    Country: "Albania",
                    CountryCode: "AL",
                    Slug: "albania",
                    NewConfirmed: 0,
                    TotalConfirmed: 93850,
                    NewDeaths: 0,
                    TotalDeaths: 1567,
                    NewRecovered: 0,
                    TotalRecovered: 57736,
                    Date: "2021-02-16T14:55:54.762Z",
                    Premium: {}
                },
                {
                    ID: "dd0fa1fd-2012-4156-b5b1-d4cb57588c5a",
                    Country: "Algeria",
                    CountryCode: "DZ",
                    Slug: "algeria",
                    NewConfirmed: 0,
                    TotalConfirmed: 110894,
                    NewDeaths: 0,
                    TotalDeaths: 2943,
                    NewRecovered: 0,
                    TotalRecovered: 76168,
                    Date: "2021-02-16T14:55:54.762Z",
                    Premium: {}
                },
            ]
        }    
      ]);
    };