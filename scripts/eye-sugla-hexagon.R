library(ggplot2)
library(hexSticker)
require(magick)

imgurl <- image_read("/collections/eye-sugla/eye-sugla-1920-1080-hq.jpeg")
sticker(imgurl, package="artwork",
        p_size=10,
        p_x =1,
        p_y = 1.65,
        p_color = "#FFFFFF",
        s_x=1, s_y=1,
        s_width=1.7, s_height = 1.4,
        h_fill = "#577042",
        h_color = "#FFFFFF",
        spotlight = TRUE,
        filename="/collections/eye-sugla/eye-sugla-hexagon.png",
        dpi = 300)
