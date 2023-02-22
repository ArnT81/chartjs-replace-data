# chartjs-replace-data

### Reason
Functionality requested by customer that logs and saves a large amount of data when testing their products over long time.
Didn't find this behavior anywhere else so I'm offering my sollution here if anyone else wish the same.   
For my own usecase the functionality will use chart.update() until the chart "label" has reached 50 dp in length. 

## Functionality
Continues to show the same amount of datapoints in a chartjs line-chart by replacing the first present dp in chart with the most recent.  

## Chartjs animation
Animations not suitable for data recieved more frequent than every other second (chartjs animation takes longer than that).

## Original data
The data is not mutated and can be saved in it's entirety in f.ex. a csv file
