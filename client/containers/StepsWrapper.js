import { compose, withProps, withHandlers  } from 'recompose';
import axios from 'axios';

import StepsWrapper from '../components/StepsWrapper';

const enhance = compose(
  withHandlers({
    onClickHandler: () => () => {
      console.log('On click handler');

      axios({
        method: 'POST',
        url: 'http://tests.if.ua/api/category',
      })
        .then((res) => { debugger; })
        .catch(() => { debugger; });
    }
  }),
);


export default enhance((StepsWrapper));
