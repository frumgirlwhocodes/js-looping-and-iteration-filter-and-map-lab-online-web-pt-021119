// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (drivers) {
    return drivers.revenue > revenue
  });
};

function driverNamesWithRevenueOver(drivers, revenue) {
    return driversWithRevenueOver(drivers, revenue).map(function (driver) {
    return driver.name;
  });
};