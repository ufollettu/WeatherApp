import * as elements from './elements';
import {searchWeather} from './weatherFeature/search-weather';

import './index.scss';

elements.searchButton.addEventListener('click', searchWeather);


