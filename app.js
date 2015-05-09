var SqlParser = require('./index'),
	Parser = new SqlParser(),
	query = "CREATE TABLE `City` (`ID` int(11) NOT NULL AUTO_INCREMENT,`Name` char(35) NOT NULL DEFAULT '',`CountryCode` char(3) NOT NULL DEFAULT '',`District` char(20) NOT NULL DEFAULT '',`Population` int(11) NOT NULL DEFAULT '0', PRIMARY KEY (`ID`)) ENGINE=MyISAM AUTO_INCREMENT=4080 DEFAULT CHARSET=latin1;";

Parser.setQuery(query);
console.log(Parser.getInformations());

Parser.setQuery('CREATE TABLE');
console.log(Parser.getInformations());