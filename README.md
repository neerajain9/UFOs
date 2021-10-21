# UFO Sightings (Module 11 Challenge)

## Overview
Our initial dilevery to Dana with filters on sighting dates was impressive. However, it would be more useful if the filters could be applied to other data elements. Here's what we are doing in this challenge; add additional filters for the citi, state, country, and shape. Not only we could do independent search by these individual elements, but we could filter using multiple filters all at one time.

## Results
Now, that we have implemented additional filters. We are excited to share how these can be used.

By default, the user sees the entire data set as they visit the sight for the first time.

Previously, we were searching only with dates, so the user/analyst would have to put the date in and then hit the provided "Filter Table" button to see the filtered result based on the dates.

Our new filters are even easier to get the results we are looking for. The search field(s) track changes on the fly and filter the results as user would types in their query. We have removed the "Filter Table" button to enhance the user experience. Not only this, user can enter multiple search criterion like date, city, state, country, and shape and it will filter the results on the fly without any issues. The search is built upon the sequence of changes in the query fields. For example:

[State: "ca"](https://github.com/neerajain9/UFOs/blob/Data-Science/Resources/State%20Search1.png) will bring up all the sigthing traced in California.
![](https://github.com/neerajain9/UFOs/blob/Data-Science/Resources/State%20Search1.png?raw=true)

[City: "el cajon"](https://github.com/neerajain9/UFOs/blob/Data-Science/Resources/City-State%20Search1.png) will further narrow the search to city El' Cajon in state California.
![](https://github.com/neerajain9/UFOs/blob/Data-Science/Resources/City-State%20Search1.png?raw=true)

Likewise, [additional search queries](https://github.com/neerajain9/UFOs/blob/Data-Science/Resources/City-State-Shape%20Search1.png) can be entered to narrow the results further to the user's precise analysis.
![](https://github.com/neerajain9/UFOs/blob/Data-Science/Resources/City-State-Shape%20Search1.png?raw=true)

Isn't that cool?

Now, the analysts can see all the findings about these sightings, on the fly, using multiple criterion.

**Note:** As we clear up the filter the [original/default](https://github.com/neerajain9/UFOs/blob/Data-Science/Resources/default%20view.png) view is regained.

![](https://github.com/neerajain9/UFOs/blob/Data-Science/Resources/default%20view.png?raw=true)

## Summary
The app works great! However, like most software applications, our design strategy has certain compromises as well.

### Drawback(s)
- Our current database (or data source) is relatively small. So, our queries appears to work really fast as we type in. However, as the database grows with time, the search will become sluggish.

**Reason:** As we add or change our query parameters, our current application design filters the original data source and rebuilds the table everytime. This is an overkill of resources. Also, these searches could be expensive if run at server side.

### Our Recommendations
There may be mutliple ways to improve the app as we consider user experience and performance of the app. Here, we are discussing the following two.

1. Incorporate methods where the searches could be cached and we do not have to rebuild the table over and over.
1. From user's experience perspective we think it is currently painful to clear all the query fields to see the default dataset. Adding an auto clear button would be a great addion to the user experience.

We will continue to look for the improvements in our data extraction process and then querying on these data sets more effectively with a forward looking approach. We will share and incorporate these insights in our upcoming projects.