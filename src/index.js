var moment = require('moment');

if (process.env.NODE_ENV !== 'production' ) {
  [
    Array.prototype.some,
    Array.prototype.filter,
    Array.prototype.reduce
  ].forEach(method => {
    if ( !method ) throw new Error(
      'One or more ES5 features is not available to ReactWidgets: http://jquense.github.io/react-widgets/docs/#/getting-started/browser' )
  })
}

var ReactWidgets = {

  DropdownList:     require('./DropdownList'),
  Combobox:         require('./Combobox'),

  Calendar:         require('./Calendar'),
  DateTimePicker:   require('./DateTimePicker'),

  NumberPicker:     require('./NumberPicker'),
  
  Multiselect:      require('./Multiselect'),
  SelectList:       require('./SelectList'),

  configure:        require('./configure'),
  
  utils: {
    ReplaceTransitionGroup: require('./ReplaceTransitionGroup'),
    SlideTransition:        require('./SlideTransition')
  }
}

// var localField = typeof moment().locale === 'function' ? 'locale' : 'lang';
// var hasLocaleData = !!moment.localeData;

// function endOfDecade(date) {
//   return moment(date).add(10, 'year').add(-1, 'millisecond').toDate()
// }

// function endOfCentury(date) {
//   return moment(date).add(100, 'year').add(-1, 'millisecond').toDate()
// }

// var localizer = {
//   formats: {
//     date: 'L',
//     time: 'LT',
//     default: 'lll',
//     header: 'MMMM YYYY',
//     footer: 'LL',
//     weekday: function(day, culture) {
//       return moment()[localField](culture).weekday(day).format('dd')
//     },

//     dayOfMonth: 'DD',
//     month: 'MMM',
//     year: 'YYYY',

//     decade: function(date, culture, localizer) {
//       return localizer.format(date, 'YYYY', culture) + ' - ' + localizer.format(endOfDecade(date), 'YYYY', culture);
//     },

//     century: function(date, culture, localizer) {
//       return localizer.format(date, 'YYYY', culture) + ' - ' + localizer.format(endOfCentury(date), 'YYYY', culture);
//     }
//   },

//   firstOfWeek: function(culture) {
//     return moment.localeData(culture).firstDayOfWeek();
//   },

//   parse: function(value, format, culture) {
//     console.info("PARSE");
//     return moment(value, format).locale(culture).toDate();
//   },

//   format: function(value, format, culture) {
//     console.info("FORMAT");
//     return moment(value)[localField](culture).format(format)
//   }
// }

var localizer = require('./MomentLocalizer');

ReactWidgets.configure.setDateLocalizer(localizer(moment));

module.exports = ReactWidgets;