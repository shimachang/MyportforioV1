import {config,dom,library} from '@fortawesome/fontawesome-svg-core';
import {faFacebookSquare,faInstagramSquare,faTwitterSquare} from '@fortawesome/free-brands-svg-icons';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import "../css/main.css";
config.showMissingIcons = true;
library.add(faFacebookSquare,faInstagramSquare,faTwitterSquare,faAngleDown);

dom.i2svg();