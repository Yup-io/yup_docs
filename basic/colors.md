# Colors

Yup displays social value with colors. Rated content and users are underlined with their rating color in the extension and the web application. Each color represents a percentile value in relation to everything else in their category.

## Color Scheme

The rating system uses five colors, corresponding to quintiles:

1. Green: top 20%
2. Yellowish Green: 20 - 40%
3. Yellow: 40 - 60%
4. Orange: 60 - 80%
5. Red: 80 - 100%

![](../.gitbook/assets/spectrum.png)

**For example, the color of the most socially valued Tweet is green.**

![](<../.gitbook/assets/blue (1).png>)

**...and the least valuable is red.**

![](../.gitbook/assets/orange.png)

Content becomes greener when it is rated positively and redder when it is rated negatively, reflecting an increase or decrease in the content's social value.

Content has a different color rating for EACH rating category. To determine these percentiles, content is judged against other content's rating in that category.
