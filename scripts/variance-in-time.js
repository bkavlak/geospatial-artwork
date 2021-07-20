var roi = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[38.51503397470445, 37.878962843183345],
          [38.51503397470445, 36.69021615750458],
          [41.21767069345445, 36.69021615750458],
          [41.21767069345445, 37.878962843183345]]], null, false),
    sentinelCollection = ee.ImageCollection("COPERNICUS/S2_SR");

// VARIANCE IN TIME

// Set variables
var start_date_s = ee.String('2021-02-01'); // we use the string at the raster name
var end_date_s = ee.String('2021-05-20'); // we use the string at the raster name
var cloud_percentage = ee.Number(30);  // format : %30, %50 etc. Lower threshold is recommended.
var interval = ee.Number(30); // settings for the years to filter on
var increment = 'day'; // settings for the years to filter on

// Calculated variables
var start_date = ee.Date(start_date_s); // converting string to date data type
var end_date = ee.Date(end_date_s);

// Get district of interest
Map.centerObject(roi, 8);
// Add NDVI
var addNDVI = function(image) {
  var ndvi = image.normalizedDifference(['B8', 'B4']).rename('NDVI');
  return image.addBands(ndvi);
};

// Get the image collection
var sentinel_ts = ee.ImageCollection(sentinelCollection
  .filterBounds(roi)
  .filterDate(start_date, end_date)
  .select(['B4', 'B8'])
  .filter(ee.Filter.lte('CLOUDY_PIXEL_PERCENTAGE', cloud_percentage)))
  .map(addNDVI)
  .select(['NDVI']);

// make a list of start years
var second_date = start_date.advance(interval, increment).millis();
var increase = second_date.subtract(start_date.millis());
var list = ee.List.sequence(start_date.millis(), end_date.millis(), increase);

// monthly composite
var new_col =  ee.ImageCollection.fromImages(list.map(function(date){
  return sentinel_ts.select('NDVI').filterDate(ee.Date(date), ee.Date(date).advance(interval, increment))
           .mean().set('system:time_start',ee.Date(date).millis());
}));
// Convert Colletion To Image
new_col = new_col.toBands().clip(roi);

// Add image to Map
Map.addLayer(new_col, {min: 0,
                       max: 1,
                       bands: ["0_NDVI", "1_NDVI", "3_NDVI"]});

// Checking Sampling Frame
{
// Create an empty image into which to paint the features, cast to byte.
var empty = ee.Image().byte();

// Paint all the polygon edges with the same number and width, display.
var outline = empty.paint({
  featureCollection: roi,
  color: 1,
  width: 3
});
Map.addLayer(outline, {palette: '100c08'}, 'edges');
}

// getThumbURL
var thumbnail = new_col.clip(roi).getThumbURL({
  'min': 0,
  'max': 1,
  'bands': ["0_NDVI", "1_NDVI", "3_NDVI"],
  'dimensions': 1200,
  'region': roi,
});
print('Rectangle region and palette:', thumbnail);