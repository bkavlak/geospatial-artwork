# Geospatial Artwork <a href='/scripts/eye-sugla-hexagon.R'><img src='collections/eye-sugla/eye-sugla-hexagon.png' align="right" height="139" /></a>

This repository consists of materials that I produce
on geospatial data. The works are linked to their source code.


#### The Eye of Lake Suğla

Lake Suğla is a karst lake located in the southeast of Konya, Turkey. In dry seasons, the area of the lake shrinks; and the alluvial lake bed emerges as fertile land for agriculture. The lake was fed with the waters coming from Lake Beyşehir, which I was born. Since there was a change in the water transfer, Lake Suğla became drier and shrunk from `16k ha` to `2.5k ha`. Though the renewal plan in 1999 enlarged the size to `4k ha`, the lake floods during the rainy years to get back to what it belongs. The eye of the lake wants you to hear its story with *wet* eyes. 

| Konya Suğla |
| :---:       |
<a href='https://code.earthengine.google.com/da4b40d1006d1fc5ceae3b19b4354ae6'> <div align="center"><img src="collections/eye-sugla/eye-sugla-1920-1080-hq.jpeg"></div></a>

#### Variance in Time

We like to simplify the world around us. Nature simply does not carry such a goal. When we look at a usual RGB satellite image, we start to label structures such as mountains, agricultural fields, cities, etc. We do not stop there; we immediately think if we can calculate the areas of these structures. We never stop there either; we want more specificity: what are the classes of agricultural fields? How many of them are cotton? Can we do it automatically? (automatization :kissing_smiling_eyes:, such a fluffy word!)

You need to think a lot to find a class in your mind from the imagery. You are always looking at an RGB image with many assumptions you fill in your mind in your lifetime. The cotton fields do not label themselves as cotton fields, or trees do not know what you are thinking about them. You can only unbiasedly observe that these structures all vary in time, some are more, and some are less. The images below use different times’ `NDVI` values to show you the variance in time. Similar colors seem to act similarly, but still, be careful to assume their class.

| Manisa Turgutlu | Aydın Söke | Şanlıurfa Ceylanpınar |
| :---:        |     :---:      |          :---: |
| <img src="collections/variance-in-time/vit-manisa-turgutlu-1200-1170-lq.png" width="200" height="200" >   | <img src="collections/variance-in-time/vit-aydin-soke-1200-613-lq.png" width="200" height="200" >     | <img src="collections/variance-in-time/vit-sanliurfa-ceylanpinar-1200-675-lq.png" width="200" height="200" >    |
| [EE Script](https://code.earthengine.google.com/3ea171a6dd58bec9bd0cfca01c21f273)     | [EE Script](https://code.earthengine.google.com/3ea171a6dd58bec9bd0cfca01c21f273)       | [EE Script](https://code.earthengine.google.com/3ea171a6dd58bec9bd0cfca01c21f273)      |

