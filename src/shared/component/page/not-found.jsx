import React from 'react';
import Helmet from 'react-helmet';

const title = 'Page Not Found';

const NotFoundPage = () => (
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page to say hello' },
        { property: 'og:title', content: title },
      ]}
      // eslint-disable-next-line
      />
    <h1>
      {title}
    </h1>
  </div>
);

export default NotFoundPage;
