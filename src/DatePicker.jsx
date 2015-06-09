var React  = require('react');
var DateInput = require('./DateInput');
var Calendar  = require('./Calendar').BaseCalendar;

var DatePicker = React.createClass({
	_parse: function(string){
    this.setState({value: string})

    var format = getFormat(this.props, true)
      , editFormat = this.props.editFormat
      , parse = this.props.parse
      , formats = [];

    if ( typeof parse === 'function' )
      return parse(string, this.props.culture)

    if ( typeof format === 'string')
      formats.push(format)

    if ( typeof editFormat === 'string')
      formats.push(editFormat)

    if ( parse )
      formats = formats.concat(this.props.parse)

    invariant(formats.length, 
      'React Widgets: there are no specified `parse` formats provided and the `format` prop is a function. ' +
      'the DateTimePicker is unable to parse `%s` into a dateTime, ' +
      'please provide either a parse function or Globalize.js compatible string for `format`', string);

    return formatsParser(formats, this.props.culture, string);
  },

  getFormat(props){	 
	  return this.props.format ? this.props.format : localizers.date.formats.date;
	},

	render() {
		return (
			<div>
          
				<DateInput culture={this.props.culture} format={this.props.format} parse={this._parse} />
				<Calendar culture={this.props.culture} />
			</div>
		);
	}
});

module.exports = DatePicker;
