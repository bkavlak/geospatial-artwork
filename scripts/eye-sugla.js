var imageCollection = ee.ImageCollection("COPERNICUS/S2_SR"),
    geometry = 
    /* color: #d63000 */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[31.8585312684812, 37.44567592828634],
          [31.8585312684812, 37.22839239851801],
          [32.15619209611792, 37.22839239851801],
          [32.15619209611792, 37.44567592828634]]], null, false);
		  
		  

// Select Class Image D1
{
var img = ee.Image(imageCollection
  .filterBounds(geometry)
  .filterDate('2021-05-15', '2021-06-01')
  .filter(ee.Filter.lte('CLOUDY_PIXEL_PERCENTAGE', 10))
  .select(['B2', 'B3', 'B4'])
  .mean())
  .toUint16();

var visParams = {
  bands: ['B4', 'B3', 'B2'],
  min: [0, 0, 0],
  max: [2000, 2000, 2000]
};
}

// Set Center
Map.setCenter(32.0175, 37.3293)
// Visualize Images
Map.addLayer(img, visParams, "LAKE_SUGLA");

// getThumbURL
var thumbnail = img.clip(geometry).getThumbURL({
  'min': 0,
  'max': 2000,
  'bands': ["B4", "B3", "B2"],
  'dimensions': [1920, 1080],
  'region': geometry,
});
print('Rectangle region and palette:', thumbnail);