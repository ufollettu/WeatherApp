import * as elements from './elements';
import {searchWeather} from './search-weather';

import './index.scss';

elements.searchButton.addEventListener('click', searchWeather);


