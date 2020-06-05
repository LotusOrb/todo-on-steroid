const redbird = require('redbird')({port:80});

// redbird.register('/app/react','http://frontend-react')
redbird.register('localhost','http://service-auth')