import React from 'react';
import NotFound from '../NotFound';
import Prismic from 'prismic-javascript';
import PrismicConfig from './prismic_configuration';

export default Wrapped =>
  class PrismicPage extends React.Component {
    state = {
      doc: null,
      err: null,
    };

    componentWillMount() {
      this.fetchPage(this.props);
    }

    componentWillReceiveProps(props) {
      this.fetchPage(props);
    }

    fetchPage = props => {
      if (props.prismicCtx) {
        props.prismicCtx.api.getByUID(
          Wrapped.pageType,
          Wrapped.pageType,
          {},
          (err, doc) => {
            if (err) {
              this.setState(() => ({ err }));
            } else if (doc) {
              this.setState(() => ({ doc }));
            }
          }
        );
      }
    };

    render() {
      return this.state.doc ? (
        // TODO: have this automatically create the header/footer
        <Wrapped doc={this.state.doc} />
      ) : // TODO: add better loading state
        this.state.err ? (
          <NotFound />
        ) : null;
    }
  };