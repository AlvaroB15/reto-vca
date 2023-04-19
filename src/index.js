import {dataEnvironment} from './config.js';
import app from './app.js';

app.listen(dataEnvironment.PORT_APP, () => {
    console.log('Server in running port ', dataEnvironment.PORT_APP);
});
